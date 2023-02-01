/** 
 *   Package.js
 *   ----------
 * 
 * This file provides the `Package` class.
 **/

export default class Package 
{
    static all = {}; // maps package name to package object

    constructor(
      name,
      description,
      isOptional,
      dependencyNames,
      optionalDependencyNames
    ) {
        this.name = name;
        this.description = description;
        this.isOptional = isOptional;
        this.dependencyNames = dependencyNames ? dependencyNames : [];
        this.optionalDependencyNames = optionalDependencyNames ? optionalDependencyNames : [];
        this.reverseDependencyNames = [];

        Package.all[this.name] = this;
    }

    toString() 
    {
        return this.name;
    }

    static getByName(packageName)
    {
        return packageName in Package.all
             ? Package.all[packageName]
             : null;
    }
}

