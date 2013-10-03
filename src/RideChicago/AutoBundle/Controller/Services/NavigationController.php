<?php

namespace RideChicago\AutoBundle\Controller\Services;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class NavigationController extends Controller {
    public function indexAction() {
		$request = $this->getRequest();
		$format = $request->getRequestFormat();

		return $this->render('RideChicagoAutoBundle:Default:base.'.$format.'.twig', 
			array('data' => array (
				'data' => array (
					
					static::mkLeaf('Dashboard', '/admin'),	
					
					static::mkLeaf(
						'Student Management',
						null,
						array (
							static::mkLeaf('Schedule a New Lesson', '/admin/lesson/add'),
							static::mkLeaf('Schedule Lesson from Existing Student', '/admin/lesson/add-existing'),
							static::mkLeaf('View Scheduled Lessons', '/admin/lesson'),
							static::mkLeaf('View Registrations', '/admin/registration'),
							static::mkLeaf('Register a New Student', '/admin/registration/add'),
							static::mkLeaf('Register an Existing Student', '/admin/registration/add-existing'),
							static::mkLeaf('Calendar', '/')
						)
					),	
					
					static::mkLeaf(
						'Class Management Tools',
						null,
						array (
							static::mkLeaf('Manage Lesson Rates', '/admin/lessonrate'),
							static::mkLeaf('Add Lesson Rate', '/admin/lessonrate/add'),
							static::mkLeaf('View Classrooms', '/admin/classes'),
							static::mkLeaf('Create Classroom', '/admin/classes/add'),
							static::mkLeaf('Manage Types', '/admin/class-types'),
							static::mkLeaf('Create Type', '/admin/class-types/add')
						)
					),	
					
					static::mkLeaf(
						'User Management',
						null,
						array (
							static::mkLeaf('View Users', '/admin/users'),
							static::mkLeaf('Create New User', '/admin/users/add'),
							static::mkLeaf('Email List Tool', '/admin/emails')
						)
					),	
					
					static::mkLeaf(
						'Content Management Tools',
						null,
						array (
							static::mkLeaf('Locations', '/'),
							static::mkLeaf('Promotions', '/')
						)
					)
					
				)
			)
		));
    }
	
	/**
	 * Builds lead object
	 * @param $text
	 * @param $children
	 * @static
	 * @return array
	 */
	static public function mkLeaf($text, $href = null, $children = null) {
		$output = array (
			'text' => $text,
			'leaf' => true,
			'extraCls' => 'FAILFAILFAL'
		);
		
		if ($children !== null) {
			$output['children'] = $children;
			$output['expanded'] = true;
			$output['leaf'] = false;
			$output['cls'] = 'folder';
		}
		
		if ($href !== null) {
			$output['href'] = $href;
		}
		
		return $output;
	}
}

?>