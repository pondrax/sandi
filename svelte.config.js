import adapter from '@sveltejs/adapter-static';
import path from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// options passed to svelte.compile (https://svelte.dev/docs#compile-time-svelte-compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'public',
			assets: 'public',
			// fallback: 'index.html',
			precompress: false
		}),
		amp: false,
		appDir: '_app',
		browser: {
			hydrate: true,
			router: true
		},
		csp: {
			mode: 'auto',
			directives: {
				'default-src': undefined
				// ...
			}
		},
		files: {
			assets: 'src/static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		floc: false,
		inlineStyleThreshold: 0,
		methodOverride: {
			parameter: '_method',
			allowed: []
		},
		package: {
			dir: 'package',
			emitTypes: true,
			// excludes all .d.ts and files starting with _ as the name
			exports: (filepath) => !/^_|\/_|\.d\.ts$/.test(filepath),
			files: () => true
		},
		paths: {
			assets: '',
			base: ''
		},
		prerender: {
			concurrency: 1,
			crawl: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},
		routes: (filepath) => {
      return !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(filepath)
    },
		serviceWorker: {
			register: true,
			files: (filepath) => !/\.DS_Store/.test(filepath)
		},
		trailingSlash: 'always',
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		},
		vite: () => ({
      server: {
        proxy:{
          '/service':{
            target: 'https://audit.dev',
            changeOrigin: true,
            secure: false,
          },
          '/docs':{
            target: 'https://audit.dev',
            changeOrigin: true,
            secure: false
          },
          '/storage':{
            target: 'https://audit.dev',
            changeOrigin: true,
            secure: false
          },
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            secure: false
          }
        },
        port: 5000
      },
      resolve: {
        alias: {
          $ui: path.resolve('./src/lib/ui')
        }
      },
      build: {
        sourcemap: false,
        // sourcemap: true,
        // emptyOutDir: true
      }
    })
  },

	// SvelteKit uses vite-plugin-svelte. Its options can be provided directly here.
	// See the available options at https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md

	// options passed to svelte.preprocess (https://svelte.dev/docs#compile-time-svelte-preprocess)
	preprocess: null
};

export default config;
