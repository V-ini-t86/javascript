// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function initialisedCounter() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }

  function decrementCounter() {
    counter--;
    console.log(counter);
  }

  return {
    ic: incrementCounter,
    dc: decrementCounter,
  };
}

let count = initialisedCounter();
count.ic();
count.ic();
count.ic();
count.ic();
count.dc();

initialisedCounter().ic();
initialisedCounter().ic();
