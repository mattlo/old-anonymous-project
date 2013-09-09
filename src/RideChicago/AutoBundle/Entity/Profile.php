<?php
namespace RideChicago\AutoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use RideChicago\AutoBundle\Entity\Address;

/**
 * @ORM\Entity
 * @ORM\Table(name="profiles")
 */
class Profile {
	/**
	 * @ORM\Id
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $first_name;
	
	/**
	 * @ORM\Column(type="string", length=1)
	 * @Assert\NotBlank()
	 */
	protected $middle_initial;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $last_name;
	
	/**
	 * @ORM\Column(type="text")
	 * @Assert\NotBlank()
	 */
	protected $address;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $phone;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $phone_alt;
	
	protected $serializer = null;
	
	public function __construct() {
		$encoders = array(new XmlEncoder(), new JsonEncoder());
		$normalizers = array(new GetSetMethodNormalizer());

		$this->serializer = new Serializer($normalizers, $encoders);
	}
	
	public function getId() {
		return $this->id;
	}

	public function setId($id) {
		$this->id = $id;
		return $this;
	}

	public function getFirst_name() {
		return $this->first_name;
	}

	public function setFirst_name($first_name) {
		$this->first_name = $first_name;
		return $this;
	}

	public function getMiddle_initial() {
		return $this->middle_initial;
	}

	public function setMiddle_initial($middle_initial) {
		$this->middle_initial = $middle_initial;
		return $this;
	}

	public function getLast_name() {
		return $this->last_name;
	}

	public function setLast_name($last_name) {
		$this->last_name = $last_name;
		return $this;
	}

	public function getAddress() {
		return $this->serializer->deserialize($this->address, 'RideChicago\AutoBundle\Entity\Address', 'json');
	}

	public function setAddress(Address $address) {
		$this->address = $this->serializer->serialize($address, 'json');
		return $this;
	}

	public function getPhone() {
		return $this->phone;
	}

	public function setPhone($phone) {
		$this->phone = $phone;
		return $this;
	}

	public function getPhone_alt() {
		return $this->phone_alt;
	}

	public function setPhone_alt($phone_alt) {
		$this->phone_alt = $phone_alt;
		return $this;
	}
}
?>