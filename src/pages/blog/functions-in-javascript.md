---
title: Functions in JavaScript
featuredImage: hooks.png
date: "2020-07-06"
---

## Defining functions

Functions are values that can be called or declared, they are one of the fundamental building blocks in JavaScript, that performs a task or calculates a value. 

## Function declaration

### **The function keyword.**

When we declare a function, the first statement is the `function` keyword. 

```js
function () {}
```

### An optional name

After declaring the function keyboard, it’s time to give a name to the function, in some cases we can create anonymous functions.

```js
function littlerFunction() {}
```

### **Parameters names** 

Parameters are the names that are defined in the function definition, sometimes some developers confuse parameters with arguments, the best way to get clear with that is to understand that parameters are just in the definition of the function, they are the word that is going to receive the value. 

```js
function littlerFunction(param1, param2, param3) {} 
```

### Arguments

Arguments are values passed to the function when it is invoked, sometimes some developers confuse arguments with parameters, the best way to get clear with that is to understand that arguments are the value you passed to the function at the moment you called it and the parameters will receive that value.

```js
function littlerFunction(param1, param2, param3) {}

littlerFunction(1, 2, 3)
```

### Default parameters

Default parameters allow named parameters to be initialized with default values in case there is no value or undefined one is passed. 

```js
function littlerFunction(param1 = 1, param2 = 2, param3 = 3) {}

littlerFunction(1, 2, 3)
```

In this example, we have the same function but in this case, the function is not passing any argument, in those cases, we are assigning values to the parameters by default.

### The statement

The statement is everything inside the curly braces, this is the part of the function where the logic, task, or procedure will happen and return a value result of the execution of the function. 

```js
function littlerFunction(param1 = 1, param2 = 2, param3 = 3) {
  return console.log(param1 + param2 + param3)
}

littlerFunction(1, 2, 3) // console will print 6
```

In this example, we have a function which is called with 3 arguments (numbers), which are received as parameters, the declaration (everything inside the curly braces), save the logic to return the result of the addition which is 6 in this case. 

### Calling functions

Defining a function is not how a function executes, defining is when the function is named and declares the logic inside the curly braces, the way to call a function is declaring the name with parenthesis `litterFunction()` always having in count the scope of where it is called. 

```js
function littlerFunction(param1 = 1, param2 = 2, param3 = 3) {
  return console.log(param1 + param2 + param3)
}

littlerFunction(1, 2, 3) // console will print 6
```

In this example, we can observe our `littlerFunction` is declared, and order to be executed, we declare the name of the function and we call with parenthesis, in this case with this arguments `(1,2,3)`

## Function expressions

Function expressions are a different way to define a function, we assign the result of the expression to a variable which could be called with the variable. 

```js
const saveLittlerFunction = function littlerFunction(param1, param2, param3) {
  return console.log(param1 + param2 + param3)
}

saveLittlerFunction(1,5,9) // console will print 15
```

In this example, we declare the variable `saveLittlerFunction` and we assign the value of the expression to that variable, the way to call this function is declaring the variable like a function and passing through the arguments in the same way like normal functions. 

## Anonymous functions

In some cases it is possible to have anonymous functions, with functions expressions at the moment when you call the function, this call realizes declaring the name of the variable, in other words, it's not necessary that the function has a name.

```js
const saveLittlerFunction = function (param1, param2, param3) {
  return console.log(param1 + param2 + param3)
}

saveLittlerFunction(1,5,9) // console will print 15
```

This example has the same exercise as the last one, and when we call the function, we use the name of the variable and not the name of the function, in other words, it's not necessary that the function has one.

## Scoping

The scope determines the accessibility of variables. The variables defined inside a function can not be accessed from anywhere outside the function because the variable is defined only in the scope of the function. But a function can access all variables and functions defined inside the scope in which is defined.

### Global

Global scope refers to the current context of code, which determines the accessibility of variables. The global is where all the functions and objects are declared, for example, a variable declared in the global scope, is visible from all the scopes and therefore can be modified in any scope. 

```js
const additionTotal = 30;

const saveLittlerFunction = function (param1, param2, param3) {
  const addition  = param1 + param2 + param3 + additionTotal
 console.log(addition)
  return
}
saveLittlerFunction(1,5,9) // console will print 45
```

In this example, we have declared in the global scope the `additionTotal ` variable and the function from before, and as we can observe, our function is adding to the addition the value of that variable, the function has access to that variable because, the variable was declared in the global scope and as a result the console will print the new addition that is 45.

### Local

The local scope is the scope where it declares the variable or function, in other words, the block of code between curly braces that was declared.

```js
const additionTotal = 30;

function bigfunction(one, two) {
  const number1 = 5;
  const multiply = one * two + number1
  console.log(multiply)
  return 
}

bigfunction(2,3)  // console will print 11

const saveLittlerFunction = function (param1, param2, param3) {
  const addition  = param1 + param2 + param3 + additionTotal
 console.log(addition)
  return
}

saveLittlerFunction(1,5,9) // console will print 45
```

In this example, we declared the function `bigfunction`, that received 2 parameters (numbers), and inside the logic executes a multiply with an addition. First, the numbers (arguments) are multiplied and then the value of the variable `number1` is added to the result, this value was declared in the local scope of the `bigfunction` function so just that function has access to that variable. 

```js
const additionTotal = 30;

function bigfunction(one, two) {
  const number1 = 5;
  const multiply = one * two + number1
  console.log(multiply)
  return 
}

bigfunction(2,3)

const saveLittlerFunction = function (param1, param2, param3) {
  const addition  = param1 + param2 + param3 + additionTotal + number1
 console.log(addition)
  return
}

saveLittlerFunction(1,5,9) // ReferenceError: number1 is not defined
```

In our function expression we declare our logic the variable `number1` and as a result, the console says the message `ReferenceError: number1 is not defined` what its means is that the function does not find the variable, in other words does not have access. This happened because variable `number1` was declared in the local scope from `bigfunction` function. 

## Hoisting

Is the behavior of the code when they are moving to the beginning of the scope.

```js
sayHi('Mario', '29'); // console will print 'Hello Mario, you are 29 years old'

function sayHi(name, age) {
 console.log(`Hello ${name}, you are ${age} years old`);
```

In this example, we have the statement of the function and the statement of the execution is declared before the function, this is not an error because functions at the moment of the compilation are moved in memory to the top of the code, finding the function to execute.

## Arrow Functions

Has a shorter syntax, compared to function expressions and does not have its own `this`. Arrows' functions are always anonymous.

```js
const sayHey = (name) =>  {
  return console.log(`Hey ${name}`)
}

sayHey("Saul Goodman") // console will print 'Hey Saul Goodman'

const sayHello = (name) => console.log(`Hello ${name}`)

sayHello("Jesse Pinkman") // console will print 'Hello Jesse Pinkman'
```

In this example we have 2 arrow functions, the first function expression has as a syntax ``=()=>` following by our declaration and in our second example, we have another function expression but in this case, our syntax is the same, except that there are no curly braces and we declare our return expression directly. 

## Callbacks

Are functions that are to be executed after another function has finished executing. Javascript functions are objects, for this reason, a function can take functions as arguments, and can be returned by other functions. 

```js
const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);
```

In this example, we have a function `setTimeout` that will execute the function `message` after 3000 milliseconds and will print in the console the declared message. In this case, our function `message` is our callback that is used as an argument in the setTimeout function at the execution moment. 