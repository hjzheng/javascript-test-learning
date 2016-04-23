import {Parking, ParkingMan, Car} from "./parking";

describe("parking", function () {

    let parkingA;
    let parkingB;
    let myCar, car1, car2, car3;
    let parkingMan;

    beforeEach(function () {
        parkingA = new Parking(10);
        parkingB = new Parking(10);
        parkingMan = new ParkingMan();
        myCar = new Car();
        car1 = new Car();
        car2 = new Car();
        car3 = new Car();
    });

    afterEach(function () {
        parkingA = null;
        parkingB = null;
        parkingMan = null;
        myCar = null;
    });

    it("parkingA can put car should be true", function () {
        expect(parkingA.put(car1)).toBeTruthy();
    });

    it("parkingB can put car should be true", function () {
        expect(parkingB.put(car1)).toBeTruthy();
    });

    it("parkingA has already be parked 3 cars, parkingA can put car should be true", function () {
        parkingA.put(car1)
        parkingA.put(car2)
        parkingA.put(car3);
        expect(parkingA.put(myCar)).toBeTruthy();
    });

});