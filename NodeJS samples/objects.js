function Person(firstname,lastname) {
this.firstname = firstname,
this.lastname = lastname
}
var obj = new Person('node','js');      //function constructors

Person.prototype.fullname = function () {
  console.log(this.firstname + ' ' +this.lastname);
};

//obj.fullname();

var obj2  = new Person('node','js 2');
//obj2.fullname();


(function(data){
  console.log('immidiate function' + data);
}(" success"));
