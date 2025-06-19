import { test, expect } from 'vitest';
import { msisdn } from '../../../MSISDN.js';

test('it returns true if number is valid MTN number', () => {
  expect(msisdn('0962800900', { country: 'ZM', type: 'MTN' }).isValid()).toBe(
    true,
  );
  expect(msisdn('0961 800 900', { country: 'ZM', type: 'MTN' }).isValid()).toBe(
    true,
  );
  expect(
    msisdn('260 762 800 900', { country: 'ZM', type: 'MTN' }).isValid(),
  ).toBe(true);
  expect(
    msisdn('+260 762 800 900', { country: 'ZM', type: 'MTN' }).isValid(),
  ).toBe(true);
  expect(msisdn('962 800 900', { country: 'ZM', type: 'MTN' }).isValid()).toBe(
    true,
  );
});

test('it returns false if number is an invalid MTN number', () => {
  expect(msisdn('096280090', { country: 'ZM', type: 'MTN' }).isValid()).toBe(
    false,
  );
  expect(msisdn('0888800900', { country: 'ZM', type: 'MTN' }).isValid()).toBe(
    false,
  );
});
