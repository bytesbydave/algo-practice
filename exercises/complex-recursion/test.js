const reverse = require('./reversestring');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

const reverseString = require('./reverseArray');

test('ReverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('ReverseString reverses a string', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
    'o',
    'l',
    'l',
    'e',
    'h'
  ]);
});

test('ReverseString reverses a string', () => {
  expect(reverseString(['h', 'a', 'n', 'n', 'a', 'H', ' ', ' '])).toEqual([
    ' ',
    ' ',
    'H',
    'a',
    'n',
    'n',
    'a',
    'h'
  ]);
});

const swapPairs = require('./swapPairs');
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

test('swapPairs function exists', () => {
  expect(typeof swapPairs).toEqual('function');
});

test('swapPairs swaps a linked list', () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  expect(swapPairs(l.head)).toEqual({
    data: 2,
    next: { data: 1, next: { data: 4, next: { data: 3, next: null } } }
  });
});

const pascalsTriangle = require('./pascalsTriangle');

test('pascalsTriangle function exists', () => {
  expect(pascalsTriangle).toBeDefined();
});

test('pascalsTriangle produces correct sum', () => {
  expect(pascalsTriangle(5, 3)).toEqual(6);
});

const generate = require('./pascalsArray');

test('pascalsArray function exists', () => {
  expect(generate).toBeDefined();
});

test('pascalsArray produces an array of arrays', () => {
  expect(generate(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
  ]);
});

const pascalsArr2 = require('./pascalsArray2');

test('pascalsArr2 function exists', () => {
  expect(pascalsArr2).toBeDefined();
});

test('pascalsArr2 returns correct line on index', () => {
  expect(pascalsArr2(3)).toEqual([1, 3, 3, 1]);
});

const reverseLinkedList = require('./reverseLinkedList');

test('reverseLinkedList function exists', () => {
  expect(reverseLinkedList).toBeDefined();
});

test('reverseLinkedList function reverses the linked list', () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  expect(reverseLinkedList(l.head)).toEqual({
    data: 4,
    next: { data: 3, next: { data: 2, next: { data: 1, next: null } } }
  });
});

const fibonacci = require('./fibonacci');

test('Fibonacci function is defined', () => {
  expect(typeof fibonacci).toEqual('function');
});

test('calculates correct fibonacci value for 1', () => {
  expect(fibonacci(1)).toEqual(1);
});

test('calculates correct fibonacci value for 2', () => {
  expect(fibonacci(2)).toEqual(1);
});

test('calculates correct fibonacci value for 3', () => {
  expect(fibonacci(3)).toEqual(2);
});

test('calculates correct fibonacci value for 4', () => {
  expect(fibonacci(4)).toEqual(3);
});

test('calculates correct fibonacci value for 15', () => {
  expect(fibonacci(39)).toEqual(63245986);
});

const climbStairs = require('./climbStairs')

test('climbStairs function is defined', () => {
  expect(typeof climbStairs).toEqual('function')
})

test('calculates correct stair count', () => {
  expect(climbStairs(3)).toEqual(3)
})

test('calculates correct stair count', () => {
  expect(climbStairs(2)).toEqual(2)
})