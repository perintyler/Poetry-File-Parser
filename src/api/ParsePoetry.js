/** 
 *   ParsePoetry.js
 *   --------------
 **/

import Package from './Package.js';

class InvalidPoetryFileError extends Error // No built in file errors in javascript?!
{
    constructor(message) 
    {
        super(message);
        this.name = "InvalidPoetryFileError";
    }
}

/**
 * This function takes the plaintext TOML tables relating to a single package
 * in a Poetry lockfile in order to create and return a new `Package` object. 
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
    var package_name = null;
    var package_description = null;
    var package_dependency_names = [];
    var optional_dependency_names = [];

    (function parse_package_details() {
        var package_decleration_lines = package_table.split('\n');
        package_decleration_lines.shift(); // remove "[[package]]" line

        package_decleration_lines.forEach((line) => {
            if (line.startsWith('name')) {
                const name_matching_pattern = /name = "(.*)"/;
                const regex_match = line.match(new RegExp(name_matching_pattern));
                 // 0th index matches the whole pattern. we want the matched group
                package_name = regex_match[1];
            }
            else if (line.startsWith('description')) {
                const description_matching_pattern = /description = "(.*)"/;
                const regex_match = line.match(new RegExp(description_matching_pattern));
                // 0th index matches the whole pattern. we want the matched group
                package_description = regex_match[1];
            }
        });
    })();

    (function parse_package_dependencies() {
        if (package_dependencies_table !== null) {
            var dependency_lines = package_dependencies_table.split('\n');
            dependency_lines.shift(); // skip "[package.dependencies]" line
            dependency_lines.forEach((line) => {
                const dependency_name = line.split(' = ')[0];
                package_dependency_names.push(dependency_name);
            });
        }
    })();

    (function parse_package_extras() {
        if (package_extras_table !== null) {
            const extras_lines = package_extras_table.split('\n');
            extras_lines.shift(); // skip "[package.extras]" line
            extras_lines.forEach((line) => {
                const dependency_names = line.split(' = ')[0];
                optional_dependency_names.push(dependency_names);
            });
        }
    })();

    if (package_name === null) {
        throw new InvalidPoetryFileError("package does not have a name");
    } else if (package_description === null) {
        throw new InvalidPoetryFileError("package does not have a description");
    }

    return new Package(
        package_name, 
        package_description, 
        package_dependency_names, 
        optional_dependency_names
    );
}
