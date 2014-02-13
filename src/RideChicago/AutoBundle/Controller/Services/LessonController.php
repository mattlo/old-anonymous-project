<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Logger;
use RideChicago\AutoBundle\Helpers\ValidationThrower;
use RideChicago\AutoBundle\Exceptions\ContraintViolationException;
use RideChicago\AutoBundle\Entity\Lesson;
use RideChicago\AutoBundle\Entity\Profile;
use RideChicago\AutoBundle\Entity\Address;
use RideChicago\AutoBundle\Entity\Customer;

use \Exception;
use \DateTime;

class LessonController extends Controller {
	public function getAction($id = null) {
		if ($id !== null) {
			$query = array('id' => $id);
		} else {
			$query = array();
		}
		
		// get lesson
		$lessons = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:Lesson')
			->findBy($query, array('id' => 'DESC'));
		
		Logger::info($this, 'fetching ' . count($lessons) . ' lessons');
		return ServiceOutput::render($this, Serialize::getArrayFromObject($lessons));
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function updateAction(Request $request) {
		try {
			$lesson = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Lesson')
				->findOneById($request->request->get('id'));
			
			// set lesson
			$lesson->setDatetime(new DateTime($request->request->get('date') . ' ' . $request->request->get('time')));
			$lesson->setNotes($request->request->get('notes'));
			$lesson->setPromotionCode($request->request->get('promotionCode'));
			$lesson->setStatus($request->request->get('status'));
			$lesson->setLessonType($request->request->get('lessonType'));
			
			// get lesson rate
			$lessonRate = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:LessonRate')
				->findOneById($request->request->get('lessonRateId'));
			
			// set lesson rate
			$lesson->setLessonRate($lessonRate);
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($lesson));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();
			
			$ormManager->persist($lesson);
			
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		}
		
		Logger::info($this, 'Lesson updated successfully');
		
		return ServiceOutput::render($this);
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function createAction(Request $request) {
		try {
			$customer = new Customer;
			$mainProfile = new Profile;
			$mainAddress = new Address;
			$lesson = new Lesson;
			$dateCreated = new DateTime;
			$useAdditionalProfile = ($request->request->get('billingFormTrigger') === null ? true : false);
			
			Logger::debug($this, 'Use Alternate Billing Profile: ' . ($useAdditionalProfile === true ? 'true' : 'false'));

			Logger::info($this, 'Setting main profile');
			
			// set lesson
			$lesson->setDateCreated($dateCreated);
			$lesson->setDatetime(new DateTime($request->request->get('date') . ' ' . $request->request->get('time')));
			$lesson->setNotes($request->request->get('notes'));
			$lesson->setPromotionCode($request->request->get('promotionCode'));
			$lesson->setStatus($request->request->get('status'));
			$lesson->setLessonType($request->request->get('lessonType'));
			
			// get lesson rate
			$lessonRate = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:LessonRate')
				->findOneById($request->request->get('lessonRateId'));
			
			// set lesson rate
			$lesson->setLessonRate($lessonRate);
			
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
			$lesson->setCustomer($customer);
			
			Logger::debug($this, print_r($lesson, true));
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($mainProfile));
			ValidationThrower::check($validator->validate($customer));
			ValidationThrower::check($validator->validate($lesson));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($mainProfile);
			
			// persist billing profile if it exists
			if ($useAdditionalProfile === true) {
				$ormManager->persist($billingProfile);
			}
			
			$ormManager->persist($customer);
			$ormManager->persist($lesson);
			
			
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		}
		
		Logger::info($this, 'Lesson created successfully');
		
		return ServiceOutput::render($this);
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function createFromExistingStudentAction(Request $request) {
		try {
			$lesson = new Lesson;
			$dateCreated = new DateTime;
			
			// get existing customer
			$customer = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Customer')
				->findOneById($request->request->get('customerId'));
			
			Logger::info($this, 'Using Customer ID: ' . $customer->getId());
			
			// set lesson
			$lesson->setDateCreated($dateCreated);
			$lesson->setDatetime(new DateTime($request->request->get('date') . ' ' . $request->request->get('time')));
			$lesson->setNotes($request->request->get('notes'));
			$lesson->setPromotionCode($request->request->get('promotionCode'));
			$lesson->setStatus($request->request->get('status'));
			$lesson->setLessonType($request->request->get('lessonType'));
			
			// get lesson rate
			$lessonRate = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:LessonRate')
				->findOneById($request->request->get('lessonRateId'));
			
			// set lesson rate
			$lesson->setLessonRate($lessonRate);
			
			// bind customer to registration
			$lesson->setCustomer($customer);
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($lesson));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();
			
			$ormManager->persist($lesson);
			
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		}
		
		Logger::info($this, 'Lesson created successfully');
		
		return ServiceOutput::render($this);
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function deleteAction(Request $request) {
		$lesson = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:Lesson')
			->findOneById($request->request->get('id'));

		// get ORM manager
		$ormManager = $this->getDoctrine()->getManager();
		// save
		$ormManager->remove($lesson);
		$ormManager->flush();
		
		return ServiceOutput::render($this);
	}
}

?>