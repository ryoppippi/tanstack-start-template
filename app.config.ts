import { defineConfig } from '@tanstack/react-start/config';
import UnoCSS from 'unocss/vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	tsr: {
		indexToken: 'page',
		routeToken: 'layout',
	},
	vite: {
		define: {
			'import.meta.vitest': 'undefined',
		},
		plugins: [
			UnoCSS(),
			tsConfigPaths({
				projects: ['./tsconfig.json'],
			}),
		],
	},
});
