class Car {

}

class Parking {

    constructor(size){
        this.size = size;
        this.set = new Set();
    }

    into(cars){
        if(cars.length <= (this.size - this.set.size)) {
            cars.forEach(car => this.set.add(car));
            return true;
        }else{
            return false;
        }
    }

    out(cars){
        if(cars.length <= this.set.size){
            var results = cars.map(car => {return this.set.has(car)});
            if(!results.every(v => {return v === true})){
                return false;
            } else {
                cars.forEach(car => this.set.delete(car));
                return true;
            }
        }else{
            return false;
        }
    }
}

export {Parking, Car};