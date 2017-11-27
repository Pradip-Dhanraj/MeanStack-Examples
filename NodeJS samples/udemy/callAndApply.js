// var obj = {
//     name :'Object',
//     greet : function(){
//         console.log(`${this.name} from greet function`);
//     }
// }

// obj.greet();
// obj.greet.call({name:'Call'});
// obj.greet.apply({name:'Apply'});

var util = require('util');

function person() {
    this.name = 'Pradip';
    this.surname = 'Dhanraj';
}

function officer() {
    this.greet = function()
    {
        person.call(this);
        console.log(`My name is ${this.name} ${this.surname}!! `);
    }
}

util.inherits(officer,person);

var obj = new officer();
obj.greet();


