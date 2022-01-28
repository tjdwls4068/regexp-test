const str = `
010 0100 1020
ssj@naver.com
https://www
the lazy
abbcccdddd
`

const regexp = /lazy/gi
// console.log(regexp.test(str))
console.log(str.replace(regexp,'AAA'))
console.log(str)