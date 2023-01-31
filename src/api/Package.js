/** 
 *   Package.js
 *   ----------
 * 
 * This file provides the `Package` class.
 **/

export default class Package 
{
    constructor(
      name,
      description,
      dependency_names = [],
      optional_dependency_names = [],
    ) {
        this.name = name;
        this.description = description;
        this.dependency_names = dependency_names;
        this.optional_dependency_names = optional_dependency_names;
    }

    toString() 
    {
        return this.name;
    }
}
