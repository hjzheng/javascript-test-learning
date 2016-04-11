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
    })

});