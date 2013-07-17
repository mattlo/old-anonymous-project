<?php

namespace RideChicago\AutoBundle\Helpers;

use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;

abstract class Serialize {
	/**
	 * Serializes object to JSON
	 * @param mixed $object
	 * @return \Symfony\Component\Serializer\Serializer
	 */
	static public function getJsonFromObject($object) {
		$encoders = array(new JsonEncoder());
		$normalizers = array(new GetSetMethodNormalizer());

		$serializer = new Serializer($normalizers, $encoders);
		
		return $serializer->serialize($object, 'json');
	}
	
	/**
	 * Serializes object to XML
	 * @param mixed $object
	 * @return \Symfony\Component\Serializer\Serializer
	 */
	static public function getXmlFromObject($object) {
		$encoders = array(new XmlEncoder());
		$normalizers = array(new GetSetMethodNormalizer());

		$serializer = new Serializer($normalizers, $encoders);
		
		return $serializer->serialize($object, 'xml');
	}
}

?>