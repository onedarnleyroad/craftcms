<?php
/**
 * Site module for Craft CMS 3.x
 */

namespace modules\sitemodule\models;

use craft\base\Model;

/**
 * Class Settings
 *
 * @package modules\sitemodule\models
 */
class Settings extends Model
{
	/**
	 * @var string
	 */
	public string $example;

	/**
	 * @inheritdoc
	 */
	public function rules(): array
	{
		return [
			[['example'], 'required'],
		];
	}
}

