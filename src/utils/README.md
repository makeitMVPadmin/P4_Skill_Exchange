# Utils Directory

This directory contains utility functions and classes that are used across the project. These utilities are designed to provide common functionality and simplify the main codebase.

## Table of Contents

- [Usage](#usage)
- [Utilities](#utilities)
  - [General Utilities](#general-utilities)
  - [String Utilities](#string-utilities)
  - [Date Utilities](#date-utilities)
  - [File Utilities](#file-utilities)
- [Contributing](#contributing)
- [License](#license)


## Usage

Import the utility functions or classes into your project as needed.

```javascript
// Example: Importing a specific utility function
import { formatDate } from './utils/dateUtils';

// Example: Using the utility function
const formattedDate = formatDate(new Date());
console.log(formattedDate);
```

## Utilities

### General Utilities

- **`debounce(fn, delay)`**: Returns a debounced version of the provided function.
- **`throttle(fn, limit)`**: Returns a throttled version of the provided function.

### String Utilities

- **`capitalize(str)`**: Capitalizes the first letter of the string.
- **`camelCaseToSnakeCase(str)`**: Converts camelCase string to snake_case.
- **`truncate(str, length)`**: Truncates the string to the specified length.

### Date Utilities

- **`formatDate(date, format)`**: Formats a date object into the specified format.
- **`parseDate(dateString, format)`**: Parses a date string into a date object.
- **`addDays(date, days)`**: Adds the specified number of days to a date object.

### File Utilities

- **`readFile(filePath)`**: Reads the content of a file at the given path.
- **`writeFile(filePath, content)`**: Writes content to a file at the given path.
- **`deleteFile(filePath)`**: Deletes a file at the given path.

## Contributing

Contributions are welcome! Please follow the standard contributing guidelines.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

---

This template can be customized based on the specific utilities and requirements of your project.