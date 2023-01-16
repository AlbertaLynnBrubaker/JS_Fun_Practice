const { m, addb, mulb } = require('./Solutions/AlbertaLynnBrubaker_fun_solutions')

const liftmbM = (func, str) => (m1, m2) => {
  return obj = {value: func(m1.value, m2.value), source: `(${m1.source}${str}${m2.source})`}
}
