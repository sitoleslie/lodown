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
 * identity: take a value and return that input value unchanged 
 * 
 * @param: {*} value: single value that can be any datatype 
 *
 * @return {*}: The input value unchanged 
 * 
 */
 
function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: takes a value and returns type of value as a string
 * @param {Any datatype} value: any data type
 * 
 * @return value: will return the type of value as a string 
 */
 
function typeOf(value){
   if (value instanceof Date){
       return 'date';
   } else if (Array.isArray(value)){
       return 'array';
   }else if (value === null){
       return 'null';
   }else {
       return typeof value;
   }

}

module.exports.typeOf = typeOf;

/**
 * first: check to see if the number is in an array bringing out the number of elements needed, or 
 *      [], or first element in array
 * 
 * @param {Array} array: The array being tested
 * @param {number} number: The number used to test if its a number in an array
 * 
 * @return {[]}: if the number given is a negative
 * @return {first element in array}: if number is not given or not a number
 * @return {whole array}: if number given is greater than the array's length 
 * @return {modified array}: will return an array's elements up to the given number
 */
 
 function first(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    }
    return number === undefined ? array[0] : array.slice(0,number);
}

module.exports.first = first();

/**
 * last: check to see if the number is in an array will bring out the number of elements desired, or
 *      [], or last element in array
 * 
 * @param {Array} array: any array that will be tested 
 * @param {number} number: the number that will be passed to test if it is a number in the array
 * 
 * @return {[]}: if the number is a negative
 * @return {last element in array}: if the number is not given or not a number 
 * @return {whole array}: if number given is greater than the array's length
 * @return {modified array}: will return an array's elements up to the given number to the end
 */
 
 function last(array, x){
    if (!Array.isArray(array) || x < 0) {
      return [];
    }
    return x === undefined ? array[array.length - 1] : array.slice(-x , array.length);
    
}

module.exports.last = last();

/**
 * indexOf: return the index of the first instance of a value
 * 
 * @param {Array} array: elements in an array that might have the same values set in different index
 * @param {value} valuer: Value that will be used to find its first occurance 
 * 
 * @return {-1} : if value given is not in array
 * @return {number}: returns index where the value is first seen
 * 
 */
 
 function indexOf(array,value){
  for (let i = 0; i < array.length;i++){
     let element = array[i];
     if(element === value){
         return i; 
     }
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: check if the array has a certain value
 * 
 * @param {Array} array: iterate through the array and test it's values 
 * @param {value} value: any date type value
 * 
 * @return {true}: if the value is within the array
 * @return {false}: if the value is not in the array
 * 
 */
 
function contains(array,value){
 return array.includes(value) ? true : false; 
}


module.exports.contains = contains;


/**
 * unique: will return an array with no duplicates
 * 
 * @param {Array} array: an array with duplicates
 * @return {Array}: an new array with the duplicates removed 
 * 
 * 
 */
 
 function unique(array){
const newArr = [];
   each(array, function(element){
if(!(newArr.includes(element))){
newArr.push(element);
 }
}); 
  return newArr;
}

module.exports.unique = unique;

/**
 * filter: The anonymous function calls upon the element, index, and array. The callback function
 *      will test the element for true values. If this condition is met, the element will get pushed into a new array.
 *              
 * 
 * @param {Array} array: any array 
 * @param {function} function: a function that tests truthy of a value
 * 
 * @return {array}: a new array with the true elements in 
 */
 
 function filter(array, callback){
  const filterArr = [];
  each(array, function(element, index, array){
      if(callback(element, index, array)){
          filterArr.push(element);
      }
  })
   return filterArr;
   
    
};

module.exports.filter = filter;

/**
 * reject: The function calls upon the element, index, and array. The call back function
 *      will test the element for falsy values. If this condition is met, the element will get pushed into a new array.
 *              
 * 
 * @param {Array} array: any array 
 * @param {function} function: a function that tests falsy of a value
 * 
 * @return {array}: a new array with the falsy elements in 
 */
 
function reject(array, callback){
const filterArr = [];
 each(array, function(element, index, array){
      if(!callback(element, index, array)){
          filterArr.push(element);
      }
  })
  return filterArr;




}


module.exports.reject = reject;

/**
 * partition: Takes an array and a function that will call each element, index, and collection. 
 * The elements that return true will be pushed into a new array. The elements that return false will pushed into a new array.
 * The  end result will be a BIG array that has two subarrays each contains true and falsy values. 
 * 
 * 
 * @param {Array} array: array that has truthy and falsy values
 * @param {function} function: function that returns true if values given are true
 * 
 * @return {Array}: An array that has an array of true values and another array of false values
 * 
 */
 
function partition(array, test){
 const output = [];
 output.push(filter(array, test));
 output.push(reject(array,test));
 return output;
}
module.exports.partition = partition;

/**
 * map: It will take an collection of an array or object. The function will call upon it's elements. This function will 
 * push the new modified element into a new array.
 * 
 * @param {Array or Object} array or object : an array or object which its elements will be used
 * @param {function} function: function that will do something a give back another value
 * 
 * @return {Array}: The callback function element will be pushed into an new array
 * 
 */
 
 function map(collection, callback){
 const mapArr = [];

each(collection, function(element, index, collection){
    mapArr.push(callback(element, index, collection));
    
    
});
return mapArr;
}

module.exports.map = map;


/**
*pluck:  Iterate through the object that is in an array and see if the given property key is in the object.
* If the property key is found, the values of the key will be pushed into a new array.
* Then, it will return an array with the values.
* @param: {Array} array: an array of objects
* @param: {string} string: a string of the property key
* @return: {array}: will return an array with the values
*/

function pluck(arrayObj, property){
return arrayObj.map(element => element[property]);
};

 module.exports.pluck = pluck;
 
 

/**
*every: takes an collection and function and it will check if every element in that collection is true
* If there is no callback function given, it will return true for truthy results.
*If there is no callback function given, it will return false for falsy results.
* @param: {collection} collection: Can be any collection
* @param: {function} function: this function will be called upon by the collection's element
* @return: {Boolean}: If ALL the values are true, it will return a true boolean value. Else, it will return false.
*/

function every(collection, fun){
 if (typeof(fun) !== 'function') {

      return !contains(collection, false);
   }
    var newArray = [];
    newArray = map(collection, fun);
    console.log(newArray);
    return !contains(newArray, false);

}

module.exports.every = every;

/**
  * some: A function will call upon the object or array's element. 
  * If at least one element returns true from the function, it will return true. If all the elements are false, then it will return false. 
  *     
  * If there is no callback function given, it will return true for truthy results.
  *If there is no callback function given, it will return false for falsey results.
  * 
  * @param {Array or Object} collection: an array or object
  * @param {function} fun: a function that will test the elements
  * 
  * @return {true}: If at least one element is true
  * @return {false}: if all elements are false
  * 
  * 
  */
  
  function some(collection,fun){
    
   if (typeof(fun) !== 'function') {
     return contains(collection, true);
  }
   var newArray = [];
   newArray = map(collection, fun);
   return contains(newArray, true);

}
module.exports.some = some;

 /**
    * reduce: It will add values in a reduced array 
    * 
    * @param {Array} array: array with contents within to reduce
    * @param {funciton} function: function to pass element, acc, and index of the array
    * @param {datatype} seed: determines first position, if it is not given it will be the first index of the array
    * 
    * @return {value} : will be value of previous value (acc) + current value
    * 
    * 
    * 
    */
    
    
function reduce(collection, iterator, accumulator) {
  let previous = accumulator;
  if (accumulator === undefined){
    previous = collection[0];
    each(collection, function(e, i){
      if (i !== 0){
        previous = iterator(previous, e, i);
      }
    });
  } else {
    each(collection, function(e, i){
     previous = iterator(previous, e, i);
    });
  }
  return previous;
  };

module.exports.reduce = reduce;

/**
*extend: Takes in many object as arguments and returns one object with copy properties.
*
* @param: {objects} object: mulitple objects with key/value pairs 
* @return: {array}: copy the properties from the objects and update it to the first object
*/

function extend(...objArr){
return Object.assign(...objArr);
}

 module.exports.extend = extend;