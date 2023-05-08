// Реалізуйте дві функції: перша функція повинна ділити аргумент "a" на аргумент "b". 
// Якшо аргумент "b" дорівнює нулю, функція повинна кидати помилку. 
// Друга функція повинна викликати першу та опрацьовувати помилку.

const divide = (a,b) => {
  if ( b === 0) throw Error ("You can't divide by zero!");

  return a / b;
};

try {
  console.log(divide(2,2));
} catch (error) {
  throw console.error(error);
};