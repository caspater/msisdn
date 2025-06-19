import { test, expect } from 'vitest';
import { msisdn } from '../../../MSISDN.js';

test('it returns true if number is valid MTL number', () => {
  expect(msisdn('0111800900', { country: 'MW', type: 'MTL' }).isValid()).toBe(
    true,
  );
  expect(msisdn('01800900', { country: 'MW', type: 'MTL' }).isValid()).toBe(
    true,
  );
  expect(msisdn('0111 800 900', { country: 'MW', type: 'MTL' }).isValid()).toBe(
    true,
  );
  expect(
    msisdn('265 1 800 900', { country: 'MW', type: 'MTL' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('+265 111 800 900', { country: 'MW', type: 'MTL' }).isValid(),
  ).toBe(true);
  expect(msisdn('111 800 900', { country: 'MW', type: 'MTL' }).isValid()).toBe(
    true,
  );
});

test('it returns false if number is an invalid MTL number', () => {
  expect(msisdn('011180090', { country: 'MW', type: 'MTL' }).isValid()).toBe(
    false,
  );
  expect(msisdn('0888800900', { country: 'MW', type: 'MTL' }).isValid()).toBe(
    false,
  );
});
