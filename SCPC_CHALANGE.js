/** @format */

// Q-1 reverse the string

const reverseString = (str) => {
  let reversedResult = [];
  const connectStr = str.split("");
  for (let i = connectStr.length - 1; i >= 0; i--) {
    const words = connectStr[i];
    reversedResult.push(words);
  }
  return reversedResult.join("");
};

const reverseStringResult = reverseString("I love web development");
console.log(reverseStringResult);

// Q-2 sum of positive number

const sumOfPositiveNumber = (arr) => {
  let total = 0;
  for (const num of arr) {
    if (num >= 0) {
      total += num;
    }
  }
  return total;
};

const totalSum = sumOfPositiveNumber([1, 3, 6, 0, -4, -6, 2, 0, -10]);
console.log(totalSum);

// Q-3  most frequent element in an array

const mostFrequentElement = (arr) => {
  const frequency = {};

  for (const num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  let mostFrequentElement;
  let highestFrequency = 0;

  for (const num in frequency) {
    if (frequency[num] > highestFrequency) {
      highestFrequency = frequency[num];
      mostFrequentElement = num;
    }
  }

  return parseInt(mostFrequentElement);
};

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5, 1, 1, 5];
const mostFrequent = mostFrequentElement(inputArray);
console.log(mostFrequent);

// Q-4 find the index of matched sum of a targeted number

const indexOfSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 9;
const result = indexOfSum(inputNumbers, target);
console.log(result);

// Q-5 calculator

const calculate = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Please provide +, -, *, or /";
  }
};

const operator = "+";
const calculateResult = calculate(20, 40, operator);
console.log(calculateResult);

// Q-6 dynamic password

const generateRandomPassword = (length) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
};

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Q-8 as Q-7 find the second smallest number of an array

const findSecondSmall = (arr) => {
  const numbers = arr.sort((a, b) => a - b);
  return numbers[1];
};

const numberOfArray = [16, 23, 45, 15, 32, 21, 10, 26];
const secondSmall = findSecondSmall(numberOfArray);
console.log(secondSmall);
