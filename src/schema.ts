export const Schema = {
  MW: {
    countryCode: '265',
    name: 'Malawi',
    types: {
      TNM: {
        name: 'TNM',
        localNumberLength: 7,
        codes: ['88', '89', '31'],
      },
      Airtel: {
        name: 'Airtel',
        localNumberLength: 8,
        codes: ['9'],
      },
      Access: {
        name: 'Access',
        localNumberLength: 6,
        codes: ['212'],
      },
      MTL: {
        name: 'MTL',
        localNumberLength: 6,
        codes: ['1', '111'],
      },
    },
  },
  ZM: {
    countryCode: '260',
    name: 'Zambia',
    types: {
      MTN: {
        name: 'MTN',
        localNumberLength: 7,
        codes: ['96', '76'],
      },
      Airtel: {
        name: 'Airtel',
        localNumberLength: 7,
        codes: ['97', '77'],
      },
      Zamtel: {
        name: 'Zamtel',
        localNumberLength: 7,
        codes: ['95', '96'],
      },
    },
  },
};
