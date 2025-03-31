import process from 'node:process';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const server = setupServer(...handlers);

process.once('SIGINT', () => server.close());
process.once('SIGTERM', () => server.close());

export const mockServer = server;
