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
## 9.	IF ELSE statment
## 10. switch case
## 11.	while loop
## 12.	DO WHILE loop
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
