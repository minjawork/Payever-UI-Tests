# PayEver UI Tests

This repo contains end-to-end UI tests written for PayEver App.

Tests are written using WebDriver test framework for Node.js.

More about framework see at [site](https://webdriver.io/)

## Getting Started

**Precondition**

In order to use webdriver.io framework, install node ( at least node 10).

Node version can be checked using command: `node -v`.

Steps to run tests:

1. Clone repo.

2. Run `npm install` command

3. In order to run all tests use command: `npm test` .

4. In order to run single test use command : `./node_modules/.bin/wdio run wdio.config.js --spec path_to_test `
