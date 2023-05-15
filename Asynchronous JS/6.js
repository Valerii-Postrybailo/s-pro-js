// 6. Напишіть асинхронну функцію withTimeout, яка буде приймати кількість мілісекунд та promise,
// який ми назвемо request. Функція повинна повернути новий promise.
// Якщо request не став settled через передану кількість мілісекунд,
// то withTimeout повинен повернути rejected promise з помилкою “Promise timed out”.
// Якщо request став rejected, то withTimeout теж повинен повернути rejected promise, з помилкою від request.
// Якщо request став resolved із певним значенням, то функція поверне resolved promise із цим значенням.

function withTimeout(ms, request) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Promise timed out'));
    }, ms);

    request
      .then((result) => {
        clearTimeout(timeoutId);
        resolve(result);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
}

const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const request = delay(2000).then(() => 'Request completed');

withTimeout(3000, request)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));