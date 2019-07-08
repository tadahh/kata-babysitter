class Babysitter {
    constructor() {
        this.isBooked = false;
        this.assignedFamily = '';
        this.startTime = '';
        this.endTime = '';
        this.totalPay = 0;
    }

    assignFamily(family) {
        this.assignedFamily = family.toUpperCase();
    }
}

module.exports = Babysitter;
