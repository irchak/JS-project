// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsDate1 = new Date("2024-05-18");

// // обʼєкти

// const obj1 = new Object();
// const obj2 = Object();
// const obj3 = {}; //оголошення обʼєкту - синтаксичний цукор

// // імʼя властивості - string, symbol
// const news = {
//   // prop:value,
//   newsTitle: "Lorem ipsum dolor sit amet",
//   newsBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//   newsDate: new Date("2024-05-18"),
// };

// console.log("news :>> ", news);

// //читання R
// console.log(news.newsTitle); //операція звернення до властивості

// //зміна U
// news.newsDate = new Date("2024-05-19");
// console.log(news);

// //додавання C
// news.author = "Test Testovych";
// console.log(news);

// //видалити D
// delete news.newsDate;
// console.log(news);

// //приклад
// // Task: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// // Переглянути об'єкт
// // змінити колір
// // видалити властивість рік випуску
// // додати властивість ім'я/прізвище власника
// // Переглянути об'єкт
// const car = {
//   name: "Kia",
//   model: "Rio x",
//   year: 2022,
//   color: "silver",
//   owner: {
//     firstName: "Cat",
//     lastName: "Noris",
//   },
// };

// console.log(car);
// car.color = "green";
// delete car.year;
// car.author2 = "Ilon";
// console.log(car);

// document.write(`<h2>${car.name}, ${car.model}</h2>`);
// document.write(`<p>${car.owner.firstName} ${car.owner.lastName}</p>`);

// const carCopy1 = Object.assign({}, car);
// console.log("carCopy1 === car :>> ", carCopy1 === car);

// const carCopy2 = { ...car };
// console.log("carCopy2 === car :>> ", carCopy2 === car);

// //копіювання обʼєктів (некоректне)

// // змінні значення
// const a = 1;
// let b = a;
// console.log("b :>> ", b);

// console.log(a === b);
// b = 100;
// console.log(a, b);

// //змінні посилання
// const newsCopy = news;
// console.log("newsCopy :>> ", newsCopy);

// newsCopy.author = "new Test";

// console.log("newsCopy :>> ", newsCopy);
// console.log("news :>> ", news);

// //копіювання обʼєктів (коректне)
// const correctNewsCopy1 = Object.assign({}, news);
// console.log("correctNewsCopy1 === news :>> ", correctNewsCopy1 === news);

// const correctNewsCopy2 = { ...news };
// console.log("correctNewsCopy2 === news :>> ", correctNewsCopy2 === news);

//Методи
// function getFullName() {
//   return `${this.fistName} ${this.lastName}`;
// }
// const user = {
//   fistName: "Test",
//   lastName: "Testovych",
//   passw: "jfkjf",
//   age: 23,

//   getFullName() {
//     return `${this.fistName} ${this.lastName}`;
//   },
//   changePassw(newPassw) {
//     this.passw = newPassw;
//   },
// };
// console.log(user.getFullName());

// user.changePassw(prompt("new password"));
// console.log("user :>> ", user);

// document.write(`<h2> ${user.getFullName()}</h2>`);

// // //exampe2
// const car = {
//   name: "Kia",
//   model: "Rio x",
//   year: 2022,
//   color: "silver",
//   owner: {
//     firstName: "Cat",
//     lastName: "Noris",
//   },
//   changeColor(newColor) {
//     this.color = newColor;
//   },
//   getAge() {
//     return new Date().getFullYear() - this.year;
//   },
// };
// console.dir(car);
// console.dir(car.getAge);
// console.dir(new Date());

// car.changeColor(prompt("Inpun new color: ", "yellow"));
// console.log("car :>> ", car);

//перебір обʼєктів
// for (const key in car) {
//   console.log("key :>> ", key, car[key]);
// }
// //обчислювальні властивості - car[key]
// const propName = `color`;
// console.log("color:", car[propName]);

//ввести для обʼєкту 3 імені властивості і імена до них

// const cat = {};

// for (let i = 0; i < 3; i++) {
//   let key = prompt("Enter the key");
//   let value = prompt("Enter the value");
//   cat[key] = value;
// }

// //функція-конструктор
// function User(name, surName, userAge, userEmail, isMale) {
//   //   const this = {};
//   this.firstName = name;
//   this.lastName = surName;
//   this.age = userAge;
//   this.email = userEmail;
//   this.isMale = isMale;
//   this.chengeEmail = function (newEmail) {
//     // this.email = newEmail;
//   };
//   //   return this;
// }

// User.prototype.chengeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const user1 = new User(`Test`, `Testovych`, 23, `mail@main.com`, true);
// const user2 = new User("Anna", "Robot", 15, "anna@mail.com", true);
// user1.chengeEmail("newmail@com");

// console.log("user1 :>> ", user1);

// function Cat(name, surName, userAge) {
//   this.firstName = name;
//   this.lastName = surName;
//   this.age = userAge;
// }

// const cat1 = new Cat(`Noris`, `Irchak`, 2);
// console.log("cat1 :>>", cat1);
