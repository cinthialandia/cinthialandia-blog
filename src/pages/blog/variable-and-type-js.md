---
title: Variables and types in JavaScript
featuredImage: state.png
date: "2020-06-30"
---

## What are variables? 

Variables are containers with reusable data on it, basically a unit of storage in JavaScript. 

## Declare variables in JavaScript 

The variables in JavaScript are declared with reserved words as `const`, `let` and `var`.

###  Let

Is a variable that allows you re assign their value as many times as necessary and their scope will be a block of code where the variable will be declared, in other words everything inside curly braces `{}`.

```js
let newVariable; 
```

### const 

Is a variable that their name says constant, in other words `const` can’t be re assigned and and their scope is the same as let that the block of the code where is declared.

```js
const newVariable;
```

### var 

Is a variable that can be re-assigned and has the same behavior as `let`, but has an important difference, that does not depend on the block being declared, it depends on the scope of the functions that the variable was declared. 

```js
var newVariable;
```

## Variable initialization

After declaring a variable you must assign a value.

```js
const newVariable =  0
```

## Re assign a variable

It is possible assign a new value to a variable

```js
let newVariable = 0;

newVariable = 24;

```

## Declaration rules of variables 

1. The name must start with letters (a to z), underscore (_), or a dollar sign ($).
2. After the first letter, you can use numbers.
3. The variables are case sensitive, in other words, `const x` and `const X` are different variables.

## CamelCase convention 

It is important to know that is not a rule is just a general convention, that variables should start with lowercase and if the variable name is a compound word, you should start the first word with upper case.

```js
const wordCompound = 0;
```

## What is Hoisting? 

Hoisting is the behavior of `var` variables and functions when those are physically moved to the top of the code, technically this is not literal, this happens at the moment when Js compiled and those are processed in a different order. 

```js
function hello(condition) {
  if (condition) {
    let nameToPrint = "Cinthia";
    console.log(nameToPrint);
  } else {
    let nameToPrint = "Gerardo";
    console.log(nameToPrint); // The console prints “Gerardo”
  }

  console.log(nameToPrint, 'outside of blocks'); // The console prints  an error
}

hello(false)

```

We have a function that prints a name and depends on the param’s value (true or false), if it's true it will print `“Cinthia”` and it is false will print `“Gerardo”`, our 2 first `console.log` print the answer depending on the param, but the third shows an error, because the third `console.log` it is on the function's scope, no on the if's scope, so that `console.log` has no access to those value’s variable. This happens with the let and `const` variable. 

```js

function hello(condition) {
  if (condition) {
    var nameToPrint = "Cinthia"; // The console prints “Cinthia” 
    console.log(nameToPrint);
  } else {
    var nameToPrint = "Gerardo";
    console.log(nameToPrint); 
  }

  console.log(nameToPrint, 'outside of blocks'); // The console prints  "Gerardo" "outside of blocks"
}

hello(true)

```

In this example, we change our argument to true and our example will print Cinthia, and changed our `let` for `var`, there we can observe that `var` variable are available in our function’s scope even if they were declared on the if’s scope, so our `console.log` has access and show a prints a the result. 

## Type of values 

```js
Undefined: "It is a primitive value that is assigned to a variable that does not identify its value" 

Boolean: "It is a value’s type of logic data that can be true or false"

Number: "It is a numeric data type"

String: "It is a sequence of characters used to represent text""

Null:  "It is a primitive value"

Function: "Is a javasCript procedure and set of statements  that performs a task or calculates a value" 

Object: "This is a type of data in Js and is used to store the collected information"

```

## Typeof 

Is an operator that returns a string indicating what is the type of the operando not evaluated. 

```js
console.log(typeof 42);
// prints in console type: "number"
```

## Truthy and Falsy Value

### Truthy

In Js, a truthy value is considered true in a `boolean` context.

```js
if (true) 
if ({}) 
if ([])
if (42) 
if ("0") 
if ("false")
if (new Date())
if (-42) 
if (12n) 
if (3.14) 
if (-3.14) 
if (Infinity) 
if (-Infinity)
```

### Falsy

Is a value that is considering false in a `boolean` context. 

```js
False: The keyword false
0: The number zero
-0: The number negative zero
0n: BigInt, when used as a boolean, follows the same rule as a Number. 0n is falsy.
"": Empty string value
Null: null - the absence of any value
Undefined: undefined - the primitive value
NaN: NaN - not a number

```

