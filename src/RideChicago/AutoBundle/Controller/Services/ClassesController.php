<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use RideChicago\AutoBundle\Entity\Classroom;
use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Logger;
use RideChicago\AutoBundle\Helpers\ValidationThrower;
use RideChicago\AutoBundle\Exceptions\ContraintViolationException;
use RideChicago\AutoBundle\Commons\DaysOfWeek;
use \Exception;
use \DateTime;

class ClassesController extends Controller {
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @param type $id
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function getAction (Request $request, $id = null) {
		$orderDirection = 'DESC';
		
		if ($id !== null) {
			$query = array('id' => $id);
		} else {
			$query = array();
		}
		
		if ($request->query->get('descendingOrder') == false) {
			$orderDirection = 'ASC';
		}
		
		// get class
		$classTypes = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:Classroom')
			->findBy($query, array('class_start_date' => $orderDirection));
		
		Logger::info($this, 'fetching ' . count($classTypes) . ' classes');
		return ServiceOutput::render($this, Serialize::getArrayFromObject($classTypes));
	}
	
	/**
	 * 
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function createAction(Request $request) {
		Logger::info($this, 'Starting to create a new classroom');
		try {
			$classroom = new Classroom;
			
			// stage info
			$classroom->setLastModified();
			$classroom->setClassStartDate(new DateTime($request->request->get('classStartDate')));
			$classroom->setClassEndDate(new DateTime($request->request->get('classEndDate')));
			
			$classroom->setClassRegistrationStartDate(new DateTime($request->request->get('classRegistrationStartDate')));
			$classroom->setDeposit($request->request->get('deposit'));
			$classroom->setEnrollmentSeats($request->request->get('enrollmentSeats'));
			$classroom->setEnrollmentWaitList($request->request->get('enrollmentWaitList'));
			$classroom->setInstructorId($request->request->get('instructorId'));
			$classroom->setNotes($request->request->get('notes'));
			$classroom->setOnlineRegistrationStatus($request->request->get('onlineRegistrationStatus'));
			$classroom->setPrice($request->request->get('price'));
			$classroom->setPromotionLimit($request->request->get('promotionLimit'));
			$classroom->setStatus($request->request->get('status'));
			
			// get classType
			$classtype = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:ClassType')
				->findOneById($request->request->get('classtypeId'));
			
			$classroom->setClasstype($classtype);
			$classroom->setClasstypeId($classtype->getId());
			
			// set class room days
			// iterate over checked days
			$classDays = $request->request->get('class_day_keys');
			
			// check if this exists
			if ($classDays !== null) {
				$classDayArray = array();
				
				Logger::debug($this, print_r($classDays, true));
				
				// iterate over class days
				foreach ($classDays as $classDayKey) {
					// get config of day
					$class_day_config_start = $request->request->get('class_day_config_n' . $classDayKey . '_start');
					$class_day_config_end = $request->request->get('class_day_config_n' . $classDayKey . '_end');
					
					// validate
					if ($class_day_config_start === null || $class_day_config_end === null) {
						throw new Exception('post variable class_day_config_n' . $classDayKey . ' not found');
					}
					
					// assign and store
					$classDayArray[DaysOfWeek::getDay($classDayKey)] = array(
						'start' => $class_day_config_start,
						'end' => $class_day_config_end
					);
				}
				
				// json encode result
				$classDaysEncoded = json_encode($classDayArray);
				
				// save
				Logger::debug($this, 'saving days encoded: ' . $classDaysEncoded);
				$classroom->setClassDays($classDaysEncoded);
				
				Logger::debug($this, 'found class_day_keys');
			} else {
				// the validator will throw an error when its hits it
				// may not be a good idea to have the same exception thrown here as well
				// to kill the process slightly earlier
				Logger::debug($this, '`class_day_keys` not posted');
			}
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($classroom));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($classroom);
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		}
		
		return ServiceOutput::render($this);
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function deleteAction(Request $request) {
		$classroom = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:Classroom')
			->findOneById($request->request->get('id'));

		// get ORM manager
		$ormManager = $this->getDoctrine()->getManager();
		// save
		$ormManager->remove($classroom);
		$ormManager->flush();
		
		return ServiceOutput::render($this);
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function updateAction(Request $request) {
		Logger::info($this, 'Starting to update a classroom');
		try {
			
			// get existing customer
			$classroom = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Classroom')
				->findOneById($request->request->get('id'));
			
			Logger::info($this, 'Using classroom ID: ' . $classroom->getId());
			
			
			// stage info
			$classroom->setLastModified();
			$classroom->setClassStartDate(new DateTime($request->request->get('classStartDate')));
			$classroom->setClassEndDate(new DateTime($request->request->get('classEndDate')));
			
			$classroom->setClassRegistrationStartDate(new DateTime($request->request->get('classRegistrationStartDate')));
			$classroom->setDeposit($request->request->get('deposit'));
			$classroom->setEnrollmentSeats($request->request->get('enrollmentSeats'));
			$classroom->setEnrollmentWaitList($request->request->get('enrollmentWaitList'));
			$classroom->setInstructorId($request->request->get('instructorId'));
			$classroom->setNotes($request->request->get('notes'));
			$classroom->setOnlineRegistrationStatus($request->request->get('onlineRegistrationStatus'));
			$classroom->setPrice($request->request->get('price'));
			$classroom->setPromotionLimit($request->request->get('promotionLimit'));
			$classroom->setStatus($request->request->get('status'));
			
			// get classType
			$classtype = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:ClassType')
				->findOneById($request->request->get('classtypeId'));
			
			$classroom->setClasstype($classtype);
			$classroom->setClasstypeId($classtype->getId());
			
			// set class room days
			// iterate over checked days
			$classDays = $request->request->get('class_day_keys');
			
			// check if this exists
			if ($classDays !== null) {
				$classDayArray = array();
				
				Logger::debug($this, print_r($classDays, true));
				
				// iterate over class days
				foreach ($classDays as $classDayKey) {
					// get config of day
					$class_day_config_start = $request->request->get('class_day_config_n' . $classDayKey . '_start');
					$class_day_config_end = $request->request->get('class_day_config_n' . $classDayKey . '_end');
					
					// validate
					if ($class_day_config_start === null || $class_day_config_end === null) {
						throw new Exception('post variable class_day_config_n' . $classDayKey . ' not found');
					}
					
					// assign and store
					$classDayArray[DaysOfWeek::getDay($classDayKey)] = array(
						'start' => $class_day_config_start,
						'end' => $class_day_config_end
					);
				}
				
				// json encode result
				$classDaysEncoded = json_encode($classDayArray);
				
				// save
				Logger::debug($this, 'saving days encoded: ' . $classDaysEncoded);
				$classroom->setClassDays($classDaysEncoded);
				
				Logger::debug($this, 'found class_day_keys');
			} else {
				// the validator will throw an error when its hits it
				// may not be a good idea to have the same exception thrown here as well
				// to kill the process slightly earlier
				Logger::debug($this, '`class_day_keys` not posted');
			}
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($classroom));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($classroom);
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		}
		
		return ServiceOutput::render($this);
	}
}

?>