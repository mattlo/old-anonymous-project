<?php

namespace RideChicago\AutoBundle\Entity;

use \DateTime;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use RideChicago\AutoBundle\Entity\ClassType;
use RideChicago\AutoBundle\Exceptions\DataRejectedException;

/**
 * @ORM\Entity
 * @ORM\Table(name="classroom")
 */
class Classroom {

	/**
	 * @ORM\Id
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @ORM\Column(type="datetime")
	 * @Assert\NotBlank()
	 */
	protected $last_modified;
	
	/**
	 * @ORM\Column(type="text")
	 * @Assert\NotBlank()
	 */
	protected $class_days;
	
	/**
	 * @ORM\Column(type="decimal", scale=2, precision=6)
	 * @Assert\NotBlank()
	 */
	protected $price = 0;
	
	/**
	 * @ORM\Column(type="decimal", scale=2, precision=6)
	 * @Assert\NotBlank()
	 */
	protected $deposit = 0;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $enrollment_seats;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $enrollment_seats_used = 0;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $enrollment_wait_list;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $enrollment_wait_list_used = 0;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $promotion_limit;
		
	/**
	 * @ORM\Column(type="date")
	 * @Assert\NotBlank()
	 */
	protected $class_registration_start_date;
	
	/**
	 * @ORM\Column(type="date")
	 * @Assert\NotBlank()
	 */
	protected $class_start_date;
	
	/**
	 * @ORM\Column(type="date")
	 * @Assert\NotBlank()
	 */
	protected $class_end_date;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $instructor_id;
		
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $classtype_id;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $online_registration_status;

	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $status;
	
	/**
	 * @ORM\Column(type="text")
	 * @Assert\NotBlank()
	 */
	protected $notes;
	
    /**
     * @ORM\ManyToOne(targetEntity="ClassType")
     * @ORM\JoinColumn(name="classtype_id", referencedColumnName="id", onDelete="CASCADE")
     */
	protected $classtype;
	
	protected $code;
	
	protected $longname;

	/**
	 * Set last_modified
	 *
	 * @return Classes
	 */
	public function setLastModified() {
		$this->last_modified = new DateTime();

		return $this;
	}

	/**
	 * Get last_modified as string
	 *
	 * @return String
	 */
	public function getLastModified() {
		return $this->last_modified->format(DateTime::ISO8601);
	}

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
     * Set class_days
     *
     * @param string $classDays
     * @return Classroom
     */
    public function setClassDays($classDays)
    {
        $this->class_days = $classDays;
    
        return $this;
    }

    /**
     * Get class_days
     *
     * @return string 
     */
    public function getClassDays()
    {
        return $this->class_days;
    }

    /**
     * Set price
     *
     * @param float $price
     * @return Classroom
     */
    public function setPrice($price)
    {
        $this->price = $price;
    
        return $this;
    }

    /**
     * Get price
     *
     * @return float 
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set deposit
     *
     * @param float $deposit
     * @return Classroom
     */
    public function setDeposit($deposit)
    {
        $this->deposit = $deposit;
    
        return $this;
    }

    /**
     * Get deposit
     *
     * @return float 
     */
    public function getDeposit()
    {
        return $this->deposit;
    }

    /**
     * Set enrollment_seats
     *
     * @param integer $enrollmentSeats
     * @return Classroom
     */
    public function setEnrollmentSeats($enrollmentSeats)
    {
        $this->enrollment_seats = $enrollmentSeats;
    
        return $this;
    }

    /**
     * Get enrollment_seats
     *
     * @return integer 
     */
    public function getEnrollmentSeats()
    {
        return $this->enrollment_seats;
    }

    /**
     * Set enrollment_wait_list
     *
     * @param integer $enrollmentWaitList
     * @return Classroom
     */
    public function setEnrollmentWaitList($enrollmentWaitList)
    {
        $this->enrollment_wait_list = $enrollmentWaitList;
    
        return $this;
    }

    /**
     * Get enrollment_wait_list
     *
     * @return integer 
     */
    public function getEnrollmentWaitList()
    {
        return $this->enrollment_wait_list;
    }

    /**
     * Set promotion_limit
     *
     * @param integer $promotionLimit
     * @return Classroom
     */
    public function setPromotionLimit($promotionLimit)
    {
        $this->promotion_limit = $promotionLimit;
    
        return $this;
    }

    /**
     * Get promotion_limit
     *
     * @return integer 
     */
    public function getPromotionLimit()
    {
        return $this->promotion_limit;
    }

    /**
     * Set class_registration_start_date
     *
     * @param \DateTime $classRegistrationStartDate
     * @return Classroom
     */
    public function setClassRegistrationStartDate($classRegistrationStartDate)
    {
        $this->class_registration_start_date = $classRegistrationStartDate;
    
        return $this;
    }

    /**
     * Get class_registration_start_date
     *
     * @return \DateTime 
     */
    public function getClassRegistrationStartDate()
    {
        return $this->class_registration_start_date->format(DateTime::ISO8601);
    }

    /**
     * Set class_start_date
     *
     * @param \DateTime $classStartDate
     * @return Classroom
     */
    public function setClassStartDate($classStartDate)
    {
        $this->class_start_date = $classStartDate;
    
        return $this;
    }

    /**
     * Get class_start_date
     *
     * @return \DateTime 
     */
    public function getClassStartDate()
    {
        return $this->class_start_date->format(DateTime::ISO8601);
    }

    /**
     * Set class_end_date
     *
     * @param \DateTime $classEndDate
     * @return Classroom
     */
    public function setClassEndDate($classEndDate)
    {
        $this->class_end_date = $classEndDate;
    
        return $this;
    }

    /**
     * Get class_end_date
     *
     * @return \DateTime 
     */
    public function getClassEndDate()
    {
        return $this->class_end_date->format(DateTime::ISO8601);
    }

    /**
     * Set instructor_id
     *
     * @param integer $instructorId
     * @return Classroom
     */
    public function setInstructorId($instructorId)
    {
        $this->instructor_id = $instructorId;
    
        return $this;
    }

    /**
     * Get instructor_id
     *
     * @return integer 
     */
    public function getInstructorId()
    {
        return $this->instructor_id;
    }

    /**
     * Set online_registration_status
     *
     * @param integer $onlineRegistrationStatus
     * @return Classroom
     */
    public function setOnlineRegistrationStatus($onlineRegistrationStatus)
    {
        $this->online_registration_status = $onlineRegistrationStatus;
    
        return $this;
    }

    /**
     * Get online_registration_status
     *
     * @return integer 
     */
    public function getOnlineRegistrationStatus()
    {
        return $this->online_registration_status;
    }

    /**
     * Set status
     *
     * @param integer $status
     * @return Classroom
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
     * Set notes
     *
     * @param string $notes
     * @return Classroom
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
     * Set classtype_id
     *
     * @param integer $classtypeId
     * @return Classroom
     */
    public function setClasstypeId($classtypeId)
    {
        $this->classtype_id = $classtypeId;
    
        return $this;
    }

    /**
     * Get classtype_id
     *
     * @return integer 
     */
    public function getClasstypeId()
    {
        return $this->classtype_id;
    }
	
	public function setClasstype(ClassType $classtype) {
		$this->classtype = $classtype;
	}
	
	public function getClasstype() {
		return $this->classtype;
	}
	
	public function getCode() {
		$code = substr($this->classtype->getTitle(), 0, 3);
		$code = $code . '-' . $this->class_start_date->format('Mt');
		$code = $code . '-' . $this->class_end_date->format('t');
		$code = strtoupper($code);
		
		return $code;
	}

    /**
     * Set enrollment_seats_used
     *
     * @param integer $enrollmentSeatsUsed
     * @return Classroom
     */
    public function setEnrollmentSeatsUsed($enrollmentSeatsUsed)
    {
        $this->enrollment_seats_used = $enrollmentSeatsUsed;
    
        return $this;
    }

    /**
     * Get enrollment_seats_used
     *
     * @return integer 
     */
    public function getEnrollmentSeatsUsed()
    {
        return $this->enrollment_seats_used;
    }

    /**
     * Set enrollment_wait_list_used
     *
     * @param integer $enrollmentWaitListUsed
     * @return Classroom
     */
    public function setEnrollmentWaitListUsed($enrollmentWaitListUsed)
    {
        $this->enrollment_wait_list_used = $enrollmentWaitListUsed;
    
        return $this;
    }

    /**
     * Get enrollment_wait_list_used
     *
     * @return integer 
     */
    public function getEnrollmentWaitListUsed()
    {
        return $this->enrollment_wait_list_used;
    }
	
	public function getLongName() {
		return $this->classtype->getTitle() . ' - ' . $this->getCode();
	}
	
	public function incrementEnrollmentSeat() {
		// validate
		if ($this->enrollment_seats_used >= $this->enrollment_seats) {
			throw new DataRejectedException('All enrollment seats are filled');
		}
		
		++$this->enrollment_seats_used;
	}
	
	public function decrementEnrollmentSeat() {
		// validate
		if ($this->enrollment_seats_used == 0) {
			throw new DataRejectedException('Cannot decrement; no enrollment seats filled');
		}
		
		--$this->enrollment_seats_used;
	}
}