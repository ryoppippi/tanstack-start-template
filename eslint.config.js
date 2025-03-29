import { ryoppippi } from '@ryoppippi/eslint-config';

export default ryoppippi({
	type: 'app', // or 'lib'
	svelte: false,
	react: true,
	tanstackQuery: true,
	tanstackRouter: true,
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});
