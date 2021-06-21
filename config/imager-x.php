<?php

use craft\helpers\App;

return [
	'cacheDuration' => false,
	'cacheDurationRemoteFiles' => false,
	'cacheEnabled' => true,
	'imagerSystemPath' => '@webroot/cache/imager/',
	'imagerUrl' => '@web/cache/imager/',
	'transformer' => App::env('IMAGER_TRANSFORMER') ?: 'craft',
];
