<?php

namespace RideChicago\AutoBundle\Controller\Admin\Classes;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ClassSchedulesController extends Controller {
	public function indexAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:classes-schedules.html.twig');
	}
}

?>