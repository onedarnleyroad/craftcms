# About Base Components

Look in `./src/js/utils/register-base.js`...

Inside that file is some code that runs through the `@/components/base` directory (i.e. this one) and picks up
ALL `.vue` components that are prefixed with the `base-` name.

It globally registers these components so they're just there and ready to be used without having to import them
within another component. This is because you want `<base-buttons>` everywhere and so on. 

So **Don't** put any vue components in here that...

- You don't want automatically registered for every vue file
- Aren't named `base-<component>.vue`

It'd be tempting to use this as an auto loader but since they will get included in the bundle regardless
of whether you're using them or not, so it's a 'big' decision whether to add something here or not.

You can see it's mostly used for form elements....

eg: `base-input.vue` could look like this:

```
<template>
	<div class="">
		<label class="block h-3 text-12 font-secondary uppercase text-white-50 tracking-wide font-medium mb-1" :for="id">{{ label }}</label>
		<input
			:id="id"
			v-bind="
			// https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
			$attrs
			"
			@input="$emit('update', $event.target.value)"
			:type="type" 
			v-on="$listeners"
			:class="{
				'border-error': errors && errors.length > 0,
				'border-dark-grey': !errors,
			}"
			class="base-input p-2 w-full bg-black border focus:border-yellow-30 focus:outline-none text-white"
		/>
		<base-error :errors="errors" />
	</div>
</template>

<script>

// https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_base-input-text.vue
export default {
	inheritAttrs: false,
	model: {
		event: 'update',
	},
	props: {
		errors: [Array, Boolean],
		id: String,
		label: String,
		type: {
			type: String,
			default: 'text',
			validator(value) {
				return [
					'email',
					'number',
					'password',
					'search',
					'tel',
					'text',
					'url',
				].includes(value)
			},
		}
	}
}
</script>

<style>

.base-input:-webkit-autofill,
.base-input:-webkit-autofill:hover, 
.base-input:-webkit-autofill:focus, 
.base-input:-webkit-autofill:active  {
	-webkit-box-shadow: 0 0 0 30px #1f1f1f inset !important;
	-webkit-text-fill-color: #fff !important;
}



</style>
```