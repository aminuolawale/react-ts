async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I have completed successfully");
    }, 500);
  });
}

(async function execAsyncFunction() {
  const result = await delayedResult();
  console.log(result);
})();
