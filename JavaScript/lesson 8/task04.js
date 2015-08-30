/**
 * Created by Lena on 30.08.2015.
 */

//function constructor Article for counting the number of created objects. And memorizing date of the last object
//created.
function Article() {
    this.created = new Date(); //creating the current date
    Article.count++; //counter for created objects
    Article.last = this.created; //memorizing the last object created
}

Article.count = 0; //counting start

//output results
Article.showStats = function() {
    console.log( 'Total: ' + this.count + ', Latest: ' + this.last );
};

new Article();
new Article();

Article.showStats(); // Total: 2, Latest: (date)

new Article();

Article.showStats(); // Total: 3, Latest: (date)