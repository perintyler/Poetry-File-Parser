/** 
 *   Package.test.js
 *   ---------------
 * 
 * This file tests the `Package` class.
 **/

import Package from './Package.js';

test('test `Package` construction', () => {
    const pkg = new Package(
        'My Package', 'a package description', 
        ['first-required-dependency', 'second-required-dependecy'],
        ['an-optional-dependency']
    );

    expect(pkg.name).toBe('My Package');
    expect(pkg.description).toBe('a package description');
    expect(pkg.dependency_names.length).toBe(2);
    expect(pkg.dependency_names[0]).toBe('first-required-dependency');
    expect(pkg.dependency_names[1]).toBe('second-required-dependecy');
    expect(pkg.optional_dependency_names.length).toBe(1);
    expect(pkg.optional_dependency_names[0]).toBe('an-optional-dependency');
});

test('test `Package` construction with default constructors', () => {
    const pkg = new Package('My Package', 'a package description');
    
    expect(pkg.name).toBe('My Package');
    expect(pkg.description).toBe('a package description');
    expect(pkg.dependency_names.length).toBe(0);
    expect(pkg.optional_dependency_names.length).toBe(0);
});
