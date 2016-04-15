class Length {

    constructor(length = 0, unit = 'mm') {
        this.length = length;
        this.unit = unit;
    }

    equals(len){
        if(this.unit === len.unit) {
            return this.length === len.length;
        } else {
            return this.length * this.unit.num === len.length * len.unit.num;
        }
    }
}

class Unit {
    constructor(name, num){
        this.name = name;
        this.num = num;
    }

    toString(){
        return this.name;
    }
}

const units = {
    cm : new Unit("cm", 10),
    mm : new Unit("mm", 1),
    m : new Unit("m", 1000)
}


export {Length, units};


