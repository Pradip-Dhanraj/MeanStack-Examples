var counter = function(arr){
  return arr.length;
};

var msg = function (msg) {
  console.log(msg);
}

var adding = function (a,b) {
  return `sum of the two number is ${a+b}`;
}

// NOTE: OLD WAYS TO  EXPORT MODULE
// module.exports.counter = counter;
// module.exports.blank = msg;
// module.exports.adding = adding;


// NOTE: exporting modules in object WAYS
module.exports = {
counter : counter,
msg : msg,
adding : adding
};
