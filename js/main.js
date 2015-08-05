$(document).on('ready', function() {
var Song = function(songName, bandName){
  this.songName = songName;
  this.bandName = bandName;

};
var bracelets = new Song("Bracelets", "The Spill Canvas");

var dayLife = new Song("A Day in the Life", "The Beatles");

var virgin = new Song("Virgin", "Manchester Orchestra");

console.log(dayLife, virgin, bracelets);

Song.prototype.countName = function(){
  return this.songName.split(" ").length;
};

console.log(dayLife.countName(), virgin.countName());

Song.prototype.createElement = function(){
  $('body').append("<h1>" + this.songName + "</h1>");
};



var Person = function(firstAndLastName) {
  this.firstAndLastName = firstAndLastName;
  this.isInstructor = true;
};


Person.prototype.getFullName = function(){
  return this.firstAndLastName;
};

Person.prototype.getFirstName = function(){
  var first = this.firstAndLastName.split(" ");
  return first[0];
};

Person.prototype.getLastName = function(){
  var last = this.firstAndLastName.split(" ");
  return last[1];
};


var michael = new Person('Michael Herman');
console.log("Full name is " + michael.getFullName());

console.log("First name is " + michael.getFirstName());

console.log("Last name is " + michael.getLastName());

var Student = function(firstAndLastName){
  this.firstAndLastName = firstAndLastName;
  this.isInstructor = false;
};

//sets subclass
Student.prototype = new Person();

var sarah = new Student("Sarah Turek");

console.log(sarah);


console.log("Full name is " + sarah.getFullName());



});
