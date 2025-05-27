# MSISDN HELPER

This project is focused on validating and formatting MSISDNs (Mobile Station International Subscriber Directory Number).

## Features

- Validate MSISDN numbers.
- Format and normalize phone numbers.
- Support for multiple country codes.

## Installation
1. npm installation.
   ```bash
   npm install @caspater/msisdn
   ```
## Usage

Import the library and use it in your project:

```typescript
import {msisdn} from "@caspater/msisdn"

const isValid = msisdn('0888800900').isValid();
console.log(isValid);
```

### Creating a new number

The `msisdn` helper function creates an instance of MSISDN. You can use the `get` method to invoke the toString method.

```typescript
import {msisdn} from "@caspater/msisdn"

const msisdnInstance = msisdn('0888800900');
console.log(msisdnInstance.get());
//output 888800900
```
#### Options
The `msisdn` factory allows a second parameter to set the configs of the instance

```typescript
type options={
   autoClean?: boolean //default true,
   country?: string //default MW,
   type?: string //default null,
}
```
| option    | Required  | Description                                                                                                                                                                                                        |
|-----------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| autoClean | optional? | This removes special characters from the msisdn when it is set to `true`. By default it is set to true. It can set it to `false` in situations where the number format is to be validated.                         |
| country   | optional? | This is used to set the country. The list of supported countries can be found in the list [below](#supported-countries).                                                                                           |
| type      | optional? | This is used to set the type. The types can be identifies as areas/providers depending on the number structure of the country. The list of supported types can be found in the list [below](#supported-countries). |

### Validation

The `isValid` function can be used to validate the msisdn. **Note** set the `autoClean` option to `false` if the special characters are to be validated as well.

The `isValid` function will also use the configured country / type as validators.

```typescript
import {msisdn} from "@caspater/msisdn"

const msisdnInstance = msisdn('08-88800900',{ autoClean : false});
console.log(msisdnInstance.isValid());
//output false
```
### Formatting

The formatting helpers will return the MSISDN instance so chaining can be used to apply multiple formats. Of course some may be overwritten , you can't have everything 😁

| Function         | Parameters          | Format                 | Description                                             |
|------------------|---------------------|------------------------|---------------------------------------------------------|
| clean            |                     | #####                  | Removes special characters from the msisdn              |
| internationalize | `withPlus: boolean` | {+?}{countryCode}##### | Prepends the country code                               |
| localize         |                     | {0}#####               | Prepends a 0 to the msisdn                              |
| dropLeading      |                     | #####                  | Drops the country code or the leading 0 from the msisdn |

### Getters
The string version of the msisdn can be retrieved by using the `get` function.

|Function| Description                                     |
|--------|-------------------------------------------------|
|get| Gets the msisdn only when it is ***valid***     |
|getRaw| Gets the msisdn even when it is ***not valid*** |

## <a id="supported-countries"></a>Supported Countries

|Country|Code|Type|Type Identifier|
|-------|----|----|---------------|
|Malawi|MW|TNM|TNM|
|||Airtel|Airtel|

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
