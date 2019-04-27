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
  // if (num % 10 === num && num === 7) {
  //   return 1;
  // } else if (num % 10 === num) {
  //   return 0;
  // }
  if (num < 1) {
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
  // if (num === 8) {
  //   return 1;
  // } else if (num % 10 === num) {
  //   return 0;
  // }
  if (num < 1) {
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
  if (str.length < 1) {
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
  if (str.length < 2) {
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
  if (str === '') {
    return '';
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
  if (str.length < 2) {
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

// function noX(str) {
//   if (str === 'x') {
//     return '';
//   } else if (str.length < 2) {
//     return str;
//   }
//   if (str.charAt(0) === 'x') {
//     return '' + noX(str.substr(1));
//   } else {
//     return str.charAt(0) + noX(str.substr(1));
//   }
// }
function noX(str) {
  if (str === '') {
    return '';
  }
  if (str.charAt(0) === 'x') {
    return '' + noX(str.substr(1));
  } else {
    return str.charAt(0) + noX(str.substr(1));
  }
}

// ---------------------------------------------------

// Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

function array6(nums, index) {
  if (nums.length < 1) {
    return false;
  }
  const firstNum = nums.shift();
  if (firstNum === 6) {
    return true;
  } else {
    return array6(nums, 0); // nums.shift(0) mutable change to nums array
  }
}

// ---------------------------------------------------

// Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

function array11(nums, index) {
  if (nums.length < 1) {
    return 0;
  }
  const firstNum = nums.shift();
  if (firstNum === 11) {
    return 1 + array11(nums);
  } else {
    return 0 + array11(nums);
  }
}

// ---------------------------------------------------

// Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that value times 10. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

function array220(nums, index) {
  if (nums.length < 2) {
    return false;
  }
  const num = nums.shift();
  if (num * 10 === nums[0]) {
    return true;
  } else {
    return array220(nums, 0);
  }
}

// ---------------------------------------------------

// Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".

function allStar(str) {
  if (str.length < 2) {
    return str;
  }
  return str.charAt(0) + '*' + allStar(str.substr(1));
}

// ---------------------------------------------------

// Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

function pairStar(str) {
  if (str.length < 2) {
    return str;
  }
  if (str.charAt(0) === str.charAt(1)) {
    return str.charAt(0) + '*' + pairStar(str.substr(1));
  } else {
    return str.charAt(0) + pairStar(str.substr(1));
  }
}

// ---------------------------------------------------

// Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.

function endX(str) {
  if (str.length < 1) {
    return '';
  }
  if (str.charAt(0) === 'x') {
    return endX(str.substr(1)) + str.charAt(0);
  } else {
    return str.charAt(0) + endX(str.substr(1));
  }
}

// ---------------------------------------------------

// We'll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string.

function countPairs(str) {
  if (str.length < 1) {
    return 0;
  }
  if (str.charAt(0) === str.charAt(2)) {
    return 1 + countPairs(str.substr(1));
  } else {
    return 0 + countPairs(str.substr(1));
  }
}

// ---------------------------------------------------

// Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

function countAbc(str) {
  if (str.length < 3) {
    return 0;
  }
  if (str.substr(0, 3) === 'abc' || str.substr(0, 3) === 'aba') {
    return 1 + countAbc(str.substr(1));
  } else {
    return 0 + countAbc(str.substr(1));
  }
}

// ---------------------------------------------------

// Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.

function count11(str) {
  if (str.length < 2) {
    return 0;
  }
  if (str.substr(0, 2) === '11') {
    return 1 + count11(str.substr(2));
  } else {
    return 0 + count11(str.substr(1));
  }
}

// ---------------------------------------------------

// Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".

function stringClean(str) {
  if (str.length < 1) {
    return '';
  }
  if (str.charAt(0) === str.charAt(1)) {
    return stringClean(str.substr(1));
  } else {
    return str.charAt(0) + stringClean(str.substr(1));
  }
}

// ---------------------------------------------------

// Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an 'x' immedately before them.

function countHi2(str) {
  if (str.length < 2) {
    return 0;
  }
  if (str.charAt(0) === 'x' && str.substr(1, 2) === 'hi') {
    return 0 + countHi2(str.substr(3));
  } else if (str.substr(0, 2) === 'hi') {
    return 1 + countHi2(str.substr(2));
  } else {
    return 0 + countHi2(str.substr(1));
  }
}

// ---------------------------------------------------

// Given a string that contains a single pair of parenthesis, compute recursively a new string made of only of the parenthesis and their contents, so "xyz(abc)123" yields "(abc)".

function parenBit(str) {
  if (str.charAt(0) === '(' && str.charAt(str.length - 1) === ')') {
    return str;
  }
  if (str.charAt(0) === '(') {
    return parenBit(str.substr(0, str.length - 1));
  } else {
    return parenBit(str.substr(1));
  }
}

// ---------------------------------------------------

// Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them.

function nestParen(str) {
  if (str.length < 1) {
    return true;
  }
  if (str.charAt(0) === '(' && str.charAt(str.length - 1) === ')') {
    return nestParen(str.substr(1, str.length - 2));
  } else {
    return false;
  }
}

// ---------------------------------------------------

// Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.

function strCount(str, sub) {
  if (str.length < sub.length) {
    return 0;
  }
  if (str.substr(0, sub.length) === sub) {
    return 1 + strCount(str.substr(sub.length), sub);
  } else {
    return 0 + strCount(str.substr(1), sub);
  }
}

// ---------------------------------------------------

// Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.

function strCopies(str, sub, num) {
  if (str.length < 1) {
    return 0 === num;
  }
  if (str.substr(0, sub.length) === sub) {
    return strCopies(str.substr(1), sub, num - 1);
  } else {
    return strCopies(str.substr(1), sub, num);
  }
}

// ---------------------------------------------------

// Given a string and a non-empty substring sub, compute recursively the largest substring which starts and ends with sub and return its length.

function strDist(str, sub) {
  if (str.length < 1) {
    return 0;
  }
  if (
    str.substr(0, sub.length) === sub &&
    str.substr(str.length - sub.length, str.length) === sub
  ) {
    return str.length;
  }
  if (str.substr(0, sub.length) === sub) {
    return strDist(str.substr(0, str.length - 1), sub);
  } else {
    return strDist(str.substr(1), sub);
  }
}

// ---------------------------------------------------
// ---------------------------------------------------

// Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target? This is a classic backtracking recursion problem. Once you understand the recursive backtracking strategy in this problem, you can use the same pattern for many problems to search a space of choices. Rather than looking at the whole array, our convention is to consider the part of the array starting at index start and continuing to the end of the array. The caller can specify the whole array simply by passing start as 0. No loops are needed -- the recursive calls progress down the array.

function groupSum(start, nums, target) {
  if (start >= nums.length) {
    // Base Case: if there are no numbers left, then there is a solution only if target is 0
    return target === 0;
  }
  if (groupSum(start + 1, nums, target - nums[start])) {
    // nums[start] is chosen or it is not, letting recursion deal with all the rest of the array
    // recursive call trying the case that nums[start] is chosen -- subtract it from target in the call
    return true;
  }
  if (groupSum(start + 1, nums, target)) {
    // recursive call trying the case that nums[start] is not chosen
    return true;
  }
  // if neither of the above worked
  return false;
}

// ---------------------------------------------------

// Given an array of ints, is it possible to choose a group of some of the ints, beginning at the start index, such that the group sums to the given target? However, with the additional constraint that all 6's must be chosen. (No loops needed.)

function groupSum6(start, nums, target) {
  if (start >= nums.length) {
    return target === 0;
  }
  if (groupSum6(start + 1, nums, target - nums[start])) {
    return true;
  }
  if (nums[start] !== 6 && groupSum6(start + 1, nums, target)) {
    return true;
  }
  return false;
}

// ---------------------------------------------------

// Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target with this additional constraint: If a value in the array is chosen to be in the group, the value immediately following it in the array must not be chosen. (No loops needed.)

function groupNoAdj(start, nums, target) {
  if (start >= nums.length) {
    return target === 0;
  }
  if (groupNoAdj(start + 2, nums, target - nums[start])) {
    return true;
  }
  if (groupNoAdj(start + 1, nums, target)) {
    return true;
  }
  return false;
}

// ---------------------------------------------------

// Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target with these additional constraints: all multiples of 5 in the array must be included in the group. If the value immediately following a multiple of 5 is 1, it must not be chosen. (No loops needed.)

function groupSum5(start, nums, target) {
  if (start >= nums.length) {
    return target === 0;
  }
  if (nums[start] === 5 && nums[start + 1] === 1) {
    if (groupSum5(start + 2, nums, target - nums[start])) {
      return true;
    }
  } else {
    if (groupSum5(start + 1, nums, target - nums[start])) {
      return true;
    }
  }

  if (nums[start] !== 5 && groupSum5(start + 1, nums, target)) {
    return true;
  }
  return false;
}

// ---------------------------------------------------

// Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target, with this additional constraint: if there are numbers in the array that are adjacent and the identical value, they must either all be chosen, or none of them chosen. For example, with the array {1, 2, 2, 2, 5, 2}, either all three 2's in the middle must be chosen or not, all as a group. (one loop can be used to find the extent of the identical values).

function groupSumClump(start, nums, target) {
  if (start >= nums.length) {
    return target === 0;
  }
  let i = start;
  let sum = 0;

  while (i < nums.length && nums[start] == nums[i]) {
    sum += nums[i];
    i++;
  }

  if (groupSumClump(i, nums, target - sum)) {
    return true;
  }

  if (groupSumClump(i, nums, target)) {
    return true;
  }

  return false;
}

// ---------------------------------------------------

// Given an array of ints, is it possible to divide the ints into two groups, so that the sums of the two groups are the same. Every int must be in one group or the other. Write a recursive helper method that takes whatever arguments you like, and make the initial call to your recursive helper from splitArray(). (No loops needed.)

function splitArray(nums) {
  return splitArrayHelper(0, nums, 0, 0);
}

function splitArrayHelper(start, nums, group1, group2) {
  if (start >= nums.length) {
    return group1 === group2;
  }
  if (splitArrayHelper(start + 1, nums, group1 + nums[start], group2)) {
    return true;
  }

  if (splitArrayHelper(start + 1, nums, group1, group2 + nums[start])) {
    return true;
  }
  return false;
}

// ---------------------------------------------------

// Given an array of ints, is it possible to divide the ints into two groups, so that the sum of one group is a multiple of 10, and the sum of the other group is odd. Every int must be in one group or the other. Write a recursive helper method that takes whatever arguments you like, and make the initial call to your recursive helper from splitOdd10(). (No loops needed.)

function splitOdd10(nums) {
  return splitOdd10helper(0, nums, 0, 0);
}

function splitOdd10helper(start, nums, mult, odd) {
  if (start >= nums.length) {
    return mult % 10 === 0 && odd % 2 === 1;
  }
  if (splitOdd10helper(start + 1, nums, mult + nums[start], odd)) {
    return true;
  }
  if (splitOdd10helper(start + 1, nums, mult, odd + nums[start])) {
    return true;
  }
  return false;
}

// ---------------------------------------------------

// Given an array of ints, is it possible to divide the ints into two groups, so that the sum of the two groups is the same, with these constraints: all the values that are multiple of 5 must be in one group, and all the values that are a multiple of 3 (and not a multiple of 5) must be in the other. (No loops needed.)

function split53(nums) {
  return split53helper(0, nums, 0, 0);
}

function split53helper(start, nums, mult5, mult3) {
  if (start >= nums.length) {
    return mult5 === mult3;
  }
  if (nums[start] % 5 === 0) {
    return split53helper(start + 1, nums, mult5 + nums[start], mult3);
  }
  if (nums[start] % 3 === 0) {
    return split53helper(start + 1, nums, mult5, mult3 + nums[start]);
  }
  if (split53helper(start + 1, nums, mult5 + nums[start], mult3)) {
    return true;
  }
  if (split53helper(start + 1, nums, mult5, mult3 + nums[start])) {
    return true;
  }
  return false;
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
  changePi,
  noX,
  array6,
  array11,
  array220,
  allStar,
  pairStar,
  endX,
  countPairs,
  countAbc,
  count11,
  stringClean,
  countHi2,
  parenBit,
  nestParen,
  strCount,
  strCopies,
  strDist,
  groupSum,
  groupSum6,
  groupNoAdj,
  groupSum5,
  groupSumClump,
  splitArray,
  splitOdd10,
  split53
};
