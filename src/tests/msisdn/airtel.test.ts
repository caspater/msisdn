import { test, expect } from 'vitest';
import { msisdn } from '../../MSISDN.js';

test('it returns true if number is valid airtel number', () => {
  expect(
    msisdn('0988800900', { country: 'MW', type: 'Airtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('0988 800 900', { country: 'MW', type: 'Airtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('265 988 800 900', { country: 'MW', type: 'Airtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('+265 988 800 900', { country: 'MW', type: 'Airtel' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('988 800 900', { country: 'MW', type: 'Airtel' }).isValid(),
  ).toBe(true);
});

test('it returns false if number is an invalid airtel number', () => {
  expect(msisdn('098880090', { country: 'MW', type: 'Airtel' }).isValid()).toBe(
    false,
  );
  expect(
    msisdn('0888800900', { country: 'MW', type: 'Airtel' }).isValid(),
  ).toBe(false);
});
