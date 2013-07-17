<?php

namespace RideChicago\AutoBundle\Controller\Admin\Users;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AddUserController extends Controller {
	public function indexAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:users-add.html.twig');
	}
}

?>