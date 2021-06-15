import myFunc from '../index';
import arrays from '../utilities/arrays.js';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';
import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
});

const nums = [1, 2, 3, 5, 6];
const words = ['dog', 'cat', 'goat', 'lion', 'bird'];

it('expect myFunc to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

it('expects the sum of nums elements to be 17', () => {
  expect(arrays.addArr(nums)).toEqual(17);
});
it("expects the result of nums plus words to be [1,2,3,5,6,'dog', 'cat', 'goat', 'lion', 'bird']", () => {
  expect(arrays.concatArr(nums, words)).toEqual([
    1,
    2,
    3,
    5,
    6,
    'dog',
    'cat',
    'goat',
    'lion',
    'bird',
  ]);
});

it('expects sum of 2 and 4 to be 6', () => {
  expect(numbers.sum(2, 4)).toBeLessThan(7);
});

it('expects 12 divided by 7 to be close to 1.71 ', () => {
  expect(numbers.divide(12, 7)).toBeCloseTo(1.71, 2);
});

it('expects happy to be HAPPY ', () => {
  expect(strings.upperCase('happy')).toEqual('HAPPY');
});

it('expects 1 plus 2 to not equal to 4', () => {
  expect(numbers.sum(1, 2)).not.toEqual(4);
});

it('expects division by 0 to be undefined', () => {
  expect(numbers.divide(1, 0)).toBeUndefined;
});
