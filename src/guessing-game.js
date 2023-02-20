class GuessingGame {
    constructor() {

    }
    min
    max
    middle

    setRange(min, max) {
        new GuessingGame()
        this.min = min
        this.max = max
    }

    guess() {
        this.middle = Math.ceil((this.max - this.min) / 2) + this.min
        return this.middle
    }

    lower() {
        this.max = this.middle
    }

    greater() {
        this.min = this.middle
    }
}

module.exports = GuessingGame;
