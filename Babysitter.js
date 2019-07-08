class Babysitter {
    constructor() {
        this.isBooked = false;
        this.assignedFamily = '';
        this.startTime = '';
        this.endTime = '';
        this.totalPay = 0;
    }

    assignFamily(family) {
        if (this.isBooked) {
            throw 'Baby sitter is already booked!';
        }

        this.assignedFamily = family.toUpperCase();
        this.isBooked = true;
    }
}

module.exports = Babysitter;
