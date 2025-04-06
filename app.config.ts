import { defineConfig } from '@tanstack/react-start/config';
import UnoCSS from 'unocss/vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	tsr: {
		indexToken: 'page',
		routeToken: 'layout',
	},
	react: {
		babel: {
			plugins: [
				[
					'babel-plugin-react-compiler',
					{
						target: '19',
					},
				],
			],
		},
	},
	vite: {
		define: {
			'import.meta.vitest': 'undefined',
		},
		plugins: [
			tsConfigPaths({
				projects: ['./tsconfig.json'],
			}),
			UnoCSS(),
		],
	},
});
