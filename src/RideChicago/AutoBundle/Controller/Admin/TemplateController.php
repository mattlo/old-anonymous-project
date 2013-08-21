<?php

namespace RideChicago\AutoBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Holds UI loader view files. All business logic is within 
 * the API service that communicates with ExtJS
 */
class TemplateController extends Controller {
	
	
	# Users
	
	public function userViewAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:users-view.html.twig');
	}
	
	public function userUpdateAction($id) {
		$data = json_encode(array('id' => $id));
		return $this->render('RideChicagoAutoBundle:Pages/Admin:users-update.html.twig', array('staticData' => $data));
	}
	
	public function userAddAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:users-add.html.twig');
	}
	
	
	
	# Class Type
	
	public function classTypesViewAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:classes-types.html.twig');
	}
	
	public function classTypesAddAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:classes-add-type.html.twig');
	}	
	
	public function classTypesEditAction($id) {
		$data = json_encode(array('id' => $id));
		return $this->render('RideChicagoAutoBundle:Pages/Admin:classes-edit-type.html.twig', array('staticData' => $data));
	}
	
	
	# Class
	
	public function classViewAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:classes.html.twig');
	}
	
	public function classAddAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:classes-add.html.twig');
	}
	
	
}

?>