export const generateRandomNumber = (length: number): number => {
  if (length <= 0) {
    throw new Error('Length must be positive');
  }
  if (length === 1) return Math.floor(Math.random() * 10);
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addCharEveryN = (
  str: string,
  n: number,
  separator = '',
): string => {
  const regex = new RegExp(`.{1,${n}}`, 'g');
  let match;
  const parts: string[] = [];
  while ((match = regex.exec(str)) !== null) {
    parts.push(match[0]);
  }
  return parts.length > 0 ? parts.join(separator) : str;
};

export const getWithLeadingZero = (
  areaCode: string,
  localLength: number,
  separator = '',
) => {
  return separator !== ''
    ? addCharEveryN(
        `0${areaCode}${generateRandomNumber(localLength)}`,
        3,
        separator,
      )
    : `0${areaCode}${generateRandomNumber(localLength)}`;
};

export const getWithCountryCode = (
  countryCode: string,
  areaCode: string,
  localLength: number,
  withPlus = false,
  separator = '',
) => {
  let localNumber = `${generateRandomNumber(localLength)}`;
  localNumber =
    separator !== ''
      ? addCharEveryN(`${localNumber}`, 3, separator)
      : `${localNumber}`;
  return withPlus
    ? `+${countryCode}${areaCode}${localNumber}`
    : `${countryCode}${areaCode}${localNumber}`;
};
