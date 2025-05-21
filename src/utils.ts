export const cleanPhoneNumber = (phoneNumber: string, countryCode: string) => {
  let phone = removeSpecialChars(
    phoneNumber.replace(/\s+/g, '').replace(/\+/g, ''),
  ).trim();

  if (phone.startsWith('0')) {
    return phone.slice(1);
  }

  if (phone.startsWith(countryCode)) {
    return phone.slice(countryCode.length);
  }

  return phone;
};

export const removeSpecialChars = (phoneNumber: string) => {
  return phoneNumber.replace(/[^0-9]/g, '');
};

export const internationalize = (
  phoneNumber: string,
  countryCode: string,
  withPlus: boolean = false,
) => {
  let plus = withPlus ? '+' : '';

  if (phoneNumber.startsWith('0')) {
    return plus + countryCode + phoneNumber.slice(1);
  }

  if (phoneNumber.startsWith(countryCode)) {
    return plus + phoneNumber;
  }

  if (phoneNumber.startsWith('+')) {
    return plus + phoneNumber.slice(1);
  }

  return plus + countryCode + phoneNumber;
};

export const localize = (phoneNumber: string, countryCode: string) => {
  if (phoneNumber.startsWith(countryCode)) {
    return '0' + phoneNumber.slice(countryCode.length);
  }

  if (phoneNumber.startsWith('+')) {
    return '0' + phoneNumber.slice(countryCode.length + 1);
  }

  if (phoneNumber.startsWith('0')) {
    return phoneNumber;
  }

  return '0' + phoneNumber;
};

export const dropLeading = (phoneNumber: string, countryCode: string) => {
  if (phoneNumber.startsWith('0')) {
    return phoneNumber.slice(1);
  }

  if (phoneNumber.startsWith(countryCode)) {
    return phoneNumber.slice(countryCode.length);
  }

  if (phoneNumber.startsWith('+')) {
    return phoneNumber.slice(countryCode.length + 1);
  }

  return phoneNumber;
};

export const getRegexString = (
  countryCode: string,
  prefixes: string[],
  length: number,
) => {
  const leading = `^(?:${countryCode}|0|\\+${countryCode})?`;
  const prefixPatterns = prefixes.map((prefix: string) => {
    return `${prefix}\\d{${length}}`;
  });
  const rest = `(?:${prefixPatterns.join('|')})`;
  return leading + rest + '$';
};
