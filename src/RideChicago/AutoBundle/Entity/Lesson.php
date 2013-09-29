<?php

namespace RideChicago\AutoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="lessons")
 */
class Lesson {
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
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $duration = 0;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $promotion_code;
	
    /**
     * @ORM\ManyToOne(targetEntity="Customer")
     * @ORM\JoinColumn(name="customer_id", referencedColumnName="id", onDelete="CASCADE")
	 * @Assert\NotBlank()
     */
	protected $customer;	
	
    /**
     * @ORM\ManyToOne(targetEntity="LessonRate")
     * @ORM\JoinColumn(name="lesson_rate_id", referencedColumnName="id", onDelete="CASCADE")
	 * @Assert\NotBlank()
     */
	protected $lesson_rate;
	
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
	 * @ORM\Column(type="integer")
	 */
	
	protected $customer_id;
	
	/**
	 * @ORM\Column(type="integer")
	 */
	protected $lesson_rate_id;
	
	/**
	 * @ORM\Column(type="datetime")
	 * @Assert\NotBlank()
	 */
	protected $datetime;

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
     * @return Lesson
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
     * Set duration
     *
     * @param integer $duration
     * @return Lesson
     */
    public function setDuration($duration)
    {
        $this->duration = $duration;
    
        return $this;
    }

    /**
     * Get duration
     *
     * @return integer 
     */
    public function getDuration()
    {
        return $this->duration;
    }

    /**
     * Set promotion_code
     *
     * @param string $promotionCode
     * @return Lesson
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
     * Set notes
     *
     * @param string $notes
     * @return Lesson
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
     * @return Lesson
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
        return $this->date_created;
    }

    /**
     * Set customer_id
     *
     * @param integer $customerId
     * @return Lesson
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
     * Set lesson_rate_id
     *
     * @param integer $lessonRateId
     * @return Lesson
     */
    public function setLessonRateId($lessonRateId)
    {
        $this->lesson_rate_id = $lessonRateId;
    
        return $this;
    }

    /**
     * Get lesson_rate_id
     *
     * @return integer 
     */
    public function getLessonRateId()
    {
        return $this->lesson_rate_id;
    }

    /**
     * Set customer
     *
     * @param \RideChicago\AutoBundle\Entity\Customer $customer
     * @return Lesson
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
     * Set lesson_rate
     *
     * @param \RideChicago\AutoBundle\Entity\LessonRate $lessonRate
     * @return Lesson
     */
    public function setLessonRate(\RideChicago\AutoBundle\Entity\LessonRate $lessonRate = null)
    {
        $this->lesson_rate = $lessonRate;
    
        return $this;
    }

    /**
     * Get lesson_rate
     *
     * @return \RideChicago\AutoBundle\Entity\LessonRate 
     */
    public function getLessonRate()
    {
        return $this->lesson_rate;
    }

    /**
     * Set datetime
     *
     * @param \DateTime $datetime
     * @return Lesson
     */
    public function setDatetime($datetime)
    {
        $this->datetime = $datetime;
    
        return $this;
    }

    /**
     * Get datetime
     *
     * @return \DateTime 
     */
    public function getDatetime()
    {
        return $this->datetime;
    }
}