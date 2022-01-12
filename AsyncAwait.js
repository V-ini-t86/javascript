// https://stackoverflow.com/questions/42013104/placement-of-catch-before-and-after-then

// So, basically you're asking what is the difference between these two (where p is a promise created from some previous code):

// return p.then(...).catch(...);
// and

// return p.catch(...).then(...);
// There are differences either when p resolves or rejects, but whether those differences matter or not depends upon what the code inside the .then() or .catch() handlers does.

// What happens when p resolves:
// In the first scheme, when p resolves, the .then() handler is called. If that .then() handler either returns a value or another promise that eventually resolves, then the .catch() handler is skipped. But, if the .then() handler either throws or returns a promise that eventually rejects, then the .catch() handler will execute for both a reject in the original promise p, but also an error that occurs in the .then() handler.

// In the second scheme, when p resolves, the .then() handler is called. If that .then() handler either throws or returns a promise that eventually rejects, then the .catch() handler cannot catch that because it is before it in the chain.

// So, that's difference #1. If the .catch() handler is AFTER, then it can also catch errors inside the .then() handler.

function getUser() {
  return new Promise((res, rej) => {
    rej('promise rejected');
  });
}

// getUser()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((val) => {
//     console.log(val, 'healldo');
//   });

function getUser1() {
  return new Promise((res, rej) => {
    rej('promise rejected');
  });
}
// getUser1()
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((val) => {
//     console.log(val);
//   });

if (true) {
  throw 'Defeat';
  console.log('hel');
}
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .then(function (data) {
    if (data !== 'victory') {
      throw 'Defeat';
    }

    return job(true);
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error);

    return job(false);
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);

    return 'Error caught';
  })

  .then(function (data) {
    console.log(data);

    return new Error('test');
  })

  .then(function (data) {
    console.log('Success:', data.message);
  })

  .catch(function (data) {
    console.log('Error:', data.message);
  });
