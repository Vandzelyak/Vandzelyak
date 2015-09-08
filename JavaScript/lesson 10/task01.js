/**
 * Created by Lena on 08.09.2015.
 */

//creating an object obj
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',

    //creating a function for extracting an array of numbers
    extractNumber: function() {

        //creating an array extractNumber for items, which type is number
        var extractNumber = [];

        //searching for an array's number items
        for (var number in obj) {

            //processing items, which type is number
            if (typeof obj [number] == 'number') {

                //attaching items to array extractNumber if true
                extractNumber.push (obj [number]);
            }
        }
        return extractNumber;
    },

    //creating a function for extracting an array of strings
    extractString: function() {

        //creating an array extractString for items, which type is string
        var extractString  = [];

        //searching for an array's string items
        for (var string in obj) {

            //processing items, which type is string
            if (typeof obj [string] == 'string') {

                //attaching items to array extractString if true
                extractString.push (obj [string]);
            }
        }
        return extractString;
    }
};

//display results (arrays)
console.log (obj.extractNumber());
console.log (obj.extractString());