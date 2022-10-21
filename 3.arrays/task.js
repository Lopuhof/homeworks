'use strict';

let arr1 = [1, 2, 3];
let arr2 = [2, 3];

function compareArrays(arr1, arr2) {
  let result;
    
  result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    
  return result;
};

compareArrays(arr1, arr2);

let massive = [10, 9, -6, 1];
let plusEl;

function advancedFilter(massive) {
  let plus = massive.filter(function(n) {
    plusEl = ((n > 0) && (n % 3 === 0)).map(function(l) {
    });
  });
};

let resultArr = plusEl;

return resultArr; // array




