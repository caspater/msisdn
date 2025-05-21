import { test, expect } from 'vitest';
import { msisdn } from '../../MSISDN.js';

test('it returns true if number is valid', () => {
  expect(msisdn('0888800900').isValid()).toBe(true);
  expect(msisdn('0888 800 900').isValid()).toBe(true);
  expect(msisdn('265 888 800 900').isValid()).toBe(true);
  expect(msisdn('+265 888 800 900').isValid()).toBe(true);
  expect(msisdn('888 800 900').isValid()).toBe(true);
});

test('it returns true if number is valid with country code', () => {
  expect(msisdn('0888800900').isValid()).toBe(true);
  expect(msisdn('0888 800 900').isValid()).toBe(true);
  expect(msisdn('265 888 800 900').isValid()).toBe(true);
  expect(msisdn('+265 888 800 900').isValid()).toBe(true);
  expect(msisdn('888 800 900').isValid()).toBe(true);
});
test('it returns false if number is invalid', () => {
  expect(msisdn('088880090').isValid()).toBe(false);
  expect(msisdn('d88880090').isValid()).toBe(false);
  expect(msisdn('008880090').isValid()).toBe(false);
});

test('it returns true if number is valid when auto clean is off', () => {
  expect(msisdn('0888800900', { autoClean: false }).clean().isValid()).toBe(
    true,
  );
  expect(msisdn('0888 800 900', { autoClean: false }).clean().isValid()).toBe(
    true,
  );
  expect(
    msisdn('265 888 800 900', { autoClean: false }).clean().isValid(),
  ).toBe(true);
  expect(
    msisdn('+265 888 800 900', { autoClean: false }).clean().isValid(),
  ).toBe(true);
  expect(msisdn('888 800 900', { autoClean: false }).clean().isValid()).toBe(
    true,
  );
});

test('it returns false if number is invalid without cleaning', () => {
  expect(msisdn('088880090', { autoClean: false }).isValid()).toBe(false);
  expect(msisdn('d88880090', { autoClean: false }).isValid()).toBe(false);
  expect(msisdn('008880090', { autoClean: false }).isValid()).toBe(false);
});

test('it returns number', () => {
  expect(msisdn('0888800900').get()).toBe('888800900');
  expect(msisdn('265888800900').get()).toBe('888800900');
  expect(msisdn('+265888800900').get()).toBe('888800900');
  expect(msisdn('888800900').get()).toBe('888800900');
  expect(msisdn('d88880090').get()).toBeNull();
  expect(msisdn('008880090').get()).toBeNull();
});
