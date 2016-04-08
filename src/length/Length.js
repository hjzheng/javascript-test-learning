export default class Length {

    constructor(length, unit){
        this.length = length || 0;
        this.unit = unit || "mm";
        this._baseLength = this.length * Length.units[this.unit];
    }

    toString() {
        return this.length + this.unit;
    }

    toUnit(unit){
        if(!unit) {
            this.length = this._baseLength;
            this.unit = "mm";
        } else {
            this.length = this._baseLength/Length.units[unit];
            this.unit = unit;
        }
    }

    //static
    static toEqual(lengthA, lengthB) {
        return lengthA._baseLength === lengthB._baseLength;
    }

    static add(lengthA, lengthB) {
        return new Length((lengthA._baseLength + lengthB._baseLength), "mm");
    }

    static subtract(lengthA, lengthB) {
        return new Length(lengthA._baseLength - lengthB._baseLength, "mm");
    }
}

Length.units = {
    "cm" : 10,
    "m": 1000,
    "mm": 1,
    "km": 1000000
}