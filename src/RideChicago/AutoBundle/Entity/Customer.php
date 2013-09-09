<?php

namespace RideChicago\AutoBundle\Entity;

use \DateTime;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="customers")
 */
class Customer {
	/**
	 * @ORM\Id
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 * @Assert\Email()
	 */
	protected $email;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $drivers_license;
	
	/**
	 * @ORM\Column(type="date")
	 * @Assert\NotBlank()
	 */
	protected $date_of_birth;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $gender;
	
    /**
     * @ORM\ManyToOne(targetEntity="Profile")
     * @ORM\JoinColumn(name="profile_id", referencedColumnName="id")
     */
	protected $profile;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $profile_id;
	
    /**
     * @ORM\ManyToOne(targetEntity="Profile")
     * @ORM\JoinColumn(name="profile_id", referencedColumnName="id")
     */
	protected $billing_profile;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $billing_profile_id;
	
	/**
	 * @ORM\Column(type="text")
	 */
	protected $notes;
	
	/**
	 * @ORM\Column(type="datetime")
	 * @Assert\NotBlank()
	 */
	protected $date_created;
	
	public function getId() {
		return $this->id;
	}

	public function setId($id) {
		$this->id = $id;
		return $this;
	}

	public function getEmail() {
		return $this->email;
	}

	public function setEmail($email) {
		$this->email = $email;
		return $this;
	}

	public function getDrivers_license() {
		return $this->drivers_license;
	}

	public function setDrivers_license($drivers_license) {
		$this->drivers_license = $drivers_license;
		return $this;
	}

	public function getDate_of_birth() {
		return $this->date_of_birth;
	}

	public function setDate_of_birth($date_of_birth) {
		$this->date_of_birth = $date_of_birth;
		return $this;
	}

	public function getGender() {
		return $this->gender;
	}

	public function setGender($gender) {
		$this->gender = $gender;
		return $this;
	}

	public function getProfile() {
		return $this->profile;
	}

	public function setProfile($profile) {
		$this->profile = $profile;
		return $this;
	}

	public function getProfile_id() {
		return $this->profile_id;
	}

	public function setProfile_id($profile_id) {
		$this->profile_id = $profile_id;
		return $this;
	}

	public function getBilling_profile() {
		return $this->billing_profile;
	}

	public function setBilling_profile($billing_profile) {
		$this->billing_profile = $billing_profile;
		return $this;
	}

	public function getBilling_profile_id() {
		return $this->billing_profile_id;
	}

	public function setBilling_profile_id($billing_profile_id) {
		$this->billing_profile_id = $billing_profile_id;
		return $this;
	}

	public function getNotes() {
		return $this->notes;
	}

	public function setNotes($notes) {
		$this->notes = $notes;
		return $this;
	}

	public function getDate_created() {
		return $this->date_created;
	}

	public function setDate_created($date_created) {
		$this->date_created = $date_created;
		return $this;
	}
}
?>