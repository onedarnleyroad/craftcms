<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    ->aliases([
        '@web' => rtrim(APP::env('PRIMARY_SITE_URL'), '/'),
        '@webroot' => dirname(__DIR__) . '/web',
    ])
	->defaultSearchTermOptions([
		'subLeft' => true,
		'subRight' => true,
	])
    ->defaultTokenDuration('P1W')
    ->defaultWeekStartDay(0)
    ->enableGql(false)
    ->maxRevisions(10)
    ->omitScriptNameInUrls(true)
    ->preserveCmykColorspace(true)
    ->preserveImageColorProfiles(true)
    ->preventUserEnumeration(true)
    ->previewTokenDuration('P1W')
    ->timezone('UTC')
    ->transformGifs(false)
    ->useEmailAsUsername(true);
