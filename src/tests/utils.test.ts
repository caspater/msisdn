import { test, expect } from 'vitest';
import {
  cleanPhoneNumber,
  dropLeading,
  getRegexString,
  internationalize,
  localize,
  removeSpecialChars,
} from '../utils.js';

test('it removes spaces', () => {
  expect(cleanPhoneNumber('0888 800 900', '265')).toBe('888800900');
});

test('it cleans a +265 number', () => {
  expect(cleanPhoneNumber('+265 888 800 900', '265')).toBe('888800900');
  expect(cleanPhoneNumber('265888800900', '265')).toBe('888800900');
  expect(cleanPhoneNumber('+265888800900', '265')).toBe('888800900');
});

test('it removes special characters', () => {
  expect(removeSpecialChars('0888-800-900')).toBe('0888800900');
  expect(removeSpecialChars('0888/800/900')).toBe('0888800900');
  expect(removeSpecialChars('0888.800.900')).toBe('0888800900');
  expect(removeSpecialChars('0888_800_900')).toBe('0888800900');
  expect(removeSpecialChars('0888 800 900')).toBe('0888800900');
});

test('it internationalizes a number', () => {
  expect(internationalize('888800900', '265')).toBe('265888800900');
  expect(internationalize('+265888800900', '265')).toBe('265888800900');
  expect(internationalize('0888800900', '265')).toBe('265888800900');
});

test('it internationalizes a number with plus', () => {
  expect(internationalize('888800900', '265', true)).toBe('+265888800900');
  expect(internationalize('+265888800900', '265', true)).toBe('+265888800900');
  expect(internationalize('0888800900', '265', true)).toBe('+265888800900');
});

test('it localizes a number', () => {
  expect(localize('265888800900', '265')).toBe('0888800900');
  expect(localize('+265888800900', '265')).toBe('0888800900');
  expect(localize('888800900', '265')).toBe('0888800900');
  expect(localize('0888800900', '265')).toBe('0888800900');
});
test('it drops leading country code', () => {
  expect(dropLeading('+265888800900', '265')).toBe('888800900');
  expect(dropLeading('265888800900', '265')).toBe('888800900');
  expect(dropLeading('0888800900', '265')).toBe('888800900');
  expect(dropLeading('888800900', '265')).toBe('888800900');
});

test('it gets regex', () => {
  expect(getRegexString('265', ['88', '89'], 7)).toStrictEqual(
    '^(?:265|0|\\+265)?(?:88\\d{7}|89\\d{7})$',
  );
});

// test("it formats a number", () => {
//     expect(cleanPhoneNumber('0888 800 900', "265")).toBe('888800900');
//     expect(cleanPhoneNumber('0888 800 900', "265")).toBe('888800900');
//     expect(cleanPhoneNumber('0888 800 900', "265")).toBe('888800900');
//     expect(cleanPhoneNumber('0888 800 900', "265")).toBe('888800900');
// }
// );
