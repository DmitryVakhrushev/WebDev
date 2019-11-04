
/*
Type in Firefox to start a console
    about:blank
    CTRL + SHIFT + I
*/

/***** Chapter 2: Data Types and Variables *****/

5; //Number
"Hi, I'm a string" // string
true; // boolean

99 * 123;
"This is a long string".slice(0, 4);
true && false;

12345 / 250;
8 / ( 1+ 3);

// VARIABLES (key word "var")

var nick;
var age = 12; // returns undefined (no value)
age; // returns 12
age = 13; // returns 13 as we are not creating a new variable


var numberOfSiblings = 1 + 3;
var numberOfCandies = 8;
numberOfCandies / numberOfSiblings;

var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
secondsInAnHour;

// First does the change and thenn returns the new value
var highFives = 0;
++highFives;
++highFives;
--highFives;

// Returns the old value first and then does the change
var highFives = 0;
highFives++;
highFives++;
highFives;


var x = 10;
x = x + 5;
x;

var score = 10;
score += 7;
score -= 3;

var myThing = 5;
myThing = "this is a string";

