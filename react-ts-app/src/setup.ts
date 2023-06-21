import matchers from '@testing-library/jest-dom/matchers';
import { expect, afterEach, afterAll, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
// import { fetch, Headers, Request, Response } from 'cross-fetch';
import { server } from './mocks/server';
// import AbortController from 'abort-controller';

// const controller = new AbortController();

// global.fetch = fetch;
// global.Headers = Headers;
// global.Request = Request;
// global.Response = Response;
// global.AbortController = controller;

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
