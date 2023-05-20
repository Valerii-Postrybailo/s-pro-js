// 7. Відредагуйте функцію test, підготуйте дві нові версії з різними назвами: 
// promise-based та async-await варіант. Ви можете змінити те, як викликається функція.

/*НЕ ЗМІНЮЙТЕ ЦЮ ФУНКЦІЮ.
 * Функція-приклад, яка виконується асинхронно.
 * Функція приймає один аргумент - error-first callback.*/

function download(url, errorFirstCallback) {
  // ...Виконує якусь асинхронну операцію, для прикладу:
  setTimeout(() => errorFirstCallback(new Error("Async error message")), 10);
  // setTimeout(() => errorFirstCallback(null, {content:"Some content"}), 10);
}

// /* МОЖЕТЕ ЗМІНИТИ КОД НИЖЧЕ */

function test(url, onSuccess, onError) {
  download(url, (err, data) => {
    if (err) return onError(err);

    download(data.nextUrl, (err, data) => {
      if (err) return onError(err);

      download(data.nextUrl, (err, data) => {
        if (err) return onError(err);

        onSuccess(data.content);
      });
    });
  });
}
test(
  "https://example.com/",
  (content) => {
    console.log("Finished!", content);
  },
  (err) => {
    console.log("Got an error1!",err);
  }
);

///////////////////////////////////////////////////////

function downloadPromise(url) {
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

function promiseBasedTest(url) {
  return downloadPromise(url)
    .then(data => downloadPromise(data.nextUrl))
    .then(data => downloadPromise(data.nextUrl))
    .then(data => {
      return data.content;
    })
    .catch(err => {
      throw err;
    });
}

promiseBasedTest("https://example.com/")
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log("Got an error2!",err);
  });


  /////////////////////////////////////////////

async function asyncAwaitTest(url) {
  try {
    const data = await downloadPromise(url);
    const data_1 = await downloadPromise(data.nextUrl);
    const data_2 = await downloadPromise(data_1.nextUrl);
    return data_2.content;
  } catch (err) {
    throw err;
  }
}
  
asyncAwaitTest("https://example.com/")
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log("Got an error3!",err);
    
  });