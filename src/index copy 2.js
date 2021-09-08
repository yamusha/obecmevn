const {sum, substract} = require('./math')
const random = require('./random')

console.log(sum(1,2));
console.log(substract(3,1));
console.log(random());
// const {EventEmitter} = require('events')
// const e = new EventEmitter()

// e.on('HELLO', () => {
//   console.log('hello');
// })
// e.on('WORLD', () => {
//   console.log('world');
// })

// setTimeout(()=> {
//   e.emit('HELLO')
// }, 2000)
// setTimeout(()=> {
//   e.emit('WORLD')
// }, 4000)