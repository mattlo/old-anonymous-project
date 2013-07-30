<?php

namespace RideChicago\AutoBundle\Helpers;

use \DateTime;

abstract class ServiceOutput {
	
	/**
	 * @const string
	 */
	const JSON_TEMPLATE = 'RideChicagoAutoBundle:Default:base.json.twig';
	/**
	 * @const string output variable on twig template
	 */
	const TPL_VAR = 'data';
	
	/**
	 * Wraps data to first level `data` property and adds meta data
	 * @param array $data
	 * @param boolean $success optional Sets flag on JSON output
	 * @return array
	 */
	static public function prepare($data, $success = true) {
		$dateCreated = new DateTime();
		
		return array (
			'success' => ($success === true ? 'true' : 'false'),
			'data' => $data,
			'date_created' => $dateCreated->format(DateTime::ISO8601)
		);
	}
	
	/**
	 * Render and return response
	 * @param Symfony\Bundle\FrameworkBundle\Controller\Controller $controller
	 * @param array $data
	 * @param boolean $success
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	static public function render($controller, array $data = array(), $success = true) {
		return $controller->render(
			self::JSON_TEMPLATE, 
			array(self::TPL_VAR => self::prepare($data, $success))
		);
	}
}

?>