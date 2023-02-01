/** 
 *   ParsePoetry.js
 *   --------------
 * 
 * This file provides the `getPackages` function, which parses
 * `Package` objects from a Poetry lockfile.
 * 
 * Refer to the Poetry website: https://python-poetry.org/
 **/

import Package from './Package.js';

export class InvalidPoetryFileError extends Error // No built in file errors in javascript?!
{
    constructor(message)
    {
        super(message);
        this.name = "InvalidPoetryFileError";
    }
}

/**
 * This function takes the plaintext TOML tables relating to a single package
 * from a Poetry lockfile in order to create and return a new `Package` object. 
 * 
 * See TOML table reference: https://toml.io/en/v1.0.0#table
 * 
 * - Example `package_table` argument (String): 
 * """
 * [[package]]
 * name = "cachecontrol"
 * version = "0.12.11"
 * description = "httplib2 caching for requests"
 * """
 * 
 * - Example `package_dependencies_table` argument:
 * """
 * [package.dependencies]
 * lockfile = {version = ">=0.9", optional = true, markers = "extra == \"filecache\""}
 * msgpack = ">=0.5.2"
 * """
 * 
 * - Example `package_extras_table` argument (String):
 * """
 * [package.extras]
 * filecache = ["lockfile (>=0.9)"]
 * """
 **/
function createPackageFromTOMLTables(
  package_table,                     // string
  package_dependencies_table = null, // string
  package_extras_table       = null  // string
) {
    var packageName = null;
    var packageDescription = null;
    var isOptional = false;
    var dependencyNames = [];
    var optionalDependencyNames = [];

    (function parse_package_details() {
        var packageTablelines = package_table.split('\n');
        packageTablelines.shift(); // remove "[[package]]" line

        packageTablelines.forEach((line) => {
            if (line.startsWith('name')) {
                const name_matching_pattern = /name = "(.*)"/;
                const regex_match = line.match(new RegExp(name_matching_pattern));
                packageName = regex_match[1]; // 0th index matches the whole pattern. 1st index is matched group
            }
            else if (line.startsWith('description')) {
                const description_matching_pattern = /description = "(.*)"/;
                const regex_match = line.match(new RegExp(description_matching_pattern));
                packageDescription = regex_match[1];
            }
            else if (line.startsWith('optional')) {
                const description_matching_pattern = /optional = (.*)/;
                const regex_match = line.match(new RegExp(description_matching_pattern));
                const isOptionalString = regex_match[1];
                if (isOptionalString === 'true') {
                    isOptional = true;
                } else if (isOptionalString === 'false') {
                    isOptional = false;
                } else {
                    throw new InvalidPoetryFileError(
                        `Invalid value of optional property: ${isOptionalString} (package=${packageName}).`
                    );
                }
            }
        });
    })();

    (function parse_package_dependencies() {
        if (package_dependencies_table !== null) {
            var dependencyTableLines = package_dependencies_table.split('\n');
            dependencyTableLines.shift(); // skip "[package.dependencies]" line
            dependencyTableLines.forEach((line) => {
                const dependency_name = line.split(' = ')[0];
                dependencyNames.push(dependency_name);
            });
        }
    })();

    (function parse_package_extras() {
        if (package_extras_table !== null) {
            const extrasTableLines = package_extras_table.split('\n');
            extrasTableLines.shift(); // skip "[package.extras]" line
            extrasTableLines.forEach((line) => {
                const dependencyNames = line.split(' = ')[0];
                optionalDependencyNames.push(dependencyNames);
            });
        }
    })();

    if (packageName === null) {
        throw new InvalidPoetryFileError("package does not have a name");
    } else if (packageDescription === null) {
        throw new InvalidPoetryFileError("package does not have a description");
    }

    return new Package(
        packageName, 
        packageDescription,
        isOptional,
        dependencyNames, 
        optionalDependencyNames
    );
}

/**
 * Populates the `reverseDependencyNames` class member for each of the 
 * provided packages.
 * 
 * NOTE: This function requires that each package's `dependencyNames` property
 *       has already been set. Otherwise, this function won't work properly.
 **/
function setReverseDependencyNames(packages)
{
    packages.forEach((pkg) => {
        pkg.dependencyNames.forEach((dependencyName) => {
            const dependency = Package.getByName(dependencyName);
            if (dependency !== null) {
                dependency.reverseDependencyNames.push(pkg.name);
            }
        });
    });
}

/**
 * This function takes the plaintext contents of a Poetry lockfile,
 * parses it, and then returns an array of `Package` objects representing
 * each package detailed in the lockfile.
 * 
 * Example Poetry File: 
 * - https://github.com/python-poetry/poetry/blob/70e8e8ed1da8c15041c3054603088fce59e05829/poetry.lock
 * 
 * See Poetry File reference: 
 * - https://python-poetry.org/docs/basic-usage/
 **/
export function getPackages(file_contents)
{
    var packages = [];

    var tomlTables = file_contents.trim().split('\n\n');

    for (var tableIndex = 0; tableIndex < tomlTables.length; tableIndex++) {

        if (tomlTables[tableIndex].startsWith('[[package]]')) {

            var package_table = tomlTables[tableIndex];
            var package_dependencies_table = null;
            var package_extras_table = null;

            // check to see if either of the next two toml sections contain
            // package dependencies or package extras
            for (var subtableIndex = tableIndex+1
               ; subtableIndex < Math.min(tableIndex+3, tomlTables.length)
               ; subtableIndex++
            ) {
                if (tomlTables[subtableIndex].startsWith('[package.dependencies]')) {
                    package_dependencies_table = tomlTables[subtableIndex];
                    tableIndex++;
                }

                else if (tomlTables[subtableIndex].startsWith('[package.extras]')) {
                    package_extras_table = tomlTables[subtableIndex];
                    tableIndex++;
                }

                else { break };
            }

            packages.push(createPackageFromTOMLTables(
                package_table,
                package_dependencies_table,
                package_extras_table
            ));
        }
    }

    setReverseDependencyNames(packages);

    return packages;
}
