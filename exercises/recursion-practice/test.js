const myMethods = require('./index.js');
const factorial = myMethods.factorial;

test('factorial function exists', () => {
  expect(typeof factorial).toEqual('function');
});

test('factorial is able to return the factorial of 1', () => {
  expect(factorial(1)).toEqual(1);
});

test('factorial is able to return the factorial of 2', () => {
  expect(factorial(2)).toEqual(2);
});

test('factorial is able to return the factorial of 3', () => {
  expect(factorial(3)).toEqual(6);
});

const bunnyEars = myMethods.bunnyEars;

test('bunnyEars function exists', () => {
  expect(typeof bunnyEars).toEqual('function');
});

test('bunnyEars returns ears count for 0 bunnies', () => {
  expect(bunnyEars(0)).toEqual(0);
});

test('bunnyEars returns ears count for 1 bunnies', () => {
  expect(bunnyEars(1)).toEqual(2);
});

test('bunnyEars returns ears count for 2 bunnies', () => {
  expect(bunnyEars(2)).toEqual(4);
});

const fibonacci = myMethods.fibonacci;

test('fibonacci function exists', () => {
  expect(typeof fibonacci).toEqual('function');
});

test('fibonacci returns the 0th fibonacci number', () => {
  expect(fibonacci(0)).toEqual(0);
});

test('fibonacci returns the 1st fibonacci number', () => {
  expect(fibonacci(1)).toEqual(1);
});

test('fibonacci returns the 2nd fibonacci number', () => {
  expect(fibonacci(2)).toEqual(1);
});

test('fibonacci returns the 6th fibonacci number', () => {
  expect(fibonacci(6)).toEqual(8);
});

test('fibonacci returns the 8th fibonacci number', () => {
  expect(fibonacci(8)).toEqual(21);
});

const bunnyEars2 = myMethods.bunnyEars2;

test('bunnyEars2 function exists', () => {
  expect(typeof bunnyEars2).toEqual('function');
});

test('bunnyEars2 returns 0 ears for 0 bunnies', () => {
  expect(bunnyEars2(0)).toEqual(0);
});

test('bunnyEars2 returns 2 ears for 1 bunnies', () => {
  expect(bunnyEars2(1)).toEqual(2);
});

test('bunnyEars2 returns 5 ears for 2 bunnies', () => {
  expect(bunnyEars2(2)).toEqual(5);
});

const triangle = myMethods.triangle;

test('triangle function exists', () => {
  expect(typeof triangle).toEqual('function');
});

test('triangle return 0 blocks for 0 rows', () => {
  expect(triangle(0)).toEqual(0);
});

test('triangle return 1 blocks for 1 rows', () => {
  expect(triangle(1)).toEqual(1);
});

test('triangle return 3 blocks for 2 rows', () => {
  expect(triangle(2)).toEqual(3);
});

test('triangle return 10 blocks for 4 rows', () => {
  expect(triangle(4)).toEqual(10);
});

const sumDigits = myMethods.sumDigits;

test('sumDigits function exists', () => {
  expect(typeof sumDigits).toEqual('function');
});

test('sumDigits returns 9 for digits 126', () => {
  expect(sumDigits(126)).toEqual(9);
});

test('sumDigits returns 13 for digits 49', () => {
  expect(sumDigits(49)).toEqual(13);
});

test('sumDigits returns 3 for digits 12', () => {
  expect(sumDigits(12)).toEqual(3);
});

const count7 = myMethods.count7;

test('count7 function exists', () => {
  expect(typeof count7).toEqual('function');
});

test('count7 returns 2 for number 717', () => {
  expect(count7(717)).toEqual(2);
});

test('count7 returns 1 for number 7', () => {
  expect(count7(7)).toEqual(1);
});

test('count7 returns 0 for number 123', () => {
  expect(count7(123)).toEqual(0);
});

const count8 = myMethods.count8;

test('count8 function exists', () => {
  expect(typeof count8).toEqual('function');
});

test('count8 returns 2 for an input of 818', () => {
  expect(count8(818)).toEqual(2);
});

test('count8 returns 1 for an input of 8', () => {
  expect(count8(8)).toEqual(1);
});

test('count8 returns 4 for an input of 8818', () => {
  expect(count8(8818)).toEqual(4);
});

const powerN = myMethods.powerN;

test('powerN function exists', () => {
  expect(typeof powerN).toEqual('function');
});

test('powerN with a base of 3 and power of 1 returns 3', () => {
  expect(powerN(3, 1)).toEqual(3);
});

test('powerN with a base of 3 and power of 2 returns 9', () => {
  expect(powerN(3, 2)).toEqual(9);
});

test('powerN with a base of 3 and power of 3 returns 27', () => {
  expect(powerN(3, 3)).toEqual(27);
});

const countX = myMethods.countX;

test('countX function exists', () => {
  expect(typeof countX).toEqual('function');
});

test('string of xxhixx returns 4', () => {
  expect(countX('xxhixx')).toEqual(4);
});

test('string of xhixhix returns 3', () => {
  expect(countX('xhixhix')).toEqual(3);
});

test('string of hi returns 0', () => {
  expect(countX('hi')).toEqual(0);
});

const countHi = myMethods.countHi;

test('countHi function exists', () => {
  expect(typeof countHi).toEqual('function');
});

test('string of xxhixx returns 1', () => {
  expect(countHi('xxhixx')).toEqual(1);
});

test('string of xhixhix returns 2', () => {
  expect(countHi('xhixhix')).toEqual(2);
});

test('string of xx returns 0', () => {
  expect(countHi('xx')).toEqual(0);
});

test('string of hi returns 1', () => {
  expect(countHi('hi')).toEqual(1);
});

test('string of ihihihihih returns 4', () => {
  expect(countHi('ihihihihih')).toEqual(4);
});

test('string of xhixhxihihhhih returns 3', () => {
  expect(countHi('xhixhxihihhhih')).toEqual(3);
});

const changeXY = myMethods.changeXY;

test('changeXY function exists', () => {
  expect(typeof changeXY).toEqual('function');
});

test('string of codex returns codey', () => {
  expect(changeXY('codex')).toEqual('codey');
});

test('string of xxhixx returns yyhiyy', () => {
  expect(changeXY('xxhixx')).toEqual('yyhiyy');
});

test('string of xhixhix returns yhiyhiy', () => {
  expect(changeXY('xhixhix')).toEqual('yhiyhiy');
});

const changePi = myMethods.changePi;

test('changePi function exists', () => {
  expect(typeof changePi).toEqual('function');
});

test('string xpix returns x3.14x', () => {
  expect(changePi('xpix')).toEqual('x3.14x');
});

test('string pipi returns 3.143.14', () => {
  expect(changePi('pipi')).toEqual('3.143.14');
});

test('string pip returns 3.14p', () => {
  expect(changePi('pip')).toEqual('3.14p');
});

test('string pi returns 3.14', () => {
  expect(changePi('pi')).toEqual('3.14');
});

test('string hip returns hip', () => {
  expect(changePi('hip')).toEqual('hip');
});

test('string p returns p', () => {
  expect(changePi('p')).toEqual('p');
});

test('string x returns x', () => {
  expect(changePi('x')).toEqual('x');
});

test('string blank returns blank', () => {
  expect(changePi('')).toEqual('');
});

test('string pixx returns 3.14xx', () => {
  expect(changePi('pixx')).toEqual('3.14xx');
});

test('string xyzzy returns xyzzy', () => {
  expect(changePi('xyzzy')).toEqual('xyzzy');
});

const noX = myMethods.noX;

test('noX function exists', () => {
  expect(typeof noX).toEqual('function');
});

test('string xaxb returns ab', () => {
  expect(noX('xaxb')).toEqual('ab');
});

test('string abc returns abc', () => {
  expect(noX('abc')).toEqual('abc');
});

test('string xx returns blank', () => {
  expect(noX('xx')).toEqual('');
});

test('string blank returns blank', () => {
  expect(noX('')).toEqual('');
});

test('string axxbxx returns ab', () => {
  expect(noX('axxbxx')).toEqual('ab');
});

test('string Hellox returns Hello', () => {
  expect(noX('Hellox')).toEqual('Hello');
});
