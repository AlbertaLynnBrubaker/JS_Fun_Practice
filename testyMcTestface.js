const { add, doubl, fill, max } = require('./Solutions/AlbertaLynnBrubaker_fun_solutions')

const compose = (...funcs) => (...args) => {
  let res = [...args]
  funcs.forEach(func => {
    if(Array.isArray(res)) res = func(...res)
    else res = func(res)
  })
  return res
}

const f = compose(add, doubl, fill, max)

console.log(f(0, 1, 2))