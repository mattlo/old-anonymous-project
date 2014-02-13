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
	
	public function classUpdateAction($id) {
		$data = json_encode(array('id' => $id));
		return $this->render('RideChicagoAutoBundle:Pages/Admin:classes-update.html.twig', array('staticData' => $data));
	}
	
	# Registrations
	
	public function registrationViewAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:registration-view.html.twig');
	}
	
	public function registrationAddAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:registration-add.html.twig');
	}
	
	public function registrationAddExistingAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:registration-add-existing.html.twig');
	}
	
	public function registrationUpdateAction($id) {
		$data = json_encode(array('id' => $id));
		return $this->render('RideChicagoAutoBundle:Pages/Admin:registration-update.html.twig', array('staticData' => $data));
	}
	
	# Lessons (hour rate services)
	
	public function lessonViewAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:lesson-view.html.twig');
	}
	
	public function lessonAddAction () {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:lesson-add.html.twig');
	}
		
	public function lessonAddExistingAction () {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:lesson-add-existing.html.twig');
	}
	
	public function lessonUpdateAction($id) {
		$data = json_encode(array('id' => $id));
		return $this->render('RideChicagoAutoBundle:Pages/Admin:lesson-update.html.twig', array('staticData' => $data));
	}
	
	public function lessonRateViewAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:lessonrate-view.html.twig');
	}
	
	public function lessonRateAddAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:lessonrate-add.html.twig');
	}
	
	public function lessonRateUpdateAction ($id) {
		$data = json_encode(array('id' => $id));
		return $this->render('RideChicagoAutoBundle:Pages/Admin:lessonrate-update.html.twig', array('staticData' => $data));
	}
	
	# Customer
	public function customerViewAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:customer.html.twig');
	}
	
	public function customerEditAction($id) {
		$data = json_encode(array('id' => $id));
		return $this->render('RideChicagoAutoBundle:Pages/Admin:customer-edit.html.twig', array('staticData' => $data));
	}
}

?>