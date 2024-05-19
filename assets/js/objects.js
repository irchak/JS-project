const newsTitle1 = "Lorem ipsum dolor sit amet";
const newsBody1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const newsDate1 = new Date("2024-05-18");

// обʼєкти

const obj1 = new Object();
const obj2 = Object();
const obj3 = {}; //оголошення обʼєкту - синтаксичний цукор

// імʼя властивості - string, symbol
const news = {
  // prop:value,
  newsTitle: "Lorem ipsum dolor sit amet",
  newsBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  newsDate: new Date("2024-05-18"),
};

console.log("news :>> ", news);

//читання R
console.log(news.newsTitle); //операція звернення до властивості

//зміна U
news.newsDate = new Date("2024-05-19");
console.log(news);

//додавання C
news.author = "Test Testovych";
console.log(news);

//видалити D
delete news.newsDate;
console.log(news);

//приклад
// Task: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// Переглянути об'єкт
// змінити колір
// видалити властивість рік випуску
// додати властивість ім'я/прізвище власника
// Переглянути об'єкт
const car = {
  name: "Kia",
  model: "Rio x",
  year: 2022,
  color: "silver",
  owner: {
    firstName: "Cat",
    lastName: "Noris",
  },
};

console.log(car);
car.color = "green";
delete car.year;
car.author2 = "Ilon";
console.log(car);

document.write(`<h2>${car.name}, ${car.model}</h2>`);
document.write(`<p>${car.owner.firstName} ${car.owner.lastName}</p>`);

const carCopy1 = Object.assign({}, car);
console.log("carCopy1 === car :>> ", carCopy1 === car);

const carCopy2 = { ...car };
console.log("carCopy2 === car :>> ", carCopy2 === car);

//копіювання обʼєктів (некоректне)

// змінні значення
const a = 1;
let b = a;
console.log("b :>> ", b);

console.log(a === b);
b = 100;
console.log(a, b);

//змінні посилання
const newsCopy = news;
console.log("newsCopy :>> ", newsCopy);

newsCopy.author = "new Test";

console.log("newsCopy :>> ", newsCopy);
console.log("news :>> ", news);

//копіювання обʼєктів (коректне)
const correctNewsCopy1 = Object.assign({}, news);
console.log("correctNewsCopy1 === news :>> ", correctNewsCopy1 === news);

const correctNewsCopy2 = { ...news };
console.log("correctNewsCopy2 === news :>> ", correctNewsCopy2 === news);
