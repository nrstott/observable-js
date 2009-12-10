## Observable

A CommonJS JavaScript package containing the Observable mixin.

## Example

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
    bob.promote("Veteran");    // prints "Congrats Bob on your promotion to Veteran"

## Contributors

<[Nathan Stott](mailto:nathan.stott@whiteboard-it.com)>

## License

Copyright (c) 2009 Nathan Stott <[nathan.whiteboard-it.com](http://nathan.whiteboard-it.com/)\>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

