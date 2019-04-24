const climbStairs = memoize(slowClimb)

function slowClimb(steps) {
  if (steps <= 2) {
    return steps
  }
  return climbStairs(steps - 1) + climbStairs(steps - 2)
}

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

module.exports = climbStairs