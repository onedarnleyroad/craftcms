import Vue from 'vue';
import upperFirst from 'lodash.upperfirst';
import camelCase from 'lodash.camelcase';

// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.
// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
	// Look for files in the base components directory
	'@/components/base',
	// Do not look in subdirectories
	false,
	// Only include "_base-" prefixed .vue files
	/base-[\w-]+\.vue$/
);

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
	// Get the component config
	const componentConfig = requireComponent(fileName);
	// Get the PascalCase version of the component name
	const componentName = upperFirst(
		camelCase(
			fileName
			// Remove the "./_" from the beginning
				.replace(/^\.\/_/, '')
			// Remove the file extension from the end
				.replace(/\.\w+$/, '')
		)
	);
	// Globally register the component
	Vue.component(componentName, componentConfig.default || componentConfig);
});