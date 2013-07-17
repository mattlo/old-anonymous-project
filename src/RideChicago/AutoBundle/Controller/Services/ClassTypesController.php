<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ClassTypesController extends Controller {
	
	public function getAction () {
		
		$classTypes = array (
			array (
				'id' => '',
				'title' => 'Basic Licensing Class',
				'enrollment' => 'Enrollment Active',
				'status' => 'Active',
				'last_modified' => '03/03/2013 4:12:15 PM'
			),
			array (
				'id' => '',
				'title' => 'Motorcycle Instructor Training',
				'enrollment' => 'Enrollment Active',
				'status' => 'Active',
				'last_modified' => '06/06/2013 8:06:59 PM'
			),
			array (
				'id' => '',
				'title' => 'Refresher Class - $95',
				'enrollment' => 'Information Only',
				'status' => 'Non-Active',
				'last_modified' => '04/06/2013 10:18:41 PM'
			),
			array (
				'id' => '',
				'title' => 'Winter Storage',
				'enrollment' => 'Enrollment Active',
				'status' => 'Active',
				'last_modified' => '12/13/2012 6:02:51 PM'
			)
		);
		
		return $this->render(
			'RideChicagoAutoBundle:Default:base.json.twig', 
			array('data' => 
				array('data' => $classTypes)
			)
		);
	}
}

?>