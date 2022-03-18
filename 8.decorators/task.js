
function cachingDecoratorNew(func) {
  let cashe = []
  function wrapper(... args) {
    const hash = args.join(',')
    let idx = cashe.findIndex((item)=>item.hash === hash)
    if (idx !== -1) {
      console.log('Из кэша: ' + cashe[idx].result)
      return 'Из кэша: ' + cashe[idx].result
    } 
    let result = func(...args)
    cashe.push({hash, result })
    if (cashe.length > 5) {
      cashe.shift()
    }
    console.log('Вычисляем: ' + result)
    return 'Вычисляем: ' + result
  }
  return wrapper

  // Ваш код
  
}
const addThree = (a, b, c) => a+b+c
const upgradedAddThree = cachingDecoratorNew(addThree)

function debounceDecoratorNew(func, ms) {
  let timeout
  let flag = false
  function wrapper(...args) {
    if(flag === false) { 
      func(...args)
      flag = true
      timeout = setTimeout(() => {
        flag = false
      }, ms)
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(() => {flag = false}, ms)
      }

    }
  
  return wrapper
  // Ваш код
}
const sendSignal = () => console.log('сигнал отправлен')
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000)


function debounceDecorator2(func, ms) {
  let count = 0
  let timeout
  let flag = false
  function wrapper(...args) {
    if(flag === false) { 
      func(...args)
      count +=1
      flag = true
      timeout = setTimeout(() => {
        flag = false
      }, ms)
      } else {
        count +=1
        clearTimeout(timeout)
        timeout = setTimeout(() => {flag = false}, ms)
      }

    }


  return wrapper
  // Ваш код
}
const sendSignal1 = () => console.log('сигнал отправлен')
const upgradedSendSignal1 = debounceDecorator2(sendSignal1, 2000)
