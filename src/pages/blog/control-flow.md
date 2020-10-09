---
title: Control Flow statements
featuredImage: loops.png
date: "2020-07-02"
---

## What are control flow statements?

Is the order that the instructions, statements or functions are executed.

### Expression

Any unit of code that can be evaluated to a value is an expression.

### Statement - If...Else

Executes a statement `if` a specified condition is truthy. If the condition is `falsy`, another statement can be executed.

#### Syntax

1. Condition is an expression that is considered to be `truthy` or `falsy`.
2. Statement 1 is executed if the condition is `truthy`.
3. Statement 2 is executed if the condition is `falsy`.

```js
function getAge(number) {
  let result
  if (number >= 18) {
    result = "Welcome young adult!"
  } else {
    result = "You are a kid!"
  }
  return result
}

console.log(getAge(17)) // console print "You are a kid!"
```

In this example, we have a function that receives as a `param` an age, our first condition will print `Welcome young adult!`, if it is evaluated as a `true`, in other words, if the `number` is greater or equal than number 18. If the condition is evaluated as a `false`, the console will print `"You are a kid!"`.

### Nested if else statement

Multiple `if...else` statements can be nested to create an extra `else if` clause.

```js
function getAge(number) {
  let age
  if (number < 12) {
    age = "Just can watch movies with classification A"
  } else if (number <= 17) {
    age = "Just can watch movies with classification A and B"
  } else {
    age = "You can watch movies with classification A, B and C"
  }
  return age
}

console.log(getAge(16)) // will print "Just can watch movies with classification A and B"
```

In this example, the function received an age, and the `if` statement will evaluate the first declaration. If the age is less than 12 the console will print `” Just can watch movies with classification A”`, the next declaration is if the number is less or equal than 17 will print `"Just can watch movies with classification A and B"` and finally if the 2 last declarations are `false`, in other words, the age is a number greater or equal than 18 the console will print `"You can watch movies with classification A, B, and C"`.

### Switch statement

The switch statement evaluates an expression matching the expression's value to a case clause, and executes statements with that case.

#### Syntax

1. Expression whose result is matched against each case clause.
2. The case value N is used to match against expression, if the expression matches the specified value N, the statements inside the case are executed.
3. Default case is provided and is executed if the value of expression doesn’t match any case.

```js
function getPhoneNumber(name) {
  switch (name) {
    case "Lily":
      console.log("0400581278")
      break
    case "Marshall":
      console.log("0400525877")
      break
    case "Bartney":
      console.log("21565646541")
      break
    case "Ted":
      console.log("548456156156")
      break
    case "Robin":
      console.log("548456156156")
      break
    default:
      console.log("Error!")
  }
}

getPhoneNumber("Lily") //console will print '0400581278'
```

In this example, we have a function that receives a name as a `param`, inside this function there is a `switch statement`, in this statement, in each case, there is a different name and the expression of each case is the name’s number phone. The name `Lily` will be compared with the value of each case, in this case, our name match with the first case and will print a number phone `"0400581278"`, if any of those cases didn't match with the name provided in the function, the default case will be executed and in this case, will print in the console `Error!`

#### What happens if you don't declare a break in the switch?

```js
function getPhoneNumber(name) {
  switch (name) {
    case "Lily":
      console.log("0400581278")

    case "Marshall":
      console.log("0400525877")
      break
    case "Bartney":
      console.log("21565646541")
      break
    case "Ted":
      console.log("548456156156")
      break
    case "Robin":
      console.log("548456156156")
      break
    default:
      console.log("Error!")
  }
}

getPhoneNumber("Lily") // console will print '0400581278'
;("0400525877")
```

In this example, I removed the first `break` on the `switch` and we can observe that the `loop` is still running until it finds the next `break`, this will print `Marshall` and lily’s numbers, this behavior happened because the `switch` statement needs a `break` declaration in each case, with that the `switch` will know which case will stop the loop.

### While statement

The `while` statement creates a loop that executes a specified statement as a long as the test condition evaluates to `true`.

#### Syntax

1. Condition is an expression evaluated before each pass through the loop. If this condition evaluates to `true`, the statement is executed. When the condition evaluates to `false` will stop.
2. Statement will be executed as long as the condition evaluates to `true`.

```js
function addNumber(number) {
  while (number < 10) {
    number++
  }
  console.log(number) // print number 10
}

addNumber(0)
```

In this example, we have a function called `addNumber` that received a `param`, in this case, the number 0, inside this function there is a `while` that evaluated a condition that number is less than 10, `if` that condition is `true` it will be adding one to the number, this condition will be evaluated until be `false`, in this case until the number be 10.

### The do...while statement

Creates a loop that executes a specified statement until the test condition evaluates to `false`. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

#### Syntax

1. Statement is executed at least once and is re-executed each time the condition evaluates to `true`.
2. The condition is an expression evaluated after each pass through the loop, if condition evaluates to `true`, the statement is re-execute.

```js
let number = 4
do {
  number++
} while (number < 3)
console.log(number) // will print number 5
```

In this loop, we declared a variable with the `number` 4 and executed a statement where one will be added one to number until our condition will be less than the number 3. In this case, at first, our condition is `false` but do while will execute at least one time, and in the console will print number 5.

### For statement

Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.

#### Syntax

1. Initialization is an expression or variable declaration evaluated once before the loop begins.
2. Condition is an expression to be evaluated before each loop iteration, if this expression evaluates to `true`, the statement is executed.
3. Final expression to be evaluated at the end of each loop iteration. This will happen before the next evaluation of the condition.
4. Statement is executed as long as the condition evaluates to `true`.

```js
for (let number = 0; number < 5; number++) {
  console.log(number)
  // will print 0 1 2 3 4
}
```

In this example, we have a `for` a statement where we declare the variable `number` equal to 0, after that, we declare a condition that `number` is less than 5 and finally the final expression to add one to `number` variable until the condition converts false.

### The for...of statement

Creates a loop iterating over iterable objects and arrays.

#### Syntax

1. On each iteration a value of a different property is assigned to a variable.
2. Object’s properties are iterated.

```js
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const number of arrNumbers) {
  console.log(number + 1) // the console will print 2 3 4 5 6 7 8 9 10 11
}
```

In this example, we have an array of numbers and in our for, we declare the variable `const number` that is where is going to be saved every array’s number and then we declared our array of numbers `arrNumbers`, in our loop, we add the number one to each number of the array, the result of this in the console is every number of the array plus one.

### The for...in statement

Iterates over all enumerable properties of an object that are keyed by strings.

#### Syntax

1. A different name is assigned to a variable on each iteration.
2. Objects whose enumerable properties are iterated over.

```js
let friends = {
  Monica: 25,
  Chandler: 30,
  Rachel: 25,
  Ross: 24,
  Joy: 28
};

for (let name in friends) {
  console.log(`${name} will be ${friends[name] + 1} years old`);
}

The console will print
// 'Monica will be26 years old'
// 'Chandler will be31 years old'
// 'Rachel will be26 years old'
// 'Ross will be25 years old'
// 'Joy will be29 years old'

```

In this example, we have a for where we are iterating of friends object, with the name of people with their ages (values), we add one to each age of the friends’ object and the same phrase to all, first, we declare name as the property in our object plus the phrase `will be`, then we add our property’s value having access as `friends[name]` , and finally, we add the phrase `years old`.

#### Why not use an array in a for… in?

Array indexes are just enumerable properties with integer names and are otherwise identical to general object properties. There is no guarantee that `for...in` will return the indexes in any particular order.
