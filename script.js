function operate(num1, op, num2) {
  if (op == "+") {
    return num1 + num2;
  } else if (op == "-") {
    return num1 - num2;
  } else if (op == "÷") {
    return Math.round((num1 / num2) * 1000) / 1000;
  } else if (op == "×") {
    return num1 * num2;
  } else if (op == "%") {
    return num1 % num2;
  }
}

let content1 = "";
let content2 = "";
let num1 = null;
let num2 = null;
let op = "";
const nums = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
const ops = new Set(["÷", "×", "+", "-", "%"]);

function input() {
  if (op === "" && nums.has(this.textContent)) {
    content1 += this.textContent;
  } else if (
    num1 !== null &&
    op === "" &&
    ops.has(this.textContent) &&
    num2 === null
  ) {
    op = this.textContent;
  } else if (op !== "" && nums.has(this.textContent)) {
    content2 += this.textContent;
  }
  //'=' input
  else if (num2 !== null && this.textContent == "=") {
    num1 = operate(num1, op, num2);
    content1 = num1;
    content2 = "";
    op = "";
    num2 = null;
  }
  //operator input after num1, op and num2 are full
  else if (num2 !== null && ops.has(this.textContent)) {
    num1 = operate(num1, op, num2);
    content1 = num1;
    content2 = "";
    op = this.textContent;
    num2 = null;
    display.textContent = content1;
    //debug
    console.log(num1);
    console.log(op);
    console.log(num2);
    return;
  }
  //other cases
  else {
    return;
  }

  display.textContent = content1 + op + content2;
  let string = display.textContent.split(/[+\-÷×%]/);
  if (string[1]) {
    num1 = parseInt(string[0]);
    num2 = parseInt(string[1]);
  } else {
    num1 = parseInt(string[0]);
  }
  //debug
  console.log(num1);
  console.log(op);
  console.log(num2);
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", input));
