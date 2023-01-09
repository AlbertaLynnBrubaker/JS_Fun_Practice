const { addb } = require('./Solutions/AlbertaLynnBrubaker_fun_solutions')

const extract = (array, property) => {
  const extracted = []
  array.forEach(obj => {
    extracted.push(obj[property])
  })
  return extracted
}