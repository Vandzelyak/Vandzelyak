/**
 * Created by Lena on 12.08.2015.
 */

//variable initialization
var boardSize = 8; /*setting the size of chessboard*/
var cell = ""; /*initializing cells*/

//setting the position of the cells
for (var first = 0; first < boardSize; first++) {
    for (var second = 0; second < boardSize; second++) {

        //checking numbers of cells for odd or even
        if ((first + second) % 2 == 0)
            cell += " "; /*setting the odd space cells*/
        else
            cell += "#"; /*setting the even # cells*/
    }
    cell += "\n"; /*setting the string breaking*/
}

//result output
console.log(emptyCell);