<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use RideChicago\AutoBundle\Entity\ClassType;

use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Logger;
use RideChicago\AutoBundle\Helpers\ValidationThrower;

class ClassTypesController extends Controller {
	
	public function getAction () {
		// get class
		$classTypes = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:ClassType')
			->findBy(array(), array('indexOrder' => 'ASC'));
		
		Logger::info($this, 'fetching ' . count($classTypes) . ' Class Types');
		
		return ServiceOutput::render($this, Serialize::getArrayFromObject($classTypes));
	}
	
	/**
	 * 
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function createAction(Request $request) {
		try {
			$classType = new ClassType();
			
			// stage info
			$classType->setLastModified();
			$classType->setStatus($request->request->get('status'));
			$classType->setTitle($request->request->get('title'));
			$classType->setEnrollment($request->request->get('enrollment'));
			$classType->setDescription($request->request->get('description'));
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($classType));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($classType);
			$ormManager->flush();
		} catch (ContraintViolationException $e) {
			return ServiceOutput::render($this, $e->getErrorsWithProperties(), false);
		}
		
		return ServiceOutput::render($this);
	}
	
	/**
	 * 
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function deleteAction(Request $request) {
		$classType = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:ClassType')
			->findOneById($request->request->get('id'));

		// get ORM manager
		$ormManager = $this->getDoctrine()->getManager();
		// save
		$ormManager->remove($classType);
		$ormManager->flush();
		
		return ServiceOutput::render($this);	
	}
	
	/**
	 * 
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function editAction(Request $request) {
		
	}
	
	/**
	 * @TODO fix resorting bug
	 * Reorder items
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function reorderAction(Request $request) {
		$id = $request->request->get('id');
		$newIndex = $request->request->get('newIndex');
		$ormManager = $this->getDoctrine()->getManager();
		$repository = $this->getDoctrine()->getRepository('RideChicagoAutoBundle:ClassType');
		
		// get classtype
		$targetClassType = $repository->find($id);
		
		// assign old index
		$oldIndex = $targetClassType->getIndexOrder();

		// remove out old target order
		$queryDecr = $repository->createQueryBuilder('ct')
			->where('ct.indexOrder >= :oldIndex')
			->setParameter('oldIndex', $oldIndex)
			->getQuery();
		
		foreach($queryDecr->getResult() as $record) {
			$record->setIndexOrder(($record->getIndexOrder()) - 1);
		}
		
		// make room for new index
		$queryIncr = $repository->createQueryBuilder('ct')
			->where('ct.indexOrder >= :newIndex')
			->setParameter('newIndex', $newIndex)
			->getQuery();
		
		foreach($queryIncr->getResult() as $record) {
			$record->setIndexOrder(($record->getIndexOrder()) + 1);
		}
		
		// set new index
		$targetClassType->setIndexOrder($newIndex);

		// save all
		$ormManager->flush();
		
		Logger::info($this, 'Reordering using params (id: ' . $id . ', newIndex: ' . $newIndex . ')');
		
		return ServiceOutput::render($this);
		
		/*
		 
		 * 1,2,3,4
		 * 1,2,4
		 * 1,2,3 {NEW)
		 * 1,NULL,2,3
		 * 1,2,3,4 (NEW)
		 */
	}
}

?>