/**
 * Created by Lena on 30.08.2015.
 */

function Article() {
    this.created = new Date();
    Article.count++;
    Article.last = this.created;
}

Article.count = 0;

Article.showStats = function() {
    console.log( 'Total: ' + this.count + ', Latest: ' + this.last );
};

new Article();
new Article();

Article.showStats(); // Total: 2, Latest: (date)

new Article();

Article.showStats(); // Total: 3, Latest: (date)