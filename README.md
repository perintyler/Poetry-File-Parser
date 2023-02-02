# Poetry File Parser

This [React](https://reactjs.org/) web application allows users to upload a Python [Poetry](https://python-poetry.org/) dependency file, which gets parsed and visualized. The app displays a package grid, and clicking on a package will navigate to a package view showing clickable dependencies and reverse-dependencies, allowing users to click through the dependency tree.

<p align="center">
     <br>
    <a href="http://www.poetryparser.com">
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

If not already done, install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 

Then, install the app from within the root folder of this git repo using this command:

```bash
npm install
```

To run the app locally:

```bash
npm start
```

## Testing

To run the [Jest](https://jestjs.io/) tests:

```bash
npm test
```
