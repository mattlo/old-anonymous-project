<?php

namespace RideChicago\AutoBundle\Controller\Services;

use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Entity\User;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Doctrine\Common\Collections\ArrayCollection;

class UsersController extends Controller {
	
	public function getAction () {
		// get users
		$users = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:User')
			->findAll();
		
		return ServiceOutput::render($this, Serialize::getArrayFromObject($users));
	}
}

?>