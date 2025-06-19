import { test, expect } from 'vitest';
import { msisdn } from '../../../MSISDN.js';

test('it returns true if number is valid Zamtel number', () => {
  expect(
    msisdn('0952800900', { country: 'ZM', type: 'Zamtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('0951 800 900', { country: 'ZM', type: 'Zamtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('260 962 800 900', { country: 'ZM', type: 'Zamtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('+260 962 800 900', { country: 'ZM', type: 'Zamtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('952 800 900', { country: 'ZM', type: 'Zamtel' }).isValid(),
  ).toBe(true);
});

test('it returns false if number is an invalid Zamtel number', () => {
  expect(msisdn('095280090', { country: 'ZM', type: 'Zamtel' }).isValid()).toBe(
    false,
  );
  expect(
    msisdn('0888800900', { country: 'ZM', type: 'Zamtel' }).isValid(),
  ).toBe(false);
});
