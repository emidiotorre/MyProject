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
	//db MyProject_db
		require('./resource/MyProject_db/custom/PazienteCustom.php');
		require('./resource/MyProject_db/Paziente.php');
		require('./resource/MyProject_db/custom/UserCustom.php');
		require('./resource/MyProject_db/User.php');
		require('./resource/MyProject_db/custom/appuntamentoCustom.php');
		require('./resource/MyProject_db/appuntamento.php');
		require('./resource/MyProject_db/custom/curaCustom.php');
		require('./resource/MyProject_db/cura.php');
		require('./resource/MyProject_db/custom/fatturaCustom.php');
		require('./resource/MyProject_db/fattura.php');
		require('./resource/MyProject_db/custom/poltronaCustom.php');
		require('./resource/MyProject_db/poltrona.php');
		require('./resource/MyProject_db/custom/preventivoCustom.php');
		require('./resource/MyProject_db/preventivo.php');
		require('./resource/MyProject_db/custom/studioCustom.php');
		require('./resource/MyProject_db/studio.php');
		require('./resource/MyProject_db/custom/trattamentoCustom.php');
		require('./resource/MyProject_db/trattamento.php');
	

$app->run();


?>
