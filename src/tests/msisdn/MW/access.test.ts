import { test, expect } from 'vitest';
import { msisdn } from '../../../MSISDN.js';

test('it returns true if number is valid Access number', () => {
  expect(
    msisdn('0212800900', { country: 'MW', type: 'Access' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('0212 800 900', { country: 'MW', type: 'Access' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('265 212 800 900', { country: 'MW', type: 'Access' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('+265 212 800 900', { country: 'MW', type: 'Access' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('212 800 900', { country: 'MW', type: 'Access' }).isValid(),
  ).toBe(true);
});

test('it returns false if number is an invalid Access number', () => {
  expect(msisdn('021280090', { country: 'MW', type: 'Access' }).isValid()).toBe(
    false,
  );
  expect(
    msisdn('0888800900', { country: 'MW', type: 'Access' }).isValid(),
  ).toBe(false);
});
