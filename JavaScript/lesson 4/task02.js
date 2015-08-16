/**
 * Created by Lena on 16.08.2015.
 */

//function for checking spam initialization
function checkSpam (string, word) {

//conversion of all symbols to lowercase
    string = string.toLowerCase();
    word = word.toLowerCase();

//searching for spam words
    if (string.indexOf(word) == -1) {
        document.write('Not spam' + '<br/>');
    }
    else {
        document.write('SPAM' + '<br/>')
    }
}

//function call
checkSpam('get new Sex videos', 'Sex'); // true
checkSpam('[SPAM] How to earn fast money?', 'spam'); // true
checkSpam('New PSD template', 'sex'); // false