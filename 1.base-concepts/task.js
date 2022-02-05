'use strict'
function solveEquation(a, b, c) {
  let arr = []
  let D = b**2 - 4*a*c;
  if (D === 0) {
    let x = -b/(2*a)
    arr.push(x)
  } else if (D > 0) {
    let x1, x2
    x1 = (-b + Math.sqrt(D) )/(2*a)
    x2 = (-b - Math.sqrt(D) )/(2*a)
    arr.push(x1, x2)
  } else { 
    return arr
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {    //процентная ставкаэ, сумма первоначального взноса, сумма кредита и срок
  for (let i = 0; i < arguments.length; i ++) {
    let z = arguments[i]
    if (typeof z !== 'string' && typeof z !== 'number') {
  console.log(`Параметр z содержит неправильное значение ${z}`)
    }
  }
  let totalAmount;
  let S = amount - contribution // тело кредита
  let now = new Date() //новая дата
  let n = date.getFullYear()*12 + date.getMonth() - now.getFullYear()*12 - now.getMonth()
  let P = percent/(12*100)// (1/12 процентной ставки)
  let check = S*(P + (P/((Math.pow((1 + P), n)-1))))
   totalAmount = Number((check * n).toFixed(2))
  // код для задачи №2 писать здесь

  return totalAmount;
}
