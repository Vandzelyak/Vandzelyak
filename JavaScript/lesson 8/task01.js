/**
 * Created by Lena on 29.08.2015.
 */

var ladder = {

    step: 0,
    up: function() { // upstairs
        this.step++;
        return this;
    },
    down: function() { // downstairs
        this.step--;
        return this;
    },
    showStep: function() { // display the current stair
        alert( this.step );
    }
};

ladder.up().up().down().up().down().showStep(); //chaining