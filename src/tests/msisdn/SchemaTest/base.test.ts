import { test, expect, describe } from 'vitest';
import { msisdn } from '../../../MSISDN.js';
import { Schema } from '../../../schema.js';
import {
  generateRandomNumber,
  getWithCountryCode,
  getWithLeadingZero,
} from './helpers.js';

Object.keys(Schema).forEach((countryKey: any) => {
  const country = Schema[countryKey as keyof typeof Schema];
  const providers = Object.entries(country.types).map(([_key, value]) => {
    return value;
  });
  describe(`it returns true if number is valid ${country.name}`, () => {
    providers.forEach((provider) => {
      test(`it returns true if number is valid ${provider.name}`, () => {
        expect(
          msisdn(
            getWithLeadingZero(
              `${provider?.codes[0]}`,
              provider?.localNumberLength ?? 0,
            ),
            { country: countryKey },
          ).isValid(),
        ).toBe(true);

        expect(
          msisdn(
            getWithLeadingZero(
              `${provider?.codes[0]}`,
              provider?.localNumberLength ?? 0,
              ' ',
            ),
            { country: countryKey },
          ).isValid(),
        ).toBe(true);

        expect(
          msisdn(
            getWithCountryCode(
              country.countryCode,
              `${provider?.codes[0]}`,
              provider?.localNumberLength ?? 0,
              false,
              ' ',
            ),
            { country: countryKey },
          ).isValid(),
        ).toBe(true);

        expect(
          msisdn(
            getWithCountryCode(
              country.countryCode,
              `${provider?.codes[0]}`,
              provider?.localNumberLength ?? 0,
              true,
              ' ',
            ),
            { country: countryKey },
          ).isValid(),
        ).toBe(true);
        expect(
          msisdn(
            `${provider.codes[0]}${generateRandomNumber(provider?.localNumberLength ?? 0)}`,
            { country: countryKey },
          ).isValid(),
        ).toBe(true);
      });
    });
  });

  describe(`it returns false if number is invalid ${country.name}`, () => {
    providers.forEach((provider) => {
      test(`it returns true if number is invalid ${provider.name}`, () => {
        expect(
          msisdn(
            getWithLeadingZero(
              `${provider?.codes[0]}`,
              (provider?.localNumberLength ?? 0) - 1,
            ),
            { country: countryKey },
          ).isValid(),
        ).toBe(false);

        expect(
          msisdn(
            `d${generateRandomNumber((provider?.localNumberLength ?? 0) - 2)}`,
            { country: countryKey },
          ).isValid(),
        ).toBe(false);
      });
    });
  });
});
