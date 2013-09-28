<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use RideChicago\AutoBundle\Helpers\Serialize;
use RideChicago\AutoBundle\Helpers\ServiceOutput;
use RideChicago\AutoBundle\Helpers\Logger;
use RideChicago\AutoBundle\Helpers\ValidationThrower;
use RideChicago\AutoBundle\Exceptions\ContraintViolationException;
use \Exception;

class CustomerController extends Controller {
	/**
	 * @param type $id
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function getAction($id = null) {
		if ($id !== null) {
			$customers = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Customer')
				->findById($id);
		} else {
			$customers = $this->getDoctrine()
				->getRepository('RideChicagoAutoBundle:Customer')
				->findAllOrderByLastName();
		}
		
		Logger::info($this, 'fetching ' . count($customers) . ' customers');
		return ServiceOutput::render($this, Serialize::getArrayFromObject($customers));
	}
}

?>