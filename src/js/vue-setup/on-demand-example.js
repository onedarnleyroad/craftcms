import Vue from 'vue';
import { docReady, qsa } from "@/libs/helpers";

const App = () =>  import("@components/App.vue");

// If [data-vue] exists then the import function above will 
// execute. but if it doesn't, it won't. With the import being
// a function, webpack will split it into a partial js file,
// and any CSS files will be split out too. So, if the function
// never runs, the CSS and JS are never loaded. It's an on
// demand thing. 

// You are responsible then for adding a loading state, and also
// to AVOID this pattern if the execution is something that happens
// on a hide/show and should feel faster, eg, what if the connection
// went down? It's not the best idea to use it everywhere-all-the-time
// but could work well for a filtering system on a news section, or
// for search functionality and so on. 

docReady(() => {
	qsa('[data-vue]', el => {
		return new Vue({
			el,
			render: h => h(App)
		});
	});
});