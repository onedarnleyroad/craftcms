<?php

return [
	// The public-facing name of the plugin
	'*' => [
        'pluginName' => 'SEO',

        // Should the meta generator tag and X-Powered-By header be included?
        'generatorEnabled' => false,

        // The server environment, either `live`, `staging`, or `local`
        'environment' => 'local',
    ],
  
    // Production environment settings
    'production' => [
        'environment' => 'live'
    ]
];
