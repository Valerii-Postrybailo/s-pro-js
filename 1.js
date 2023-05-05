//Напишіть функцію, яка повертає true, якщо заданий аргумент є числом.

const isNumber = value =>  {
  if (!isNaN(value)  && typeof value === "number") {
    return true;
  } else {
    return false;
  };

};

console.log(isNumber(345));
console.log(isNumber(Infinity));
console.log(isNumber(NaN))
console.log(isNumber("345"))



