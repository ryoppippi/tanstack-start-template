import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
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
