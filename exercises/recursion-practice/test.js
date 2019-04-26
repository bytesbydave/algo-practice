const myMethods = require('./index.js');
const factorial = myMethods.factorial;

describe('factorial', () => {
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
});

const bunnyEars = myMethods.bunnyEars;

describe('bunnyEars', () => {
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
});

const fibonacci = myMethods.fibonacci;

describe('fibonacci', () => {
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
});

const bunnyEars2 = myMethods.bunnyEars2;

describe('bunnyEars2', () => {
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
});

const triangle = myMethods.triangle;

describe('triangle', () => {
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
});

const sumDigits = myMethods.sumDigits;

describe('sumDigits', () => {
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
});

const count7 = myMethods.count7;

describe('count7', () => {
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
});

const count8 = myMethods.count8;

describe('count8', () => {
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
});

const powerN = myMethods.powerN;

describe('powerN', () => {
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
});

const countX = myMethods.countX;

describe('countX', () => {
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
});

const countHi = myMethods.countHi;

describe('countHi', () => {
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
});

const changeXY = myMethods.changeXY;

describe('changeXY', () => {
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
});

const changePi = myMethods.changePi;

describe('changePi', () => {
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
});

const noX = myMethods.noX;

describe('noX', () => {
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
});

const array6 = myMethods.array6;

describe('array6', () => {
  test('array6 function exists', () => {
    expect(typeof array6).toEqual('function');
  });

  test('expect array [1, 6, 4] to equal true', () => {
    expect(array6([1, 6, 4], 0)).toEqual(true);
  });

  test('expect array [1,4] to return false', () => {
    expect(array6([1, 4], 0)).toEqual(false);
  });

  test('expect array [6] to return true', () => {
    expect(array6([6], 0)).toEqual(true);
  });

  test('expect array [] to return false', () => {
    expect(array6([], 0)).toEqual(false);
  });

  test('expect array [6,2,2] to return true', () => {
    expect(array6([6, 2, 2], 0)).toEqual(true);
  });

  test('expect array [2,5] to return false', () => {
    expect(array6([2, 5], 0)).toEqual(false);
  });

  test('expect array [1,9,4,6,6] to return true', () => {
    expect(array6([1, 9, 4, 6, 6], 0)).toEqual(true);
  });

  test('expect array [2,5,6] to return true', () => {
    expect(array6([2, 5, 6], 0)).toEqual(true);
  });
});

const array11 = myMethods.array11;

describe('array11', () => {
  test('array11 function exists', () => {
    expect(typeof array11).toEqual('function');
  });

  test('expect array [1,2,11] to return 1', () => {
    expect(array11([1, 2, 11], 0)).toEqual(1);
  });

  test('expect array [11,11] to return 2', () => {
    expect(array11([11, 11], 0)).toEqual(2);
  });

  test('expect array [1, 2, 3, 4] to return 0', () => {
    expect(array11([1, 2, 3, 4], 0)).toEqual(0);
  });

  test('expect array [1, 11, 3, 11, 11] to return 3', () => {
    expect(array11([1, 11, 3, 11, 11], 0)).toEqual(3);
  });

  test('expect array [11] to return 1', () => {
    expect(array11([11], 0)).toEqual(1);
  });

  test('expect array [1] to return 0', () => {
    expect(array11([1], 0)).toEqual(0);
  });

  test('expect array [] to return 0', () => {
    expect(array11([], 0)).toEqual(0);
  });

  test('expect array [11, 2, 3, 4, 11, 5] to return 2', () => {
    expect(array11([11, 2, 3, 4, 11, 5], 0)).toEqual(2);
  });

  test('expect array [11,5,11] to return 2', () => {
    expect(array11([11, 5, 11], 0)).toEqual(2);
  });
});

const array220 = myMethods.array220;

describe('array220', () => {
  test('array220 function exists', () => {
    expect(typeof array220).toEqual('function');
  });

  test('expect array220([1, 2, 20], 0) to return true', () => {
    expect(array220([1, 2, 20], 0)).toEqual(true);
  });

  test('expect array220([3, 30], 0) to return true', () => {
    expect(array220([3, 30], 0)).toEqual(true);
  });

  test('expect array220([3], 0) to return false', () => {
    expect(array220([3], 0)).toEqual(false);
  });

  test('expect array220([], 0) to return false', () => {
    expect(array220([], 0)).toEqual(false);
  });

  test('expect array220([3,3,30,4], 0) to return true', () => {
    expect(array220([3, 3, 30, 4], 0)).toEqual(true);
  });

  test('expect array220([2,19,4], 0) to return false', () => {
    expect(array220([2, 19, 4], 0)).toEqual(false);
  });

  test('expect array220([20,2,21], 0) to return false', () => {
    expect(array220([20, 2, 21], 0)).toEqual(false);
  });

  test('expect array220([20,2,21,210], 0) to return true', () => {
    expect(array220([20, 2, 21, 210], 0)).toEqual(true);
  });

  test('expect array220([2,200,2000], 0) to return true', () => {
    expect(array220([2, 200, 2000], 0)).toEqual(true);
  });

  test('expect array220([0,0], 0) to return true', () => {
    expect(array220([0, 0], 0)).toEqual(true);
  });

  test('expect array220([1,2,3,4,5,6], 0) to return false', () => {
    expect(array220([1, 2, 3, 4, 5, 6], 0)).toEqual(false);
  });

  test('expect array220([1,2,3,4,5,50,6], 0) to return true', () => {
    expect(array220([1, 2, 3, 4, 5, 50, 6], 0)).toEqual(true);
  });

  test('expect array220([1,2,3,4,5,51,6], 0) to return false', () => {
    expect(array220([1, 2, 3, 4, 5, 51, 6], 0)).toEqual(false);
  });

  test('expect array220([1,2,3,4,4,50,500,6], 0) to return true', () => {
    expect(array220([1, 2, 3, 4, 4, 50, 500, 6], 0)).toEqual(true);
  });
});

const allStar = myMethods.allStar;

describe('allStar', () => {
  test('allStar function exists', () => {
    expect(typeof allStar).toEqual('function');
  });

  test('expect allStar(hello) to return h*e*l*l*o', () => {
    expect(allStar('hello')).toEqual('h*e*l*l*o');
  });

  test('expect allStar() to return blank', () => {
    expect(allStar('')).toEqual('');
  });

  test('expect allStar(Chocolate) to return C*h*o*c*o*l*a*t*e', () => {
    expect(allStar('Chocolate')).toEqual('C*h*o*c*o*l*a*t*e');
  });

  test('expect allStar(3.14) to return 3*.*1*4', () => {
    expect(allStar('3.14')).toEqual('3*.*1*4');
  });
});

const pairStar = myMethods.pairStar;

describe('pairStar', () => {
  test('pairStar function exists', () => {
    expect(typeof pairStar).toEqual('function');
  });

  test('expect pairStar(hello) to return hel*lo', () => {
    expect(pairStar('hello')).toEqual('hel*lo');
  });

  test('expect pairStar(xxyy) to return x*xy*y', () => {
    expect(pairStar('xxyy')).toEqual('x*xy*y');
  });

  test('expect pairStar(aaaa) to return a*a*a*a', () => {
    expect(pairStar('aaaa')).toEqual('a*a*a*a');
  });

  test('expect pairStar(aaab) to return a*a*ab', () => {
    expect(pairStar('aaab')).toEqual('a*a*ab');
  });

  test('expect pairStar(aa) to return a*a', () => {
    expect(pairStar('aa')).toEqual('a*a');
  });

  test('expect pairStar() to return blank', () => {
    expect(pairStar('')).toEqual('');
  });

  test('expect pairStar(noadjacent) to return noadjacent', () => {
    expect(pairStar('noadjacent')).toEqual('noadjacent');
  });

  test('expect pairStar(a) to return a', () => {
    expect(pairStar('a')).toEqual('a');
  });
});

const endX = myMethods.endX;

describe('endX', () => {
  test('endX function exists', () => {
    expect(typeof endX).toEqual('function');
  });

  test('expect xxre to return rexx', () => {
    expect(endX('xxre')).toEqual('rexx');
  });

  test('expect xxhixx to return hixxxx', () => {
    expect(endX('xxhixx')).toEqual('hixxxx');
  });

  test('expect xhixhix to return hihixxx', () => {
    expect(endX('xhixhix')).toEqual('hihixxx');
  });

  test('expect hiy to return hiy', () => {
    expect(endX('hiy')).toEqual('hiy');
  });

  test('expect h to return h', () => {
    expect(endX('h')).toEqual('h');
  });

  test('expect x to return x', () => {
    expect(endX('x')).toEqual('x');
  });

  test('expect blank to return blank', () => {
    expect(endX('')).toEqual('');
  });

  test('expect bxx to return bxx', () => {
    expect(endX('bxx')).toEqual('bxx');
  });

  test('expect axaxax to return aaaxxx', () => {
    expect(endX('axaxax')).toEqual('aaaxxx');
  });
});

const countPairs = myMethods.countPairs;

describe('countPairs', () => {
  test('countPairs function exists', () => {
    expect(typeof countPairs).toEqual('function');
  });

  test('expect countPairs(axa) to return 1', () => {
    expect(countPairs('axa')).toEqual(1);
  });

  test('expect countPairs(axax) to return 2', () => {
    expect(countPairs('axax')).toEqual(2);
  });

  test('expect countPairs(axbx) to return 1', () => {
    expect(countPairs('axbx')).toEqual(1);
  });

  test('expect countPairs(hi) to return 0', () => {
    expect(countPairs('hi')).toEqual(0);
  });

  test('expect countPairs(hihih) to return 3', () => {
    expect(countPairs('hihih')).toEqual(3);
  });

  test('expect countPairs(ihihhh) to return 3', () => {
    expect(countPairs('ihihhh')).toEqual(3);
  });

  test('expect countPairs(ihjxhh) to return 0', () => {
    expect(countPairs('ihjxhh')).toEqual(0);
  });

  test('expect countPairs() to return 0', () => {
    expect(countPairs('')).toEqual(0);
  });

  test('expect countPairs(a) to return 0', () => {
    expect(countPairs('a')).toEqual(0);
  });

  test('expect countPairs(aa) to return 0', () => {
    expect(countPairs('aa')).toEqual(0);
  });

  test('expect countPairs(aaa) to return 1', () => {
    expect(countPairs('aaa')).toEqual(1);
  });
});

const countAbc = myMethods.countAbc;

describe('countAbc', () => {
  test('countAbc function exists', () => {
    expect(typeof countAbc).toEqual('function');
  });

  test('expect countAbc(abc) to return 1', () => {
    expect(countAbc('abc')).toEqual(1);
  });

  test('expect countAbc(abcxxabc) to return 2', () => {
    expect(countAbc('abcxxabc')).toEqual(2);
  });

  test('expect countAbc(abaxxaba) to return 2', () => {
    expect(countAbc('abaxxaba')).toEqual(2);
  });

  test('expect countAbc(ababc) to return 2', () => {
    expect(countAbc('ababc')).toEqual(2);
  });

  test('expect countAbc(aaabc) to return 1', () => {
    expect(countAbc('aaabc')).toEqual(1);
  });

  test('expect countAbc(abxbc) to return 0', () => {
    expect(countAbc('abxbc')).toEqual(0);
  });

  test('expect countAbc(hello) to return 0', () => {
    expect(countAbc('hello')).toEqual(0);
  });

  test('expect countAbc() to return 0', () => {
    expect(countAbc('')).toEqual(0);
  });

  test('expect countAbc(ab) to return 0', () => {
    expect(countAbc('ab')).toEqual(0);
  });

  test('expect countAbc(aba) to return 1', () => {
    expect(countAbc('aba')).toEqual(1);
  });
});

const count11 = myMethods.count11;

describe('count11', () => {
  test('count11 function exists', () => {
    expect(typeof count11).toEqual('function');
  });

  test('expect count11(11abc11) to return 2', () => {
    expect(count11('11abc11')).toEqual(2);
  });

  test('expect count11(abc11x11x11) to return 3', () => {
    expect(count11('abc11x11x11')).toEqual(3);
  });

  test('expect count11(111) to return 1', () => {
    expect(count11('111')).toEqual(1);
  });

  test('expect count11(1111) to return 2', () => {
    expect(count11('1111')).toEqual(2);
  });

  test('expect count11(1) to return 0', () => {
    expect(count11('1')).toEqual(0);
  });

  test('expect count11() to return 0', () => {
    expect(count11('')).toEqual(0);
  });

  test('expect count11(hi) to return 0', () => {
    expect(count11('hi')).toEqual(0);
  });

  test('expect count11(11x111x1111) to return 4', () => {
    expect(count11('11x111x1111')).toEqual(4);
  });

  test('expect count11(1x111) to return 1', () => {
    expect(count11('1x111')).toEqual(1);
  });
});

const stringClean = myMethods.stringClean;

describe('stringClean', () => {
  test('stringClean funcion exists', () => {
    expect(typeof stringClean).toEqual('function');
  });

  test('expect stringClean(yyzzza) to return yza', () => {
    expect(stringClean('yyzzza')).toEqual('yza');
  });

  test('expect stringClean(abbbcdd) to return abcd', () => {
    expect(stringClean('abbbcdd')).toEqual('abcd');
  });

  test('expect stringClean(Hello) to return Helo', () => {
    expect(stringClean('Hello')).toEqual('Helo');
  });

  test('expect stringClean(XXabcYY) to return XabcY', () => {
    expect(stringClean('XXabcYY')).toEqual('XabcY');
  });

  test('expect stringClean(112ab445) to return 12ab45', () => {
    expect(stringClean('112ab445')).toEqual('12ab45');
  });

  test('expect stringClean(Hello Bookkeeper) to return Helo Bokeper', () => {
    expect(stringClean('Hello Bookkeeper')).toEqual('Helo Bokeper');
  });
});

const countHi2 = myMethods.countHi2;

describe('countHi2', () => {
  test('countHi2 function exists', () => {
    expect(typeof countHi2).toEqual('function');
  });

  test('expect countHi2(ahixhi) to return 1', () => {
    expect(countHi2('ahixhi')).toEqual(1);
  });

  test('expect countHi2(ahibhi) to return 2', () => {
    expect(countHi2('ahibhi')).toEqual(2);
  });

  test('expect countHi2(xhixhi) to return 0', () => {
    expect(countHi2('xhixhi')).toEqual(0);
  });

  test('expect countHi2(hixhi) to return 1', () => {
    expect(countHi2('hixhi')).toEqual(1);
  });

  test('expect countHi2(hixhhi) to return 2', () => {
    expect(countHi2('hixhhi')).toEqual(2);
  });

  test('expect countHi2(hihihi) to return 3', () => {
    expect(countHi2('hihihi')).toEqual(3);
  });

  test('expect countHi2(hihihix) to return 3', () => {
    expect(countHi2('hihihix')).toEqual(3);
  });

  test('expect countHi2(xhihihix) to return 2', () => {
    expect(countHi2('xhihihix')).toEqual(2);
  });

  test('expect countHi2(xxhi) to return 0', () => {
    expect(countHi2('xxhi')).toEqual(0);
  });
});

const parenBit = myMethods.parenBit;

describe('parenBit', () => {
  test('parenBit function exists', () => {
    expect(typeof parenBit).toEqual('function');
  });

  test('expect parenBit(xyz(abc)123) to return (abc)', () => {
    expect(parenBit('xyz(abc)123')).toEqual('(abc)');
  });

  test('expect parenBit(x(hello)) to return (hello)', () => {
    expect(parenBit('x(hello)')).toEqual('(hello)');
  });

  test('expect parenBit((xy)1) to return (xy)', () => {
    expect(parenBit('(xy)1')).toEqual('(xy)');
  });

  test('expect parenBit(not really (possible)) to return (possible)', () => {
    expect(parenBit('not really (possible)')).toEqual('(possible)');
  });

  test('expect parenBit((abc)) to return (abc)', () => {
    expect(parenBit('(abc)')).toEqual('(abc)');
  });

  test('expect parenBit((abc)xyz) to return (abc)', () => {
    expect(parenBit('(abc)xyz')).toEqual('(abc)');
  });

  test('expect parenBit((x)) to return (x)', () => {
    expect(parenBit('(x)')).toEqual('(x)');
  });

  test('expect parenBit(()) to return ()', () => {
    expect(parenBit('()')).toEqual('()');
  });

  test('expect parenBit(ab(ab)ab) to return (ab)', () => {
    expect(parenBit('ab(ab)ab')).toEqual('(ab)');
  });
});

const nestParen = myMethods.nestParen;

describe('nestParen', () => {
  test('nestParen function exists', () => {
    expect(typeof nestParen).toEqual('function');
  });

  test('expect nestParen((())) to return true', () => {
    expect(nestParen('(())')).toEqual(true);
  });

  test('expect nestParen(((()))) to return true', () => {
    expect(nestParen('((()))')).toEqual(true);
  });

  test('expect nestParen((((x))) to return false', () => {
    expect(nestParen('(((x))')).toEqual(false);
  });

  test('expect nestParen(((())) to return false', () => {
    expect(nestParen('((())')).toEqual(false);
  });

  test('expect nestParen(((()()) to return false', () => {
    expect(nestParen('((()()')).toEqual(false);
  });

  test('expect nestParen(()) to return true', () => {
    expect(nestParen('()')).toEqual(true);
  });

  test('expect nestParen() to return true', () => {
    expect(nestParen('')).toEqual(true);
  });

  test('expect nestParen((yy)) to return false', () => {
    expect(nestParen('(yy)')).toEqual(false);
  });

  test('expect nestParen((((y))) to return false', () => {
    expect(nestParen('(((y))')).toEqual(false);
  });

  test('expect nestParen((())))) to return false', () => {
    expect(nestParen('(())))')).toEqual(false);
  });
});

const strCount = myMethods.strCount;

describe('strCount', () => {
  test('strCount function exists', () => {
    expect(typeof strCount).toEqual('function');
  });

  test('expect strCount(catcowcat, cat) to return 2', () => {
    expect(strCount('catcowcat', 'cat')).toEqual(2);
  });

  test('expect strCount(catcowcat, cow) to return 1', () => {
    expect(strCount('catcowcat', 'cow')).toEqual(1);
  });

  test('expect strCount(catcowcat, dog) to return 0', () => {
    expect(strCount('catcowcat', 'dog')).toEqual(0);
  });

  test('expect strCount(cacatcowcat, cat) to return 2', () => {
    expect(strCount('cacatcowcat', 'cat')).toEqual(2);
  });

  test('expect strCount(xyx, x) to return 2', () => {
    expect(strCount('xyx', 'x')).toEqual(2);
  });

  test('expect strCount(iiiijj, i) to return 4', () => {
    expect(strCount('iiiijj', 'i')).toEqual(4);
  });

  test('expect strCount(iiiijj, ii) to return 2', () => {
    expect(strCount('iiiijj', 'ii')).toEqual(2);
  });

  test('expect strCount(iiiijj, iii) to return 1', () => {
    expect(strCount('iiiijj', 'iii')).toEqual(1);
  });
});

const strCopies = myMethods.strCopies;

describe('strCopies', () => {
  test('strCopies function exists', () => {
    expect(typeof strCopies).toEqual('function');
  });

  test('expect strCopies(catcowcat, cat, 2) to return true', () => {
    expect(strCopies('catcowcat', 'cat', 2)).toEqual(true);
  });

  test('expect strCopies(catcowcat, cow, 2) to return false', () => {
    expect(strCopies('catcowcat', 'cow', 2)).toEqual(false);
  });

  test('expect strCopies(catcowcat, cow, 1) to return true', () => {
    expect(strCopies('catcowcat', 'cow', 1)).toEqual(true);
  });

  test('expect strCopies(iiijjj, i, 3) to return true', () => {
    expect(strCopies('iiijjj', 'i', 3)).toEqual(true);
  });

  test('expect strCopies(iiijjj, i, 4) to return false', () => {
    expect(strCopies('iiijjj', 'x', 4)).toEqual(false);
  });

  test('expect strCopies(iiijjj, ii, 2) to return true', () => {
    expect(strCopies('iiijjj', 'ii', 2)).toEqual(true);
  });

  test('expect strCopies(iiijjj, ii, 3) to return false', () => {
    expect(strCopies('iiijjj', 'ii', 3)).toEqual(false);
  });

  test('expect strCopies(iiiiij, iii, 3) to return true', () => {
    expect(strCopies('iiiiij', 'iii', 3)).toEqual(true);
  });

  test('expect strCopies(iiiiij, iii, 4) to return false', () => {
    expect(strCopies('iiiiij', 'iii', 4)).toEqual(false);
  });

  test('expect strCopies(ijiiiiij, iiii, 2) to return true', () => {
    expect(strCopies('ijiiiiij', 'iiii', 2)).toEqual(true);
  });

  test('expect strCopies(ijiiiiij, iiii, 3) to return false', () => {
    expect(strCopies('ijiiiiij', 'iiii', 3)).toEqual(false);
  });

  test('expect strCopies(dogcatdogcat, dog, 2) to return true', () => {
    expect(strCopies('dogcatdogcat', 'dog', 2)).toEqual(true);
  });
});

const strDist = myMethods.strDist;

describe('strDist', () => {
  test('strDist function exists', () => {
    expect(typeof strDist).toEqual('function');
  });

  test('expect strDist(catcowcat, cat) to return 9', () => {
    expect(strDist('catcowcat', 'cat')).toEqual(9);
  });

  test('expect strDist(catcowcat, cow) to return 3', () => {
    expect(strDist('catcowcat', 'cow')).toEqual(3);
  });

  test('expect strDist(cccatcowcatxx, cat) to return 9', () => {
    expect(strDist('cccatcowcatxx', 'cat')).toEqual(9);
  });

  test('expect strDist(abccatcowcatcatxyz, cat) to return 12', () => {
    expect(strDist('abccatcowcatcatxyz', 'cat')).toEqual(12);
  });

  test('expect strDist(xyx, x) to return 3', () => {
    expect(strDist('xyx', 'x')).toEqual(3);
  });

  test('expect strDist(xyx, y) to return 1', () => {
    expect(strDist('xyx', 'y')).toEqual(1);
  });

  test('expect strDist(xyx, z) to return 0', () => {
    expect(strDist('xyx', 'z')).toEqual(0);
  });

  test('expect strDist(z, z) to return 1', () => {
    expect(strDist('z', 'z')).toEqual(1);
  });

  test('expect strDist(blank, z) to return 0', () => {
    expect(strDist('', 'z')).toEqual(0);
  });
});

const groupSum = myMethods.groupSum;

describe('groupSum', () => {
  test('groupSum function exists', () => {
    expect(typeof groupSum).toEqual('function');
  });

  test('expect groupSum(0, [2, 4, 8], 10) to return true', () => {
    expect(groupSum(0, [2, 4, 8], 10)).toEqual(true);
  });

  test('expect groupSum(0, [2, 4, 8], 14) to return true', () => {
    expect(groupSum(0, [2, 4, 8], 14)).toEqual(true);
  });

  test('expect groupSum(0, [2, 4, 8], 9) to return false', () => {
    expect(groupSum(0, [2, 4, 8], 9)).toEqual(false);
  });

  test('expect groupSum(0, [2, 4, 8], 8) to return true', () => {
    expect(groupSum(0, [2, 4, 8], 8)).toEqual(true);
  });
  test('expect groupSum(1, [2, 4, 8], 8) to return false', () => {
    expect(groupSum(1, [2, 4, 8], 8)).toEqual(false);
  });

  test('expect groupSum(0, [1], 1) to return true', () => {
    expect(groupSum(0, [1], 1)).toEqual(true);
  });

  test('expect groupSum(0, [9], 1) to return true', () => {
    expect(groupSum(0, [9], 1)).toEqual(true);
  });
});

// const groupSum6 = myMethods.groupSum6;

// describe('groupSum6', () => {
//   test('groupSum6 function exists', () => {
//     expect(typeof groupSum6).toEqual('function');
//   });

//   test('expect groupSum6(0, [5, 6, 2], 8) to return true', () => {
//     expect(groupSum6(0, [5, 6, 2], 8)).toEqual(true);
//   });

//   test('expect groupSum6(0, [5, 6, 2], 9) to return false', () => {
//     expect(groupSum6(0, [5, 6, 2], 9)).toEqual(false);
//   });

//   test('expect groupSum6(0, [5, 6, 2], 7) to return false', () => {
//     expect(groupSum6(0, [5, 6, 2], 7)).toEqual(false);
//   });

//   test('expect groupSum6(0, [1], 1) to return true', () => {
//     expect(groupSum6(0, [1], 1)).toEqual(true);
//   });

//   test('expect groupSum6(0, [9], 1) to return false', () => {
//     expect(groupSum6(0, [9], 1)).toEqual(false);
//   });

//   test('expect groupSum6(0, [], 0) to return true', () => {
//     expect(groupSum6(0, [], 0)).toEqual(true);
//   });

//   test('expect groupSum6(0, [3, 2, 4, 6], 8) to return true', () => {
//     expect(groupSum6(0, [3, 2, 4, 6], 8)).toEqual(true);
//   });

//   test('expect groupSum6(0, [6, 2, 4, 3], 8) to return true', () => {
//     expect(groupSum6(0, [6, 2, 4, 3], 8)).toEqual(true);
//   });

//   test('expect groupSum6(0, [5, 2, 4, 6], 9) to return false', () => {
//     expect(groupSum6(0, [5, 2, 4, 6], 9)).toEqual(false);
//   });

//   test('expect groupSum6(0, [6, 2, 4, 5], 9) to return false', () => {
//     expect(groupSum6(0, [6, 2, 4, 5], 9)).toEqual(false);
//   });

//   test('expect groupSum6(0, [3, 2, 4, 6], 3) to return false', () => {
//     expect(groupSum6(0, [3, 2, 4, 6], 3)).toEqual(false);
//   });
// });

// const groupNoAdj = myMethods.groupNoAdj;

// describe('groupNoAdj', () => {
//   test('groupNoAdj function exists', () => {
//     expect(typeof groupNoAdj).toEqual('function');
//   });

//   test('expect groupNoAdj(0, [2, 5, 10, 4], 12) to return true', () => {
//     expect(groupNoAdj(0, [2, 5, 10, 4], 12)).toEqual(true);
//   });

//   test('expect groupNoAdj(0, [2, 5, 10, 4], 14) to return false', () => {
//     expect(groupNoAdj(0, [2, 5, 10, 4], 14)).toEqual(false);
//   });

//   test('expect groupNoAdj(0, [2, 5, 10, 4], 7) to return false', () => {
//     expect(groupNoAdj(0, [2, 5, 10, 4], 7)).toEqual(false);
//   });

//   test('expect groupNoAdj(0, [2, 5, 10, 4, 2], 7) to return true', () => {
//     expect(groupNoAdj(0, [2, 5, 10, 4, 2], 7)).toEqual(true);
//   });

//   test('expect groupNoAdj(0, [2, 5, 10, 4], 9) to return true', () => {
//     expect(groupNoAdj(0, [2, 5, 10, 4], 9)).toEqual(true);
//   });

//   test('expect groupNoAdj(0, [10, 2, 2, 3, 3], 15) to return true', () => {
//     expect(groupNoAdj(0, [10, 2, 2, 3, 3], 15)).toEqual(true);
//   });

//   test('expect groupNoAdj(0, [10, 2, 2, 3, 3], 7) to return false', () => {
//     expect(groupNoAdj(0, [10, 2, 2, 3, 3], 7)).toEqual(false);
//   });

//   test('expect groupNoAdj(0, [], 0) to return true', () => {
//     expect(groupNoAdj(0, [], 0)).toEqual(true);
//   });

//   test('expect groupNoAdj(0, [1], 1) to return true', () => {
//     expect(groupNoAdj(0, [1], 1)).toEqual(true);
//   });
// });

// const groupSum5 = myMethods.groupSum5;

// describe('groupSum5', () => {
//   test('groupSum5 function exists', () => {
//     expect(typeof groupSym5).toEqual('function');
//   });

//   test('expect groupSum5(0, [2, 5, 10, 4], 19) to return true', () => {
//     expect(groupSum5(0, [2, 5, 10, 4], 19)).toEqual(true);
//   });

//   test('expect groupSum5(0, [2, 5, 10, 4], 17) to return true', () => {
//     expect(groupSum5(0, [2, 5, 10, 4], 17)).toEqual(true);
//   });

//   test('expect groupSum5(0, [2, 5, 10, 4], 12) to return false', () => {
//     expect(groupSum5(0, [2, 5, 10, 4], 12)).toEqual(false);
//   });

//   test('expect groupSum5(0, [2, 5, 4, 10], 12) to return false', () => {
//     expect(groupSum5(0, [2, 5, 4, 10], 12)).toEqual(false);
//   });

//   test('expect groupSum5(0, [3, 5, 1], 4) to return false', () => {
//     expect(groupSum5(0, [3, 5, 1], 4)).toEqual(false);
//   });

//   test('expect groupSum5(0, [3, 5, 1], 5) to return true', () => {
//     expect(groupSum5(0, [3, 5, 1], 5)).toEqual(true);
//   });

//   test('expect groupSum5(0, [1, 3, 5], 5) to return true', () => {
//     expect(groupSum5(0, [1, 3, 5], 5)).toEqual(true);
//   });

//   test('expect groupSum5(0, [], 0) to return true', () => {
//     expect(groupSum5(0, [], 0)).toEqual(true);
//   });

//   test('expect groupSum5(0, [1], 1) to return true', () => {
//     expect(groupSum5(0, [1], 1)).toEqual(true);
//   });
// });

// const groupSumClump = myMethods.groupSumClump;

// describe('groupSumClump', () => {
//   test('groupSumClump function exists', () => {
//     expect(typeof groupSumClump).toEqual('function');
//   });

//   test('expect groupSumClump(0, [2, 4, 8], 10) to return true', () => {
//     expect(groupSumClump(0, [2, 4, 8], 10)).toEqual(true);
//   });

//   test('expect groupSumClump(0, [1, 2, 4, 8, 1], 14) to return true', () => {
//     expect(groupSumClump(0, [1, 2, 4, 8, 1], 14)).toEqual(true);
//   });

//   test('expect groupSumClump(0, [2, 4, 4, 8], 14) to return false', () => {
//     expect(groupSumClump(0, [2, 4, 4, 8], 14)).toEqual(false);
//   });

//   test('expect groupSumClump(0, [8, 2, 2, 1], 9) to return true', () => {
//     expect(groupSumClump(0, [8, 2, 2, 1], 9)).toEqual(true);
//   });

//   test('expect groupSumClump(0, [8, 2, 2, 1], 11) to return false', () => {
//     expect(groupSumClump(0, [8, 2, 2, 1], 11)).toEqual(false);
//   });

//   test('expect groupSumClump(0, [1], 1) to return true', () => {
//     expect(groupSumClump(0, [1], 1)).toEqual(true);
//   });

//   test('expect groupSumClump(0, [9], 1) to return false', () => {
//     expect(groupSumClump(0, [9], 1)).toEqual(false);
//   });
// });

// const splitArray = myMethods.splitArray;

// describe('splitArray', () => {
//   test('splitArray returns a function', () => {
//     expect(typeof splitArray).toEqual('function');
//   });

//   test('split splitArray([2, 2]) to return true', () => {
//     expect(splitArray([2, 2])).toEqual(true);
//   });

//   test('split splitArray([2, 3]) to return false', () => {
//     expect(splitArray([2, 3])).toEqual(false);
//   });

//   test('split splitArray([5, 2, 3]) to return true', () => {
//     expect(splitArray([5, 2, 3])).toEqual(true);
//   });

//   test('split splitArray([5, 2, 2]) to return false', () => {
//     expect(splitArray([5, 2, 2])).toEqual(false);
//   });

//   test('split splitArray([1, 1, 1, 1, 1, 1]) to return true', () => {
//     expect(splitArray([1, 1, 1, 1, 1, 1])).toEqual(true);
//   });

//   test('split splitArray([1, 1, 1, 1, 1]) to return false', () => {
//     expect(splitArray([1, 1, 1, 1, 1])).toEqual(false);
//   });

//   test('split splitArray([]) to return true', () => {
//     expect(splitArray([])).toEqual(true);
//   });

//   test('split splitArray([1]) to return false', () => {
//     expect(splitArray([1])).toEqual(false);
//   });
// });

// describe('splitOdd10', () => {
//   test('splitOdd10 function exists', () => {
//     expect(typeof splitOdd10).toEqual('function');
//   });

//   test('expect splitOdd10([5, 5, 5]) to return true', () => {
//     expect(splitOdd10([5, 5, 5])).toEqual(true);
//   });

//   test('expect splitOdd10([5, 5, 6]) to return false', () => {
//     expect(splitOdd10([5, 5, 6])).toEqual(false);
//   });

//   test('expect splitOdd10([5, 5, 6, 1]) to return true', () => {
//     expect(splitOdd10([5, 5, 6, 1])).toEqual(true);
//   });

//   test('expect splitOdd10([6, 5, 5, 1]) to return true', () => {
//     expect(splitOdd10([6, 5, 5, 1])).toEqual(true);
//   });

//   test('expect splitOdd10([6, 5, 5, 1, 10]) to return true', () => {
//     expect(splitOdd10([6, 5, 5, 1, 10])).toEqual(true);
//   });

//   test('expect splitOdd10([6, 5, 5, 5, 1]) to return false', () => {
//     expect(splitOdd10([6, 5, 5, 5, 1])).toEqual(false);
//   });

//   test('expect splitOdd10([1]) to return true', () => {
//     expect(splitOdd10([1])).toEqual(true);
//   });

//   test('expect splitOdd10([]) to return false', () => {
//     expect(splitOdd10([])).toEqual(false);
//   });

//   test('expect splitOdd10([10, 7, 5, 5, 2]) to return true', () => {
//     expect(splitOdd10([10, 7, 5, 5, 2])).toEqual(true);
//   });
// });

// const split53 = myMethods.split53;

// describe('split53', () => {
//   test('split53 function exists', () => {
//     expect(typeof split53).toEqual('function');
//   });

//   test('expect split53([1, 1]) to return true', () => {
//     expect(split53([1, 1])).toEqual(true);
//   });

//   test('expect split53([1, 1, 1]) to return false', () => {
//     expect(split53([1, 1, 1])).toEqual(false);
//   });

//   test('expect split53([2,4,2]) to return true', () => {
//     expect(split53([2, 4, 2])).toEqual(true);
//   });

//   test('expect split53([2,2,2,1]) to return false', () => {
//     expect(split53([2, 2, 2, 1])).toEqual(false);
//   });

//   test('expect split53([3,3,5,1]) to return true', () => {
//     expect(split53([3, 3, 5, 1])).toEqual(true);
//   });

//   test('expect split53([3,5,8]) to return false', () => {
//     expect(split53([3, 5, 8])).toEqual(false);
//   });

//   test('expect split53([2,4,6]) to return true', () => {
//     expect(split53([2, 4, 6])).toEqual(true);
//   });

//   test('expect split53([3,5,6,10,3,3]) to return true', () => {
//     expect(split53([3, 5, 6, 10, 3, 3])).toEqual(true);
//   });
// });
