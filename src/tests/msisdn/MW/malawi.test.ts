import { test, expect } from 'vitest';
import { msisdn } from '../../../MSISDN.js';

test('it returns true if number is valid', () => {
  expect(msisdn('0888800900', { country: 'MW' }).isValid()).toBe(true);
  expect(msisdn('0888 800 900', { country: 'MW' }).isValid()).toBe(true);
  expect(msisdn('265 888 800 900', { country: 'MW' }).isValid()).toBe(true);
  expect(msisdn('+265 888 800 900', { country: 'MW' }).isValid()).toBe(true);
  expect(msisdn('888 800 900', { country: 'MW' }).isValid()).toBe(true);

  expect(msisdn('0988800900', { country: 'MW' }).isValid()).toBe(true);
  expect(msisdn('0988 800 900', { country: 'MW' }).isValid()).toBe(true);
  expect(msisdn('265 988 800 900', { country: 'MW' }).isValid()).toBe(true);
  expect(msisdn('+265 988 800 900', { country: 'MW' }).isValid()).toBe(true);
  expect(msisdn('988 800 900', { country: 'MW' }).isValid()).toBe(true);
});

test('it returns false if number is invalid', () => {
  expect(msisdn('088880090', { country: 'MW' }).isValid()).toBe(false);
  expect(msisdn('d88880090', { country: 'MW' }).isValid()).toBe(false);
  expect(msisdn('008880090', { country: 'MW' }).isValid()).toBe(false);

  expect(msisdn('098880090', { country: 'MW' }).isValid()).toBe(false);
  expect(msisdn('d98880090', { country: 'MW' }).isValid()).toBe(false);
  expect(msisdn('009880090', { country: 'MW' }).isValid()).toBe(false);
});
