/**
 * Created by Lena on 22.09.2015.
 */

var dog = {voice: 'woof', kind: 'dog'};
var cat = {voice: 'meow', kind: 'cat'};
var mouse = {voice: 'pi', kind: 'mouse'};
var dragon = {voice: 'arrr', kind: 'dragon'};

var funnyCompany = [dog, cat, mouse, dragon];

function makeVoice() {
    return this.kind + ': ' + this.voice;
}

dog.say = makeVoice;
cat.say = makeVoice;
mouse.say = makeVoice;
dragon.say = makeVoice;

console.log(dog.say());
console.log(cat.say());
console.log(mouse.say());
console.log(dragon.say());
