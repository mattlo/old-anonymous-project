<?php

namespace RideChicago\AutoBundle\Commons;

abstract class DaysOfWeek {
	const Sunday = 0;
	const Monday = 1;
	const Tuesday = 2;
	const Wednesday = 3;
	const Thursday = 4;
	const Friday = 5;
	const Saturday = 6;
	
	static public function getDay($key) {
		$output = null;
		
		switch ($key) {
			case self::Sunday:
				$output = 'Sunday';
			break;
			case self::Monday:
				$output = 'Monday';
			break;
			case self::Tuesday:
				$output = 'Tuesday';
			break;
			case self::Wednesday:
				$output = 'Wednesday';
			break;
			case self::Thursday:
				$output = 'Thursday';
			break;
			case self::Friday:
				$output = 'Friday';
			break;
			case self::Saturday:
				$output = 'Saturday';
			break;
		}
		
		return $output;
	}
}

?>