// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0]
  max = arr[0]
  sum = 0
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (element > max) {
      max = element
    } else if (element < min ) {
      min = element
    }
    sum += element
  }
  avg = Number((sum / arr.length).toFixed(2))
  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}



function makeWork(arrOfArr, func) {
  let max = 0;
  for (let j = 0; j < arrOfArr.length; j++) {
    if (worker2(arrOfArr[j]) > max) {
      max = worker2(arrOfArr[j])
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
let dif = 0
let min = arr[0]
let max = arr[0]
 for (let i = 0; i < arr.length; i++) {
 let particle = arr[i]
 if(particle > max) {
   max = particle
 } else if(particle < min) {
   min = particle
 }
 }
 dif = Math.abs(max - min)
 return dif
}
