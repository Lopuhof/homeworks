'use strict';

let arr1 = [1, 2, 3];
let arr2 = [2, 3];

function compareArrays(arr1, arr2) {
  let result;
    
  result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    
  return result;
};

compareArrays(arr1, arr2);

let arr = [10, 9, -6, 1];
let plusEl;

function advancedFilter(arr) {
  let plus = arr.filter(function(n) {
    plusEl = ((n > 0) && (n % 3 === 0));

    return plusEl;
  });
};

function advancedFilter2(plusEl) {
  let multiplier = plusEl.map(function(l) {

    return l * 10;
  });
};

let resultArr = plusEl;

return resultArr; // array




