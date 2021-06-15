"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const arrays_js_1 = __importDefault(require("../utilities/arrays.js"));
const numbers_js_1 = __importDefault(require("../utilities/numbers.js"));
const strings_js_1 = __importDefault(require("../utilities/strings.js"));
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = supertest_1.default(server_1.default);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.status).toBe(200);
        done();
    }));
});
const nums = [1, 2, 3, 5, 6];
const words = ['dog', 'cat', 'goat', 'lion', 'bird'];
it('expect myFunc to equal 25', () => {
    expect(index_1.default(5)).toEqual(25);
});
it('expects the sum of nums elements to be 17', () => {
    expect(arrays_js_1.default.addArr(nums)).toEqual(17);
});
it("expects the result of nums plus words to be [1,2,3,5,6,'dog', 'cat', 'goat', 'lion', 'bird']", () => {
    expect(arrays_js_1.default.concatArr(nums, words)).toEqual([
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
    expect(numbers_js_1.default.sum(2, 4)).toBeLessThan(7);
});
it('expects 12 divided by 7 to be close to 1.71 ', () => {
    expect(numbers_js_1.default.divide(12, 7)).toBeCloseTo(1.71, 2);
});
it('expects happy to be HAPPY ', () => {
    expect(strings_js_1.default.upperCase('happy')).toEqual('HAPPY');
});
it('expects 1 plus 2 to not equal to 4', () => {
    expect(numbers_js_1.default.sum(1, 2)).not.toEqual(4);
});
it('expects division by 0 to be undefined', () => {
    expect(numbers_js_1.default.divide(1, 0)).toBeUndefined;
});
