function getSongs() {
  return new Promise((res, rej) => {
    let singer = getFamousSinger();
    setTimeout(() => {
      res(singer);
    }, 2000);
  });
}

function getFamousSinger() {
  return 'Eminem';
}

function getSongsList() {
  return new Promise((res, rej) => {
    let list = ['Song A', 'Song B', 'Song C'];
    setTimeout(() => {
      res(list);
    }, 2000);
  });
}

function getFamousSong() {
  return new Promise((res, rej) => {
    let famousSong = 'Song C';
    setTimeout(() => {
      res(famousSong);
    }, 2000);
  });
}

getSongs()
  .then((singer) => {
    console.log(singer);
    return getSongsList();
  })
  .then((list) => {
    console.log(list);
    return getFamousSong();
  })
  .then((song) => {
    console.log(song);
  })
  .catch((err) => console.log(err));

// function createPromise() {
//   return new Promise((resolve, reject) => {
//     let promiseFullFilled = false;
//     if (promiseFullFilled) {
//       resolve('promise is completeted');
//     } else {
//       reject('promise is rejected');
//     }
//   });
// }

// createPromise()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     // if (err) {
//     //   throw err;
//     // }
//     console.log(err);
//   });
// createPromise().then(
//   (message) => {
//     console.log(message);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
