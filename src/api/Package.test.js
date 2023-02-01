/* Package.test.js */

import Package from './Package.js';

test('test `Package` construction', () => {
    const dependencyNames = ['first-required-dependency', 'second-required-dependecy'];
    const optionalDependencyNames = ['an-optional-dependency']
    const pkg = new Package('My Package', 'a package description', false, dependencyNames, optionalDependencyNames);

    expect(pkg.name).toBe('My Package');
    expect(pkg.description).toBe('a package description');
    expect(pkg.dependencyNames.length).toBe(2);
    expect(pkg.dependencyNames[0]).toBe('first-required-dependency');
    expect(pkg.dependencyNames[1]).toBe('second-required-dependecy');
    expect(pkg.optionalDependencyNames.length).toBe(1);
    expect(pkg.optionalDependencyNames[0]).toBe('an-optional-dependency');
});

test('test static class member containing every constructed package', () => {
    if (Package.all) { Package.all = {} } // clear packages from already ran tests

    const pkg1 = new Package('Package 1', 'package 1 description', false, [], []);
    const pkg2 = new Package('Package 2', 'package 2 description', false, [], []);
    const pkg3 = new Package('Package 3', 'package 3 description', false, [], []);
    const pkg4 = new Package('Package 4', 'package 4 description', false, [], []);
    const pkg5 = new Package('Package 5', 'package 5 description', false, [], []);

    expect(Object.keys(Package.all).length).toBe(5);

    [1, 2, 3, 4, 5].forEach((packageNumber) => {
        const packageName = 'Package ' + packageNumber;
        expect(Object.hasOwn(Package.all, packageName));
        let pkg = Package.all[packageName];
        expect(pkg.name).toBe(packageName);
        expect(pkg.description).toBe('package ' + packageNumber + ' description');
    });
});

test('test Package::getDependencies', () => {
});

test('test Package::getReverseDepencies', () => {
});

