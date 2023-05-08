// 2. Напишіть функцію, яка приймає кількість мілісекунд та повертає Promise, 
// який стане resolved через передану кількість секунд.

const returnPromise = (ms) => {
  return new Promise ((resolved) => {
    setTimeout(() => {
      resolved(`Resolved after ${ms} ms`)
    },ms)
  })
}

returnPromise(5000)
  .then(
    value => {
      console.log(value);
    }
  )