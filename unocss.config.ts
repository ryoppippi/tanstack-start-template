import type { PresetWind3Theme } from 'unocss';
import { presetRyoppippi } from '@ryoppippi/unocss-preset';

import { deepMerge } from '@std/collections/deep-merge';
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetWebFonts,

	presetWind3,
	transformerAttributifyJsx,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';
import transformerAlias from 'unocss-transformer-alias';

const theme = {
	// add your theme
	colors: {},
} as const satisfies PresetWind3Theme;

export default defineConfig({
	presets: [
		presetWind3 (),
		presetAttributify(),
		presetIcons(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				// add your fonts
			},
		}),
		presetTypography({
			cssExtend: {
			},
		}),
		presetRyoppippi(),
	],
	transformers: [
		// @ts-expect-error unocss bug
		transformerAlias(),
		transformerDirectives(),
		transformerVariantGroup(),
		transformerAttributifyJsx(),
	],
	content: {
		pipeline: {
			exclude: [
				/~icons/,
				/svelte-meta-tags/,
			],
		},
	},
	extendTheme: _theme => deepMerge(
		// eslint-disable-next-line ts/no-unsafe-argument
		_theme,
		theme,
	),
	shortcuts: [
	],
	rules: [
	],
	safelist: [],
});
