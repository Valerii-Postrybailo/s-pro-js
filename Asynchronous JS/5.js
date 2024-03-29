// 5. Напишіть функцію, яка повертає promise.
// Через 10 мілісекунд promise executor повинен почати рахувати від 0 до 1000000000 використовуючи цикл, а потім стає resolved.
// Викличте цю функцію та виміряйте витрачений час використовуючи console.time та console.timeEnd.
// Викличте цю функцію чотири рази паралельно та виміряйте витрачений час.
// Викличте цю функцію чотири рази послідовно та виміряйте витрачений час.
// Напишіть у коментарі чи змінився витрачений час між послідовним та паралельним викликом функцій чи ні.


const returnPromise = ()=>{

  return new Promise ((resolved) => {
    setTimeout(()=>{
      for (let i = 0; i <= 1_000_000_000; i++){}
      resolved("I worked!")
    },10)
  })
}

//////////////////////////////////////////////////////////////////

// const soloRequest = () =>{
//   console.time("timer1")

//   returnPromise()

//   .then(value => {
//     console.log("Solo request fn:", value)
//     console.timeEnd("timer1")
//   })
// }

// soloRequest()  // Середній діапазон виконання 1.000 - 1.300 s.

////////////////////////////////////////////////////////////////////

// const promiseChain = () =>{

//   console.time("timer2")

//   returnPromise()

//     .then(value =>{
//       console.log(value, "#1")
//       return returnPromise()
//     })

//     .then(value =>{
//       console.log(value,"#2")
//       return returnPromise()
//     })

//     .then(value =>{
//       console.log(value,"#3")
//       return returnPromise()
//     })

//     .then(value =>{
//       console.log("Promise chain fn:",value,"Finish!")
//       console.timeEnd("timer2")
//     })
// }

// promiseChain() // Середній діапазон виконання 3.300 - 3.800 s.

///////////////////////////////////////////////////////

const parallelExecution = async() => {
  console.time("timer");

  await Promise.all([
    returnPromise(),
    returnPromise(),
    returnPromise(),
    returnPromise()
  ]);

  console.log("Finish");
  console.timeEnd("timer");
};

parallelExecution(); // Середній діапазон виконання +- 3.200 s.


//Хоча були деякі скачки і довгі затримки в обох варіантах, мабуть звязані з роботою комп'ютера,
// можна сказати, що паралельне виконання було швидше (+- 3.200 s.) ніж послідовне, яке здебільшого 
//  було у діапазоні від 3300 до 3800 s. 


