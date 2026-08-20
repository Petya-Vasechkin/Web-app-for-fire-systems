# Fire Systems Readiness Analyzer

A React web application for assessing the operational readiness and technical condition of fire-safety systems.

## Application preview

![Fire Systems Readiness Analyzer interface](./assets/app-preview.png)

## Features

- Enter and review fire-system technical information
- Assess the operational readiness and technical condition of a fire system
- Display assessment results in a clear web interface
- Provide a structured workflow for reviewing fire-safety data

## Technology stack

- React
- JavaScript
- HTML5
- CSS3
- Create React App
- Webpack

## Prerequisites

To run the project locally, install:

- Node.js
- npm

## Installation and launch

1. Clone the repository:

   ```bash
   git clone git@github.com:Petya-Vasechkin/Web-app-for-fire-systems.git
   ```

2. Open the project folder:

   ```bash
   cd Web-app-for-fire-systems
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   This command downloads all packages specified in `package.json` and creates the local `node_modules` directory.

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the application in a browser:

   ```text
   http://localhost:3000
   ```

## Compatibility note

This project uses a legacy Create React App / Webpack configuration. If `npm start` fails with `ERR_OSSL_EVP_UNSUPPORTED` on newer Node.js versions, run:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

## Author

Pavel Metelev