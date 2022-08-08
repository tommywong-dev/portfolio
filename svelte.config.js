import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter()
	},

	alias: {
		$lib: path.resolve('./src/lib'),
		$components: path.resolve('./src/lib/components'),
		$interface: path.resolve('./src/lib/interface'),
		$stores: path.resolve('./src/stores')
	}
};

export default config;
