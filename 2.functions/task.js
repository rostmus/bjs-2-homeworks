// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0]
  max = arr[0]
  sum = 0
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (element < element[i - 1]) {
      max = element
    }
    sum += element
  }
  avg = sum / arr.length
  // Ваш код

  return { min: min, max: max, avg: avg };
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
