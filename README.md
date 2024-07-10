# MakeItMVP Launch Academy (Skill Exchange) Starter Repository

Welcome to the MakeItMVP Launch Academy Starter Repository! This repository is designed to provide new junior developers with a structured starting point for their assigned projects. Built using React and Sass, this setup will help you get up and running quickly.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Technologies](#technologies)
4. [Contributing](#contributing)
5. [License](#license)

## Getting Started

To begin working on the project, follow these steps:

1. **Clone this repository to your local machine:**

    ```bash
    git clone https://github.com/MakeItMVP/P4_Skill_Exchange.git
    ```

2. **Change your working directory to the cloned repository:**

    ```bash
    cd P4_Skill_Exchange
    ```

3. **Install the project dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

5. **Open your web browser and navigate to** `http://localhost:3000` **to see your project running.**

Now you're ready to start building your project using the provided structure!

## Project Structure

The project structure is organized as follows:

```
├── src/
│   ├── components/
│   │   ├── Example.tsx
│   │   ├── ...
│   ├── styles/
│   │   ├── index.scss
│   │   ├── ...
│   ├── index.tsxs
├── public/
│   ├── images/
|   ├── svg/  
│   ├── favicon.ico
|   ├── ...
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
```

- **`src/`**: Contains the main source code for your project, including React components and styles.
- **`public/`**: Contains static assets but the project's HTML template is in the root directory since this project uses vite.
- **`package.json`**: Defines project dependencies and scripts.
- **`tailwind.config.js`**: Defines the configuration for global tailwind styles
- **`vite.config.ts`**: Defines the configuration for the vite app.



## Technologies

This starter repository uses the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Sass**: A CSS extension language that adds features like variables, nesting, and more.
- **Vite**: A Next Generation Frontend Tooling with lighning fast HMR.
- **Tailwind**: A UI library for applying css styles and animations


## Contributing

We welcome contributions from the community. If you have suggestions or improvements for this starter repository, please open an issue or create a pull request. For more information on how to contribute, check our [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).