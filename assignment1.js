function calculate(num1, num2, operation) {
  if (
    num1 === null ||
    num2 === null ||
    num1 === undefined ||
    num2 === undefined
  ) {
    console.log("ivalid input. provide proper values");
  } else if (operation === "add") {
    console.log(num1 + num2);
  } else if (operation === "subtract") {
    console.log(num1 - num2);
  } else if (operation === "multply") {
    console.log(num1 * num2);
  } else if (operation === "divide") {
    if (num2 === 0) {
      console.log("Error, division by zero is not allowed.");
    } else {
      console.log(num1 / num2);
    }
  } else {
    console.log("Unexpected error occured");
  }
}

// test cases
calculate(2, 5, "add");
calculate(3, 5, "subtract");
calculate(7, 5, "divide");
calculate(800, 5, "multply");
calculate(71, 0, "divide");
calculate(2, 985, "add");
calculate(2, "c", "divide");
