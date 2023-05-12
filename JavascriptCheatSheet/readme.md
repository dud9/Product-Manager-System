# javascript Cheat Sheet

## 1. Basics
>### Where write Javascript code 
> ⦁ On page script
 ```html
  <script type="text/javascript">
   alert(a);
  </script> 
```

> ⦁ Include external Js File
```html
<script src="script.js"><script>
```

## 2.	output
>### The ways to display the output of a given code
> ⦁ Write to browser Console
```javascript
console.log(" Hello world ");
```
> ⦁ Write to the HTML
```javascript
 document.write("hello");
 ```
 > ⦁ Output in an alert Box
 ```javascript
 alert("hi");
 ```
 > ⦁ yes/no dialog, returns true/false depending on user click
 ```javascript
 confirm("Hello");
 ```
 > ⦁ input dialog. Second argument is the initial value
 ```javascript
 prompt("your age?","0");
 ```
## 3.	comments
>### How to comment in Javascript
```javascript
//One line
```
```javascript
/* multi line 
comment */
```
## 4.	Html inside JS
>## Edit Dom element
```Javascript
document.GetElementById("ElementId").innerHTML = "hello world";
```
## 5.	variables X
>## a variable stores data that can be changed later on
```javascript
var a; //variable
var b = "init" //string
var c = "hi" + " " + "Jo"; //hi jo
var d = 1 + 2 + "3"; //33
var e = [1,2,3,4]; //array
var f = false; //boolean
var g = /()/; //regex
var h = function(){}; //function object
var PI = 3.31; //constant
var a = 1, b = 2, c = a + b; // one line
let z = "zzz" //block scope local variable

//Values 
false,true //boolean
10, 4.50, 0b100011, 0xF6, NaN //number
"Flower" , 'marwan' //string
undefined, null, infinity //special
```

## 6.	mathematical operators
>## A typical arithmetic operation operates on two numbers.
> ⦁ + Addition
```javascript
let x = 50 + 100;

//variables

let x = y + z;

//expressions

let x = (50 + 100) * a;
```
> ⦁ - Subtracting
```javascript
let x = 5 - 2;
//variable
let x = y - z;
```
> ⦁ * Multiplying
```javascript
let x = 2 * 5;
//variable
let x = Y * Z;
```
> ⦁ / Dividing
```javascript
let x = 10 / 2;

//variable
let x = x / y;
```
> ⦁ % Remainder
```javascript
let x =2 % 10;
//variable
let x = y % z;
```
> ⦁ ++ Incrementing (+1)
```javascript
let x =5;
x++;
let z =x;
document.GetElementById(Demo).InnerHTML=z;
//print 6
```
> ⦁ -- Decrementing
```javascript
let x =5;
x--;
let z =x;
document.GetElementById(Demo).InnerHTML=z;
//print 4
```
> ⦁ ** Exponentiation
```javascript
let x = 5;
document.getElementById("demo").innerHTML = x ** 2;
//print 25
```

## 7. logical operators (Arithmetic)
>## Logical operators are used to determine the logic between variables or values.
```javascript
let x = 6;
let y = 3;
//&& and
(x < 10 && y > 1) //is true

//|| OR
(x == 5 || y == 5) //is false

//! NOT
!(x == Y) // is true

```
## 8.	boolean expression (False,True)
>## Comparing data of different types may give unexpected results.
>An empty string converts to 0. A non-numeric string converts to NaN which is always false.
```javascript
2 < 12 	    //true 	
2 < "12" 	  //true 	
2 < "John" 	//false 	
2 > "John" 	//false 	
2 == "John" //false 	
"2" < "12" 	//false 	
"2" > "12" 	//true 	
"2" == "12" //false
```
> ⦁ ## Arithmetic
```javascript
a * (b + c)         // grouping
person.age          // member
person[age]         // member
!(a == b)           // logical not
a != b              // not equal
typeof a            // type (number, object, function...)
x << 2  x >> 3      // minary shifting
a = b               // assignment
a == b              // equals
a != b              // unequal
a === b             // strict equal
a !== b             // strict unequal
a < b   a > b       // less and greater than
a <= b  a >= b      // less or equal, greater or eq
a += b              // a = a + b (works with - * %...)
a && b              // logical and
a || b              // logical or

```
## 9.	IF ELSE statment
> ⦁ Use if to specify a block of code to be executed, if a specified condition is true
> ⦁ Use else to specify a block of code to be executed, if the same condition is false
> ⦁ Use else if to specify a new condition to test, if the first condition is false
```javascript
if ((age >= 14) && (age < 19)) {        // logical condition
status = "Eligible.";               // executed if condition is true
} else {                                // else block is optional
status = "Not eligible.";           // executed if condition is false
}
```
## 10. switch case
> ⦁ Use switch to specify many alternative blocks of code to be executed
```javascript
switch (new Date().getDay()) {      // input is current day
case 6:                         // if (day == 6)
	text = "Saturday";          
	break;
case 0:                         // if (day == 0)
	text = "Sunday";
	break;
default:                        // else...
	text = "Whatever";
} 
```
## 11.	while loop
> ##  loops through a block of code while a specified condition is true
```javascript
var i = 1;                      // initialize
while (i < 100) {               // enters the cycle if statement is true
i *= 2;                     // increment to avoid infinite loop
document.write(i + ", ");   // output
}
```
## 12.	DO WHILE loop
> ## The do while statement creates a loop that executes a specified statement until the test condition evaluates to false
```javascript
var i = 1;                      // initialize
do {                            // enters cycle at least once
i *= 2;                     // increment to avoid infinite loop
document.write(i + ", ");   // output
} while (i < 100)               // repeats cycle if statement is true at the end
```
## 13.	FOR loop
> ## loops through a block of code a number of times
```javascript
for (var i = 0; i < 10; i++) {
document.write(i + ": " + i*3 + "<br />");
}

var sum = 0;
for (var i = 0; i < a.length; i++) {
sum + = a[i];
}               // parsing an array

html = "";
for (var i of custOrder) {
html += "<li>" + i + "</li>";
}
```
## 14.	contenue and break statements
>## The **break** statement "jumps out" of a loop.
>## The **continue** statement "jumps over" one iteration in the loop.
```javascript
//Break

for (var i = 0; i < 10; i++) {
if (i == 5) { break; }          // stops and exits the cycle
document.write(i + ", ");       // last output number is 4
}
//Continue

for (var i = 0; i < 10; i++) {
if (i == 5) { continue; }       // skips the rest of the cycle
document.write(i + ", ");       // skips 5
}
```
## 15.	Function
>##  JavaScript function is executed when "something" invokes it (calls it).
```javascript
function addNumbers(a, b) {
return a + b; ;
}

x = addNumbers(1, 2);
```
## 16.	variable scope
>## Scope determines the accessibility (visibility) of variables.
>## Block scope
```javascript
/*ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block: */
{
  let x = 2;
}
// x can NOT be used here 
{
  var x = 2;
}
// x CAN be used here 
```
>## Function scope
```javascript
/* JavaScript has function scope: Each function creates a new scope.
Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared with var, let and const are quite similar when declared inside a function.
They all have Function Scope: */

function myFunction() {
  var carName = "Volvo";   // Function Scope
}

function myFunction() {
  let carName = "Volvo";   // Function Scope
}

function myFunction() {
  const carName = "Volvo";   // Function Scope
}
```
>## Global scope
```javascript
// A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

//==============================

var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope
//==============================

//Automatically Global
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
} 
```

## 17.	mathematical functions
## 18.	string functions
## 19.	date
## 20.	arrays
## 21.	JS events
## 22.	JS DOM
## 23.	get elements using tag name
## 24.	get elements using JS
## 25.	form example
## 26.	timers
