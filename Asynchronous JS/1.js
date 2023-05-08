// 1. Напишіть функцію, яка повертає Promise, який стане resolved через 1 секунду зі значенням "Hello, world!".

const returnPromise = () =>{
  return new Promise ((resolved) =>{
    setTimeout(()=>{
      resolved ("Hello, world!")
    }, 1000) 
  })
}

returnPromise()
  .then(
    value => {
      console.log(value);
    }
  )
