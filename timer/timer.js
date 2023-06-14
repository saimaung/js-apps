class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    /**
     * https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYGwhgzhAEAqCWBbApgJ2gbwFDV9YA9gHYQAuqArsKQagBQAmFqYp8xAkkQA4WkA00MmFSkAQnxpFB3MBQjIJpKQEpMOPJtIALeBAB0TFm048-0ALzQjrdkS69SAbg2bcOvfuGilUy0NIRcUliFzc8DwNZeUUQon9ohV9QrFc3SK9Anzj9MAYGAFEAN2QiUgAZPVJStDoAclB4YABrOsEM71IVMLwAX1TNTv86NQsAPnVw3EISAhBkfRACAHN6gGUstiJluCQ0Ou60rV0DAH0GZAAjClXDzX6086ubkcmpmYg5haXVuoARZ7LZbwbYHHq4B6aRLIV7YNKQvDEP7MWzEADC2jA2xhajh9wGESazVhBIhWF6QA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=true&targets=&version=7.22.4&externalPlugins=&assumptions=%7B%7D
     * Using arrow function solves this keyword to always instance of the class even when a button is click
     * constructor(durationInput, startButton, pauseButton) {
        _defineProperty(this, "start", () => {
        console.log("Starting Timer");
        this._debug();
    });
     */
    start = () => {
        console.log('Timer Started');
        if(this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.intervalId = setInterval(this.tick, 50);
    }

    tick = () => {
        const timeRemaining = this.timeRemaining;
        if (timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = timeRemaining - 0.05;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    _debug_this() {
        console.log('Debug this: expected behaviour');
    }

    onDurationChange = () => {

    }
}