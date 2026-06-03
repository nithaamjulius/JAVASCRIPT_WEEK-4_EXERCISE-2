// TODO: Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 -> the parameter. You must check if the parameter is an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure to test your code effectively.

function sum(num) {
  if (typeof num !== "number") {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let x = 0; x <= num; x += 1) {
    total += x;
  }
  return total;
}

console.log(sum(6));
console.log(sum(0));
console.log(sum(2));
console.log(sum("6"));

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24

function factorial(number) {
  let result = 1;
  for (let y = 2; y <= number; y += 1) {
    result *= y;
  }
  return result;
}
console.log(factorial(4));

// TODO: Create a function called funkyMath . If this function is called with 2 arguments the function will subtract the first from the second. If the function is called with 3 arguments it will add all 3 numbers together. If the function is called with 4 arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25

function funkyMath(no1, no2, no3, no4) {
  if (arguments.length === 2) {
    return no2 - no1;
  } else if (arguments.length === 3) {
    return no1 + no2 + no3;
  } else if (arguments.length === 4) {
    return (no1 + no2) / (no3 + no4);
  }
}

console.log(funkyMath(8, 2, 3, 5));

// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6, 44]. Bonus: Make sure to arrange them from smallest to biggest.()

const numbers = [1, 2, 33, 45, 6, 44];

const oddNumbers = [];

for (let z = 0; z < numbers.length; z++) {
  if (numbers[z] % 2 !== 0) {
    oddNumbers.push(numbers[z]);
  }
}

console.log(oddNumbers);

// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car

const me = {
  first_name: "John",
  last_name: "Side",
  age: 24,
  favourite_color: "Silver",
  dream_car: "Bentley",
};

// TODO: Create and add a new property and value of ‘favourite food’ to the object.

me.favourite_food = "Turkey";

// TODO: . Now delete the age property from the object.

delete me.age;

console.log(me);
