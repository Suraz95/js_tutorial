// truthy values : true '0' '-0' "0n" [] {}
// falsy values : 0 -0 0n false "" undefined null
// console.log("1")
// console.log("2")
// console.log("3")
// setTimeout(() => {
//     console.log("3")
// },2000)
// console.log("4")
// console.log("5")
// console.log("6")
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData(dataId);
//     }
//   }, 2000);
// }
// getData("Imam")  // 2sec
// getData("Anil")  // 2sec
// getData("Shariq") // 2sec
// console.log("getting data of imam");
// getData("Imam", () => {
//   console.log("getting data of anil");
//   getData("Anil", () => {
//     console.log("getting data of shariq");
//     getData("Shariq", () => {
//       console.log("getting data of sahil");
//       getData("Sahil");
//     });
//   });
// });
//  Pyramid Of Doom

//  Promises
// let promise=new Promise((resolve, reject) => {
//     console.log("data is recived");
//     resolve();
// })
// function getData(dataId) {
//   // let promise= new Promise((resolve, reject) => {

//   // })
//   // return promise
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve()
//         // reject()
//     }, 5000);
//   });
// }
// getData("imam")
// getData("anil")
// getData("Shariq")
// let p1=getData("Imam")
// let arr=[1,2,0,4,5]
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             dataId.forEach(element => {
//                 if (element == 0) {
//                     reject()
//                     return
//                 }
//                 console.log(element);
//             });
//             resolve();
//       },2000)
//     })
// }
// let p1=getData(arr)
// .then() - Called when the promises resolved
// .catch()- Called when the promise is rejected
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       //   reject("error is occured while sending the data");
//     }, 3000);
//   });
// }
// getData("Imam").then((result) =>{
// }).catch((err) => {
//     console.log(err)
// })
// console.log("getting data of imam");
// Promise Chaining
// getData("Imam")
//   .then(() => {
//     console.log("getting data of anil");
//     return getData("Anil");
//   })
//   .then(() => {
//     console.log("getting data of shariq");
//     return getData("Shariq");
//   })
//   .then((result) => {
//     console.log(result);
//   }).catch((err) => {
//       console.log(err)
//   });

// function api() {
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//          console.log("weather data");
//          resolve()
//      }, 2000);
//    })
// }
// async function getAllweatherdata() {
//     await api();
//     await api();
//     await api();
//     await api();
// }
// console.log("hello")
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       //   reject("error is occured while sending the data");
//     }, 3000);
//   });
// }
// (async function() {
//     await getData("Imam")
//     await getData("Anil")
//     await getData("Shariq")
// })();


// async(await getData("i"))()
