import {Parking, ParkingMan, Car} from "./parking";

describe("parking", function () {

	let parkingA;
	let parkingB;
	let myCar, car1, car2, car3, car4;
	let parkingMan;

	beforeEach(function () {
		parkingA = new Parking(10);
		parkingB = new Parking(10);
		parkingMan = new ParkingMan();
		myCar = new Car();
		car1 = new Car();
		car2 = new Car();
		car3 = new Car();
		car4 = new Car();
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
		parkingA.put(car1);
		parkingA.put(car2);
		parkingA.put(car3);
		expect(parkingA.put(myCar)).toBeTruthy();
	});

	it("parkingA has already be parked 3 cars, parkingB has already be parked 1 car, parkingA can put car should be true", function () {
		parkingA.put(car1);
		parkingA.put(car2);
		parkingA.put(car3);

		parkingB.put(car4);

		expect(parkingA.put(myCar)).toBeTruthy();
	});

	it("parkingA is full, but parkingB can put car should be true", function () {
		for (let i = 0; i < 10; i++) {
			parkingA.put(new Car());
		}
		expect(parkingB.put(myCar)).toBeTruthy();
	});

	it("parkingA is full, one car come out from parkingA, so parkingA can put car should be true", function () {
		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(car1);

		parkingA.remove(car1);

		expect(parkingA.put(myCar)).toBeTruthy();
	});

	it("parkingA is full, parking man drive one car out from parkingA, so parkingA can put car should be true", function () {
		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(car1);

		parkingMan.driveCarOutFromParking(car1, parkingA);

		expect(parkingA.put(myCar)).toBeTruthy();
	});


	it("both parkingA and parkingB are full, parking man drive one car out from parkingA, so parkingA can put car should be true", function () {

		for (let i = 0; i < 10; i++) {
			parkingB.put(new Car());
		}

		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(car1);

		parkingMan.driveCarOutFromParking(car1, parkingA);

		expect(parkingA.put(myCar)).toBeTruthy();
	});


	it("both parkingA and parkingB are full, parking man drive one car out from parkingA, so parkingA can put car should be true", function () {

		for (let i = 0; i < 10; i++) {
			parkingB.put(new Car());
		}

		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(car1);

		parkingMan.driveCarOutFromParking(car1, parkingA);

		expect(parkingA.put(myCar)).toBeTruthy();
	});

	it("both parkingA and parkingB are full, one car come out from parkingA, so parkingA can put car should be true", function () {

		for (let i = 0; i < 10; i++) {
			parkingB.put(new Car());
		}

		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(car1);
		parkingA.remove(car1);

		expect(parkingA.put(myCar)).toBeTruthy();
	});

	it("parkingB is full, parkingA has one slot, one car come into parkingA, so parkingA can put car should be false", function () {

		for (let i = 0; i < 10; i++) {
			parkingB.put(new Car());
		}

		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(new Car());

		expect(parkingA.put(myCar)).toBeFalsy();
	});


	it("parkingB is full, parkingA has one slot, but parking man freeze parkingA, so parkingA can put car should be false", function () {

		for (let i = 0; i < 10; i++) {
			parkingB.put(new Car());
		}

		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingMan.freezeParking(parkingA);

		expect(parkingA.put(myCar)).toBeFalsy();
	});

	it("Both parkingB and ParkingA are full, one car come out from parkingB and parkingA, parking man freeze parkingA and parkingB, so parkingA can put car should be false", function () {

		for (let i = 0; i < 9; i++) {
			parkingB.put(new Car());
		}

		parkingB.put(car1);
		parkingB.remove(car1);

		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(car2);
		parkingA.remove(car2);

		parkingMan.freezeParking(parkingA);
		parkingMan.freezeParking(parkingB);

		expect(parkingB.put(myCar)).toBeFalsy();
	});

	it("Both parkingB and ParkingA are full, one car come out from parkingB and parkingA, parking man freeze parkingA and parkingB, so parkingA can put car should be false", function () {

		for (let i = 0; i < 9; i++) {
			parkingB.put(new Car());
		}

		parkingB.put(car1);
		parkingB.remove(car1);

		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(car2);
		parkingA.remove(car2);

		parkingMan.freezeParking(parkingA);
		parkingMan.freezeParking(parkingB);

		expect(parkingB.put(myCar)).toBeFalsy();
	});

	it("Both parkingB and ParkingA are full, one car come out from parkingB and parkingA, one car come into parkingB and parkingA, so parkingA can put car should be false", function () {

		for (let i = 0; i < 9; i++) {
			parkingB.put(new Car());
		}

		parkingB.put(car1);
		parkingB.remove(car1);


		for (let i = 0; i < 9; i++) {
			parkingA.put(new Car());
		}

		parkingA.put(car2);
		parkingA.remove(car2);

		parkingB.put(car3);
		parkingA.put(car4);

		expect(parkingB.put(myCar)).toBeFalsy();
	});

	it("ParkingA has car1, car1 came from parkingA should be true", function () {
		parkingA.put(car1);
		expect(parkingA.remove(car1)).toBeTruthy();
	});

	it("ParkingB has car2, car2 came from parkingB should be true", function () {
		parkingB.put(car2);
		expect(parkingB.remove(car2)).toBeTruthy();
	});

	it("ParkingB has car2, car2 came from parkingB should be true", function () {
		parkingB.put(car2);
		expect(parkingB.remove(car2)).toBeTruthy();
	});

	it("ParkingB had car2, parkingB has been freezed by parking man, so car2 came from parkingB should be false", function () {
		parkingB.put(car2);
		parkingMan.freezeParking(parkingB);
		expect(parkingB.remove(car2)).toBeFalsy();
	});

	it("ParkingB had car2, so car2 come from parkingA should be false", function () {
		parkingB.put(car2);
		expect(parkingA.remove(car2)).toBeFalsy();
	});

	it("ParkingB had car2, your firend get car2 from parkingB, so car2 come from parkingB should be false", function () {
		parkingB.put(car2);
		parkingB.remove(car2);
		expect(parkingA.remove(car2)).toBeFalsy();
	});

	it("ParkingA did not have car2, so car2 come from parkingB should be false", function () {
		expect(parkingA.remove(car2)).toBeFalsy();
	});

});