class Babysitter {
    constructor(family, startTime, endTime) {
        this.assignedFamily = family;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    get assignedFamily() {
        return this._assignedFamily;
    }

    get startTime() {
        return this._startTime;
    }

    get endTime() {
        return this._endTime;
    }

    set assignedFamily(family) {
        family = family.toUpperCase();

        if (family === 'A' || family === 'B' || family === 'C') {
            this._assignedFamily = family;
        } else {
            throw 'Family does not exist';
        }
    }

    set startTime(startTime) {
        this._startTime = startTime;
    }

    set endTime(endTime) {
        this._endTime = endTime;
    }
}

module.exports = Babysitter;
