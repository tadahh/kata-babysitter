const Babysitter = require('../Babysitter');

test('assigning a family to Babysitter', () => {
    const babysitter = new Babysitter();

    babysitter.assignFamily('a');

    expect(babysitter.assignedFamily).toBe('A');
    expect(babysitter.isBooked).toBe(true);
});

test('assigning another family to same Babysitter', () => {
    const babysitter = new Babysitter();

    babysitter.assignFamily('a');

    expect(babysitter.isBooked).toBe(true);

    expect(() => {
        babysitter.assignFamily('b');
    }).toThrow('Baby sitter is already booked!');
});
