<?php

namespace RideChicago\AutoBundle\Controller\Services;

use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Helpers\ValidationThrower;
use RideChicago\AutoBundle\Entity\User;
use RideChicago\AutoBundle\Exceptions\ContraintViolationException;
use RideChicago\AutoBundle\Helpers\Logger;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class UsersController extends Controller {
	
	/**
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function getAction () {
		// get users
		$users = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:User')
			->findAll();
		
		Logger::info($this, 'fetching ' . count($users) . ' users');
		
		return ServiceOutput::render($this, Serialize::getArrayFromObject($users));
	}
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function createAction(Request $request) {
		try {
			$user = new User();

			// get encoder
			$factory = $this->get('security.encoder_factory');

			// set encoders
			$encoder = $factory->getEncoder($user);
			$password = $encoder->encodePassword($request->request->get('password'), $user->getSalt());

			// stage info
			$user->setUsername($request->request->get('username'));
			$user->setPassword($password);
			$user->setRole($request->request->get('role'));
			
			// validate
			$validator = $this->get('validator');
			ValidationThrower::check($validator->validate($user));

			// get ORM manager
			$ormManager = $this->getDoctrine()->getManager();

			// save
			$ormManager->persist($user);
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
		//@TODO add a failsafe so you cannot delete yourself
		// find provided user
		// get users
		$user = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:User')
			->findOneById($request->request->get('id'));

		// get ORM manager
		$ormManager = $this->getDoctrine()->getManager();
		// save
		$ormManager->remove($user);
		$ormManager->flush();
		
		return ServiceOutput::render($this);
	}
}

?>