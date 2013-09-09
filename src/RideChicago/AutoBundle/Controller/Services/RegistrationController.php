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
use \Exception;
use \DateTime;

class RegistrationController extends Controller {
	public function getAction() {
		
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
			
			// get classroom instance
			$classroom = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Classroom')
				->findOneById($request->request->get('classroom_id'));
			
			// set registration
			$registration->setStatus($request->request->get('status'));
			$registration->setClassroom($classroom);
			$registration->setClassStatus($request->request->get('class_status'));
			$registration->setLabStatus($request->request->get('lab_status'));
			$registration->setNotes($request->request->get('notes'));
			$registration->setPromotionCode($request->request->get('promotion_code'));
			$registration->setDateCreated($dateCreated);
			
			// set profile
			$mainProfile->setFirstName($request->request->get('first_name'));
			$mainProfile->setLastName($request->request->get('last_name'));
			$mainProfile->setMiddleInitial($request->request->get('middle_initial'));
			$mainProfile->setPhone($request->request->get('phone'));
			$mainProfile->setPhoneAlt($request->request->get('phone_alt'));
			
			// set address
			$mainAddress->setAddressLine1($request->request->get('address_line_1'));
			$mainAddress->setAddressLine2($request->request->get('address_line_2'));
			$mainAddress->setCity($request->request->get('city'));
			$mainAddress->setPostalCode($request->request->get('postal_code'));
			$mainAddress->setState($request->request->get('state'));
					
			// bind address to profile
			$mainProfile->setAddress($mainAddress);
			
			// set customer
			$customer->setEmail($request->request->get('email'));
			$customer->setGender($request->request->get('gender'));
			$customer->setDateOfBirth(new DateTime($request->request->get('date_of_birth')));
			$customer->setDateCreated($dateCreated);
			$customer->setDriversLicense($request->request->get('drivers_license'));
			
			// bind profile to customer
			$customer->setProfile($mainProfile);
			$customer->setBillingProfile($mainProfile);
			
			// bind customer to registration
			$registration->setCustomer($customer);
			
			Logger::debug($this, 'All setters complete');
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($mainProfile));
			ValidationThrower::check($validator->validate($customer));
			ValidationThrower::check($validator->validate($registration));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($mainProfile);
			$ormManager->persist($customer);
			$ormManager->persist($registration);
			
			
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		} catch (DataRejectedException $e) {
			return ServiceOutput::render($this, $e->getMessage(), false);
		}
		
		return ServiceOutput::render($this);
	}
	
	public function updateAction() {
		
	}
	
	public function deleteAction() {
		
	}
}

?>