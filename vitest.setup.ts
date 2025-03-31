import { mockServer } from './mocks/server';

const CONNECTION_ALLOW_LIST = [] as const;

beforeAll(() => mockServer.listen({ onUnhandledRequest: (req, print) => {
	if (CONNECTION_ALLOW_LIST.some(path => req.url.startsWith(path))) {
		return;
	}

	print.error();
} }));
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());
