<?php
namespace RideChicago\AutoBundle\Helpers;

use Monolog\Logger as MonoLogger;

/**
 * @class Logger
 * Helper class that faciliates logging using the default Symfony2 Monolog implementation
 */
abstract class Logger { 
	static public function info($instance, $message, $context = array()) {
		static::log($instance, MonoLogger::INFO, $message, $context);
	}
	
	static public function debug($instance, $message, $context = array()) {
		static::log($instance, MonoLogger::DEBUG, $message, $context);
	}
	
	static public function error($instance, $message, $context = array()) {
		static::log($instance, MonoLogger::ERROR, $message, $context);
	}
	
	static public function log($instance, $level, $message, $context = array()) {
		$instance->get('applogger')->log($level, get_class($instance) . ': ' . $message, $context);
	}
}
?>