<?php

namespace RideChicago\AutoBundle\Entity;

class Address {
	protected $address_line_1;
	
	protected $address_line_2;
	
	protected $city;
	
	protected $state;
	
	protected $postal_code;
	
	public function getAddress_line_1() {
		return $this->address_line_1;
	}

	public function setAddress_line_1($address_line_1) {
		$this->address_line_1 = $address_line_1;
		return $this;
	}

	public function getAddress_line_2() {
		return $this->address_line_2;
	}

	public function setAddress_line_2($address_line_2) {
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

	public function getPostal_code() {
		return $this->postal_code;
	}

	public function setPostal_code($postal_code) {
		$this->postal_code = $postal_code;
		return $this;
	}
}

?>