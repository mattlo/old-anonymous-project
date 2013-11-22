<?php

namespace RideChicago\AutoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class RegistrationController extends Controller {
	public function indexAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:lesson-registration.html.twig');
	}
	
	public function classroomIndexAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:classroom-registration.html.twig');
	}
}

?>