const start = Date.now();
setTimeout(() => {
  console.log("1", Date.now() - start);
}, 1000);

setTimeout(() => {
  console.log("2", Date.now() - start);
}, 1000);

setTimeout(() => {
  console.log("3", Date.now() - start);
}, 1000);

setTimeout(() => {
  console.log("4", Date.now() - start);
}, 1000);
