// //1
// function sayHello() {
//   document.write(`<p> Hello User!</p>`);
// }

// sayHello();

//2
// function sayHello(user) {
//   document.write(`<p> Hello ${user}!</p>`);
// }

// sayHello("test");

const age = 20;

// Змінні для заголовка новини
const newsTitle1 = "Lorem ipsum dolor sit amet";
const newsTitle2 = "Consectetur adipiscing elit";
const newsTitle3 = "Sed do eiusmod tempor";

// Змінні для тіла новини
const newsBody1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const newsBody2 =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const newsBody3 =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// Змінні для дати новини
const newsDate1 = new Date("2024-05-18");
const newsDate2 = new Date("2024-05-17");
const newsDate3 = new Date("2024-05-16");

function news(newsTitle, newsBody, newsDate) {
  const nowSpan =
    newsDate.toLocaleDateString() === new Date().toLocaleDateString()
      ? "<span class='todayNews'> New!</span>"
      : " ";

  return `
    <article>
    <h3>${newsTitle}${nowSpan}</h3>
    <p>${newsBody}</p>
    <p>${newsDate.toDateString()}</p>
    </article>`;
}

if (age < 18) {
  document.write("Увага");
}

document.write(
  news(newsTitle1, newsBody1, newsDate1),
  news(newsTitle2, newsBody2, newsDate2),
  news(newsTitle3, newsBody3, newsDate3)
);
