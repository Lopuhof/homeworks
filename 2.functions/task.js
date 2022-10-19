// Задание 1

let arr = [14, 18, 92, 0, -6];

function getArrayParams(arr) {
  let min, max, sum, avg;
    sum = 0;
    
    for (i = 0; i < arr.length; i = i + 1) {
        if (arr[i] > arr[i - 1]) {
            max = arr[i];
            sum = sum + max;
        } else if (arr[i] < arr[i - 1]) {
            min = arr[i];
            sum = sum + min;
        };
        
        avg = sum / arr.length;
    }
  // Ваш код

  return { min: min, max: max, avg: avg };
    
    getArrayParams(arr);
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
