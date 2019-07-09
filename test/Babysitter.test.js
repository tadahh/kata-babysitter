const Babysitter = require('../Babysitter');

test('assigning a Babysitter', () => {
    let startDate = new Date(2019, 7, 8, 17);
    let endDate = new Date(2019, 7, 8, 18);
    let babysitter = new Babysitter('a', startDate, endDate);

    expect(babysitter.assignedFamily).toBe('A');
    expect(babysitter.startTime).toBe(startDate);
    expect(babysitter.endTime).toBe(endDate);
});

test('assigning a Babysitter that does not belong to Family A, B, or C', () => {
    let startDate = new Date(2019, 7, 8, 17);
    let endDate = new Date(2019, 7, 8, 18);

    expect(() => {
        new Babysitter('d', startDate, endDate);
    }).toThrow();
});

test('passing a non Date startDate value to babysitter', () => {
    let endDate = new Date(2019, 7, 8, 18);

    expect(() => {
        new Babysitter('a', '12', endDate);
    }).toThrow();
});

test('passing a non Date endDate value to babysitter', () => {
    let startDate = new Date(2019, 7, 8, 18);

    expect(() => {
        new Babysitter('a', startDate, '3');
    }).toThrow();
});

test('setting end time before start time', () => {
    let startDate = new Date(2019, 7, 8, 17);
    let endDate = new Date(2019, 7, 8, 16);

    expect(() => {
        new Babysitter('a', startDate, endDate);
    }).toThrow();
});

test('start date hours are not between 5pm and 4am', () => {
    let startDate = new Date(2019, 7, 8, 14);
    let endDate = new Date(2019, 7, 8, 21);

    expect(() => {
        new Babysitter('a', startDate, endDate);
    }).toThrow();
});

test('calculating total pay for family A working from 5pm to 4am ', () => {
    let startDate = new Date(2019, 7, 8, 17);
    let endDate = new Date(2019, 7, 9, 4);
    let babysitter = new Babysitter('a', startDate, endDate);

    expect(babysitter.calculatePay()).toBe(190);
});

test('calculating total pay for family B working from 5pm to 4am ', () => {
    let startDate = new Date(2019, 7, 8, 17);
    let endDate = new Date(2019, 7, 9, 4);
    let babysitter = new Babysitter('b', startDate, endDate);

    expect(babysitter.calculatePay()).toBe(140);
});

test('calculating total pay for family C working from 5pm to 4am ', () => {
    let startDate = new Date(2019, 7, 8, 17);
    let endDate = new Date(2019, 7, 9, 4);
    let babysitter = new Babysitter('c', startDate, endDate);

    expect(babysitter.calculatePay()).toBe(189);
});
