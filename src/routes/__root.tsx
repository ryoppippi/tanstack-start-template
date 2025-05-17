import type { ReactNode } from 'react';
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from '@tanstack/react-router';
import tailwindReset from '@unocss/reset/tailwind.css?url';
import unoCss from '../uno.css?url'; // for production
import 'virtual:uno.css'; // for development

export const Route = createRootRoute({
	head: () => ({
		links: [
			{ rel: 'stylesheet', href: tailwindReset },
			{ rel: 'stylesheet', href: unoCss },
		],
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'TanStack Start Starter',
			},
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
