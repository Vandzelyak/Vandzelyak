/**
 * Created by Lena on 22.09.2015.
 */


function Window (title, height, width){
    this.height = height;
    this.width = width;
    this.title = title;
    this.area = this.width * this.height;
}


function Wall(height, width){
    this.height = height;
    this.width = width;
    this.area = this.width * this.height;

    this.windows = [];
    this.addWindow = function(window) {
        if (this.area > window.area) {
            this.windows.push(window);
            this.area -= window.area;
        } else {
            return false;
        }
    }

    this.getCuttedWindow = function(){
        if(this.cuttedWindow != undefined){
            return this.cuttedWindow.title;
        }else {
            return null;
        }
    }
}

var outsideWall = new Wall(3, 5);
var firstWindow = new Window("First window is cutted, sir", 2, 3);
var secondWindow = new Window("Second window is cutted, sir", 1, 2);
outsideWall.addWindow(firstWindow);
console.log(outsideWall.getCuttedWindow());


/*function ourCoolFunction (){
    return this.say;
}

var greeting = {say: 'hello'};

ourCoolFunction.call(greeting)





function mul() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
    result += arguments[i] * 2;
}
return result;

}
var array = [1,2,3,4,5];
console.log(mul.apply({}, array));




var brotherJohn = [];
var brotherAndy = [];

brotherAndy.push.call(brotherJohn, "number");
console.log (brotherJohn);*/

