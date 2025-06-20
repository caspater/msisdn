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
  const providers = Object.entries(country.types);
  providers.forEach((providerEntry) => {
    const provider = providerEntry[1];
    const providerKey = providerEntry[0];
    describe(`it returns true if number is valid ${country.name}.${provider.name} number`, () => {
      provider.codes.forEach((code) => {
        test(`it returns true if number is valid ${country.name}.${provider.name}.${code} number`, () => {
          expect(
            msisdn(getWithLeadingZero(`${code}`, provider.localNumberLength), {
              country: countryKey,
              type: providerKey,
            }).isValid(),
          ).toBe(true);
          expect(
            msisdn(
              getWithLeadingZero(`${code}`, provider.localNumberLength, ' '),
              { country: countryKey, type: providerKey },
            ).isValid(),
          ).toBe(true);
          expect(
            msisdn(
              getWithCountryCode(
                country.countryCode,
                `${code}`,
                provider.localNumberLength,
                false,
                ' ',
              ),
              { country: countryKey, type: providerKey },
            ).isValid(),
          ).toBe(true);
          expect(
            msisdn(
              getWithCountryCode(
                country.countryCode,
                `${code}`,
                provider.localNumberLength,
                true,
                ' ',
              ),
              { country: countryKey, type: providerKey },
            ).isValid(),
          ).toBe(true);

          expect(
            msisdn(
              `${code}${generateRandomNumber(provider.localNumberLength)}`,
              { country: countryKey, type: providerKey },
            ).isValid(),
          ).toBe(true);
        });
      });
    });

    describe(`it returns false if number is an invalid ${country.name}.${provider.name} number`, () => {
      provider.codes.forEach((code) => {
        test(`it returns false if number is an invalid ${country.name}.${provider.name}.${code} number`, () => {
          expect(
            msisdn(
              getWithLeadingZero(`${code}`, provider.localNumberLength - 1),
              { country: countryKey, type: providerKey },
            ).isValid(),
          ).toBe(false);
        });
      });
    });
  });
});
