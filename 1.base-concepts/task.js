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
  if (Number(percent) !== Number(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } 

  if (Number(contribution) !== Number(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } 

  if (Number(amount) !== Number(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  } 
  
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

