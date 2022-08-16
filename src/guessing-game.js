class GuessingGame {
    constructor(minValue, maxValue) {
        this.minValue;
        this.maxValue;
    }
    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.mid = Math.round((this.minValue + this.maxValue) / 2);
        return this.mid;
    }

    lower() {
        this.maxValue = this.mid;
    }

    greater() {
        this.minValue = this.mid;
    }
}

module.exports = GuessingGame;
