// "use strict";
// // Map

// // Колекція по ключу, яка може як ключ містити будь-який тип

// // Властивості/методи:
// // size
// // set(key, value) => map
// // get(key) => value
// // has(key) => boolean
// // delete(key) => boolean
// // clear()
// //створення
// const map1 = new Map();
// // console.log("map1 :>> ", map1);

// //map1.name = 'Test'
// map1.set("name", "Test");

// map1.set("age", 20).set("email", "dflodf@com");

// // console.log("map1 :>> ", map1);

// //створення
// const map2 = new Map([
//   ["age", 30],
//   ["isMale", true],
// ]);

// // console.log(map1.get("age"));

// // console.log(map1.size);

// map2.delete("isMale");

// // console.log(map1.has("age1"));

// //forEach()

// function cb(currentValue, key, map) {
//   console.log(`map1[${key}] = ${currentValue}`);
//   console.log(map);
// }

// map1.forEach(cb);

// Створити мапу: key-tel number, value - NameSurname
// // Додати 2 елемента. Перевірити, чи є в тел книзі абонент
// // з номером +380981234567

// const map3 = new Map([
//   ["+380596792047", "Anonim Anonim"],
//   ["+380981234567", "Test Testovich"],
// ]);

// console.log(map3.has("+380981234567"));

// //for...of
// for (const prop of map3) {
//   console.log("prop :>>", prop);
// }

// //symbol.iterator - деструктуризація, spread, Array.from(), for..of
// console.log(map3.keys());
// console.log(map3.values());
// console.log(map3.entries());

// //Copy
// const mapCopy = new Map([...map3.entries()]);

// // Example: перекладач. Словник міститься в мапі
// const vocabulary = new Map();
// vocabulary.set("dog", "собака");
// vocabulary.set("cat", "кіт");
// vocabulary.set("run", "бігти");

// const engPhrase = "dog run white cat";

// function translatePhrase(engPhrase) {
//   //отримати масив слів
//   const engWords = engPhrase.split(" ");
//   console.log("engWords :>> ", engWords);
//   //Перекласти кожне слово якщо воно існує в словнику
//   const ukrWords = engWords.map(W => {
//     if (vocabulary.has(W)) {
//       return vocabulary.get(W);
//     }
//     return W;
//   });
//   console.log("ukrWords :>>", ukrWords);
//   //перетворити масив укрт слів на рядок
//   const ukrPhrase = ukrWords.join(" ");
//   return ukrPhrase;
// }
// // const ukrPhrase = translatePhrase(engPhrase);

// function translatePhrase(engPhrase) {
//   return engPhrase
//     .split(" ")
//     .map(w => (vocabulary.has(w) ? vocabulary.get(w) : w))
//     .join(" ");
// }

// //Обєкти як ключі
// const user = { firstName: "Test", lastName: "Testovich" };

// const usersMessages = new Map();

// usersMessages.set(user, [
//   { id: 1, body: "fjkdfj1" },
//   { id: 2, body: "fjkdfj2" },
// ]);

// console.log(usersMessages.get(user));

//Practice
const usersWithMessages2 = [
  { id: 1, name: "Test1", message: "hello", date: new Date() },
  { id: 1, name: "Test1", message: "how are you", date: new Date() },
  { id: 2, name: "Test2", message: "hi)", date: new Date() },
  { id: 2, name: "Test2", message: "fine)", date: new Date() },
];

//отримати масив унікальних користувачів
const users = [];
usersWithMessages2.forEach(um => {
  if (!users.find(u => u.id === um.id)) {
    users.push({ id: um.id, name: um.name });
  }
});
console.log("users :>> ", users);

// //
// const messages2 = usersWithMessages2.map(um => ({
//   message: um.message,
//   date: um.date,
// }));

const uToM = new Map();

users.forEach(u => {
  uToM.set(
    u,
    usersWithMessages2
      .filter(uwm => uwm.id === u.id)
      .map(uwm => ({
        message: uwm.message,
        date: uwm.date,
      }))
  );
});

console.log(uToM);
