import Length from './Length';


describe('Length Equal', () => {
    it('Two length should be equal', () => {
        let lenA = new Length(1);
        let lenB = new Length(1);
        expect(Length.toEqual(lenA, lenB)).toBeTruthy();
    });

    it('Two length with same units should be equal', () => {
        expect(Length.toEqual(new Length(1, 'cm'), new Length(1, 'cm'))).toBeTruthy();
    });

    it('Two length with different units should be equal', () => {
        expect(Length.toEqual(new Length(1, 'm'), new Length(100, 'cm'))).toBeTruthy();
    });

    it('length be converted from cm to m should be OK', () => {
        let lenA  = new Length(1000, 'cm');
        lenA.toUnit('m');
        expect(lenA).toEqual(new Length(10, "m"));
    });
});

describe('Length adding', () => {

    let lenA, lenB, lenC;

    beforeEach(() => {
        lenA = new Length(20, 'cm');
        lenB = new Length(30, 'cm');
        lenC = new Length(5, 'm');
    });

    afterEach(() => {
        lenA = lenB = lenC = null;
    });


    it('adding two length with same units should be OK', () => {
        expect(Length.add(lenA, lenB)).toEqual(new Length(50, 'cm'));
    });

    it('adding two length with different units should be OK', () => {
        expect(Length.add(lenA, lenC)).toEqual(new Length(520, 'cm'));
    });

});

describe('Length subtracting', () => {

    let lenA, lenB, lenC;

    beforeEach(() => {
        lenA = new Length(20, 'cm');
        lenB = new Length(30, 'cm');
        lenC = new Length(5, 'm');
    });

    afterEach(() => {
        lenA = lenB = lenC = null;
    });

    it('subtract two length with same units should be OK', () => {
        expect(Length.subtract(lenA, lenB)).toEqual(new Length(-10, 'cm'));
    });

    it('subtract two length with different units should be OK', () => {
        expect(Length.subtract(lenA, lenC)).toEqual(new Length(-480, 'cm'));
    });
});