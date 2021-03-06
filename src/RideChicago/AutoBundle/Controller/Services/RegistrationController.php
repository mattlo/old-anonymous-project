<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use RideChicago\AutoBundle\Entity\Address;
use RideChicago\AutoBundle\Entity\Classroom;
use RideChicago\AutoBundle\Entity\Customer;
use RideChicago\AutoBundle\Entity\Profile;
use RideChicago\AutoBundle\Entity\Registration;
use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Logger;
use RideChicago\AutoBundle\Helpers\ValidationThrower;
use RideChicago\AutoBundle\Exceptions\ContraintViolationException;
use RideChicago\AutoBundle\Exceptions\DataRejectedException;
use RideChicago\AutoBundle\Commons\DaysOfWeek;
use RideChicago\AutoBundle\Commons\Notifications;
use \Exception;
use \DateTime;

class RegistrationController extends Controller {
	public function getAction($id = null) {
		if ($id !== null) {
			$query = array('id' => $id);
		} else {
			$query = array();
		}
		
		// get class
		$registrations = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:Registration')
			->findBy($query, array('id' => 'DESC'));
		
		Logger::info($this, 'fetching ' . count($registrations) . ' registrations');
		return ServiceOutput::render($this, Serialize::getArrayFromObject($registrations));
	}
	
	public function getFromClassroomAction($id = null) {
		$registrations = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:Registration')
			->findBy(array('classroom' => $id), array('id' => 'DESC'));
		
		Logger::info($this, 'fetching ' . count($registrations) . ' registrations');
		return ServiceOutput::render($this, Serialize::getArrayFromObject($registrations));
	}
	
	public function createFromExistingStudentAction(Request $request) {
		Logger::info($this, 'Starting to create a registration from an existing student');
		try {
			$registration = new Registration;
			$dateCreated = new DateTime;
			$useAdditionalProfile = ($request->request->get('billingFormTrigger') === null ? true : false);
			
			Logger::debug($this, 'Use Alternate Billing Profile: ' . ($useAdditionalProfile === true ? 'true' : 'false'));
			
			// get classroom instance
			$classroom = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Classroom')
				->findOneById($request->request->get('classroomId'));
			
			Logger::debug($this, 'Current enrollment seats on target: ' . $classroom->getEnrollmentSeatsUsed() 
				. ' out of ' . $classroom->getEnrollmentSeats());
			
			// attempt to increase enrollment seats
			$classroom->incrementEnrollmentSeat();
			Logger::debug($this, $classroom->getEnrollmentSeatsUsed());
			
			// get existing customer
			$customer = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Customer')
				->findOneById($request->request->get('customerId'));
			
			Logger::info($this, 'Using Customer ID: ' . $customer->getId());
			
			// set registration
			$registration->setStatus($request->request->get('status'));
			$registration->setClassroom($classroom);
			$registration->setClassStatus($request->request->get('classStatus'));
			$registration->setLabStatus($request->request->get('labStatus'));
			$registration->setNotes($request->request->get('notes'));
			$registration->setPromotionCode($request->request->get('promotionCode'));
			$registration->setDateCreated($dateCreated);
			
			// bind customer to registration
			$registration->setCustomer($customer);
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($registration));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();
			
			$ormManager->persist($registration);
			$ormManager->persist($classroom);
			
			$ormManager->flush();
			
			// silent fail on notifications
			// @TODO add service for this
			try {
				Notifications::send(
					$this,
					'Registration', 
					$customer->getProfile()->getFirstName(), 
					$customer->getProfile()->getLastName(), 
					'http://' . $_SERVER['HTTP_HOST'] . '/admin/registration'
				);
			} catch (Exception $ex) {}
			
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		} catch (DataRejectedException $e) {
			return ServiceOutput::render($this, array('classroomId' => $e->getMessage()), false);
		}
		
		Logger::info($this, 'Registration created successfully');
		
		return ServiceOutput::render($this);
	}
	
	/**
	 * 
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function createAction(Request $request) {
		Logger::info($this, 'Starting to create a new student registration');
		try {
			$customer = new Customer;
			$mainProfile = new Profile;
			$mainAddress = new Address;
			$registration = new Registration;
			$dateCreated = new DateTime;
			$useAdditionalProfile = ($request->request->get('billingFormTrigger') === null ? true : false);
			
			Logger::debug($this, 'Use Alternate Billing Profile: ' . ($useAdditionalProfile === true ? 'true' : 'false'));
			
			// get classroom instance
			$classroom = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Classroom')
				->findOneById($request->request->get('classroomId'));
			
			Logger::debug($this, 'Current enrollment seats on target: ' . $classroom->getEnrollmentSeatsUsed() 
				. ' out of ' . $classroom->getEnrollmentSeats());
			
			// attempt to increase enrollment seats
			$classroom->incrementEnrollmentSeat();
			Logger::debug($this, $classroom->getEnrollmentSeatsUsed());
			
			Logger::info($this, 'Setting main profile');
			
			// set registration
			$registration->setStatus($request->request->get('status'));
			$registration->setClassroom($classroom);
			$registration->setClassStatus($request->request->get('classStatus'));
			$registration->setLabStatus($request->request->get('labStatus'));
			$registration->setNotes($request->request->get('notes'));
			$registration->setPromotionCode($request->request->get('promotionCode'));
			$registration->setDateCreated($dateCreated);
			
			// set profile
			$mainProfile->setFirstName($request->request->get('firstName'));
			$mainProfile->setLastName($request->request->get('lastName'));
			$mainProfile->setMiddleInitial($request->request->get('middleInitial'));
			$mainProfile->setPhone($request->request->get('phone'));
			$mainProfile->setPhoneAlt($request->request->get('phoneAlt'));
			
			// set address
			$mainAddress->setAddressLine1($request->request->get('addressLine1'));
			$mainAddress->setAddressLine2($request->request->get('addressLine2'));
			$mainAddress->setCity($request->request->get('city'));
			$mainAddress->setPostalCode($request->request->get('postalCode'));
			$mainAddress->setState($request->request->get('state'));
					
			// bind address to profile
			$mainProfile->setAddress($mainAddress);
			// bind profile to customer
			$customer->setProfile($mainProfile);
			
			// alternate billing profile
			if ($useAdditionalProfile === true) {
				Logger::info($this, 'Setting billing profile');
				
				$billingPrefix = 'billing_';
				$billingProfile = new Profile;
				$billingAddress = new Address;
				
				// set alternate profile
				$billingProfile->setFirstName($request->request->get($billingPrefix . 'firstName'));
				$billingProfile->setLastName($request->request->get($billingPrefix . 'lastName'));
				$billingProfile->setMiddleInitial($request->request->get($billingPrefix . 'middleInitial'));
				$billingProfile->setPhone($request->request->get($billingPrefix . 'phone'));
				$billingProfile->setPhoneAlt($request->request->get($billingPrefix . 'phoneAlt'));

				// set address
				$billingAddress->setAddressLine1($request->request->get($billingPrefix . 'addressLine1'));
				$billingAddress->setAddressLine2($request->request->get($billingPrefix . 'addressLine2'));
				$billingAddress->setCity($request->request->get($billingPrefix . 'city'));
				$billingAddress->setPostalCode($request->request->get($billingPrefix . 'postalCode'));
				$billingAddress->setState($request->request->get($billingPrefix . 'state'));
				
				// bind billing address to billing profile
				$billingProfile->setAddress($billingAddress);
				// bind billing profile to customer
				$customer->setBillingProfile($billingProfile);
			}
			
			// set customer
			$customer->setEmail($request->request->get('email'));
			$customer->setGender($request->request->get('gender'));
			$customer->setDateOfBirth(new DateTime($request->request->get('dateOfBirth')));
			$customer->setDateCreated($dateCreated);
			$customer->setDriversLicense($request->request->get('driversLicense'));
			
			// bind customer to registration
			$registration->setCustomer($customer);
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($mainProfile));
			ValidationThrower::check($validator->validate($customer));
			ValidationThrower::check($validator->validate($registration));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($mainProfile);
			
			// persist billing profile if it exists
			if ($useAdditionalProfile === true) {
				$ormManager->persist($billingProfile);
			}
			
			$ormManager->persist($customer);
			$ormManager->persist($registration);
			$ormManager->persist($classroom);
			
			
			$ormManager->flush();
			
			// silent fail on notifications
			// @TODO add service for this
			try {
				Notifications::send(
					$this,
					'Registration', 
					$mainProfile->getFirstName(), 
					$mainProfile->getLastName(), 
					'http://' . $_SERVER['HTTP_HOST'] . '/admin/registration'
				);
			} catch (Exception $ex) {}
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		} catch (DataRejectedException $e) {
			return ServiceOutput::render($this, array('classroomId' => $e->getMessage()), false);
		}
		
		Logger::info($this, 'Registration created successfully');
		
		return ServiceOutput::render($this);
	}
	
	public function updateAction(Request $request) {
		Logger::info($this, 'Updating existing registration on id ' . $request->request->get('id'));
		try {
			// get registration
			$registration = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Registration')
				->findOneById($request->request->get('id'));
			
			// get classroom
			$classroom = $registration->getClassroom();
			
			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();
			
			// change enrollment if classroom is changed
			if ($request->request->get('classroomId') != $classroom->getId()) {
				// decrement old one
				Logger::debug($this, 'decrementing classroomId ' . $classroom->getId() . '; current: ' . $classroom->getEnrollmentSeatsUsed());
				
				$classroom->decrementEnrollmentSeat();
				
				// retrieve new class
				$newClassroom = $this->getDoctrine()
					->getRepository('RideChicagoAutoBundle:Classroom')
					->findOneById($request->request->get('classroomId'));
				
				// increment new one
				Logger::debug($this, 'incrementing classroom_id ' . $newClassroom->getId());
				$newClassroom->incrementEnrollmentSeat();
				
				// set
				$registration->setClassroom($newClassroom);
				
				// commit both data changes
				$ormManager->persist($classroom);
				$ormManager->persist($newClassroom);
			}
			
			// update registration
			$registration->setStatus($request->request->get('status'));
			$registration->setClassStatus($request->request->get('classStatus'));
			$registration->setLabStatus($request->request->get('labStatus'));
			$registration->setNotes($request->request->get('notes'));
			$registration->setPromotionCode($request->request->get('promotionCode'));
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($registration));

			// commit registration data
			$ormManager->persist($registration);
			
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		} catch (DataRejectedException $e) {
			return ServiceOutput::render($this, array('classroomId' => $e->getMessage()), false);
		}
		
		Logger::info($this, 'Registration created successfully');
		
		return ServiceOutput::render($this);
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function deleteAction(Request $request) {
		$registration = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:Registration')
			->findOneById($request->request->get('id'));

		// get ORM manager
		$ormManager = $this->getDoctrine()->getManager();
		// save
		$ormManager->remove($registration);
		$ormManager->flush();
		
		return ServiceOutput::render($this);
	}
}

?>