import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enetr first number", type: "number", name: "firstNumber" },
    { message: "Enetr second number", type: "number", name: "secondNumber" },
    {
      message: "Select one of the operators to perform actions",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);
  
  // Applying conditional statements:
  if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
  } else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  } else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  } else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
  } else {
    console.log("Please select the valid operator");
  }
  