import {Length, units} from './Length';

describe("length equals", function () {

    it("one cm equals one cm", function () {
        expect(new Length(1, units.cm).equals(new Length(1, units.cm))).toBeTruthy();
    });

    it("one cm not equal two cm", function(){
        expect(new Length(1, units.cm).equals(new Length(2, units.cm))).toBeFalsy();
    });

    it("one m equals one hundred cm", function () {
        expect(new Length(1, units.m).equals(new Length(100, units.cm))).toBeTruthy();
    });

    it("one m not equal two cm", function () {
        expect(new Length(1, units.m).equals(new Length(2, units.cm))).toBeFalsy();
    })

    it("one cm equals tem mm", function () {
        expect(new Length(1, units.cm).equals(new Length(10, units.mm))).toBeTruthy();
    });

    it("one m not equal one hundred mm", function () {
        expect(new Length(1, units.m).equals(new Length(100, units.mm))).toBeFalsy();
    });

});


describe("length adding", function () {

    it("one cm plus one cm equals two cm", function () {
        expect(new Length(1, units.cm).plus(new Length(1, units.cm))).toEqual(new Length(2, units.cm));
    });

    it("one m plus one cm equals 101 cm", function(){
        expect(new Length(1, units.m).plus(new Length(1, units.cm))).toEqual(new Length(101, units.cm));
    });

    it("two mm plus three cm equals 3.2 cm", function () {
        expect(new Length(2, units.mm).plus(new Length(3, units.cm))).toEqual(new Length(3.2, units.cm));
    });

});


describe("length subtract", function () {

    it("one cm plus subtract cm equals two cm", function () {
        expect(new Length(1, units.cm).subtract(new Length(1, units.cm))).toEqual(new Length(0, units.cm));
    });

    it("one m plus subtract one cm equals 99 cm", function(){
        expect(new Length(1, units.m).subtract(new Length(1, units.cm))).toEqual(new Length(99, units.cm));
    });

    it("two mm plus three cm equals 3.2 cm", function () {
        expect(new Length(2, units.mm).subtract(new Length(3, units.cm))).toEqual(new Length(-2.8, units.cm));
    });

});