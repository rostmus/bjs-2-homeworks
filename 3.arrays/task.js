

function compareArrays(arr1, arr2) {
  let result = (arr1.length === arr2.length && arr1.every(function(number, index) {
    return number === arr2[index]
  }))
  
  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(function(number) {
    return number > 0
  }).filter(function(number){
   return number % 3 === 0 
  }).map(function(number) {
    return number * 10
  });

  // Ваш код

  return resultArr; // array
}