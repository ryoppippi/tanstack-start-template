import { ryoppippi } from '@ryoppippi/eslint-config/tanstack-start';

export default ryoppippi({
	type: 'app', // or 'lib'
	tailwindcss: false,
	unocss: true,
	appDirectory: './app',
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});
