import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		UnoCSS(),
		tanstackStart({
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
		}),
	],
	test: {
		globals: true,
		includeSource: ['app/**/*.{js,ts,tsx}'],
		setupFiles: ['vitest.setup.ts'],
	},
});
