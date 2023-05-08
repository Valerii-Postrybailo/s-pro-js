// 3. Напишіть функцію, яка приймає масив чисел і повертає Promise, який буде розв'язаний з максимальним числом в масиві. 
// Якщо масив порожній, Promise повинен бути resolved зі значенням null.

const returnPromise = (arr)=>{
  return new Promise ((resolved, rejected) =>{
    if (arr.length > 1){
      resolved(arr.reduce((accum, current) => current >  accum ? current : accum))
    } else {
      resolved(null)
    }
  })
}


const testArr = [1, 3, 5, 10, 41, 4, 2]


returnPromise(testArr).then(value => console.log(value))