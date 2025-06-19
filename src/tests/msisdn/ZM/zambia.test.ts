import { test, expect } from 'vitest';
import { msisdn } from '../../../MSISDN.js';

test('it returns true if number is valid', () => {
  expect(msisdn('0958800900', { country: 'ZM' }).isValid()).toBe(true);
  expect(msisdn('0958 800 900', { country: 'ZM' }).isValid()).toBe(true);
  expect(msisdn('260 958 800 900', { country: 'ZM' }).isValid()).toBe(true);
  expect(msisdn('+260 958 800 900', { country: 'ZM' }).isValid()).toBe(true);
  expect(msisdn('958 800 900', { country: 'ZM' }).isValid()).toBe(true);

  expect(msisdn('0968800900', { country: 'ZM' }).isValid()).toBe(true);
  expect(msisdn('0968 800 900', { country: 'ZM' }).isValid()).toBe(true);
  expect(msisdn('260 968 800 900', { country: 'ZM' }).isValid()).toBe(true);
  expect(msisdn('+260 968 800 900', { country: 'ZM' }).isValid()).toBe(true);
  expect(msisdn('968 800 900', { country: 'ZM' }).isValid()).toBe(true);
});

test('it returns false if number is invalid', () => {
  expect(msisdn('088880090', { country: 'ZM' }).isValid()).toBe(false);
  expect(msisdn('d88880090', { country: 'ZM' }).isValid()).toBe(false);
  expect(msisdn('008880090', { country: 'ZM' }).isValid()).toBe(false);

  expect(msisdn('098880090', { country: 'ZM' }).isValid()).toBe(false);
  expect(msisdn('d98880090', { country: 'ZM' }).isValid()).toBe(false);
  expect(msisdn('009880090', { country: 'ZM' }).isValid()).toBe(false);
});
