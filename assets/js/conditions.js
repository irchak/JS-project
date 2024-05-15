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

const isOnline = false;
const color = isOnline ? "green" : "red";
console.log("color :>> ", color);

const status = isOnline ? "online" : "offline";
console.log("status :>>", status);

document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);
