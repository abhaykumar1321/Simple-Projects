// const promiseOne = new Promise(function (resolve, reject) {
//   // do an async task
//   //database calls, cryptography related, network calls
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task Two");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async two resolved");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Abhay", email: "abhaykumar132116@gmail.com" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Abhay", email: "abhaykumar132116@gmail.com" });
//     } else {
//       reject("Error: Something Went Wrong!");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The Promise is Either resolved or rejected");
//   });

// const newPromiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let secondError = true;
//     if (!secondError) {
//       resolve({ animal: "lion", meal: "tiger" });
//     } else {
//       reject("Animal is not responding");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await newPromiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllusers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getAllusers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
