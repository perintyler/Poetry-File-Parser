/** 
 *   ParsePoetry.test.js
 *   -------------------
 * 
 * This file tests the `getPackages` function from `ParsePoetry.js`.
 **/

const fs   = require('fs');   // for synchronous file reading
const path = require('path'); // for test file path construction

import getPackages from './ParsePoetry.js';

/* This function, which wraps the `getPackages` function, takes the name of a 
 * Poetry lockfile found in the `test-data` directory (located in the root folder 
 * of the git repository), reads/parses it, and returns an array of `Package` objects. 
 */
function getPackagesFromTestFile(testFileName)
{
    const pathToTestFile = path.join('test-data', testFileName + '.lock');
    const poetryFileContents = fs.readFileSync(pathToTestFile, "utf-8");
    return getPackages(poetryFileContents);
}

test('test `getPackages` on poetry file with no package dependencies', () => 
{
    const packages = getPackagesFromTestFile('lockfile-with-no-package-dependencies');
    expect(packages.length).toBe(3);

    expect(packages[0].name).toBe('atomicwrites');
    expect(packages[0].description).toBe('Atomic file writes.');
    expect(packages[0].dependency_names.length).toBe(0);
    expect(packages[0].optional_dependency_names.length).toBe(0);

    expect(packages[1].name).toBe('attrs');
    expect(packages[1].description).toBe('Classes Without Boilerplate');
    expect(packages[1].dependency_names.length).toBe(0);
    expect(packages[1].optional_dependency_names.length).toBe(0);

    expect(packages[2].name).toBe('cachecontrol');
    expect(packages[2].description).toBe('httplib2 caching for requests');
    expect(packages[2].dependency_names.length).toBe(0);
    expect(packages[2].optional_dependency_names.length).toBe(0);
});

test('test `getPackages` on poetry file with a single package', () => 
{
    const packages = getPackagesFromTestFile('lockfile-with-single-package');
    expect(packages.length === 1);

    expect(packages[0].name === 'cachecontrol');
    expect(packages[0].description === 'httplib2 caching for requests');

    expect(packages[0].dependency_names.length === 3);
    expect(packages[0].dependency_names[0] === 'lockfile');
    expect(packages[0].dependency_names[1] === 'msgpack');
    expect(packages[0].dependency_names[2] === 'requests');

    expect(packages[0].optional_dependency_names.length === 2);
    expect(packages[0].optional_dependency_names[0] === 'filecache');
    expect(packages[0].optional_dependency_names[1] === 'redis');
});

test('test `getPackages` on the poetry file used by the Poetry package', () => 
{
    const packages = getPackagesFromTestFile('lockfile-used-for-poetry-package');
    expect(packages.length === 70);
});
