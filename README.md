# we-toolkit

we-toolkit is a package that provides easy access to Telecom Egypt's API.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install we-toolkit.

```bash
npm install we-toolkit
```

## Usage

```javascript
const { getBalance, getUsage, login } = require("we-toolkit");

// Use the functions provided by the package
// For example:
let authData = login("number", "password");
let balance = getBalance(authData);
let usage = getUsage(authData);
```

## API

### `login(number, password)`

Logs in to the service and returns an `authData` object.

### `getBalance(authData)`

Returns the balance for the authenticated user.

### `getUsage(authData)`

Returns the data usage for the authenticated user.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

- Password encryption helper function is made by: [Ahmed basset](https://github.com/aabdulbasset)
- Login functionality is made by: [Abdelrahman Tarek
  ](https://github.com/abdelrahman-tarek-0)

## License

[MIT](https://choosealicense.com/licenses/mit/)
