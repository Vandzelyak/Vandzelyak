/**
 * Created by Lena on 29.09.2015.
 */

function User() {
    var firstName = '';
    surName = '';

    this.setFirstName = function(string) {
        if (string) {
            firstName = string;
        }
        else {
            throw new Error('Укажите имя');
        }
    }

    this.setSurname = function(string) {
        if (string) {
            surName = string;
        }
        else {
            throw new Error('Укажите фамилию');
        }
    }

    this.getFullName = function() {
        return firstName + '' + surName;
    }
}
var user 