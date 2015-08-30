/**
 * Created by Lena on 30.08.2015.
 */

//creating a function for reading full user`s name
function User(fullName) {
    this.fullName = fullName;

    // processing and structuring properties of object. Properties firstName and lastName are available not only
    // for reading  but also for writing

    Object.defineProperties(this, {

        firstName: {
            get: function() {
                return this.fullName.split(" ")[0];
            },

            set: function(newFirstName) {
                this.fullName = newFirstName + " " + this.lastName;
            }
        },

        lastName: {
            get: function() {
                return this.fullName.split(" ")[1];
            },
            set: function(newLastName) {
                this.fullName = this.firstName + " " + newLastName;
            }
        }

    });

}

//creating full users`s name and changing it`s surname (last name)
var vasya = new User('Александр Пушкин');

// reading firstName and lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// writing to lastName
vasya.lastName = 'Толстой';

console.log( vasya.fullName ); // Александр Толстой