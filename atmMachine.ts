#! /usr/bin/env node
// ATM Machine Program
import inquirer from "inquirer";

console.log("***Assalaamualikum Welcome to ATM Machine.***");

let balance = 0;
let pinNumber = Math.floor(Math.random() * 1000 + 8999 + 1);
let exitCondition: boolean = true;
console.log(`Your Current Pin Number: ${pinNumber}`);
let input = await inquirer.prompt({
  message: "Enter your Pin Number: ",
  type: "number",
  name: "Pin",
});
// let atmOptions;
if (input.Pin === pinNumber) {
  let deposite = await inquirer.prompt({
    message: "First Deposit Amount Between 1000 to 20000: ",
    type: "number",
    name: "depositeInput",
  });
  if (deposite.depositeInput < 1000 || deposite.depositeInput > 20000) {
    console.log("Deposite Amount Between 1000 to 20000.");
  } else {
    balance += deposite.depositeInput;
    while (exitCondition) {
      let atmOptions = await inquirer.prompt({
        message: "Select the Option: ",
        type: "list",
        name: "options",
        choices: ["FastCash Option", "Withdraw", "Check Balance", "Exit"],
      });
      if (atmOptions.options === "FastCash Option") {
        let fastWithdraw = await inquirer.prompt({
          message: "FastCash Option: ",
          type: "list",
          name: "fastCashInput",
          choices: ["1000", "2000", "3000", "5000", "10000"],
        });

        if (fastWithdraw.fastCashInput === "1000") {
          if (fastWithdraw.fastCashInput > balance) {
            console.log("Isufficient Balacnce");
          } else {
            balance -= 1000;
            // console.log(`Your current balance is: ${balance}`);
          }
        } else if (fastWithdraw.fastCashInput === "2000") {
          if (fastWithdraw.fastCashInput > balance) {
            console.log("Isufficient Balacnce");
          } else {
            balance -= 2000;
            // console.log(`Your current balance is: ${balance}`);
          }
        } else if (fastWithdraw.fastCashInput === "3000") {
          if (fastWithdraw.fastCashInput > balance) {
            console.log("Isufficient Balacnce");
          } else {
            balance -= 3000;
            // console.log(`Your current balance is: ${balance}`);
          }
        } else if (fastWithdraw.fastCashInput === "5000") {
          if (fastWithdraw.fastCashInput > balance) {
            console.log("Isufficient Balacnce");
          } else {
            balance -= 5000;
            // console.log(`Your current balance is: ${balance}`);
          }
        } else {
          if (fastWithdraw.fastCashInput > balance) {
            console.log("Isufficient Balacnce");
          } else {
            balance -= 10000;
            // console.log(`Your current balance is: ${balance}`);
          }
        }
      } else if (atmOptions.options === "Withdraw") {
        let withdrawInput = await inquirer.prompt({
          message: "Enter Amount: ",
          type: "number",
          name: "withdrawAmount",
        });
        if (
          withdrawInput.withdrawAmount > balance ||
          withdrawInput.withdrawAmount < 0
        ) {
          console.log("Isufficient Balacnce");
        } else {
          balance -= withdrawInput.withdrawAmount;
          // console.log(`Your Current Balance is: ${balance}`);
        }
      } else if (atmOptions.options === "Check Balance") {
        console.log(`Your Current Balance is: ${balance}`);
      } else {
        let exit = await inquirer.prompt({
          message: `Enter "n" to exit or Enter any key to Continue...`,
          type: "confirm",
          name: "exitConfirmation",
          default: "false",
        });
        exitCondition = exit.exitConfirmation;
      }
    }
  }
} else {
  console.log("Enter the Correct Pin Number");
}

// While loop & Break method are in Operation.
