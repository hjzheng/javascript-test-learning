import {Parking, Car} from "./parking";

describe("parking", function () {

    let parking;
    let fiveCars;
    let fourCars;
    let twoCars;

    beforeEach(function () {
        parking = new Parking(5);
        fiveCars = [new Car(), new Car(), new Car(), new Car(), new Car()];
        fourCars = [new Car(), new Car(), new Car(), new Car()];
        twoCars = [new Car(), new Car()];
    });

    afterEach(function () {
        parking = null;
        fiveCars = null;
    });

    it("No other cars went in, one car goes into parking should be true", function () {
        expect(parking.into([new Car()])).toBeTruthy();
    });

    it("No other cars went in, two cars go into parking should be true", function () {
        expect(parking.into(twoCars)).toBeTruthy();
    });

    it("one car went in, one car goes into parking should be true", function () {
        parking.into([new Car()]);
        expect(parking.into([new Car()])).toBeTruthy();
    });

    it("two cars went in, two cars go into parking should be true", function () {
        parking.into(twoCars);
        expect(parking.into([new Car(), new Car()])).toBeTruthy();
    });

    it("four cars went in, one car goes into parking should be true", function () {
        parking.into(fourCars);
        expect(parking.into([new Car()])).toBeTruthy();
    });

    it("five cars went in, one car can not go into parking should be true", function () {
        parking.into(fiveCars);
        expect(!parking.into([new Car()])).toBeTruthy();
    });

    it("five cars went in, two cars can not go into parking should be true", function () {
        parking.into(fiveCars);
        expect(!parking.into(twoCars)).toBeTruthy();
    });

    it("four cars went in, two cars can not go into parking should be true", function () {
        parking.into(fourCars);
        expect(!parking.into(twoCars)).toBeTruthy();
    });

    it("a cars went in, a car can go out parking should be true", function () {
        var a = new Car();
        parking.into([a]);
        expect(parking.out([a])).toBeTruthy();
    });

    it("a and b cars went in, a and b can go out parking should be true", function () {
        var a = new Car();
        var b = new Car();
        parking.into([a, b]);
        expect(parking.out([b, a])).toBeTruthy();
    });

    it("No other cars went in, one car can not go out parking should be true", function () {
        expect(!parking.out([new Car()])).toBeTruthy();
    });

    it("No other cars went in, two cars can not go out parking should be true", function () {
        expect(!parking.out(twoCars)).toBeTruthy();
    });

    it("a cars went in, b car can not go out parking should be true", function () {
        var a = new Car();
        parking.into([a]);
        var b = new Car();
        expect(!parking.out([b])).toBeTruthy();
    });


});