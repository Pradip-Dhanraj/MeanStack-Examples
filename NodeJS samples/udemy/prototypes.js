var person = {
    firstname : '',
    lastname : '',
    greet : function()
    {
        return 'Hello from '+ this.firstname + ' ' + this.lastname; 
    }
}

var pradip = Object.create(person);
pradip.firstname = 'Pradip';
pradip.lastname = 'Dhanraj';



//var obj = Object.create(person);


function Person() {
    name : ''
}

var obj1 = new Person();
Person.prototype.number = '';
obj1.number='23';
var obj2 = new Person();
console.log(obj1.number);