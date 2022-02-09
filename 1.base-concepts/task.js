'use strict'
function solveEquation(a, b, c) {
  let arr = []
  let D = b**2 - 4*a*c;
  if (D === 0) {
    let x = -b/(2*a)
    arr.push(x)
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D) )/(2*a)
    let x2 = (-b - Math.sqrt(D) )/(2*a)
    arr.push(x1, x2)
  }
  
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {    //процентная ставка, сумма первоначального взноса, сумма кредита и срок
  if (typeof percent !== 'string' && typeof percent !== 'number') {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
  } else if (typeof contribution !== 'string' && typeof contribution !== 'number') {
    return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`
  } else if (typeof amount !== 'string' && typeof amount !== 'number') {
    return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`
  } else {
  let totalAmount;
  let S = amount - contribution // тело кредита
  let now = new Date() //новая дата
  let n = date.getFullYear()*12 + date.getMonth() - now.getFullYear()*12 - now.getMonth()  //количество месяцев
  let P = percent/(12*100)// (1/12 процентной ставки)
  let check = S*(P + (P/((Math.pow((1 + P), n)-1))))  //ежемесячная оплата
   totalAmount = Number((check * n).toFixed(2))
  // код для задачи №2 писать здесь

  return totalAmount;
  }
}
