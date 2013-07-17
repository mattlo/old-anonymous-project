<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use RideChicago\AutoBundle\Entity\User;
use RideChicago\AutoBundle\Helpers\Serialize;
use Doctrine\Common\Collections\ArrayCollection;

class UsersController extends Controller {
	
	public function getAction () {
		// get users
		$users = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:User')
			->findAll();
		
		return $this->render(
			'RideChicagoAutoBundle:Default:base.json.twig', 
			array('data' => 
				array('data' => json_decode(Serialize::getJsonFromObject($users)))
			)
		);
	}
}

?>