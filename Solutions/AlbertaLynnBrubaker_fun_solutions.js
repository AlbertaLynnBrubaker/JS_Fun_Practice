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
  // accPartial,
  // accRecurse,
  // fill,
  // fillRecurse,
  // set,
  // identityf,
  // addf,
  // liftf,
  // pure,
  // curryb,
  // curry,
  // inc,
  // twiceUnary,
  // doubl,
  // square,
  // twice,
  // reverseb,
  // reverse,
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