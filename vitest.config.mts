import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		includeSource: ['app/**/*.{js,ts,tsx}'],
		setupFiles: ['vitest.setup.ts'],
	},
});
