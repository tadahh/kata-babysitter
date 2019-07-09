const Babysitter = require('../Babysitter');

test('assigning a Babysitter', () => {
    const babysitter = new Babysitter('a', '12', '3');

    expect(babysitter.assignedFamily).toBe('A');
    expect(babysitter.startTime).toBe('12');
    expect(babysitter.endTime).toBe('3');
});

test('assigning a Babysitter that does not belong to Family A, B, or C', () => {
    expect(() => {
        new Babysitter('d', '12', '3');
    }).toThrow();
});
