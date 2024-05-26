// //Рядки

// const str = "I am Grut.";

// console.log(str[0]);
// console.log(str[5]);
// console.log(str.length);

// str[0] = "9"; // рядки немутабельні
// //Рядки не можна змінювати

// const newStr = str.slice(0, 9) + "!";
// console.log(newStr);

// "Hello, Ann!".toUpperCase();
// 'Hello, Ann!'.toLowerCase()
// 'Hello, Ann!'.startsWith('Hello')
// 'Hello, Ann!'.endsWith('Ann!')
// 'Hello, Ann!'.includes('Ann')

// // Написати ф-цію
// function getInitials(name) {
//   return name
//     .split(" ")
//     .map(word => word[0])
//     .join("")
//     .toUpperCase();
// }

// console.log(getInitials("Ivo Smith"));

//Замінити в рядку всі нецензурні ввирази
let messages = [
  {
    id: 1,
    body: "Lorem fuck dolor sit amet, consectetur fuck elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "2024-05-01",
  },
  {
    id: 2,
    body: "Ut enim ad minim veniam, quis fuck exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: "2024-05-02",
  },
  {
    id: 3,
    body: "Duis aute irure fuck in reprehenderit in fuck velit esse cillum dolore eu fugiat nulla pariatur.",
    createdAt: "2024-05-03",
  },
];

const newMessages = messages[2].body.replaceAll("fuck", "***");

const gentalMessages = messages.map(m => ({
  ...m,
  body: m.body.replaceAll("fuck", "***"),
}));
