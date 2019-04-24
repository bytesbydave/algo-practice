// Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).

function factorial(num) {
  if (num < 2) {
    return num;
  }
  return num * factorial(num - 1);
}

// ---------------------------------------------------

// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEars(bunnies) {
  if (bunnies < 1) {
    return bunnies;
  }
  return 2 + bunnyEars(bunnies - 1);
}

// ---------------------------------------------------

// The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursivedefinition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.

function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// ---------------------------------------------------

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEars2(bunnies) {
  if (bunnies < 1) {
    return bunnies;
  }
  if (bunnies % 2 === 0) {
    return 3 + bunnyEars2(bunnies - 1);
  } else {
    return 2 + bunnyEars2(bunnies - 1);
  }
}

// ---------------------------------------------------

// We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

function triangle(rows) {
  if (rows < 2) {
    return rows;
  }
  return rows + triangle(rows - 1);
}

// ---------------------------------------------------

// Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(num) {
  if (num % 10 === num) {
    return num;
  }
  return (num % 10) + sumDigits(parseInt(num / 10));
}

// ---------------------------------------------------

// Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function count7(num) {
  if (num % 10 === num && num === 7) {
    return 1;
  } else if (num % 10 === num) {
    return 0;
  }
  return num % 10 === 7
    ? 1 + count7(parseInt(num / 10))
    : 0 + count7(parseInt(num / 10));
  // if (num % 10 === 7) {
  //   return 1 + count7(parseInt(num / 10));
  // } else {
  //   return 0 + count7(parseInt(num / 10));
  // }
}

// ---------------------------------------------------

// Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function count8(num) {
  if (num === 8) {
    return 1;
  } else if (num % 10 === num) {
    return 0;
  }
  if (num % 100 === 88) {
    return 2 + count8(parseInt(num / 10));
  } else if (num % 10 === 8) {
    return 1 + count8(parseInt(num / 10));
  } else {
    return 0 + count8(parseInt(num / 10));
  }
}

// ---------------------------------------------------

// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(base, power) {
  if (power < 2) {
    return base;
  }
  return base * powerN(base, power - 1);
}

// ---------------------------------------------------

// Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

function countX(str) {
  if (str === 'x') {
    return 1;
  } else if (str.length < 2) {
    return 0;
  }
  if (str.charAt(0) === 'x') {
    return 1 + countX(str.substr(1));
  } else {
    return 0 + countX(str.substr(1));
  }
}

// ---------------------------------------------------

// Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.

function countHi(str) {
  if (str === 'hi') {
    return 1;
  } else if (str.length < 3) {
    return 0;
  }
  if (str.substring(0, 2) === 'hi') {
    return 1 + countHi(str.substring(2));
  } else {
    return 0 + countHi(str.substring(1));
  }
}

// ---------------------------------------------------

// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function changeXY(str) {
  if (str === 'x') {
    return 'y';
  } else if (str.length < 2) {
    return str;
  }
  if (str.charAt(0) === 'x') {
    return 'y' + changeXY(str.substr(1));
  } else {
    return str.charAt(0) + changeXY(str.substr(1));
  }
}

// ---------------------------------------------------

// Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

function changePi(str) {
  if (str === 'pi') {
    return '3.14';
  } else if (str.length < 2) {
    return str;
  }
  if (str.substr(0, 2) === 'pi') {
    return '3.14' + changePi(str.substr(2));
  } else {
    return str.charAt(0) + changePi(str.substr(1));
  }
}

// ---------------------------------------------------


// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function noX(str) {

}
module.exports = {
  factorial,
  bunnyEars,
  fibonacci,
  bunnyEars2,
  triangle,
  sumDigits,
  count7,
  count8,
  powerN,
  countX,
  countHi,
  changeXY,
  changePi, noX
};
