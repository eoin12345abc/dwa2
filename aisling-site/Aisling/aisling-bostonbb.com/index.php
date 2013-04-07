<?php

# The DOC_ROOT and APP_PATH constant have to happen in the actual app

	# Document root, ex: /path/to/home/app.com/../ (uses ./ on CLI)
	define('DOC_ROOT', empty($_SERVER['DOCUMENT_ROOT']) ? './' : realpath($_SERVER['DOCUMENT_ROOT']).'/../');
	  
	# App path, ex: /path/to/home/app.com/
	define('APP_PATH', realpath(dirname(__FILE__)).'/');
         
# Environment
	require_once DOC_ROOT.'environment.php'; 
   
# Where is core located?
	define('CORE_PATH',  $_SERVER['DOCUMENT_ROOT']."/../core/");
	   
# Load app configs
	require APP_PATH."/config/config.php";
	require APP_PATH."/config/feature_flags.php";
	  
# Bootstrap
	require CORE_PATH."bootstrap.php";

# Routing
    Router::$routes = array(
    	'/' => '/pages/index/home', # default controller when "/" is requested
			'/home' => '/pages/index/home',
			'/house' => '/pages/index/house',
			'/rates' => '/pages/index/rates',
			'/gallery' => '/pages/index/gallery',
			'/hosts' => '/pages/index/hosts',
			'/breakfast' => '/pages/index/breakfast',
			'/boston' => '/pages/index/boston',
			'/location' => '/pages/index/location',
			'/reviews' => '/pages/index/reviews',
			'/contact' => '/pages/index/contact',
    );
    
# Match requested uri to any routes and instantiate controller
    Router::init();
    
# Display environment details
	require CORE_PATH."environment-details.php";
	
?>