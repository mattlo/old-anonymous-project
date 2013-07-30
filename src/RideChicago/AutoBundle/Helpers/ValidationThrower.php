<?php

namespace RideChicago\AutoBundle\Helpers;

use RideChicago\AutoBundle\Exceptions\ContraintViolationException;

/**
 * A utility class for validation throwing
 * @class ValidationThrower
 * @singleton
 */
abstract class ValidationThrower {
	/**
	 * @param mixed $errors
	 * @throws ValidationListException
	 */
	static public function check($errors) {
		if (count($errors) > 0) {
			throw new ContraintViolationException($errors);
		}
	}
}

?>