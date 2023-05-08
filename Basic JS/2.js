// Напишіть функцію, яка виводить на екран повідомлення "Passed", якщо переданий аргумент менше 10 та більше 2

const check = value => {
  if (value < 10 && value > 2) {
    return "Passed";
  } else {
    return "Failed";
  }
}

console.log(check(9));
console.log(check(2));
console.log(check(11));
console.log(check(10));




