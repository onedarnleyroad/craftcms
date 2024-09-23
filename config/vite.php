<?php

use craft\helpers\App;

return [
	'checkDevServer' => true,
	'devServerInternal' => 'http://localhost:3000',
	'devServerPublic' => Craft::getAlias('@web') . ':3000',
	'errorEntry' => 'src/js/app.js',
	'manifestPath' => Craft::getAlias('@webroot') . '/dist/.vite/manifest.json',
	'serverPublic' => Craft::getAlias('@web')  . '/dist/',
	'useDevServer' => (bool) App::env('VITE_USE_DEV_SERVER'),
];
