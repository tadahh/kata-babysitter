const Babysitter = require('../Babysitter');

test('assigning a family to Babysitter', () => {
    const babysitter = new Babysitter();

    babysitter.assignFamily('a');

    expect(babysitter.assignedFamily).toBe('A');
});
