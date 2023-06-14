const duratioinInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);
let duration;

const timer = new Timer(duratioinInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete() {
        console.log('Timer completed');
    }
});
// timer.start();

/**
 * The Value of 'this'
 * 1. Did you define the function with an arrow function?
 *      Write console.log(this) on the first valid line above the arrow function. Value of 'this' in the arrow function
 *      will be equal to that console log
 * 
 * 2. Did you call 'bind', 'call' or 'apply' on the function when you invoked it?
 *      'this' is equal to the first argument of 'bind', 'call', or 'apply'
 * 
 * 3. All other cases
 *      'this' is equal to whatever is the the left of the '.' in the method call 
 */

/** 
* 1. Did you define the function with an arrow function?
*      Write console.log(this) on the first valid line above the arrow function. Value of 'this' in the arrow function
*      will be equal to that console log

console.log('first valid line above the print arrow function');
console.log(this);
const print = () => {
    console.log('In print arrow function');
    console.log(this);
}
print();

const colors = {
    printColor() {
        console.log(this);
        const print = () => {
            console.log(this);
        };
        print();
    }
};

colors.printColor();
*/

/**
 *  2. Did you call 'bind', 'call' or 'apply' (built-in all JS functions) on the function when you invoked it?
 *     'this' is equal to the first argument of 'bind', 'call', or 'apply'
const print = function() {
    console.log(this);
}

print.call({'color': 'red'});
print.apply({'color': 'red'});
print()
*/

/**
 * 3. All other cases
 *     'this' is equal to whatever is the the left of the '.' in the method call 
const colors = {
    printColor() {
        console.log(this);
    }
}
colors.printColor();

const random = {
    a: 1
};
random.printColor = colors.printColor;
random.printColor
 */