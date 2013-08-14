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
	
	const INCREMENT = 1;
	const DECREMENT = -1;
	
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
	 * Reorder items
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function reorderAction(Request $request) {
		$id = $request->request->get('id');
		$newIndex = $request->request->get('newIndex');
		$ormManager = $this->getDoctrine()->getManager();
		$repository = $this->getDoctrine()->getRepository('RideChicagoAutoBundle:ClassType');
		
		Logger::info($this, 'Reordering using params (id: ' . $id . ', newIndex: ' . $newIndex . ')');
		
		// get classtype
		$targetClassType = $repository->find($id);
		
		// assign old index
		$oldIndex = $targetClassType->getIndexOrder();
		
		$query = $repository->createQueryBuilder('ct');
		
		Logger::debug($this, "\n" . 'starting reorder action' . "\n");
		
		// determine direction
		if ($newIndex > $oldIndex) {
			Logger::debug($this, 'moving from top to bottom');
			
			$query
				->where('ct.indexOrder > :oldIndex')
				->andWhere('ct.indexOrder <= :newIndex');
			$value = self::DECREMENT;
		} else {
			Logger::debug($this, 'moving from bottom to top');
			
			$query
				->where('ct.indexOrder < :oldIndex')
				->andWhere('ct.indexOrder >= :newIndex');
			$value = self::INCREMENT;
		}
		
		// finalize query
		$query	
			->setParameter('oldIndex', $oldIndex)
			->setParameter('newIndex', $newIndex);
		
		Logger::debug($this, 'closing out target orderIndex node');
		foreach($query->getQuery()->getResult() as $record) {
			$indexValue = ($record->getIndexOrder()) + (1 * $value);
			
			Logger::debug($this, 'reordering node id ' . $record->getId() . '; current ' . $record->getIndexOrder() . ' to ' . $indexValue);
			$record->setIndexOrder($indexValue);
		}
		
		// set new index
		Logger::debug($this, 'setting target node ' . $targetClassType->getId() . 'indexOrder new ' . $newIndex);
		$targetClassType->setIndexOrder($newIndex);

		// save all
		$ormManager->flush();
		
		Logger::debug($this, 'end reorder action' . "\n");
		
		return ServiceOutput::render($this);
	}
}

?>