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

    calculatePay() {
        let totalPay = 0;
        let hoursWorked = this.calculateHoursWorked();
        let startTimeHour = this.startTime.getHours();
        let endTimeHour = this.endTime.getHours();

        switch (this.assignedFamily) {
            case 'A':
                if (startTimeHour < 23) {
                    totalPay += (23 - startTimeHour) * 15;
                    totalPay += (hoursWorked - (23 - startTimeHour)) * 20;
                } else {
                    totalPay += hoursWorked * 20;
                }

                break;

            case 'B':
                for (let i = 0; i < hoursWorked; i++) {
                    if (startTimeHour + i < 22) {
                        totalPay += 12;
                    } else if (startTimeHour + i >= 22 && startTimeHour + i < 24) {
                        totalPay += 8;
                    } else {
                        totalPay += 16;
                    }
                }

                break;

            case 'C':
                if (startTimeHour < 21) {
                    totalPay += (21 - startTimeHour) * 21;
                    totalPay += (hoursWorked - (21 - startTimeHour)) * 15;
                } else {
                    totalPay += hoursWorked * 15;
                }

                break;
        }

        return totalPay;
    }

    calculateHoursWorked() {
        let timeDifference = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        timeDifference /= 60 * 60;

        return Math.abs(Math.round(timeDifference));
    }
}

module.exports = Babysitter;
