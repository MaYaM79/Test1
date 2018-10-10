<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db Test1_db
		require('./resource/Test1_db/custom/UserCustom.php');
		require('./resource/Test1_db/User.php');
		require('./resource/Test1_db/custom/anagraphicsCustom.php');
		require('./resource/Test1_db/anagraphics.php');
	

$app->run();


?>
