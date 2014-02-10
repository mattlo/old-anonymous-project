<?php
namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class PublicContactController extends Controller {
	
	/**
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function sendAction(Request $request) {
		
    $message = \Swift_Message::newInstance()
			->setSubject('RideChicago Contact Request')
			->setFrom($request->request->get('email'))
			->setTo('drive@ridechicago.com') // @TODO make this configurable
			->setBody(
				$this->renderView(
					'RideChicagoAutoBundle:Default:contact-form.txt.twig',
					array(
						'name' => $request->request->get('name'),
						'email' => $request->request->get('email'),
						'subject' => $request->request->get('subject'),
						'message' => $request->request->get('message')
					)
				)
			)
		;
		$this->get('mailer')->send($message);
		
		return new Response('');
	}
}