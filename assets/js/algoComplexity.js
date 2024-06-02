const a = "global";

function f1() {
  const a = "local";

  function f2() {
    debugger;
    console.log("a :>> ", a);
  }

  f2();
}
f1();
