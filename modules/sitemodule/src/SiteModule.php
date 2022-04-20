<?php
/**
 * Site module for Craft CMS 3.x
 */

namespace modules\sitemodule;

use modules\sitemodule\models\Settings;
use modules\sitemodule\services\Service;
use modules\sitemodule\variables\SiteVariable;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\i18n\PhpMessageSource;
use craft\log\FileTarget;
use craft\web\twig\variables\CraftVariable;
use craft\web\View;

use yii\base\Event;
use yii\base\Module;

/**
 * Class SiteModule
 *
 * @property Service service
 */
class SiteModule extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * @var SiteModule
     */
    public static SiteModule $instance;

	/**
	 * Static property that is an instance of this module's settings model class
	 * Zendesk::$settings
	 *
	 * @var Settings
	 */
	public static Settings $settings;

	// Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/sitemodule', $this->getBasePath());
        $this->controllerNamespace = 'modules\sitemodule\controllers';

        // Translation category
        $i18n = Craft::$app->getI18n();
        /** @noinspection UnSafeIsSetOverArrayInspection */
        if (!isset($i18n->translations[$id]) && !isset($i18n->translations[$id.'*'])) {
            $i18n->translations[$id] = [
                'class' => PhpMessageSource::class,
                'sourceLanguage' => 'en-US',
                'basePath' => '@modules/sitemodule/translations',
                'forceTranslation' => true,
                'allowOverrides' => true,
            ];
        }

        // Base template directory
        Event::on(View::class, View::EVENT_REGISTER_CP_TEMPLATE_ROOTS, function (RegisterTemplateRootsEvent $e) {
            if (is_dir($baseDir = $this->getBasePath().DIRECTORY_SEPARATOR.'templates')) {
                $e->roots[$this->id] = $baseDir;
            }
        });

        // Set this as the global instance of this module class
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$instance = $this;

	    // Register our components
        $this->setComponents([
            'service' => [
                'class' => Service::class,
            ]
        ]);

        // Register our variables
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            static function (Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('site', SiteVariable::class);
            }
        );

	    $this->_initLogging();
	    $this->_initSettings();

	    Craft::info(
            Craft::t(
                'site-module',
                '{name} module loaded',
                ['name' => 'Site']
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================

	/**
	 * Set a distinct log file for all site-module logging.
	 *
	 * Reminder of how to log:
	 * Craft::trace('some message', __METHOD__);
	 * Craft::error('some message', __METHOD__);
	 * Craft::warning('some message', __METHOD__);
	 * Craft::info('some message', __METHOD__);
	 * Craft::beginProfile('some message', __METHOD__);
	 * Craft::endProfile('some message', __METHOD__);
	 * ...
	 * https://www.yiiframework.com/doc/api/2.0/yii-log-logger
	 */
	protected function _initLogging(): void
	{
		Craft::getLogger()->dispatcher->targets[] = new FileTarget([
			'logFile' => Craft::getAlias('@storage/logs/' . $this->id . '.log'),
			'logVars' => ['_GET', '_POST', '_SESSION'],
			'categories' => [ __NAMESPACE__ . '*' ]
		]);
	}

	/**
	 * Set self::$settings based on contents of config/site-module.php
	 * Run validation rules.
	 */
	protected function _initSettings(): void
	{
		$fileConfig = Craft::$app->getConfig()->getConfigFromFile($this->id);
		self::$settings = new Settings($fileConfig);
		self::$settings->validate();
		if(self::$settings->hasErrors())
		{
			Craft::warning(
				self::$settings->getErrors(),
				__METHOD__
			);
		}
	}
}
