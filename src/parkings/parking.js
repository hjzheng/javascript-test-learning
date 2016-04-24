
class Parking {
	constructor(size) {
		this.size = size;
		this.set = new Set();
		this.isFreezed = false;
	}

	put(car) {
		if(this.set.size < this.size && !this.set.has(car) && !this.isFreezed) {
			this.set.add(car);
			return true;
		}else {
			return false;
		}
	}

	remove(car) {
		if(this.isFreezed !== true && this.set.has(car)) {
			return this.set.delete(car);
		} else {
			return false;
		}
	}

	freeze() {
		this.isFreezed = true;
	}
}

class ParkingMan {
	constructor() {

	}

	driveCarOutFromParking(car, parking) {
		parking.remove(car);
	}

	freezeParking(parking) {
		parking.freeze();
	}
}

class Car {

}


export {Parking, ParkingMan, Car};