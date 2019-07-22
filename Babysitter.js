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
        if (startTime instanceof Date) {
            this._startTime = startTime;
        } else {
            throw 'Start time must be a valid date';
        }
    }

    set endTime(endTime) {
        if (endTime instanceof Date) {
            this._endTime = endTime;
        } else {
            throw 'End time must be a valid date';
        }
    }

    checkHoursWorked() {
        if (this.endTime < this.startTime) {
            throw 'End time must come later than start time';
        }

        let startTimeHour = this.startTime.getHours();
        let endTimeHour = this.endTime.getHours();

        if (startTimeHour < 17 && startTimeHour > 4) {
            throw 'Start time is not within working hours';
        }

        if (endTimeHour < 17 && endTimeHour > 4) {
            throw 'End time is not within working hours';
        }
    }

    calculatePay() {
        switch (this.assignedFamily) {
            case 'A':
                return this.totalPayForFamilyA();

            case 'B':
                return this.totalPayForFamilyB();

            case 'C':
                return this.totalPayForFamilyC();
        }
    }

    calculateHoursWorked() {
        let timeDifference = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        timeDifference /= 60 * 60;

        return Math.abs(Math.round(timeDifference));
    }

    totalPayForFamilyA() {
        let totalPay = 0;
        let hoursWorked = this.calculateHoursWorked();
        let startTimeHour = this.startTime.getHours();

        if (startTimeHour < 23) {
            totalPay += (23 - startTimeHour) * 15;
            totalPay += (hoursWorked - (23 - startTimeHour)) * 20;
        } else {
            totalPay += hoursWorked * 20;
        }

        return totalPay;
    }

    totalPayForFamilyB() {
        let totalPay = 0;
        let hoursWorked = this.calculateHoursWorked();
        let startTimeHour = this.startTime.getHours();

        for (let i = 0; i < hoursWorked; i++) {
            if (startTimeHour + i < 22) {
                totalPay += 12;
            } else if (startTimeHour + i >= 22 && startTimeHour + i < 24) {
                totalPay += 8;
            } else {
                totalPay += 16;
            }
        }

        return totalPay;
    }

    totalPayForFamilyC() {
        let totalPay = 0;
        let hoursWorked = this.calculateHoursWorked();
        let startTimeHour = this.startTime.getHours();

        if (startTimeHour < 21) {
            totalPay += (21 - startTimeHour) * 21;
            totalPay += (hoursWorked - (21 - startTimeHour)) * 15;
        } else {
            totalPay += hoursWorked * 15;
        }

        return totalPay;
    }
}

module.exports = Babysitter;
