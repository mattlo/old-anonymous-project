<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Logger;
use RideChicago\AutoBundle\Helpers\ValidationThrower;
use RideChicago\AutoBundle\Exceptions\ContraintViolationException;
use RideChicago\AutoBundle\Entity\LessonRate;
use \Exception;

class LessonRateController extends Controller {
	public function getAction($id = null) {
		if ($id !== null) {
			$query = array('id' => $id);
		} else {
			$query = array();
		}
		
		// get class
		$lessonRates = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:LessonRate')
			->findBy($query, array('duration' => 'ASC'));
		
		Logger::info($this, 'fetching ' . count($lessonRates) . ' lesson rates');
		return ServiceOutput::render($this, Serialize::getArrayFromObject($lessonRates));
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function updateAction(Request $request) {
		try {
			// get item by id
			$lessonRate = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:LessonRate')
				->findOneById($request->request->get('id'));
			
			// stage info
			$lessonRate->setDuration($request->request->get('duration'));
			$lessonRate->setPrice(floatval($request->request->get('price')));
			$lessonRate->setPickUpFee(floatval($request->request->get('pickupfee')));
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($lessonRate));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($lessonRate);
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
	public function createAction(Request $request) {
		try {
			$lessonRate = new LessonRate;
			
			// stage info
			$lessonRate->setDuration($request->request->get('duration'));
			$lessonRate->setPrice(floatval($request->request->get('price')));
			$lessonRate->setPrice(floatval($request->request->get('pickupfee')));
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($lessonRate));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($lessonRate);
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		}
		
		return ServiceOutput::render($this);
	}
}

?>