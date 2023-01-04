const identity = x => x

const addb = (a, b) => a + b

const subb = (a, b) => a - b

const mulb = (a, b) => a * b

const minb = (a, b) => a < b ? a : b

const maxb = (a, b) => a > b ? a : b

const add = (...nums) => {
  let total = 0
  nums.forEach(num => total = total + num)
  return total
}

const sub = (...nums) => {
  let total = nums[0]
  nums.slice(1).forEach(num => total = total - num)
  return total
}

const mul = (...nums) => {
  let total = nums[0]
  nums.slice(1).forEach(num => total = total * num)
  return total
}

const min = (...nums) => {
  let relLow = nums[0]
  nums.forEach(num => {
    if(num < relLow) {
      relLow = num
    }
  })
  return relLow
}

const max = (...nums) => {
  let relHigh = nums[0]
  nums.forEach(num => {
    if(num > relHigh) {
      relHigh = num
    }
  })
  return relHigh
}

const addRecurse = (...nums) => {
  if(nums.length === 1) return nums[0]
  
  return nums.pop() + addRecurse(...nums)
}

const mulRecurse = (...nums) => {
  if(nums.length === 1) return nums[0]

  return nums.pop() * mulRecurse(...nums)
}

const minRecurse = (...nums) => {
  if (nums.length === 1) return nums[0]
  let secondNum = minRecurse(...nums.slice(1))
  if (nums[0] < secondNum) return nums[0]
  return secondNum
}

const maxRecurse = (...nums) => {
  if (nums.length === 1) return nums[0]
  let secondNum = maxRecurse(...nums.slice(1))
  if (nums[0] > secondNum) return nums[0]
  return secondNum
}

const not = func => (...args) => !Boolean(func(...args))

const acc = (func, initial) => (...args) => {
  let acc = initial
  args.forEach(arg => acc = func(acc, arg))
  return acc
}

const accPartial = (func, start, end) => {
  return (...args) => {
    const accumulated = args
      .slice(start, end)
      .reduce((acc, val) => func(acc, val))
    args.splice(start, end - start, accumulated)
    return args
  }
}

const accRecurse = (func, initial) => {
  const x = (...args) => {
    const [accumulator, ...rest] = args
    if (!rest.length) {
      return accumulator
    }
    return func(accumulator, x(...rest))
  }
  return (...args) => x(initial, ...args)
}

const fill = (num) => {
  const array = []
  for(let i = 0; i < num; i++) {
    array.push(num)
  }
  return array
}

const fillRecurse = (num, array = []) => {
  if(array.length === num) return array
  array.push(num)
  return fillRecurse(num, array)
}

const set = (...args) => {
  const array = []
  args.forEach(arg => {
    if(!array.includes(arg)) return array.push(arg)
  })
  return array
}

const identityf = (arg) => () => arg

const addf = a => b => a + b

const liftf = (func) => a => b => func(a, b)

const pure = (x , y) => {
  let z
  const impure = (x) => {
    y++
    z = x * y
  }

  impure(x)
  return [y, z]
}

const curryb = (func, a) => b => func(a, b)

const curry = (func, ...outer) => (...inner) => {
  return func(...outer, ...inner)
}

const inc = (num) => add(num, 1)

const twiceUnary = (func) => a => func(a, a)

const doubl = (num) => twiceUnary(addb)(num)

const square = (num) => twiceUnary(mulb)(num)

const twice = (func) => (...args) => func(...args, ...args)

const reverseb = (func) => (a, b) => func(b, a)

const reverse = (func) => (...args) => {
  const reversed = []
  while(args.length !== 0) reversed.push(args.pop())
  return func(...reversed)
}

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  accPartial,
  accRecurse,
  fill,
  fillRecurse,
  set,
  identityf,
  addf,
  liftf,
  pure,
  curryb,
  curry,
  inc,
  twiceUnary,
  doubl,
  square,
  twice,
  reverseb,
  reverse,
  // composeuTwo,
  // composeu,
  // composeb,
  // composeTwo,
  // compose,
  // limitb,
  // limit,
  // genFrom,
  // genTo,
  // genFromTo,
  // elementGen,
  // element,
  // collect,
  // filter,
  // filterTail,
  // concatTwo,
  // concat,
  // concatTail,
  // gensymf,
  // gensymff,
  // fibonaccif,
  // counter,
  // revocableb,
  // revocable,
  // extract,
  // m,
  // addmTwo,
  // addm,
  // liftmbM,
  // liftmb,
  // liftm,
  // exp,
  // expn,
  // addg,
  // liftg,
  // arrayg,
  // continuizeu,
  // continuize,
  // vector,
  // exploitVector,
  // vectorSafe,
  // pubsub,
  // mapRecurse,
  // filterRecurse,
};