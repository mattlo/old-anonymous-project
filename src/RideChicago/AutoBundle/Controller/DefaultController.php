<?php

namespace RideChicago\AutoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller {
    public function indexAction($name = 'test') {
        return $this->render('RideChicagoAutoBundle:Default:index.html.twig', array('name' => $name));
    }
}

?>