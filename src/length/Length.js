class Length {

    constructor(length = 0, unit) {
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

    plus(len){
        if(this.unit === len.unit) {
            return new Length(this.length + len.length, len.unit);
        } else {
            return new Length((this.length * this.unit.num + len.length*len.unit.num)/len.unit.num, len.unit);
        }
    }


    subtract(len){
        if(this.unit === len.unit) {
            return new Length(this.length - len.length, len.unit);
        } else {
            return new Length((this.length * this.unit.num - len.length*len.unit.num)/len.unit.num, len.unit);
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

