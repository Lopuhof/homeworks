'use strict';

let arr1 = [1, 2, 3];
let arr2 = [2, 3];

function compareArrays(arr1, arr2) {
  let result;
    
  result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    
  return result;
};

compareArrays(arr1, arr2);

let arr = [4, 8, 6, 9];

let x3 = element => (element % 3) === 0;
let plus = element => (element > 0) === true;
let ten = element => element * 10;

function advancedFilter(arr) {
    let result;
    result = arr.filter(x3).filter(plus).map(ten);
    
    return result;
};

advancedFilter(arr);




