<?php

namespace RideChicago\AutoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 * @UniqueEntity(fields="username", message="Username already taken")
 */
class User implements UserInterface {
	
	// opted for a constant than a self generating salt
	const SALT = 'Th3Gr3atMl0';
	
	/**
	 * @ORM\Id
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @ORM\Column(type="string", unique=true, length=255)
	 * @Assert\NotBlank()
	 * @Assert\Email()
	 */
	protected $username;

	/**
	 * @ORM\Column(type="string", length=255)
	 * @Assert\NotBlank()
	 */
	protected $password;
	
	/**
	 * @ORM\Column(type="integer")
	 * @Assert\NotBlank()
	 */
	protected $status = 1;
	
	/**
	 * @ORM\Column(type="string")
	 * @Assert\NotBlank()
	 */
	protected $role = 'ROLE_ADMIN';

	public function getId() {
		return $this->id;
	}

	public function getUsername() {
		return $this->username;
	}

	public function setUsername($username) {
		$this->username = $username;
	}

	public function getPassword() {
		return $this->password;
	}

	public function setPassword($password) {
		$this->password = $password;
	}
	
	public function getRoles() {
		return array($this->role);
	}
	
	public function setRole($role) {
		$this->role = $role;
	}
	
	public function getStatus() {
		return $this->status;
	}
	
	public function setStatus($status) {
		$this->status = $status;
	}

	public function getSalt() {
		return self::SALT;
	}
	
	public function eraseCredentials() {
		
	}
}
?>