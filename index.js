'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: take a value and return the input value unchanged.
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @return {*}: a value that is unchanged.
 * 
 */ 

function identity(value) {
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: takes a value and returns the type of value as a string.
 * 
 * @param {*} value: a single value that can be any data type.
 * 
 * @return {string}: a string of the type of value
 */

function typeOf(value) {
    if (value === null) {
        return 'null';
    } else if (value instanceof Date === true) {
        return 'date';
    } else if (Array.isArray(value)) {
        return 'array';
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;


/**
 * first: Designed to return either a string or an array of the elements 
 * in the array starting at the beginning of the array. 
 * 
 * @param {Array}  array: that will return the elements depending on the number
 * @param {number}  number: that determines the length of the array to return 
 * 
 * @return {string or array}: the elements from the start of the array amount depends on the number
 * If the the number argument isn't given or isn't a number then it will return the first 
 * element in the array. If the number is less than zero or the input array isn't an array it
 * will return an array literal.
 */
 
 function first(array, number) {
    const returnArray = [];
    if (!Array.isArray(array) || number < 0) {
        return returnArray;
    } else if (isNaN(number) || number === undefined) {
        return array[0];
    }
    for (let i = 0; i < array.length; i++) {
        if (number === 1) return array[0];
        else {
            returnArray.push(array[i]);
        }
    }
    return returnArray.slice(0, number);
}
module.exports.first = first;


/**
 * last: Designed to return either a string or an array of the elements 
 * in the array starting at the ending of the array.
 * 
 * @param {Array}  array: that will return the elements depending on the number
 * @param {number} number: that determines the length of the array to return.
 * If number is not a number or is left off then return the last param
 * 
 * @return {string or array}: the elements from the end of the array amount depends on the number.
 * If the number argument isn't given or isn't a number then it will return the last element in 
 * the array. If the array isn't an array or if the number is negative then it will return an 
 * array literal.
 */
 
 function last(array, number) {
    const newArray = [];
    if (!Array.isArray(array) || number < 0) {
        return newArray;
    } else if (isNaN(number) || number === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-number)
    }
}   
module.exports.last = last; 


/**
 * indexOf: Designed to return the index that a value is stored.
 * 
 * @params: {Array} array: to loop over
 * @params: {string} val: element to compare with the array
 * 
 * @return: If the string is equal to the element in the array, return the index.
 * If the string isn't equal to an element then return -1. If there is more than
 * one assurance in the array then return the first index
 */
 
 function indexOf(array, val) {
    for (let i = 0; i < array.length; i++) {
        if (val === array[i]) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;



/**
 * contains: Designed to return a boolean value if a value is in an array.
 * 
 * @param {Array} array: To loop through.
 * @param {*} val: compares to the array element
 * 
 * @return {boolean} boolean: true if value is equal to an element in the array.
 * false if value is not equal to the array.
 */
 
 function contains(array, val) {

     let result = false;
     for (let i = 0; i < array.length; i++) {
        val === array[i] ? result = true : false; 
     }
     return result;
 }
 module.exports.contains = contains;
 
 
 /**
  * unique: Designed to loop over an array if the and check if a value is 
  * equal to another value if it is not then add it to a new array that will
  * be returned
  * 
  * @param {Array} array: an array
  * 
  * @return {Array} a new array with all duplicate values removed
  */
   
function unique(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (indexOf(array, array[i]) === i) {
            newArray.push(array[i]);
        } 
    }
    return newArray;
}
module.exports.unique = unique;



/**
 * filter: Designed to use a function argument on an array. The function takes in
 * the element, index and array. It will then return all that pass the test in a new array.
 * 
 * @param {Array} array: an array to loop through 
 * @param {Function} func: function that takes an element, index and array and runs a test
 * to get the tests that pass
 * 
 * @return {Array} an array that has passed all the tests from the function.
 */
 
function filter(array, func) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}
module.exports.filter = filter;

/**
 * reject: Designed to use a function argument on an array. The function takes in
 * the element, index and array. It will then return all that fail the test in a new array.
 * 
 * @param {Array} array: an array to loop through
 * @param {Function} func: function that takes an element, index, or array and runs a test
 * 
 * @return {Array} an array of element, indexes or arrays that have failed the function test.
 */

function reject(array, func) {
    return filter(array, function(element, i, array) {
        if (!func(element, i, array)) {
            return element;
        }
    });
}
module.exports.reject = reject;

let arr = [1,2,3,4,5];
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let rejectArr = reject(arr, isEven);
console.log(rejectArr);


/**
 * partition: Designed to take an array and a function to test against the array and return 
 * an array containing two arrays. The first array holds all the elements of the array arguement
 * that have passed the function test. The second holds all the elements that didn't pass the 
 * function call
 * 
 * @param {Array} array: an array to loop through
 * @param {Function} func: a test to run on the array. It takes in the arguments of the element, index
 * and the array.
 * 
 * @return {Array} an array containing two other arrays, The first array holds all the elements of 
 * the array arguement that have passed the function test. The second holds all the elements that didn't pass
 * the function call
 */
 
function partition(array, func) {
     let totalArray = [[],[]];
     for (let i = 0; i < array.length; i++) {
         if (func(array[i], i, array)) {
             totalArray[0].push(array[i]);
         } else {
             totalArray[1].push(array[i]);
         }
     };
    return totalArray;
 }
module.exports.partition = partition;



/**
 * map: Designed to take either an Array or an Object and passes a function on the element, index and array
 * if the collection is an array and the value, key and the entire object if it is an object.
 * 
 * @param {Array or Object} collection: either an array or object to loop through
 * @param {Function} func: a test to run on each element in the collection
 * 
 * @return {Array}: returns the collection with the function passed over each element. The return array will
 * always be the same length as the array argument. 
 */
 
 function map(collection, func) {
     let collectionMap = [];
     if(typeOf(collection) === 'array') {
        for (let i = 0; i < collection.length; i++) {
            collectionMap.push(func(collection[i], i, collection));
        }
     } else if (typeOf(collection) === 'object') {
         for (let key in collection) {
             collectionMap.push(func(collection[key], key, collection));
         }
     }
     return collectionMap;
 }
 module.exports.map = map;
 
 
 
 /**
  * pluck: Takes an array of objects, and a string. Pluck will loop over the array finding all
  * associated values to the prop arguement, returning an array with all the values 
  * 
  * @param {Array} array: Must contain an array of elements, will loop through the array
  * @param {Object key} prop: A key element in an object. Will find all instances of the
  * key and return all the key's values in an array
  * 
  * @return {Array}: All the values that match the property argument.
  */
  
function pluck(array, prop) {
    return map(array, function(element, i, array) {
      return array[i][prop];
    });
}
module.exports.pluck = pluck;



/**
 * every: Designed to take a collection and a function and return a boolean value depending 
 * on if every test passes.
 * 
 * @param {Array or Object} collection: something to loop through and test with the function
 * @param {Function} func: a test to run on each element in the collection.
 * 
 * @return {boolean}: a true or false value depending on if every test passed, if one test fails
 * return false. If a function isn't supplied or doesn’t return a boolean vlaue then it will
 * check to see if all values are truthy, if one is falsly then it will return false.
 */
 
 
 function every(collection, func) {
   let test = true;
    each(collection, function(element, i, collection) { 
        if (typeof func === 'function' && !func(element, i, collection)) { 
            test = false;    
        } else if (!element) {
                test = false;
        }
    });
    return test;
}
module.exports.every = every;




/**
 * some: Designed to take a collection and a function to test against and return
 * a boolean value. If one element passes the test then the test then return true.
 * 
 * @param {Array or Object} collection: something to loop through 
 * @param {Function} func: something to test against the collection
 * 
 * @return {boolean}: If one element passes then it will return true. If all tests
 * fail then it will return false. The function will also work if there isn't a 
 * function and will return true or false depending on truthy or falsey values.
 */
 
 function some(collection, func) {
    if (typeOf(collection) === 'array') {
        for (let i = 0; i < collection.length; i++) {
            if (func === undefined) {
                if (collection[i]) {
                    return true
                }
            } else {
                if (func(collection[i], i, collection)) {
                    return true;
                }
            }
        }
    }
    if (typeOf(collection) === 'object') {
        for (let key in collection) {
            if (func === undefined) {
                if (collection[key]) {
                    return true;
                }
            } else {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    }
    return false;
}
module.exports.some = some;




/**
 * reduce: Designed to take an array a function and a value
 * 
 * @param {Array} array: array to loop through
 * @param {Function} func: a test to run on the array
 * @param {*} seed: a data type that is the starting point that will
 * take all array elements and use the function to do something
 * 
 * @return {*}: takes the array and returns it to either a single value
 * or someother type of data. if there is no seed value assigned then the function
 * take the first element of the array and start looping on the second element
 */
 
 function reduce(array, func, seed) {
    // if seed is not defined
    if (seed === undefined) {
        // set seed to the first element of the array
        seed = array[0];
    // loop over the array starting at index 1
        for (let i = 1; i < array.length; i++) {
            // for each loop set seed to the function with the params of seed, the element and index
            seed = func(seed, array[i], i);
        }
    } else {
    // if seed is defined then loop over the array
        for (let i = 0; i < array.length; i++) {
        // set seed to be the function call with params of seed, element and index.
            seed = func(seed, array[i], i);
        }
    }
    return seed;
}
module.exports.reduce = reduce;



/**
 * extend: Designed to take in at two or more objects and add all the 
 * key/value pairs to the first object parameter.
 * 
 * @param {Object} object1: object that will store all the other object
 * key/value pairs
 * @param {Object} object2: will take the key/value pairs and push it into
 * the first object
 * @param {Object} ...object: optional but can take as many as needed will
 * take the key/value pairs and push it into object1.
 * 
 * @return: returns the first object with all other object key/value pairs.
 */



function extend(object1, object2, ...object) {
    return Object.assign(object1, object2, ...object);
     
}
 module.exports.extend = extend;