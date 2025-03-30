/* eslint-disable ts/consistent-type-definitions */
import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'react' {
	interface HTMLAttributes extends AttributifyAttributes {}
}
