<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Logger;
use RideChicago\AutoBundle\Helpers\ValidationThrower;
use RideChicago\AutoBundle\Entity\Profile;
use RideChicago\AutoBundle\Entity\Address;
use RideChicago\AutoBundle\Exceptions\ContraintViolationException;
use \Exception;
use \DateTime;

class CustomerController extends Controller {
	/**
	 * @param type $id
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function getAction($id = null) {
		if ($id !== null) {
			$customers = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Customer')
				->findById($id);
		} else {
			$customers = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Customer')
				->findAllOrderByLastName();
		}
		
		Logger::info($this, 'fetching ' . count($customers) . ' customers');
		return ServiceOutput::render($this, Serialize::getArrayFromObject($customers));
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function updateAction(Request $request) {
		try {
			// get item by id
			$customer = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Customer')
				->findOneById($request->request->get('customerIdx'));
			
			$useAdditionalProfile = ($request->request->get('billingFormTrigger') === null ? true : false);
			$billingProfile = ($customer->getBillingProfile() !== null ? $customer->getBillingProfile() : new Profile);
			$mainProfile = $customer->getProfile();
			$mainAddress = $mainProfile->getAddress();
			
			// stage info
			$customer->setEmail($request->request->get('email'));
			$customer->setGender($request->request->get('gender'));
			$customer->setDateOfBirth(new DateTime($request->request->get('dateOfBirth')));
			$customer->setDriversLicense($request->request->get('driversLicense'));
			
			Logger::info($this, 'Setting main profile');
			
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
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($mainProfile));
			ValidationThrower::check($validator->validate($customer));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($mainProfile);
			
			// persist billing profile if it exists
			if ($useAdditionalProfile === true) {
				$ormManager->persist($billingProfile);
			}
			
			$ormManager->persist($customer);
			
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		}
		
		return ServiceOutput::render($this);
	}
}

?>