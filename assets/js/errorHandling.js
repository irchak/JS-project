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

// function f(n) {
//   if (typeof n !== "number") {
//     throw new Error("n must be a number");
//   }
//   return n * n;
// }

// try {
//   console.log("f(5) :>> ", f("5"));
// } catch (err) {
//   console.log("err :>> ", err);
// }

// function fact(n) {
//   if (typeof n !== "number") {
//     throw new TypeError("n must be number");
//   }
//   if (!Number.isInteger(n) || n < 0 || n > Number.MAX_SAFE_INTEGER) {
//     throw new RangeError("n must be nonnegative integer value");
//   }

//   function factorial(m) {
//     if (m === 0) {
//       return 1;
//     }
//     return m * factorial(m - 1);
//   }

//   return factorial(n);
// }

// try {
//   const f = fact(5);
//   console.log("f :>> ", f);
// } catch (e) {
//   console.log("e :>> ", e);
// }

// document.write("<p>Text</p>");

// Task: написати функцію для валідації імені користувача (4-32, string)
// якщо значення валідне, то повернути його
// якщо ні, то згенерувати помилку

// validateName(name) => validatedName || throw error
// isValid(name) => true || false

function validateName(name) {
  name = name.trim();

  if (typeof name !== "string") {
    throw new TypeError("name must be string");
  }
  if (name.length < 4 || name.length > 32) {
    throw new RangeError("name must be 4-32 length");
  }
  return name;
}

try {
  console.log(validateName("User"));
} catch (error) {
  console.log("error :>>", error);
}

// Task: Реалізувати функцію, яка приймає вік,
// повертає вік, якщо параметр відповідає вимогам (???),
// інакше генерує помилку

function validateAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("age must be number");
  }
  if (age < 18) {
    throw new RangeError("age must be >18");
  }
  return age;
}

try {
  console.log(validateAge(17));
} catch (error) {
  console.log(console.log("error :>>", error));
}
