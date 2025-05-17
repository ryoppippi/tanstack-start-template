import * as fs from 'node:fs';
import { useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

const filePath = 'count.txt';

async function readCount() {
	return Number.parseInt(
		await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
	);
}

const getCount = createServerFn({
	method: 'GET',
}).handler(async () => {
	return readCount();
});

const updateCount = createServerFn({ method: 'POST' })
	.validator((d: number) => d)
	.handler(async ({ data }) => {
		const count = await readCount();
		await fs.promises.writeFile(filePath, `${count + data}`);
	});

export const Route = createFileRoute({
	component: Home,
	loader: async () => getCount(),
});

function Home() {
	const router = useRouter();
	const state = Route.useLoaderData();

	return (
		<button
			className="rounded bg-blue-500 px-4 py-2 text-white font-bold hover:bg-blue-700"
			type="button"
			onClick={
				async () =>
					updateCount({ data: 1 })
						.then(async () => router.invalidate())
			}
		>
			Add 1 to
			{' '}
			{state}
			?
		</button>
	);
}

if (import.meta.vitest != null) {
	describe('app/routes/index', () => {
		it('readCount', async () => {
			expect(await readCount()).toBe(0);
		});

		it('updateCount', async () => {
			await updateCount({ data: 1 });
			expect(await readCount()).toBe(1);
		});
	});
}
