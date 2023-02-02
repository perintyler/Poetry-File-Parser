/** 
 *   ParsePoetry.js
 *   --------------
 * 
 * Mimimalistic integration tests for poetry file parsing.
 **/

const fs   = require('fs');   // for synchronous file reading
const path = require('path'); // for test file path construction

import { test, expect } from '@jest/globals';
import { getPackages }  from './ParsePoetry.js';

test('trivial integration test', () => {
    for (var testNumber = 0; testNumber < 10; testNumber++) {
        const testFileName = `integration-test-${testNumber}.lock`;
        const pathToTestFile = path.join('test-data', testFileName);
        const poetryFileContents = fs.readFileSync(pathToTestFile, "utf-8");
        expect(getPackages(poetryFileContents).length).toBeGreaterThan(1);
    }
});