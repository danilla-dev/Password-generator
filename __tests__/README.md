# Password Generator 🔐

A customizable password generator built with JavaScript to create secure, personalized passwords based on user-selected options. The project includes unit tests using Jest for robust functionality and verification.

## Features ✨

- **Password Length Control**: Customize the length of the generated password.
- **Character Options**:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Special characters
- **Randomization**: Passwords are shuffled for optimal randomness.
- **Testing**: Includes Jest tests to validate each function and feature.

## Installation 📦

To set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/password-generator.git
   ```
2. **Navigate to the project directory:**:

   ```bash
   cd password-generator
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage 🛠️

### Generating a Password

Use the generatePassword function with specific parameters to generate a secure password. Example usage:

```javascript
const { generatePassword } = require('./modules/passwordUtils')

const password = generatePassword(12, true, true, true, false)
console.log(password) // Example output: aX9zGk4L...
```

### Parameters

| Parameter        | Type    | Description                | Example       |
| ---------------- | ------- | -------------------------- | ------------- |
| length           | Number  | Length of the password     | 12            |
| includeLowercase | Boolean | Include lowercase letters  | true or false |
| includeUppercase | Boolean | Include uppercase letters  | true or false |
| includeNumbers   | Boolean | Include numbers            | true or false |
| includeSymbols   | Boolean | Include special characters | true or false |

### Example code

```javascript
generatePassword(16, true, true, false, true) // Lowercase, uppercase, special characters
generatePassword(10, true, false, true, false) // Lowercase and numbers only
```

### Running tests

```bash
npm test
```

## Project structure 📂

```bash
password-generator/
│
├── modules/
│   └── passwordUtils.js
├── __tests__/
│   └── passwordUtils.test.js
├── package.json
└── README.md
```

## Development Details 📑

### Password Generation Logic

The password generation logic is designed to ensure that each selected character type is present at least once in the generated password when specified, ensuring strong security. It uses `Math.random()` to pick characters from strings defined in `charactersObject` and shuffles them for randomness.

### Character Types

- **Lowercase letters**: `abcdefghijklmnopqrstuvwxyz`
- **Uppercase letters**: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
- **Numbers**: `0123456789`
- **Special characters**: `!@#$%^&*()_+[]{}|;:,.<>?`

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please fork the repository and create a new branch with your changes. Submit a pull request when ready for review.

## License 📜

This project is licensed under the MIT License.
