# Poetry File Parser

This [React](https://reactjs.org/) Web-App parses [Poetry](https://python-poetry.org/) dependency files.

<p align="center">
     <br>
    <a href="https://poetryparser.com/">
        <b>PoetryParser.com</b>
    </a>
    <br><br><br>
    <span>
        <img src="readme-assets/home-view-demo-screenshot.png" style="height: 500px;" />
        _
        <img src="readme-assets/package-view-demo-screenshot.png" style="height: 500px;" />
    </span>
</p>


## Installation

__Requirements:__
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Navigate into this repo's root directory, then run this bash command: 

```bash
npm install
```

## Building/Serving

To run the app locally:

```bash
npm start
```

To create an optimized production build for distribution:

```bash
npm run build
```

## Development

### Testing

To run the [Jest](https://jestjs.io/) tests, use the `npm test` command.

```bash
$ npm test
 PASS  src/api/Package.test.js
 PASS  src/api/ParsePoetry.test.js
 PASS  src/api/integration.test.js
 PASS  src/App.test.jsx

Test Suites: 4 passed, 4 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        2.322 s
```

### Lint Checks

To run the [ESLint](https://eslint.org/) checks:

```bash
npm run lint
``` 

### Continuous Integration

In order for commits to be pushed to the `main` branch, a PR must be made and all CI workflows must succeed. There are currently 3 CI workflows:

- `Jest Tests`
- `Firebase Deployment`
- `Lint Checks`
