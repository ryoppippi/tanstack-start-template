import { cloudflare } from '@cloudflare/vite-plugin';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		cloudflare(),
		tsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		UnoCSS(),
		tanstackStart({
			tsr: {
				indexToken: 'page',
				routeToken: 'layout',
			},
			target: 'cloudflare_module',
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
		includeSource: ['src/**/*.{js,ts,tsx}'],
		setupFiles: ['vitest.setup.ts'],
	},
});
