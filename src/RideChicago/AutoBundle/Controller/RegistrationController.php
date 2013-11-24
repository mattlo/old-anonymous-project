<?php

namespace RideChicago\AutoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use RideChicago\AutoBundle\Helpers\Serialize;

class RegistrationController extends Controller {
	public function indexAction() {
		// get all rates
		$lessonRates = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:LessonRate')
			->findBy(array(), array('duration' => 'ASC'));
		
		return $this->render('RideChicagoAutoBundle:Pages/Public:lesson-registration.html.twig', array(
			'lessonRates' => $lessonRates
		));
	}
	
	public function classroomIndexAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:classroom-registration.html.twig');
	}
}

?>