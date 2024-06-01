// console.log("before error :>> ");

// try {
//   console.log("before error in try :>> ");
//   const a = 4 + b; //catch (new error)
//   console.log("after error in try :>> ");
// } catch (err) {
//   console.log("err :>> ", err);
//   document.write("<p>Sorry, servise is now unavailible</p>");
// }

// console.log("after error :>> ");
// document.write("<h1> My page</h1>");

// throw new Error("ReferenceError: Can't find variable: b");

function f(n) {
  if (typeof n !== "number") {
    throw new Error("n must be a number");
  }
  return n * n;
}

try {
  console.log("f(5) :>> ", f("5"));
} catch (err) {
  console.log("err :>> ", err);
}
