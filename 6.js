// Напишіть функцію, яка приймає на вхід масив рядків і повертає найкоротший рядок. 
// Реалізуйте програму двома способами: через цикли та через функції масивів.

const shortestString = arr => {
  return arr.reduce((shortest, current) => {
    if (current.length < shortest.length) {
      return current;
    } else {
      return shortest;
    }
  });
};

console.log(shortestString([ "r34", 'fsdgs', 'fsdgsdggsd', 'dsfsdvzvz', 'zxq', "q", 'vxcbxc' ]));

///////////////////////////////////////////

const shortestStringWithFor = arr => {
  let shortest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    };
  };
  return shortest;
};

console.log(shortestString([ "z", 'fsdgs', 'fsdgsdggsd', 'dsfsdvzvz', 'zxq', "q", 'vxcbxc' ]));