---
title: Arrays in Javascript
featuredImage: arrays.png
date: "2020-07-28"
---

# What is an array?

It’s a JavaScript object that allows you to store multiple values in a single variable with a specific order.

```js
const array1 = []
const array2 = new Array()
```

## Properties

### Elements

The element is the value stored in the array.

```js
const array1 = [1, 2, 3, 4, 5, 6]
console.log(array1) // [ 1, 2, 3, 4, 5, 6 ]
```

The elements are those values inside of brackets and separate by a comma.

### Index

The index of an array is a pointer that is used to indicate the element of the array it will be used. You have to have in mind that the structure of an array is sequential and starts from 0. Access to an array using the index position

```js
const arrayTbbt = [
  "Penny",
  "Sheldon",
  "Leonard",
  "Amy",
  "Howard",
  "Raj",
  "Bernadette",
]

console.log(arrayTbbt.indexOf("Penny")) //0
console.log(arrayTbbt.indexOf("Leonard")) //2
console.log(arrayTbbt.indexOf("Howard")) //4
console.log(arrayTbbt.indexOf("Bernadette")) //6
```

To identify the name in the array we used the method `indexOf` that received value and find it in the array. This method will return the index number of that value in the array and as we can see the console prints each index number of the names.

### Length

The length of an array in JavaScript returns the number of elements that are stored in an array.

```js
const arrayTbbt = [
  "Penny",
  "Sheldon",
  "Leonard",
  "Amy",
  "Howard",
  "Raj",
  "Bernadette",
]

console.log(arrayTbbt.length) // 7
```

Using the latest example we have an array with names and in order to know how many elements are in that array, we use the length property that returns the number of elements, in this case, the number 7.

# Multi-dimensional arrays

JavaScript doesn't give us a multidimensional array natively but you can create one defining an array of elements inside of an array of elements and so on.

```js
const arraySeries = [
  ["Penny", "Sheldon", "Leonard", "Amy", "Howard", "Raj", "Bernadette"],
  ["House", "Wilson", "Cameron", "Chase", "Foreman", "Cuddy"],
  ["Walter", "Jessie", "Gus", "Hank", "Skyler", "Saul", "Marie"],
]

console.log(arraySeries) // [
//   [
//     'Penny',
//     'Sheldon',
//     'Leonard',
//     'Amy',
//     'Howard',
//     'Raj',
//     'Bernadette'
//   ],
//   [ 'House', 'Wilson', 'Cameron', 'Chase', 'Foreman', 'Cuddy' ],
//   [
//     'Walter', 'Jessie',
//     'Gus',    'Hank',
//     'Skyler', 'Saul',
//     'Marie'
//   ]
// ]
```

In this example we have an array of television series and inside of this are more arrays with the name of the actors and actress inside, as we can see, we can create more and more sublevels of arrays.

# Destructuring an array

The destructuring is a syntax that allows us to extract values from an array and save in variables. The process to make this in the array is first you need to declare the variables where you are going to store the values and all this will be equal to the array extracted.

```js
const arrayTbbt = [
  "Penny",
  "Sheldon",
  "Leonard",
  "Amy",
  "Howard",
  "Raj",
  "Bernadette",
]

const [penny, sheldon, leonard] = arrayTbbt

console.log(penny) // 'Penny'
console.log(sheldon) // 'Sheldon'
console.log(leonard) // 'Leonard'
```

In this example we have the latest array with the name of actors and actress if we want to extract some names from the array, the way to do that is declare a variable and inside brackets declare the name of the variables where are going to store the values, in this case, is the name same as the values, all this is equal to the array to extract.
We print the variable `penny` in the console and the result is the value `penny` that was stored in the array.

# Adding elements to an array

## Adding an item to the end of the array

### push()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
arrTahm.push("Walden")

console.log(arrTahm) // [ 'Charlie', 'Alan', 'Jake', 'Walden' ]
```

In this example we have an array with names and we will use the method `push()` to add the name of another person in the array, we pass to the method the string of the name and now the array is modified with another element.

### Another way to add items to an array is by using the method `concat()`

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
const arrCast = arrTahm.concat("Walden")
console.log(arrCast) // [ 'Charlie', 'Alan', 'Jake', 'Walden' ]
```

Using the same example, we used the method `concat()` that has the same result. But this returns a new array instead of modifying the original one.

## Adding an item to the beginning of the array

### unshit()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
arrTahm.unshift("Walden")

console.log(arrTahm) // [ 'Walden', 'Charlie', 'Alan', 'Jake' ]
```

We have an array with names and we want to add an additional name at the beginning of the array, we use the method `unshift()` that receives the item to add that gives us the result of 4 names in the array.

# Removing elements in an array

## Deleting an item at the end of the array

### pop()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
arrTahm.pop()

console.log(arrTahm) // [ 'Charlie', 'Alan' ]
```

In this example, we deleted the last element from the array using the method `pop()`. This is given to us as a result of an array with 2 elements.

## Deleting an item at the beginning of the array

### shift()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
arrTahm.shift()

console.log(arrTahm) // [ 'Alan', 'Jake' ]
```

In this example, we deleted the first element from the array using the method `shift()`. This is given to us as a result of 2 elements in the array.

# Deleting or adding an item according the index position

## splice()

With the method `splice()` it can be used to remove or add elements from an array. The first argument specifies the index of where will be adding the element and the second argument is the number of the element you will delete (if you don't want delete elements, you should write the number 0)

```js
const arrTahm = [
  "Charlie",
  "Alan",
  "Jake",
  "Walden",
  "Judith",
  "Berta",
  "Evelyn",
]
arrTahm.splice(0, 1)

console.log(arrTahm) // [ 'Alan', 'Jake', 'Walden', 'Judith', 'Berta', 'Evelyn' ]
```

In this example we want to remove the name the `charlie`, so we apply the method `splice()`, we declared the index o position to start removing, that will be the position `0` because the name of charlie is the first one then we declared the second argument of how many elements we want to delete, as we want to delete just one, we declared the number one. That gives us the result of the array without the named charlie.

```js
const arrTahm = [
  "Charlie",
  "Alan",
  "Jake",
  "Walden",
  "Judith",
  "Berta",
  "Evelyn",
]
arrTahm.splice(4, 0, "Bridget", "Zoey", "Missi")

console.log(arrTahm) // [
//   'Charlie', 'Alan',
//   'Jake',    'Bridget',
//   'Zoey',    'Missi',
//   'Walden',  'Judith',
//   'Berta',   'Evelyn'
// ]
```

In this example, we want to add some names in the array which want to add after the name of Walden. The method `splice()` receives a third parameter which is the elements to add in the array. First, we declared the number 4 because it is the index with I want to start the names then the second argument declares a 0 because I don't want to delete any element in the array and finally the third argument with the names I want to add.

# Loop over an array

## Array.forEach()

Is a method that calls a function (callback) once for each element of the array. The function receives 3 arguments: the item, index, and the array itself.

```js
let names = ["Charlie", "Alan", "Jake"]

names.forEach(name => {
  console.log(`Hello my name is ${name}`)
})

// 'Hello my name is Charlie'
// 'Hello my name is Alan'
// 'Hello my name is Jake'
```

We have an array of names, we want to iterate of it and print a text with one each of the names, we declared the method `forEach` and declare our callback, in this case, we made an arrow function, declared `name` and iterate to print a text with each of them.

## Array.map()

Is a method that creates a new array that performs a function in each element from the array. This method receives as an argument the value, index, the array itself, and `thisValue` that is a value to use as this when the function is executed.

```js
let numbers = [20, 35, 40]

const newNumber = numbers.map(function (number) {
  return number * 2
})

console.log(newNumber) // [ 40, 70, 80 ]
```

In this example, we have an array of numbers but we want a new array with the result of those numbers to multiply by 2, we declared the variable where will storage the expression of that execution and we apply the method `map` to `numbers`, then we declared our function and our number will be each number of the array multiplied. The result of this is the new array with all the numbers multiplied.

## Array.filter()

Is a method that creates a new array with all the elements that pass the test implemented for the function. This method receives as an argument the value, index, the array itself, and `thisValue` that is a value to use as this when the function is executed.

```js
const names = ["Jake", "Alan", "Charlie", "Walden", "Evelyn", "Berta"]

const result = names.filter(word => word.length > 5)

console.log(result)
// [ 'Charlie', 'Walden', 'Evelyn' ]
```

In this example, we have an array of names and we want yo store in another array all the names with more than 5 letters, then we apply the method `filter()` and evaluate the elements of the variable `word` (that is each element of the array) that the length of the name has to be more than five. As a result, we see a new array with 3 names all these pass the test of the function.

## Array.reduce()

The reduce method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

The function receives 4 arguments:

1. The first one is the accumulator, that is one accumulates the value and will return in the last execution of the function.
2. The current value is the element that is processed in the array.
3. The index of the element that is processed in the array
4. The array itself

And an initial value, if this value is not given in the function, it will use the first element of the array.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = numbers.reduce(function (accumulator, value) {
  return accumulator + value
})

console.log(result) // 45
```

In this example, we have an array of numbers and we want to add all the numbers to have a total value. First, we declared the new array `result` and applied the method `reduce` to the `numbers` array we declared our function and the arguments `accumulator` that is where all the values will be stored and the `value` that is the element we are adding. The addition of all this is number 45.

## Array.every()

Is a method that tests all the elements from an array, if the array passes through the test provided for the function this will return a Boolean value. This method receives as argument one function and three arguments: the element of the array, the index, and the array itself. Finally, the second parameter is `thisArg` is a value that `this` uses at the moment of the execution.

```js
const numbers = [1, 3, 3, 4, 5, 6, 7, 8, 9]

const result = numbers.every(function (number) {
  return number < 10
})

console.log(result) // true
```

In this example, we have an array with 9 numbers and we want to know if all those numbers pass to the test. First, we apply the method `every()` then we declare the function and the number as a representation of all those elements, where each element is evaluated if the number is more than 10. As a result, the number is not bigger than 10, so it will return true.

## Array.some()

Is a method that makes a test to each element that is provided for the function, in the end, it will return a Boolean value. This method receives as argument one function with 3 arguments: the element of the array, the index, and the array itself. Finally, the second parameter is `thisArg` is a value that `this` uses at the moment of the execution.

```js
const numbers = [15, 5, 8, 20, 30, 60, 15, 15, 15]

const result = numbers.some(function (number) {
  return number < 5
})

console.log(result) // false

const numbers2 = [15, 5, 8, 20, 30, 60, 15, 15, 15]

const result2 = numbers2.some(function (number) {
  return number < 8
})

console.log(result2) // true
```

In this example we have 2 arrays of numbers, in both apply the method `some()` and evaluate each element of the array, this method returns the Boolean true if one of the elements pass the test and a false value if any element passes the test.
In the first example, declare the function and evaluate if `number` is less than 5, this will return false because any element is less than 5.
In the second example, declare the function and evaluate if `number` is less than 8, this will return true because there are elements in the array less than 8.

## Array.find()

Is a method that returns the value of the first element of the array that satisfies the test that provides for the function. This method receives as argument one function with 3 arguments: the element of the array, the index, and the array itself. Finally, the second parameter is `thisArg` is a value that `this` uses at the moment of the execution.

```js
const numbers = [15, 5, 8, 20, 30, 60, 15, 15, 15]

const result = numbers.find(function (number) {
  return number > 40
})

console.log(result) // 60
```

In this example, we have an array of numbers and we want to know which element passes the evaluation of the function. We apply the method `find()` to the array and declare the function with the evaluation if `number` is bigger than 40. The result of this expression is the first element to pass the test in this case the number 60.

# Copy an array

## slice()

Is a method that returns a shallow copy of an array, this method receives as argument the number to start the copy (index) and the number until what index is going to copy.

```js
const friends = ["rachel", "Monica", "Chandler", "Ross", "Joey", "Phoebe"]

friends.slice(1, 3) // [ 'Monica', 'Chandler' ]
friends.slice(0) // [ 'rachel', 'Monica', 'Chandler', 'Ross', 'Joey', 'Phoebe' ]
```

In this example, we will make a shallow copy of the friends' array, so we apply the `slice()` method. We want to copy Monica and Chandler, so we start declaring one in the first argument because we want to start copying from that index and then the number 3 because we want to stop copying in that index. In this second example, we want to copy the complete array, we declared the index 0 because we want to start at the first element and declared nothing in the second argument.

### References

https://javascript.info/array

https://www.tutorialrepublic.com/javascript-reference/javascript-array-object.php

https://www.freecodecamp.org/news/javascript-array-length/

https://www.javascripttutorial.net/javascript-multidimensional-array/

https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/

https://www.dyn-web.com/javascript/arrays/add.php

https://www.hostingadvice.com/how-to/javascript-remove-element-array/

https://www.w3schools.com/js/js_array_iteration.asp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
