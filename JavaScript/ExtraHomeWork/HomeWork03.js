/**
 * Created by Lena on 22.09.2015.
 */


function Window (title, height, width){
    this.height = height;
    this.width = width;
    this.title = title;
    }


function Wall(height, width){
    this.height = height;
    this.width = width;
    this.addWindow = function(window){
        if(window.height < this.height && window.width < this.width){
            this.cuttedWindow = this;
        }
    }
    this.getCuttedWindow = function(){
        if(this.cuttedWindow != undefined){
            return this.cuttedWindow.title;
        }else{
            return null;
        }

    }
    this.windows = [];
    for (var i = 0; i < arguments.length; i++) {
        this.windows.push (arguments [i]);
    }
    console.log (this.windows);
}

var outsideWall = new Wall(3, 5);
var addWindow = new Window("First window is cutted, sir", 2, 3);
var addWindow = new Window("Second window is cutted, sir", 1, 2);
