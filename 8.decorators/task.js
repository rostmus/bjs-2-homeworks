
function cachingDecoratorNew(func) {
  let cashe = []
  function wrapper(... args) {
    const hash = args.join(',')
    let element = cashe.find((item)=>item.hash === hash)
    if (element) {
      console.log('Из кэша: ' + element.result)
      return 'Из кэша: ' + element.result
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
  return function (...args) {
    if(flag === false) {
      func(...args)
      flag = true
    }
    clearTimeout(timeout)
    timeout = setTimeout(()=> {
      func(...args)
      flag === false
    },ms)
    }
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
    }
    clearTimeout(timeout)
    timeout = setTimeout(()=> {
      func(...args)
      flag === false
    },ms)
    }

  return wrapper
}
function saySay() {
  console.log('hi')
}
const upgrDebounce = debounceDecorator2(saySay, 2000)
