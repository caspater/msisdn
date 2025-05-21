# MSISDN Project

This project is focused on managing and processing MSISDN (Mobile Station International Subscriber Directory Number) data.

## Features

- Validate MSISDN numbers.
- Format and normalize phone numbers.
- Support for multiple country codes.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/caspater/msisdn.git
    ```
2. Navigate to the project directory:
    ```bash
    cd msisdn
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

Import the library and use it in your project:
```javascript
const msisdn = require('msisdn');

const isValid = msisdn('+1234567890').isValid();
console.log(isValid);
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
