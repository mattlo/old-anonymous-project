<?php

namespace RideChicago\AutoBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller {
    public function indexAction() {
        return $this->render('RideChicagoAutoBundle:Pages/Admin:index.html.twig');
    }
}

?>