<?php

namespace RideChicago\AutoBundle\Exceptions;

use Symfony\Component\Validator\ConstraintViolationList;

class ContraintViolationException extends \Exception {
	
	protected $_errorList = array();
	
	/**
	 * @param \Symfony\Component\Validator\ConstraintViolationList $errorList
	 * @param type $code
	 * @param type $previous
	 */
	public function __construct(ConstraintViolationList $errorList, $code = 0, $previous = null) {
		// set error list
		$this->setErrorList($errorList);
		
		// invoke super with converted array
		parent::__construct(join(', ', $this->getMessagesAsArray()), $code, $previous);
	}
	
	/**
	 * @param \Symfony\Component\Validator\ConstraintViolationList $errorList
	 */
	public function setErrorList(ConstraintViolationList $errorList) {
		$this->_errorList = $errorList;
	}
	
	/**
	 * @return \Symfony\Component\Validator\ConstraintViolationList
	 */
	public function getErrorList() {
		return $this->_errorList;
	}
	
	/**
	 * Returns error messages within an array
	 * @return array
	 */
	public function getMessagesAsArray() {
		$output = array();
		foreach($this->_errorList as $violation) {
			$output[] = $violation->getMessage();
		}
		
		return $output;
	}
	
	/**
	 * @return array
	 */
	public function getErrorsWithProperties() {
		$output = array();
		foreach($this->_errorList as $violation) {
			$output[$violation->getPropertyPath()] = $violation->getMessage();
		}
		
		return $output;
	}
}

?>