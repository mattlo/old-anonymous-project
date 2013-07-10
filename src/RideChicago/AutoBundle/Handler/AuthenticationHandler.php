<?php

namespace RideChicago\AutoBundle\Handler;

use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

class AuthenticationHandler implements AuthenticationSuccessHandlerInterface, AuthenticationFailureHandlerInterface {

	public function onAuthenticationSuccess(Request $request, TokenInterface $token) {
		if ($request->isXmlHttpRequest()) {
			return new Response(json_encode(array (
				'success' => true,
				'location' => '/admin'
			)));
		}
	}

	public function onAuthenticationFailure(Request $request, AuthenticationException $exception) {
		if ($request->isXmlHttpRequest()) {
			return new Response(json_encode(array(
					'success' => false, 
					'errors' => array(
						'_username' => 'Email address may be invalid',
						'_password' => 'Password may be in invalid'
					)
				)
			));
		}
	}

}

?>