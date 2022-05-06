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
	 * @var string|null
	 */
	public ?string $example = null;

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

