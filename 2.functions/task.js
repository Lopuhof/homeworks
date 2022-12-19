// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
    min = arr[0];
    max = arr[0];
    sum = 0;
    
    for (let i = 0; i < arr.length; i = i + 1) {
      if (arr[i] < min) {
          min = arr[i];
        } else if (arr[i] > max) {
          max = arr[i];
        };
      sum = sum + arr[i];
    };
    avg = (sum / arr.length).toFixed(2);
    avg = Number(avg);

  console.log({min: min, max: max, avg: avg});
  return {min: min, max: max, avg: avg};
}; 

getArrayParams([-99, 99, 10]);
  
getArrayParams([14, 18, 92, 0, -6]);


// Задание 2
let arrOfArr = [[0, 1, 2], [-1, -100]];

function worker(arr) {
  let sum;
  sum = 0;
    
  for (let i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i];
  };
  return sum;
};

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
    
    for (let i = 0; i < arrOfArr.length; i = i + 1) {
      func(arrOfArr[i]);
      if (max < func(arrOfArr[i])) {
        max = func(arrOfArr[i]);
     };        
    };
    
  return max;
};

makeWork(arrOfArr, worker2);

// Задание 3
  function worker2(arr) {
    let small;
    let big;
    let dif;
    small = arr[0];
    big = arr[0];
    
    for (let i = 0; i < arr.length; i = i + 1) {
      if (arr[i] < small) {
        small = arr[i];
      } else if (arr[i] > big) {
        big = arr[i];
      };
    };
  
    dif = Math.abs(big) - Math.abs(small);  
    console.log('Минимальное значение внутри массива: ' + small, 'Максимальное значение внутри массива: ' + big, 'Модуль разности между максимумом и минимумом: ' + Math.abs(dif));
    console.log('----------------------------------------------------');
    return Math.abs(dif);
  };
