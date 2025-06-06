import { ryoppippi } from '@ryoppippi/eslint-config/tanstack-start';

export default ryoppippi({
	type: 'app', // or 'lib'
	tailwindcss: false,
	unocss: true,
	appDirectory: './src',
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});
