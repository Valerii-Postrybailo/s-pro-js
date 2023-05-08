// Напишіть функцію, яка приймає на вхід масив рядків і повертає кількість унікальних рядків

const findUniqueString = arr => { 
  let uniqueStrings = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueStrings.includes(arr[i])) {
      uniqueStrings.push(arr[i]);
    }
  }
  return uniqueStrings.length;
}

console.log(findUniqueString(["fsdgs", "fsdgs", "fsdgs", "fsdgs", "fsdgsdggsd", "dsfsdvzvz", "zxq", "vxcbxc"]));