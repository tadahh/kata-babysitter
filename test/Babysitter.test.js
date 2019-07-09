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
    expect(() => {
        new Babysitter('d', '12', '3');
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
