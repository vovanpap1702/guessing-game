class GuessingGame {
	var min;
	var max;
    constructor() {}

    setRange(min, max) {
	    this.min=min;
	    this.max=max;


    }

    guess() {

	    return Math.round((min+max)/2));
    }

    lower() {
	    max=Math.round((min+max)/2);

    }

    greater() {
	    min=Math.round((min+max)/2);

    }
}

module.exports = GuessingGame;
