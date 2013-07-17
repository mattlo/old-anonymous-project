<?php

namespace RideChicago\AutoBundle\Controller\Admin\Users;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ViewUsersController extends Controller {
	public function indexAction() {
		return $this->render('RideChicagoAutoBundle:Pages/Admin:users-view.html.twig');
	}
}

?>