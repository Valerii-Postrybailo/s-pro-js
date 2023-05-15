// 7. Відредагуйте функцію test, підготуйте дві нові версії з різними назвами: 
// promise-based та async-await варіант. Ви можете змінити те, як викликається функція.

/*НЕ ЗМІНЮЙТЕ ЦЮ ФУНКЦІЮ.
 * Функція-приклад, яка виконується асинхронно.
 * Функція приймає один аргумент - error-first callback.*/

function download(url, errorFirstCallback) {
  // ...Виконує якусь асинхронну операцію, для прикладу:
  // setTimeout(() => errorFirstCallback(new Error("Async error message")), 10);
  setTimeout(() => errorFirstCallback(null, {content:"Some content"}), 10);
}

// /* МОЖЕТЕ ЗМІНИТИ КОД НИЖЧЕ */

// function promiseBased(url) {
//   return new Promise((resolve, reject) => {
//     download(url, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         download(data.nextUrl, (err, data) => {
//           if (err) {
//             reject(err);
//           } else {
//             download(data.nextUrl, (err, data) => {
//               if (err) {
//                 reject(err);
//               } else {
//                 resolve(data.content);
//               }
//             });
//           }
//         });
//       }
//     });
//   });
// }

// promiseBased("https://example.com/")
//   .then((content) => {
//     console.log("Finished!", content);
//   })
//   .catch((err) => {
//     console.log("Got an error!");
//   });


/////////////////////////////////////////////////////////

function downloadAsync(url) {
  return new Promise((resolve, reject) => {
    download(url, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function asyncAwait(url, onSuccess, onError) {
    try {
      const data1 = await downloadAsync(url);
      const data2 = await downloadAsync(data1.nextUrl);
      const data3 = await downloadAsync(data2.nextUrl);
      onSuccess(data3.content);
    } catch (err) {
      onError(err);
    }
  }

asyncAwait(
  "https://example.com/",

  (content) => {
    console.log("Finished!", content);
  },

  (err) => {
    console.log("Got an error!", err);
  }
);