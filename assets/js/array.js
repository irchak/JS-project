// const arr = new Array(1, 2, 3);
// console.log("arr :>> ", arr);

// const arr2 = [4, 5, 6];
// console.log("arr2 :>> ", arr2);

// const users = [
//   { id: 1, name: "Test", age: 20 },
//   { id: 2, name: "Ivo", age: 23 },
// ];

// console.log(users[0]);
// console.log(users.length);

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (let i = 0; i < users.length; i++) {
//   document.write(`
//         <article>
//       <h2>${users[i].name}</h2>
//       <p>Age: ${users[i].age}</p>
//     </article>
//     `);
// }
// //масив з 3 місяцями року
// const month = ["Січень", "Лютий", "Березень"];

// // копіювання масивів
// const month1 = Array.from(month);
// const month2 = [...month];

// document.write(`<ol>`);
// for (let i = 0; i < month.length; i++) {
//   document.write(`
//     <li>${month[i]}</li>
//     `);
// }
// document.write(`</ol>`);

// //Написати функцію для обчислення суми елеменів масиву [11,40,-8,20,55]
// const numbers = [11, 40, -8, 20, 55];

// function arraySum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(arraySum(numbers)); //118

// // Знайти середній вік користувачів
// const users = [
//   { id: 1, name: "Test", age: 20 },
//   { id: 2, name: "Ivo", age: 23 },
// ];

// function userAge(test) {
//   let sum = 0;
//   for (let i = 0; i < test.length; i++) {
//     sum += test[i].age;
//   }
//   return sum / test.length;
// }
// console.log(userAge(users)); //21,5

// //перевірки масивів:
// const numbers = [1, 3, 6, 8];
// //перебір по ключах(індексах)
// for (const index in numbers) {
//   console.log(index, ">>", numbers[index]);
// }
// //перебір по елементах
// for (const element of numbers) {
//   console.log(element);
// }

// // перебрати (*згенерувати розмітку) month за допомогою for..of
// const month = ["Січень", "Лютий", "Березень"];
// document.write("<ol>");
// for (const element of month) {
//   document.write(`<li> ${element} </li>`);
// }
// document.write("</ol>");

// // Методи масивів:
// // pop, push, shift, unshift
// const month = ["Січень", "Лютий", "Березень"];
// console.log(month);
// month.push("Квітень");
// console.log(month);

// // Task: Ввести кількість елементів масиву і динамічно заповнити масив
// const numElements = +prompt("Введіть кількість елементів масиву:");

// const inputArr = [];
// for (let i = 0; i < numElements; i++) {
//   const carName = prompt(`Введіть назву машини ${i + 1}:`);
//   inputArr.push(carName);
// }

// console.log("Заповнений масив назв машин:", inputArr);

// //Копіювання масивів
// const month = ["Січень", "Лютий", "Березень"];
// const monthCoppy = month.slice();

// const monthPart = month.slice(0, 2);

// //Видалення елементів
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const deletedMonths = months.splice(0, 2);
// const deletedMonths1 = months.splice(9);

// //конкатинація
// const a = [1, 2, 3, 4];
// const b = [7, 8, 9];

// const c = a.concat(b);

// const d = [...a, ...b];

// const deletedMonths2 = months.splice(11).concat(months.splice(0, 2));

//const deletedMonths3 = [...months.splice(11), ...months.splice(0, 2)];

// // Отримати єдиний масив повідомлень. Видалити повідомлення з id 2

// function findIndexById(array, id) {
//   for (const index in array) {
//     if (array[index].id === id) {
//       return index;
//     }
//   }
// }

// let messages = [
//   {
//     id: 1,
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     createdAt: "2024-05-01",
//   },
//   {
//     id: 2,
//     body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     createdAt: "2024-05-02",
//   },
//   {
//     id: 3,
//     body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     createdAt: "2024-05-03",
//   },
//   {
//     id: 4,
//     body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     createdAt: "2024-05-04",
//   },
//   {
//     id: 5,
//     body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
//     createdAt: "2024-05-05",
//   },
//   {
//     id: 6,
//     body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
//     createdAt: "2024-05-06",
//   },
// ];

// const newMessages = [
//   {
//     id: 7,
//     body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
//     createdAt: "2024-05-07",
//   },
//   {
//     id: 8,
//     body: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
//     createdAt: "2024-05-08",
//   },
//   {
//     id: 9,
//     body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
//     createdAt: "2024-05-09",
//   },
// ];

// messages = [...messages, ...newMessages];
// console.table(messages);

// const deletedMessagesIndex = findIndexById(messages, 2);
// messages.splice(deletedMessagesIndex, 1);
// console.table(messages);
