"use strict";

// *
// !
// ?

// //створення регулярки
// const regExp = new RegExp("\br", "gi");

// const regExp2 = /\br/gi;

// const testString = "fksjflskfldkg;dk dlgjdlgk dglkg rjlkl";

// // console.log(regExp2.test(testString));

// const string2 = "ehkg@email.com";
// const reg2 = /^.{1,10}@.{1,20}..{2,4}$/;

// console.log(string2.match(reg2));

// // Перевірити, що вказано номер телефона у форматі: +380-2цифри-3цифри-4цифри
// const tel = "+380-12-345-6789";
// const telReg = /^\+380-?\d{2}-?\d{3}-?\d{4}$/;
// console.log(tel.match(telReg));

// //Знайти в рядку тільки цифри (як мінімум одна)
// const text = "errlfk 555 ;rl;gr -4578 lklk5";
// const intReg = /(\b| )-?\d+\b/g;
// console.log(text.match(intReg));

// // Перевірити, чи є число дійсним (з крапкою-роздільником)
// const num = "-4656.566";
// const numReg = /^-?\d+.?\d+$/g;
// console.log(num.match(numReg));

// // Перевірити, чи є рядок номером паспорту (AA000000)
// const text2 = "DO284055";
// const textReg = /^[A-Z]{2}\d{6}$/;
// console.log(text2.match(textReg));

// //Знайти в тексті назви тварин
// const petText = "I have a dog, my saster have a parrot";
// const petReg = /\b(dog|cat|parrot)\b/g;
// console.log(petText.match(petReg));

// const pets = ["dog", "cats", "parrot"];
// const petReg2 = new RegExp(`\\b(${pets.join("|")})\\b`, "g");
// console.log(petText.match(petReg2));

// const codeText = "const a = [1,0,2,3]; const b = 10; const c = [{a:10}];";
// const codeReg = /\[.*?]/g;
// console.log(codeText.match(codeReg));

//replase - замінити частину рядка за критерієм
const str1 = "     Rlerk    reretg   rgtgh rtrt    fgrt ";
const resultStr1 = str1.replace(/\s{2,}/g, " ");
console.log(resultStr1);

//Замінити слова в рядку
const str2 = "Fuck you. lfekfl kejgfbg kjfh asshole";
const resultStr2 = str2.replace(/\b(uck|ass|asshole)\b/gi, "###");
console.log(resultStr2);

// Отримати масив з рядка
// '1999-01-01' => ['1999', '01', '01']
// '1999/01/01' => ['1999', '01', '01']
// '1999.01.01' => ['1999', '01', '01']

const data = "1999-01-01";
const regData = /\-|\/|\./;
console.log(data.split(regData));
