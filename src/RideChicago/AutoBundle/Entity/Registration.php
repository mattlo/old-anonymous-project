<?php

namespace RideChicago\AutoBundle\Entity;

use \DateTime;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="registrations")
 */
class Registration {
	/**
	 * @ORM\Id
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $status;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $classroom_id;
	
    /**
     * @ORM\ManyToOne(targetEntity="Classroom")
     * @ORM\JoinColumn(name="classroom_id", referencedColumnName="id")
     */
	protected $classroom;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $lab_status;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $class_status;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $promotion_code;
	
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

	public function getStatus() {
		return $this->status;
	}

	public function setStatus($status) {
		$this->status = $status;
		return $this;
	}

	public function getClassroom_id() {
		return $this->classroom_id;
	}

	public function setClassroom_id($classroom_id) {
		$this->classroom_id = $classroom_id;
		return $this;
	}

	public function getClassroom() {
		return $this->classroom;
	}

	public function setClassroom($classroom) {
		$this->classroom = $classroom;
		return $this;
	}

	public function getLab_status() {
		return $this->lab_status;
	}

	public function setLab_status($lab_status) {
		$this->lab_status = $lab_status;
		return $this;
	}

	public function getClass_status() {
		return $this->class_status;
	}

	public function setClass_status($class_status) {
		$this->class_status = $class_status;
		return $this;
	}

	public function getPromotion_code() {
		return $this->promotion_code;
	}

	public function setPromotion_code($promotion_code) {
		$this->promotion_code = $promotion_code;
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