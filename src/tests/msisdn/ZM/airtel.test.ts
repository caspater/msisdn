import { test, expect } from 'vitest';
import { msisdn } from '../../../MSISDN.js';

test('it returns true if number is valid Airtel number', () => {
  expect(
    msisdn('0972800900', { country: 'ZM', type: 'Airtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('0971 800 900', { country: 'ZM', type: 'Airtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('260 772 800 900', { country: 'ZM', type: 'Airtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('+260 772 800 900', { country: 'ZM', type: 'Airtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('972 800 900', { country: 'ZM', type: 'Airtel' }).isValid(),
  ).toBe(true);
});

test('it returns false if number is an invalid Airtel number', () => {
  expect(msisdn('097280090', { country: 'ZM', type: 'Airtel' }).isValid()).toBe(
    false,
  );
  expect(
    msisdn('0888800900', { country: 'ZM', type: 'Airtel' }).isValid(),
  ).toBe(false);
});
