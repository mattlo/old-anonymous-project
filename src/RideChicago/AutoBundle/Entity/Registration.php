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
	protected $status = 0;
	
    /**
     * @ORM\ManyToOne(targetEntity="Classroom")
     * @ORM\JoinColumn(name="classroom_id", referencedColumnName="id", onDelete="CASCADE")
     */
	protected $classroom;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $lab_status = 0;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $class_status = 0;
	
	/**
	 * @ORM\Column(type="string", length=255, nullable=true)
	 */
	protected $promotion_code;
	
    /**
     * @ORM\ManyToOne(targetEntity="Customer")
     * @ORM\JoinColumn(name="customer_id", referencedColumnName="id", onDelete="CASCADE")
	 * @Assert\NotBlank()
     */
	protected $customer;
	
	/**
	 * @ORM\Column(type="text")
	 */
	protected $notes = '';
	
	/**
	 * @ORM\Column(type="datetime")
	 * @Assert\NotBlank()
	 */
	protected $date_created;
	
	/**
	 * @ORM\Column(type="boolean")
	 */
	protected $exam = false;
	
	/**
	 * @ORM\Column(type="integer")
	 */
	protected $classroom_id;

	/**
	 * @ORM\Column(type="integer")
	 */
	protected $customer_id;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set status
     *
     * @param integer $status
     * @return Registration
     */
    public function setStatus($status)
    {
        $this->status = $status;
    
        return $this;
    }

    /**
     * Get status
     *
     * @return integer 
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set classroom_id
     *
     * @param integer $classroomId
     * @return Registration
     */
    public function setClassroomId($classroomId)
    {
        $this->classroom_id = $classroomId;
    
        return $this;
    }

    /**
     * Get classroom_id
     *
     * @return integer 
     */
    public function getClassroomId()
    {
        return $this->classroom_id;
    }

    /**
     * Set lab_status
     *
     * @param integer $labStatus
     * @return Registration
     */
    public function setLabStatus($labStatus)
    {
        $this->lab_status = $labStatus;
    
        return $this;
    }

    /**
     * Get lab_status
     *
     * @return integer 
     */
    public function getLabStatus()
    {
        return $this->lab_status;
    }

    /**
     * Set class_status
     *
     * @param integer $classStatus
     * @return Registration
     */
    public function setClassStatus($classStatus)
    {
        $this->class_status = $classStatus;
    
        return $this;
    }

    /**
     * Get class_status
     *
     * @return integer 
     */
    public function getClassStatus()
    {
        return $this->class_status;
    }

    /**
     * Set promotion_code
     *
     * @param string $promotionCode
     * @return Registration
     */
    public function setPromotionCode($promotionCode)
    {
        $this->promotion_code = $promotionCode;
    
        return $this;
    }

    /**
     * Get promotion_code
     *
     * @return string 
     */
    public function getPromotionCode()
    {
        return $this->promotion_code;
    }

    /**
     * Set customer_id
     *
     * @param integer $customerId
     * @return Registration
     */
    public function setCustomerId($customerId)
    {
        $this->customer_id = $customerId;
    
        return $this;
    }

    /**
     * Get customer_id
     *
     * @return integer 
     */
    public function getCustomerId()
    {
        return $this->customer_id;
    }

    /**
     * Set notes
     *
     * @param string $notes
     * @return Registration
     */
    public function setNotes($notes)
    {
        $this->notes = $notes;
    
        return $this;
    }

    /**
     * Get notes
     *
     * @return string 
     */
    public function getNotes()
    {
        return $this->notes;
    }

    /**
     * Set date_created
     *
     * @param \DateTime $dateCreated
     * @return Registration
     */
    public function setDateCreated($dateCreated)
    {
        $this->date_created = $dateCreated;
    
        return $this;
    }

    /**
     * Get date_created
     *
     * @return \DateTime 
     */
    public function getDateCreated()
    {
        return $this->date_created->format(DateTime::ISO8601);
    }

    /**
     * Set classroom
     *
     * @param \RideChicago\AutoBundle\Entity\Classroom $classroom
     * @return Registration
     */
    public function setClassroom(\RideChicago\AutoBundle\Entity\Classroom $classroom = null)
    {
        $this->classroom = $classroom;
    
        return $this;
    }

    /**
     * Get classroom
     *
     * @return \RideChicago\AutoBundle\Entity\Classroom 
     */
    public function getClassroom()
    {
        return $this->classroom;
    }

    /**
     * Set customer
     *
     * @param \RideChicago\AutoBundle\Entity\Customer $customer
     * @return Registration
     */
    public function setCustomer(\RideChicago\AutoBundle\Entity\Customer $customer = null)
    {
        $this->customer = $customer;
    
        return $this;
    }

    /**
     * Get customer
     *
     * @return \RideChicago\AutoBundle\Entity\Customer 
     */
    public function getCustomer()
    {
        return $this->customer;
    }

    /**
     * Set exam
     *
     * @param boolean $exam
     * @return Registration
     */
    public function setExam($exam)
    {
        $this->exam = $exam;
    
        return $this;
    }

    /**
     * Get exam
     *
     * @return boolean 
     */
    public function getExam()
    {
        return $this->exam;
    }
}