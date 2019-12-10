
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

// Joining Strings
var greeting = "Hello ";
var myName = "Nick";
greeting + myName;

// Length of the string
"Superduperlongstringoftext".length;

var java = "Java";
java.length;

// Getting a single character from a string
var myName = "Nick";
myName[0];
myName[1];
myName[2];

var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";
codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];

// Cutting up strings
"a string".slice(1,5); // start value and end stop value

var longString = "My long string is long";
longString.slice(3, 14);

var longString = "My long string is long";
longString.slice(3); // start from 3 till the end of the string

// All Capital or Lowercase letters
"Hello there, how are you doing?".toUpperCase();
"heLLo THere, hOW ARE you doINg?".toLowerCase();

// Start with capital case letter and the rest is lowercase
var myStr = "heLLo THere, hOW ARE you doINg?";
myStr = myStr.toLowerCase();
var firstSymbol = myStr[0].toUpperCase();
var restSentence = myStr.slice(1);
firstSymbol + restSentence;

//Logical operators (p.30)

//Logical "AND"
var hadShower = true;
var hasBackpack = false;
hadShower && hasBackpack;

// Logical "OR"
var hasApple = true;
var hasOrange = true;
hasApple || hasOrange;

//Logical "NOT"
var isWeekend = true;
var needtToShowerToday = !isWeekend;
needtToShowerToday;

//Combining Logical Operators
var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
shouldGoToSchool;

//Comparing Numbers with Booleans (>, >=, <, <=)
var height = 65;
var heightRestriction = 60;
height > heightRestriction;

//Equal to
// If you compare two different datatypes it will always return "false"
var mySecretNumber = "5";
var chicoGuess = 5;
mySecretNumber === chicoGuess; //(===) Exact match.
mySecretNumber == chicoGuess; // not strict match

0 == false; //evaluates to "true"
"fasle" == false; //evaluates to "false"

//Undefined and NULL
//Underfined - when JavaScript doesn't have a value for somrthing
var myVariable;
myVariable; //the value is not set therfore there is nothing to return.

//NULL - when you want to deliberstely say "This is empty"
var myNullVariable = null;
myNullVariable;
