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
> ## Loops can execute a block of code a number of times.
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
## 14.	contenue and break statements
## 15.	Function
## 16.	variable scope
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
