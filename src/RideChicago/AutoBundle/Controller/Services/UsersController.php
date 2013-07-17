<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UsersController extends Controller {
	
	public function getAction () {
		$request = $this->getRequest();
		$format = $request->getRequestFormat();
		return $this->render('RideChicagoAutoBundle:Default:base.'.$format.'.twig', array('data' => array('data' => array (
			array (
				'id' => 1,
				'username' => 'mattlo.developer@gmail.com',
				'status' => 'Active',
				'security' => 'Granted'
			),
			array (
				'id' => 2,
				'username' => 'rrr@gmail.com',
				'status' => 'Active',
				'security' => 'Granted'
			)
		))));
	}
}

?>