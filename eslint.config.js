import { ryoppippi } from '@ryoppippi/eslint-config/tanstack-start';

export default ryoppippi({
	type: 'app', // or 'lib'
	tailwindcss: false,
	appDirectory: './app',
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});
