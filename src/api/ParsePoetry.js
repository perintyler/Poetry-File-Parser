/** 
 *   ParsePoetry.js
 *   --------------
 **/

import Package from './package.js';

class InvalidPoetryFileError extends Error // No built in file errors in javascript?!
{
    constructor(message) 
    {
        super(message);
        this.name = "InvalidPoetryFileError";
    }
}
