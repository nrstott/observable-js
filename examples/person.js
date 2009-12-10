var observable = require("observable");

function Person(firstName, lastName, jobTitle) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.jobTitle = jobTitle;
}

Person.prototype.promote = function(newJobTitle) {
	this.jobTitle = newJobTitle;
	this.publish("after_promote", this, newJobTitle);
}

observable.mixin(Person.prototype);
Person.subscribeTo = Person.prototype.subscribeTo; // conveniance accessor

Person.subscribeTo("after_promote", function(person, newJobTitle) {
	print("Congrats " + person.firstName + " on your promotion to " + newJobTitle);
});

var bob = new Person("Bob", "Smith", "Rookie");
bob.promote("Veteran");

