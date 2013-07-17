<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ClassesController extends Controller {
	
	public function getAction () {
		
		$sch = array (
			array (
				'id' => '1',
				'code' => 'OJULY17-17-C-AM',
				'days' => 'Wednesday',
				'opens' => '2/6/2013',
				'start' => '7/17/2013',
				'end' => '7/17/2013',
				'class' => 'Basic Licensing Class',
				'price' => '$40.00',
				'special' => false,
				'status' => 1,
				'seats' => '1/25',
				'waiting' => '1/1',
				'instructor' => 'United',
				'notes' => 'Test Notes'
			),
			array (
				'id' => '2',
				'code' => 'OJULY18-17-C-AM',
				'days' => 'Friday',
				'opens' => '2/8/2013',
				'start' => '7/18/2013',
				'end' => '7/18/2013',
				'class' => 'Motorcycle Instructor Training',
				'price' => '$85.00',
				'special' => false,
				'status' => 1,
				'seats' => '1/25',
				'waiting' => '1/1',
				'instructor' => 'United',
				'notes' => 'Test Notes'
			),
			array (
				'id' => '3',
				'code' => 'OJULY19-17-C-AM',
				'days' => 'Saturday',
				'opens' => '2/9/2013',
				'start' => '7/19/2013',
				'end' => '7/19/2013',
				'class' => 'Motorcycle Instructor Training',
				'price' => '$100.00',
				'special' => false,
				'status' => 0,
				'seats' => '1/25',
				'waiting' => '1/1',
				'instructor' => 'United',
				'notes' => 'Test Notes'
			)
		);
		
		return $this->render(
			'RideChicagoAutoBundle:Default:base.json.twig', 
			array('data' => 
				array('data' => $sch)
			)
		);
	}
}

?>