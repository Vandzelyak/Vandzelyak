/**
 * Created by Lena on 19.08.2015.
 */

//an object creating
var tasksCompleted = {

    //object's parameters
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

//function for searching manager with most task completed
var maxTasks = function (task) {

    //defining variables for max number of tasks and name of manager, who completed them
    var max = 0;
    var managerName = " ";

    //checking object's parameters
    for (var key in task) {

        //searching for name of manager with most task completed
        if (max < task[key]) {
            max = task[key];
            managerName = key;
        }
    }

    //displaying function
    console.log(managerName);
}

//calling function
maxTasks(tasksCompleted);


//OR

//an object creating
var tasksCompleted = {

    //object's parameters
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

//defining variables for max number of tasks
var max = tasksCompleted[1];

//cycle checking object's parameters
for (var item in tasksCompleted) {

    //searching the item with most tasks completed
    if (tasksCompleted[item] > max) {

        //assigning value max if next item is bigger
        max = tasksCompleted[item];
    }
}
//calling function and display data
console.log("The most productive manager is " + item);