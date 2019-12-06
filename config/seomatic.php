<?php

return [
    'pluginName' => 'SEO',
    'environment' => (bool) getenv('SEOMATIC_IS_LIVE') ? 'live' : 'local',
];
