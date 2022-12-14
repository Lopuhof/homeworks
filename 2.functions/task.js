// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
    min = arr[0];
    max = arr[0];
    sum = 0;
    
    for (i = 0; i < arr.length; i = i + 1) {
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
  let arrOfArr = [[1, 2, 3], [4, 5, 6]];
  let max = 0;
  let item;
  let small;
  let big;
  let dif;
  

function worker(arr) {
  let sum;
  sum = 0;
    
  for (i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i];
    if (sum > max) {
    max = sum;
    };
  };
    
  console.log('Сумма элементов массива: ' + sum);
  return sum;
};

function makeWork(arrOfArr, func) {
    
  for (j = 0; j < arrOfArr.length; j = j + 1) {
    item = arrOfArr[j];
    func(item);
  };
    
    if (func === worker) {
      console.log('Наибольшая сумма среди массивов: ' + max);
  };  
  return max;
};

makeWork(arrOfArr, worker);

// Задание 3
  function worker2(arr) {
  
    for (k = 0; k < arr.length; k = k + 1) {
      small = arr[0];
      big = arr[0];
        
      for(let l of arr) {
        
        if(small > l) small = l;
        if(big < l) big = l;
}
  dif = Math.abs(big) - Math.abs(small);  
  };
  
  console.log('Минимальное значение внутри массива: ' + small, 'Максимальное значение внутри массива: ' + big, 'Модуль разности между максимумом и минимумом: ' + Math.abs(dif));
  return dif;
};
