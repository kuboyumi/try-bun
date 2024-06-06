import { test, expect } from 'bun:test';

test('snapshot', () => {
  const obj = { a: 1, b: 2 };
  expect(obj).toMatchSnapshot();
});
