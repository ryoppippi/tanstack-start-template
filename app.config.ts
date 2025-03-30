import { defineConfig } from '@tanstack/react-start/config';
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
			tsConfigPaths({
				projects: ['./tsconfig.json'],
			}),
		],
	},
});
