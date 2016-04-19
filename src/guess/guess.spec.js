/**
 * Created by hjzheng on 16/4/12.
 */

import {CompareNumber, AnswerGenerator} from "./guess";

describe("CompareNumber compare", function () {

    let compare = null;

    beforeEach(function () {
        compare = new CompareNumber();
    });

    it("User input 1234 and answer is 1234, so return 4A0B", function () {
        expect(compare.compare("1234", "1234")).toEqual("4A0B");
    });

    it("User input 4231 and answer is 1234, so return 2A2B", function () {
        expect(compare.compare("4231", "1234")).toEqual("2A2B");
    });

    it("User input 1423 and answer is 1234, so return 1A3B", function () {
        expect(compare.compare("1423", "1234")).toEqual("1A3B");
    });

    it("User input 4321 and answer is 1234, so return 0A4B", function () {
        expect(compare.compare("4321", "1234")).toEqual("0A4B");
    });

    it("User input 1235 and answer is 1234, so return 3A0B", function () {
        expect(compare.compare("1235", "1234")).toEqual("3A0B");
    });

    it("User input 1256 and answer is 1234, so return 2A0B", function () {
        expect(compare.compare("1256", "1234")).toEqual("2A0B");
    });

    it("User input 1567 and answer is 1234, so return 1A0B", function () {
        expect(compare.compare("1567", "1234")).toEqual("1A0B");
    });

    it("User input 5678 and answer is 1234, so return 0A0B", function () {
        expect(compare.compare("5678", "1234")).toEqual("0A0B");
    });

    it("User input 1245 and answer is 1234, so return 2A1B", function () {
        expect(compare.compare("1245", "1234")).toEqual("2A1B");
    });

    it("User input 1543 and answer is 1234, so return 1A0B", function () {
        expect(compare.compare("1543", "1234")).toEqual("1A2B");
    });
});

describe("AnswerGenerator random", function () {

    let result;
    let anotherResult;

    beforeEach(function () {
        let aq = new AnswerGenerator();
        result = aq.random();
        anotherResult = aq.random();

    });
    
    it("the result length must be 4", function () {
        expect(result.length).toBe(4);
    });

    it("the result should be number", function () {
        let nums = result.split("");
        expect(nums.every(function(num){
            return !isNaN(num);
        })).toBeTruthy();
    });

    it("Every character can not be same", function () {
        expect(result.match(/(.).*\1/)).toBeNull();
    });

    // it("the results can not repeat", function () {
    //     expect(result === anotherResult).toBeFalsy();
    // });
});


