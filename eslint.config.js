import { ryoppippi } from '@ryoppippi/eslint-config/tanstack-start';
import reactCompiler from 'eslint-plugin-react-compiler';

export default ryoppippi({
	type: 'app', // or 'lib'
	tailwindcss: false,
	unocss: true,
	appDirectory: './src',
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
	...reactCompiler.configs.recommended,
});
