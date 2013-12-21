<?php

namespace RideChicago\AutoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="lessonrates")
 */
class LessonRate {
	/**
	 * @ORM\Id
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;
	
	/**
	 * @ORM\Column(type="decimal", scale=2, precision=6)
	 * @Assert\NotBlank()
	 */
	protected $duration;
	
	/**
	 * @ORM\Column(type="decimal", scale=2, precision=6)
	 * @Assert\NotBlank()
	 */
	protected $price;	
	
	/**
	 * @ORM\Column(type="decimal", scale=2, precision=6)
	 * @Assert\NotBlank()
	 */
	protected $pickupfee = 0.00;
	
	protected $rate;

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
     * Set duration
     *
     * @param integer $duration
     * @return LessonRate
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
     * Set price
     *
     * @param float $price
     * @return LessonRate
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
	
	public function getRate() {
		$duration = $this->getDuration();
		
		if ($duration < 1) {
			$unit = 'hour';
		} else {
			$unit = 'hours';
		}
		
		return $duration . ' ' . $unit . ' for $' . $this->getPrice();
	}
	
	public function getPickupfee() {
		return $this->pickupfee;
	}

	public function setPickupfee($pickupfee) {
		$this->pickupfee = $pickupfee;
		return $this;
	}
}