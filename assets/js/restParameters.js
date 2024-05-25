function sum(...argsOfSum) {
  //   console.log(argsOfSum); //залишкові параметри
  let sum = 0;
  for (const el of argsOfSum) {
    sum += el;
  }
  return sum;
}

const a = sum(1, 3, 4);

function f(firstElement, ...restParams) {
  console.log(firstElement);
  console.log(restParams);
}

const b = f(1, 2, 5);

//практика

function accum(sign, ...numbers) {
  console.log("arguments :>> ", arguments);
  if (sign === "+") {
    let sum = 0;
    for (const el of numbers) {
      sum += el;
    }
  } else if (sign === "*") {
    let mult = 1;
    for (const el of numbers) {
      mult *= el;
    }
    return mult;
  } else {
    return "Unknown sign";
  }
}
accum("+", 1, 2, 8); //>>11
accum("+", 1, 2, 8, 10); //>>21

accum("*", 1, 2, 8); //>>16
accum("*", 1, 2, 8, 10); //160
