import { expect, test } from 'vitest';
import { hogehoge } from './hoge';

test('hogehoge() says hogehoge', () => {
  expect(hogehoge()).toBe('hogehoge');
});
