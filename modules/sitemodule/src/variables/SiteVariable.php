<?php
/**
 * Site module for Craft CMS 3.x
 */

namespace modules\sitemodule\variables;

use modules\sitemodule\models\Settings;
use modules\sitemodule\services\Service;
use modules\sitemodule\SiteModule;

class SiteVariable
{
    // Public Methods
    // =========================================================================

	/**
	 * @return Settings
	 */
	public function getSettings(): Settings
	{
		return SiteModule::$settings;
	}

	public function getService(): Service
	{
		return SiteModule::$instance->service;
	}
}
