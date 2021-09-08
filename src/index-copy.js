// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce((acc, each) => {
//   //  return each % 2 === 0 ? acc + each : acc
//    return each % 2 ? acc  : acc + each
// }, 0)

// console.log(result);

// const customers = ['A', 'B', 'C', 'D', 'E']
// const result = customers.map(each => {
//   // if(each !== 'B')
//   // // return each.toLocaleLowerCase() + '@example.com'
//   // return `${each.toLocaleLowerCase()}@example.com`
//   // else
//   // // return each + '@example.com'
//   // return `${each}@example.com`

//   // return (each==='B')?each+'@example.com':each.toLowerCase() + '@example.com'
//   return `${each==='B' ? each : each.toLocaleLowerCase()}@example.com`
// })
// console.log(result);

// const result = customers.map(each => each)
// const result = customers.filter(each => each === 'A' || each === 'C')
// const result = customers.filter(function(each) {
//   return each === 'A'
// })

// console.log(result);

// function random() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // const result = Math.random();
//       // if (result < 0.5) {
//         resolve(Math.random());
//       // } else {
//       //   reject("error!");
//       // }
//     }, 3000);
//   });
// }

// async function caller() {
//   // const result = await random();

//   // return result
//   try {
//     const result = await random()
//     const result2 = await random()
//     console.log(result2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// caller()


// console.log(caller());

// random()
//   .then((result) => {
//     return random()
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function random(value, cb) {
//   setTimeout(() => {
//       cb(Math.random() * value)
//   }, 3000)
// }

// random(5, (result) => {
//   console.log(result)
// })

// function random () {

//   setTimeout(()=>{
//     return Math.random()
//   }, 1000)

// }
// console.log(random());

// function random(cb) {
//   setTimeout(() => {
//     cb(Math.random())
//   }, 3000)
// }

// random((result) => {
//   console.log(result);
// })

// console.log('0');

// setTimeout(() => {
//   console.log('1');
// }, 1000)

// console.log('2');
