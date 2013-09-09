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
	 */
	protected $drivers_license;
	
	/**
	 * @ORM\Column(type="date")
	 * @Assert\NotBlank()
	 */
	protected $date_of_birth;
	
	/**
	 * @ORM\Column(type="integer")
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
	protected $notes = '';
	
	/**
	 * @ORM\Column(type="datetime")
	 * @Assert\NotBlank()
	 */
	protected $date_created;

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
     * Set email
     *
     * @param string $email
     * @return Customer
     */
    public function setEmail($email)
    {
        $this->email = $email;
    
        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set drivers_license
     *
     * @param string $driversLicense
     * @return Customer
     */
    public function setDriversLicense($driversLicense)
    {
        $this->drivers_license = $driversLicense;
    
        return $this;
    }

    /**
     * Get drivers_license
     *
     * @return string 
     */
    public function getDriversLicense()
    {
        return $this->drivers_license;
    }

    /**
     * Set date_of_birth
     *
     * @param \DateTime $dateOfBirth
     * @return Customer
     */
    public function setDateOfBirth($dateOfBirth)
    {
        $this->date_of_birth = $dateOfBirth;
    
        return $this;
    }

    /**
     * Get date_of_birth
     *
     * @return \DateTime 
     */
    public function getDateOfBirth()
    {
        return $this->date_of_birth->format(DateTime::ISO8601);
    }

    /**
     * Set gender
     *
     * @param integer $gender
     * @return Customer
     */
    public function setGender($gender)
    {
        $this->gender = $gender;
    
        return $this;
    }

    /**
     * Get gender
     *
     * @return integer 
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set profile_id
     *
     * @param integer $profileId
     * @return Customer
     */
    public function setProfileId($profileId)
    {
        $this->profile_id = $profileId;
    
        return $this;
    }

    /**
     * Get profile_id
     *
     * @return integer 
     */
    public function getProfileId()
    {
        return $this->profile_id;
    }

    /**
     * Set billing_profile_id
     *
     * @param integer $billingProfileId
     * @return Customer
     */
    public function setBillingProfileId($billingProfileId)
    {
        $this->billing_profile_id = $billingProfileId;
    
        return $this;
    }

    /**
     * Get billing_profile_id
     *
     * @return integer 
     */
    public function getBillingProfileId()
    {
        return $this->billing_profile_id;
    }

    /**
     * Set notes
     *
     * @param string $notes
     * @return Customer
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
     * @return Customer
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
     * Set profile
     *
     * @param \RideChicago\AutoBundle\Entity\Profile $profile
     * @return Customer
     */
    public function setProfile(\RideChicago\AutoBundle\Entity\Profile $profile = null)
    {
        $this->profile = $profile;
    
        return $this;
    }

    /**
     * Get profile
     *
     * @return \RideChicago\AutoBundle\Entity\Profile 
     */
    public function getProfile()
    {
        return $this->profile;
    }

    /**
     * Set billing_profile
     *
     * @param \RideChicago\AutoBundle\Entity\Profile $billingProfile
     * @return Customer
     */
    public function setBillingProfile(\RideChicago\AutoBundle\Entity\Profile $billingProfile = null)
    {
        $this->billing_profile = $billingProfile;
    
        return $this;
    }

    /**
     * Get billing_profile
     *
     * @return \RideChicago\AutoBundle\Entity\Profile 
     */
    public function getBillingProfile()
    {
        return $this->billing_profile;
    }
}