<?php

namespace RideChicago\AutoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller {
    public function indexAction() {
        return $this->render('RideChicagoAutoBundle:Pages/Public:homepage.html.twig');
    }
	
	public function classesAction() {
		// get all rates
		$lessonRates = $this->getDoctrine()
			->getRepository('RideChicagoAutoBundle:LessonRate')
			->findBy(array(), array('duration' => 'ASC'));
		
		return $this->render('RideChicagoAutoBundle:Pages/Public:classes.html.twig', array(
			'lessonRates' => $lessonRates
		));
	}
	
	public function scheduleAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:schedule.html.twig');
	}
	
	public function permitsAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:permits.html.twig');
	}
	
	public function pricingAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:pricing.html.twig');
	}
	
	public function faqAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:faq.html.twig');
	}
	
	public function rcaContactAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:contact.html.twig');
	}
}

?>