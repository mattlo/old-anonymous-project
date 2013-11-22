<?php

namespace RideChicago\AutoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller {
    public function indexAction() {
        return $this->render('RideChicagoAutoBundle:Pages/Public:homepage.html.twig');
    }
	
	public function classesAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:classes.html.twig');
	}
	
	public function scheduleAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:homepage.html.twig');
	}
	
	public function permitsAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:homepage.html.twig');
	}
	
	public function pricingAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:pricing.html.twig');
	}
	
	public function faqAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:faq.html.twig');
	}
	
	public function rcaContact() {
		return $this->render('RideChicagoAutoBundle:Pages/Public:homepage.html.twig');
	}
}

?>