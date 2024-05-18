// // const isOnline = false;

// // if (isOnline) {
// //   document.write(`<p>User is Online</p>`);
// // } else {
// //   document.write(`<p>User is offline</p>`);
// // }

// const isEnoughMoney = false;
// if (isEnoughMoney) {
//   document.write(`<p>Ok</p>`);
// } else {
//   document.write(`<p>No</p>`);
// }

// const isOnline = false;
// let color = null;
// let status = null;

// if (isOnline) {
//   color = "green";
//   status = "online";
// } else {
//   color = "red";
//   status = "offline";
// }

// // if (isOnline) {
// //   document.write(`<p>User is <span style="color:${color}">Online</span></p>`);
// // } else {
// //   document.write(`<p>User is <span style="color:${color}">Offline</span></p>`);
// // }

// document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

// const isOnline = false;
// const color = isOnline ? "green" : "red";
// console.log("color :>> ", color);

// // умовна операція
// // const status = isOnline ? "online" : "offline";
// // console.log("status :>>", status);

// єдине джерело істини
// // document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

// //оператори порівняння
// const age = 18;
// console.log("isAdult", age >= 18);

// if (age >= 18) {
//   document.write("<p> у вас є доступ</p>");
// } else {
//   document.write("<p>немає доступу</p>");
// }

const isMale = true;
const isMarried = true;
const name = `Test`;

if (isMale) {
  document.write(`<p> Hello Mr ${name}`);
} else if (isMale === false && isMarried) {
  document.write(`<p> Hello Mrs ${name}`);
} else {
  document.write(`<p> Hello Ms ${name}`);
}
