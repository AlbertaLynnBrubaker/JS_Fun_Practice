const { sub } = require('./Solutions/AlbertaLynnBrubaker_fun_solutions')

const reverse = (func) => (...args) => {
  const reversed = []
  while(args.length !== 0) reversed.push(args.pop())
  return func(...reversed)
}

console.log(reverse(sub)(1, 2, 4))