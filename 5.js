//Напишіть функцію, яка приймає на вхід масив чисел і повертає їх середнє значення. 
//Реалізуйте програму двома способами: через цикли та через функції масивів.

const avarageValue = arr => arr.reduce( (a,b) => a+ b ) / arr.length

console.log(avarageValue([3, 5, 10,6, 8]))

////////////////////////////////////////

const avarageValueWithFor = (arr) => {

  let avarageValue = 0 

  for (let i = 0; i < arr.length; i++){
    avarageValue += arr[i]
  }

  return avarageValue / arr.length
}

console.log(avarageValueWithFor([3, 5, 10,6, 8]))
