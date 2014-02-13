<?php

namespace RideChicago\AutoBundle\Commons;

class Notifications {
	static public function send($ins, $type, $firstName, $lastName, $message = '') {
		$message = \Swift_Message::newInstance()
			->setSubject('New ' . $type . ' - ' . $firstName . ' ' . $lastName)
			->setFrom('ridechicago.noreply@gmail.com')
			->setTo('drive@ridechicago.com') // @TODO make this configurable
			->setBody(
				$ins->renderView(
					'RideChicagoAutoBundle:Default:notification.txt.twig',
					array(
						'firstName' => $firstName,
						'lastName' => $lastName,
						'message' => $message,
						'type' => $type
					)
				)
			);
		
		$ins->get('mailer')->send($message);
	}
}

?>