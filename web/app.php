<?php

// @TODO WHEN ON PROD, PREPARE THIS FILE CORRECT (enabling cache, disable debug)

use Symfony\Component\ClassLoader\ApcClassLoader;
use Symfony\Component\HttpFoundation\Request;

// @TODO have better auto-env handling
if (file_exists(__DIR__.'/../app/config/env.prod') === true) {
	$loader = require_once __DIR__.'/../app/bootstrap.php.cache';

	// Use APC for autoloading to improve performance.
	// Change 'sf2' to a unique prefix in order to prevent cache key conflicts
	// with other applications also using APC.
	/*
	$loader = new ApcClassLoader('sf2', $loader);
	$loader->register(true);
	*/

	require_once __DIR__.'/../app/AppKernel.php';
	//require_once __DIR__.'/../app/AppCache.php';

	$kernel = new AppKernel('prod', false);
	$kernel->loadClassCache();
	//$kernel = new AppCache($kernel);
	Request::enableHttpMethodParameterOverride();
	$request = Request::createFromGlobals();
	$response = $kernel->handle($request);
	$response->send();
	$kernel->terminate($request, $response);

} else {
	$loader = require_once __DIR__.'/../app/autoload.php';
	require_once __DIR__.'/../app/AppKernel.php';
	$kernel = new AppKernel('dev', true);
	Request::enableHttpMethodParameterOverride();
	$request = Request::createFromGlobals();
	$response = $kernel->handle($request);
	$response->send();
	$kernel->terminate($request, $response);
}