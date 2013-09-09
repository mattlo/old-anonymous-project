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
	 */
	protected $middle_initial;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $last_name;
	
	/**
	 * @ORM\Column(type="text")
	 */
	protected $address;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 */
	protected $phone;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 */
	protected $phone_alt;
	
	protected $serializer = null;
	
	public function __construct() {
		$encoders = array(new XmlEncoder(), new JsonEncoder());
		$normalizers = array(new GetSetMethodNormalizer());

		$this->serializer = new Serializer($normalizers, $encoders);
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
     * Set first_name
     *
     * @param string $firstName
     * @return Profile
     */
    public function setFirstName($firstName)
    {
        $this->first_name = $firstName;
    
        return $this;
    }

    /**
     * Get first_name
     *
     * @return string 
     */
    public function getFirstName()
    {
        return $this->first_name;
    }

    /**
     * Set middle_initial
     *
     * @param string $middleInitial
     * @return Profile
     */
    public function setMiddleInitial($middleInitial)
    {
        $this->middle_initial = $middleInitial;
    
        return $this;
    }

    /**
     * Get middle_initial
     *
     * @return string 
     */
    public function getMiddleInitial()
    {
        return $this->middle_initial;
    }

    /**
     * Set last_name
     *
     * @param string $lastName
     * @return Profile
     */
    public function setLastName($lastName)
    {
        $this->last_name = $lastName;
    
        return $this;
    }

    /**
     * Get last_name
     *
     * @return string 
     */
    public function getLastName()
    {
        return $this->last_name;
    }

    /**
     * Set address
     *
     * @param string $address
     * @return Profile
     */
    public function setAddress(Address $address)
    {
        $this->address = $this->serializer->serialize($address, 'json');
    
        return $this;
    }

    /**
     * Get address
     *
     * @return string 
     */
    public function getAddress()
    {
        return $this->serializer->deserialize($this->address, 'RideChicago\AutoBundle\Entity\Address', 'json');
    }

    /**
     * Set phone
     *
     * @param string $phone
     * @return Profile
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    
        return $this;
    }

    /**
     * Get phone
     *
     * @return string 
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set phone_alt
     *
     * @param string $phoneAlt
     * @return Profile
     */
    public function setPhoneAlt($phoneAlt)
    {
        $this->phone_alt = $phoneAlt;
    
        return $this;
    }

    /**
     * Get phone_alt
     *
     * @return string 
     */
    public function getPhoneAlt()
    {
        return $this->phone_alt;
    }
}