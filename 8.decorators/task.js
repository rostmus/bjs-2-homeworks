
function cachingDecoratorNew(func) {
  let cashe = []
  function wrapper(... args) {
    const hash = args.join(',')
    let idx = cashe.find((item)=>item.hash === hash)
    if (idx != undefined ) {
      console.log('Из кэша: ' + idx.result)
      return 'Из кэша: ' + idx.result
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
}


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
    }
      // } else {
      //   clearTimeout(timeout)
      //   timeout = setTimeout(() => {flag = false}, ms)
      // }

    }
  
  return wrapper
  // Ваш код
}



function debounceDecorator2(func, ms) {
  wrapper.quantity = 0
  let timeout
  let flag = false
  function wrapper(...args) {
    wrapper.quantity +=1
    if(flag === false) { 
      func(...args)
      flag = true
      timeout = setTimeout(() => {
        flag = false
      }, ms)
    } 

    }

  return wrapper
  // Ваш код
}
function saySay() {
  console.log('hi')
}
const upgrDebounce = debounceDecorator2(saySay, 2000)
