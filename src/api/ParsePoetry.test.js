/* ParsePoetry.test.js */

import * as fs   from 'fs';   // for synchronous file reading
import * as path from 'path'; // for test file path construction

import { test, expect } from '@jest/globals';
import { getPackages }  from './ParsePoetry.js';

// This function (which wraps the `getPackages` function) takes the name of a 
// Poetry lockfile from the `test-data` directory (located in the root folder 
// of the git repository), reads/parses it, and returns an array of `Package` 
// objects.
function getPackagesFromTestFile(testFileName)
{
    const pathToTestFile = path.join('test-data', testFileName + '.lock');
    const poetryFileContents = fs.readFileSync(pathToTestFile, "utf-8");
    return getPackages(poetryFileContents);
}

test('test `getPackages` on poetry file with no package dependencies', () => {
    const packages = getPackagesFromTestFile('lockfile-with-no-package-dependencies');
    expect(packages.length).toBe(3);

    expect(packages[0].name).toBe('atomicwrites');
    expect(packages[0].description).toBe('Atomic file writes.');
    expect(packages[0].dependencyNames.length).toBe(0);
    expect(packages[0].optionalDependencyNames.length).toBe(0);

    expect(packages[1].name).toBe('attrs');
    expect(packages[1].description).toBe('Classes Without Boilerplate');
    expect(packages[1].dependencyNames.length).toBe(0);
    expect(packages[1].optionalDependencyNames.length).toBe(0);

    expect(packages[2].name).toBe('cachecontrol');
    expect(packages[2].description).toBe('httplib2 caching for requests');
    expect(packages[2].dependencyNames.length).toBe(0);
    expect(packages[2].optionalDependencyNames.length).toBe(0);
});

test('test `getPackages` on poetry file with a single package', () => {
    const packages = getPackagesFromTestFile('lockfile-with-single-package');
    expect(packages.length === 1);

    expect(packages[0].name === 'cachecontrol');
    expect(packages[0].description === 'httplib2 caching for requests');

    expect(packages[0].dependencyNames.length === 3);
    expect(packages[0].dependencyNames[0] === 'lockfile');
    expect(packages[0].dependencyNames[1] === 'msgpack');
    expect(packages[0].dependencyNames[2] === 'requests');

    expect(packages[0].optionalDependencyNames.length === 2);
    expect(packages[0].optionalDependencyNames[0] === 'filecache');
    expect(packages[0].optionalDependencyNames[1] === 'redis');
});

test('test `getPackages` on the poetry file used by the Poetry package', () => {
    const packages = getPackagesFromTestFile('lockfile-used-for-poetry-package');
    expect(packages.length === 70);
});

test('test packages with optional property in [[package]] table', () => {
    const packages = getPackagesFromTestFile('lockfile-with-no-package-dependencies');
    expect(packages[0].isOptional).toBe(false);
    expect(packages[1].isOptional).toBe(false);
    expect(packages[2].isOptional).toBe(true);
});

test('test packages with optional flag in [package.dependencies] table', () => {
    const pkg = getPackagesFromTestFile('lockfile-with-optional-flag-in-dependencies-table')[0];
    
    expect(pkg.dependencyNames.length).toBe(2);

    ['dependency2', 'dependency3'].forEach((packageName) => {
        expect(pkg.dependencyNames).toContain(packageName);
    });

    expect(pkg.optionalDependencyNames.length).toBe(4);

    ['dependency1', 'dependency4', 'extra1', 'extra2'].forEach((packageName) => {
        expect(pkg.optionalDependencyNames).toContain(packageName);
    });
});
