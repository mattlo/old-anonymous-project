<?php

namespace RideChicago\AutoBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class LoginController extends Controller {
    public function indexAction() {
        return $this->render('RideChicagoAutoBundle:Pages/Admin:login.html.twig');
    }
}

?>