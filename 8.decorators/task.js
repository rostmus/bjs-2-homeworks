
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



function debounceDecorator2(func, ms) {
  wrapper.history = 0
  let timeout
  let flag = false
  function wrapper(...args) {
    
    if(flag === false) { 
      func(...args)
      wrapper.history +=1
      flag = true
      timeout = setTimeout(() => {
        flag = false
      }, ms)
      } else {
        wrapper.history +=1
        clearTimeout(timeout)
        timeout = setTimeout(() => {flag = false}, ms)
      }

    }

  return wrapper
  // Ваш код
}
