<?php

use craft\helpers\App;

return [
    'pluginName' => 'SEO',
    'environment' => (bool) App::env('SEOMATIC_IS_LIVE') ? 'live' : 'local',
];
