// 4. Напишіть код-приклад, який зачекає на виконання 100 promise, кожен з яких виконується через одну секунду. 
// Якщо будь-який promise став rejected, виведіть помилку, у іншому випадку виведіть масив виконаних promise.

const hundredPromises = (a) => {
  return new Promise ((resolved, rejected) =>{
    setTimeout(() =>{
      if( a === 1){ // я використовую "а" для емуляції умови при якій проміси будуть не дійсними
        resolved("resolved")
      } else {
        rejected(new Error())
      }
    }, 1000)
  })
}

const fulfieldPromises = []

for (let i=0; i < 100; i++){
  fulfieldPromises.push(hundredPromises(1))
}

Promise.all(fulfieldPromises)
  .then(value => console.log(value))
  .catch(error => console.log(error));