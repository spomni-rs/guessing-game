class GuessingGame {
    constructor(){
      this._max = null;
      this._min = null;
      this._guess = null;
    }

    setRange(min, max) {
      this._min = min;
      this._max = max;
    }

    guess() {
      let min = this._min;
      let max = this._max;

      this._guess = min + Math.ceil((max - min) / 2);

      return this._guess;
    }

    lower() {
      this._max = this._guess;
    }

    greater() {
      this._min = this._guess;
    }
}

module.exports = GuessingGame;