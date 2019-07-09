class Babysitter {
    constructor(family, startTime, endTime) {
        this.assignedFamily = family;
        this.startTime = startTime;
        this.endTime = endTime;

        this.checkHoursWorked();
    }

    get assignedFamily() {
        return this._assignedFamily;
    }

    get startTime() {
        // Can only start at 17 hours military
        return this._startTime;
    }

    get endTime() {
        // Can work as late as 4 hours military
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

    checkHoursWorked() {
        if (this.endTime < this.startTime) {
            throw 'End time must come later than start time';
        }

        let startTimeHour = this.startTime.getHours();

        if (startTimeHour < 17 && startTimeHour > 4) {
            throw 'Start time is not within working hours';
        }
    }
}

module.exports = Babysitter;
