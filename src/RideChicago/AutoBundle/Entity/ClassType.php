<?php

namespace RideChicago\AutoBundle\Entity;

use \DateTime;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="class_types")
 */
class ClassType {

	/**
	 * @ORM\Id
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $indexOrder = 0;

	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $title;

	/**
	 * @ORM\Column(type="text")
	 */
	protected $description;

	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $enrollment;

	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $status;

	/**
	 * @ORM\Column(type="datetime")
	 * @Assert\NotBlank()
	 */
	protected $last_modified;
	
    /**
	 * Get id
	 *
	 * @return integer 
	 */
	public function getId() {
		return $this->id;
	}

	/**
	 * Set title
	 *
	 * @param string $title
	 * @return Classes
	 */
	public function setTitle($title) {
		$this->title = $title;

		return $this;
	}

	/**
	 * Get title
	 *
	 * @return string 
	 */
	public function getTitle() {
		return $this->title;
	}

	/**
	 * Set enrollment
	 *
	 * @param integer $enrollment
	 * @return Classes
	 */
	public function setEnrollment($enrollment) {
		$this->enrollment = $enrollment;

		return $this;
	}

	/**
	 * Get enrollment
	 *
	 * @return integer 
	 */
	public function getEnrollment() {
		return $this->enrollment;
	}

	/**
	 * Set status
	 *
	 * @param integer $status
	 * @return Classes
	 */
	public function setStatus($status) {
		$this->status = $status;

		return $this;
	}

	/**
	 * Get status
	 *
	 * @return integer 
	 */
	public function getStatus() {
		return $this->status;
	}

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
	 * Get last_modified
	 *
	 * @return \DateTime 
	 */
	public function getLastModifiedObject() {
		return $this->last_modified;
	}

	/**
	 * Set description
	 *
	 * @param string $description
	 * @return ClassType
	 */
	public function setDescription($description) {
		$this->description = $description;

		return $this;
	}

	/**
	 * Get description
	 *
	 * @return string 
	 */
	public function getDescription() {
		return $this->description;
	}

	/**
	 * Set indexOrder
	 *
	 * @param integer $indexOrder
	 * @return ClassType
	 */
	public function setIndexOrder($indexOrder) {
		$this->indexOrder = $indexOrder;

		return $this;
	}

	/**
	 * Get indexOrder
	 *
	 * @return integer 
	 */
	public function getIndexOrder() {
		return $this->indexOrder;
	}
	
	/**
	 * 
	 * @param type $id
	 * @return null
	 */
	public function findOneById($id) {
		$query = $this->getEntityManager()->createQuery('
            SELECT p FROM RideChicagoAutoBundle:Product p
            WHERE p.id = :id
		')->setParameter('id', $id);

		try {
			return $query->getSingleResult();
		} catch (\Doctrine\ORM\NoResultException $e) {
			Logger::error($e);
			return null;
		}
	}
	
	public function incrementIndexOrder() {
		$this->setIndexOrder(++$this->indexOrder);
	}
	
	public function decrementIndexOrder() {
		$this->setIndexOrder(--$this->indexOrder);
	}
}