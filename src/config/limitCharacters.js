const ampersand = '&'
const less = '<'
const greater = '>'
const quotes = '"'
const apostrophe = '\''
const plus = '+'
const solidus = '/'
const underscore = '_'
const reverse = '\\\\'
const returnCharacter = '\\r'
const newLine = '\\n'
const tab = '\\t'
const backspace = '\\b'
const feed = '\\f'

const arraySpecialAlphanumeric = [
  reverse,
  apostrophe,
  tab,
  backspace,
  feed,
  returnCharacter,
  newLine,
  ampersand,
  less,
  greater,
  quotes,
  plus,
  solidus,
  underscore,
 ]

export const getSpecialAlphanumeric = () => {
  let stringSpecial = ''
  arraySpecialAlphanumeric.forEach(char => {
    stringSpecial = `${stringSpecial}${char}`
  })
  return stringSpecial
}