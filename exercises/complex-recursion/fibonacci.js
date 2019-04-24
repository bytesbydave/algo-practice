function slowFibonacci(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

const fibonacci = memoize(slowFibonacci) 

function memoize(fn) {
  const cache = {}
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

module.exports = fibonacci