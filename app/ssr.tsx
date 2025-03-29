/* eslint-disable ts/no-unsafe-argument */
/* eslint-disable react-refresh/only-export-components */
import { getRouterManifest } from '@tanstack/react-start/router-manifest';
import {
	createStartHandler,
	defaultStreamHandler,
} from '@tanstack/react-start/server';

import { createRouter } from './router';

export default createStartHandler({
	createRouter,
	getRouterManifest,
})(defaultStreamHandler);
