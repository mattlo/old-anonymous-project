<?php

namespace RideChicago\AutoBundle\Entity;

class Address {
	protected $address_line_1;
	
	protected $address_line_2;
	
	protected $city;
	
	protected $state;
	
	protected $postal_code;
	
	public function getAddressLine1() {
		return $this->address_line_1;
	}

	public function setAddressLine1($address_line_1) {
		$this->address_line_1 = $address_line_1;
		return $this;
	}

	public function getAddressLine2() {
		return $this->address_line_2;
	}

	public function setAddressLine2($address_line_2) {
		$this->address_line_2 = $address_line_2;
		return $this;
	}

	public function getCity() {
		return $this->city;
	}

	public function setCity($city) {
		$this->city = $city;
		return $this;
	}

	public function getState() {
		return $this->state;
	}

	public function setState($state) {
		$this->state = $state;
		return $this;
	}

	public function getPostalCode() {
		return $this->postal_code;
	}

	public function setPostalCode($postal_code) {
		$this->postal_code = $postal_code;
		return $this;
	}
}

?>