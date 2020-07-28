---
title: Objects in Javascript
featuredImage: props.png
date: "2020-07-28"
---

# What is an object?

A literal object in JavaScript is a type of data that is declared with a variable that is used to store the collection of items with values (keys and values). The objects can be modified and the properties inside that object can be declared without any type of order.

```js
const obj = {}
```

In this example, we can observe that the syntax of the object is the declaration of the variable `const`, followed by the name of the object `obj` and then the declaration of the curly braces `{}`, inside of them will be the properties of the `obj`.

## Properties

The properties of the literal object are defined as the union of the name and value (key and values), by the name of the object you can have access to the properties of the object

```js
const obj = {
  key: "value",
}

console.log(obj.key) // 'value'
```

In this example, we can observe that the property of our `obj` is `key: “value”`, and to have access to that property and their value we should use the name or key.

## Methods

Methods are functions that are associated with the object, those functions are assigned as a property of the object and are defined like a normal function. To be able to have access to the method of an object, you have to declare the name of the object followed by the name of the property (key) that is the name of the function.

```js
const obj = {
  key: "value",
  method: function () {
    console.log("Hello I am a method!!!")
  },
}

console.log(obj.key) // 'value'
obj.method() // 'Hello I am a method!!!'
```

In this example, we have the latest exercise and we added to our `obj` the method that is a function that prints a text in the console. This method is declared as a property of the object where `method` is the key or name of the property and the execution of the function is the value.

## Keys and Values

As we said, keys and values are the set of the property of the object where `key` is the name of the property, and `value` is the value of that property.

```js
const obj = {
  key: "value",
  method: function () {
    console.log("Hello I am a method!!!")
  },
  name: "Britney",
}

console.log(obj.key) // 'value'
obj.method() // 'Hello I am a method!!!'
console.log(obj.name) // 'Britney'
```

We are still with the latest exercise but this time we have a new property called `name`, where is declared `name` as a key and `Britney` as a value of the obj.

## Destructuring Object Properties

Destructuring is a JavaScript syntax that is used to extract values from arrays or properties from objects and converting in variables.

```js
const obj = {
  name: "Adele",
  age: 32,
  job: "singer",
  greet: function () {
    console.log(`Hello Im ${obj.name} and I’m a ${obj.job}`)
  },
}

const { name, age, greet } = obj
console.log(name, age) // 'Adele' 32
greet() // 'Hello I’m Adele and Im a singer'
```

In this example, we have in our `obj` the data of a person in our properties and we have the destructuring of the object, so first, we declared const (or let) and between curly braces, all the properties that you want to extract from the object, in this case, `name`, `age` and `greet` all this equate to the name of the object. Finally, all the properties are variables and you can access them without the necessity to access the object.

```js
const obj = {
  name: "Adele",
  age: 32,
  job: "singer",
  greets: function () {
    console.log(`Hello Im ${obj.name} and I'm a ${obj.job}`)
  },
}

const { name: professionalName, age, greets } = obj
console.log(professionalName, age) // 'Adele' 32
greets() // 'Hello I’m Adele and Im a singer
```

If it is possible to change the name of the variable? Well, yes you can do that! In this example we can see that the name now is changed for `professionalName`, just adding after the name of the variable colon and the new name of the variable.

# Adding and Updating Object Properties

## How to access an object

Until now we have learned what is an object, their properties, and the destructuring but How to access them and what we have to have in mind?

1. If we know the name of the property, we can access it by declaring the name of the object, following with the dot and the name of the property.

```js
const obj = {
  name: "Meredith Grey",
  age: 32,
  job: "surgeon",
  greet: function () {
    console.log(`Hello Im ${obj.name} and I’m a ${obj.job}`)
  },
}
console.log(obj.name) // 'Meredith Grey'
console.log(obj.age) // 32
```

In this example, we have the data of a person in our object and if we want to access, we need to declare the name of the object in this case `obj`, follow with the name of the property in this case `name` and this give us as a result the name of the person.

2. If the name of the property has special characters or spaces, we can access it using brackets, declaring the name of the object followed by the brackets and between them the name of the property.

```js
const obj = {
  name: "Meredith Grey",
  age: 32,
  job: "surgeon",
  greet: function () {
    console.log(`Hello Im ${obj.name} and I’m a ${obj.job}`)
  },
}
console.log(obj["greet"]) // [Function: greet]
console.log(obj["job"]) // 'surgeon'
```

In this example, we have the latest data and to access our property `greet` we can use the following syntax, first name of the object followed by brackets, and inside of them the string `greet` all this gives us as a result the value.

3. If the name of the property is inside of a variable is necessary to use the brackets to access.

```js
const obj = {
  name: "Meredith Grey",
  age: 32,
  job: "surgeon",
  greet: function () {
    console.log(`Hello Im ${obj.name} and I’m a ${obj.job}`)
  },
}

const prop = "age"
console.log(obj[prop]) // 32
```

Following with the latest example, there is a variable called prop that has as a value the string `age` if we want to access to `obj` with the variable is necessary to use brackets, that is going to evaluate the expression between the brackets in this case given us a result the string age, and finally will print in the console the value 32.

## How to update an object

If we want to update the property of an object we should have in mind that the same rules to access an object apply as well when we update a property. The syntax is the name of the object followed by dot or brackets according to the case, plus the name of the property and equates all this with the new value update.

```js
const obj = {
  name: "Meredith Grey",
  age: 32,
  job: "surgeon",
  greet: function () {
    console.log(`Hello Im ${obj.name} and I’m a ${obj.job}`)
  },
}

obj.name = "Mer Grey"
obj["age"] = 33
console.log(obj) // { name: 'Mer Grey', age: 33, job: 'surgeon', greet: [Function: greet] } //
```

In this example, we have an object with the person’s data and we want to change the name and age, we declare the name of the object in this case `obj` followed by a dot and the name of the property `name`, all this equates to the new value to replace `Mer Grey`

## Adding properties to an object

If you want to add properties to an object it has to have in mind that the same rules to access an object are the same for updating and adding properties in an object. The syntax is, the name of the object followed by dot or brackets according to the case and all this equates to the new value-added.

```js
const obj = {
  name: "Meredith Grey",
  age: 32,
  job: "surgeon",
  hobbies: "read, walk, watch t.v",
  food: "Pizza and Sushi",
  greet: function () {
    console.log(`Hello Im ${obj.name} and I’m a ${obj.job}`)
  },
}

const chat = function () {
  console.log(`I enjoy ${obj.hobbies} and eat ${obj.food}`)
}

obj.kids = 3
obj["personal"] = chat
console.log(obj)
// {
//   name: 'Meredith Grey',
//   age: 32,
//   job: 'surgeon',
//   hobbies: 'read, walk, watch t.v',
//   food: 'Pizza and Sushi',
//   greet: [Function: greet],
//   kids: 3,
//  personal: [Function: chat]
// }
```

In this example we have the person’s information and we want to add some more information, so first, we declare the name of the object `obj` followed by a dot and then, in this case, de property kids with the value `3.

## Removing Object Properties.

If we want to remove the property from an object there are 2 ways to do that. The first one is using the keyword `delete` followed by the declaration of the object and the property. The second one is declaring the name of the object followed by the property which wants to delete and assign the value of `undefined`. In both cases, you should have in mind to use a dot or brackets at the moment of the declaration according to the case.

```js
const obj = {
  name: "Meredith Grey",
  age: 32,
  job: "surgeon",
  hobbies: "read, walk, watch t.v",
  food: "Pizza and Sushi",
  greet: function () {
    console.log(`Hello Im ${obj.name} and Im a ${obj.job}`)
  },
}

delete obj.greet
obj.age = undefined

console.log(obj) // {
//   name: 'Meredith Grey',
//   age: undefined,
//   job: 'surgeon',
//   hobbies: 'read, walk, watch t.v',
//   food: 'Pizza and Sushi'
// }
```

In this example, we are removing the properties of greet and age. The greet property is removed by the first way declaring the keyword `delete` followed by `obj` and the name of the property to remove. The second property to delete was age. We declared the name of the object followed by the name of the property and we assigned the value of `undefined`.

# Shallow Object Cloning

When an object is stored in a variable, the object is created in a particular place in memory and what’s stored is a reference (or a direction) to that location. The same thing happens when storing an object as a property of another object: the object is created in memory, and what’s stored is a reference.This can lead to unexpected behaviour when trying to create a copy of an object. This kind of copy is called “shallow copy”:

```js
const obj1 = {
  name: "Christina",
  info: {
    age: 35,
    job: "surgeon",
  },
}

const obj2 = { ...obj1 } // shallow copy

obj2.name = "Derek" //we will just modify the property name in obj2
obj2.info.age = 40 // oops! this modifies the age of obj1.info.age too!

console.log(obj1) // { name: 'Christina', info: { age: 40, job: 'surgeon' } }
console.log(obj2) // { name: 'Derek', info: { age: 40, job: 'surgeon' } }
```

In this example, we have the object with a person’s information and we will make a copy using the syntax `spread` that makes a new copy of the object without modifying the original one, and we will save it in a new variable `obj2`. Now that we have our new object, we are going to change the value of the property `name` that gives us a result `{name: “derek”}` and change the value of the property `age` that is inside of the info object giving us a result of 40. When we print in the console to see all the property in both objects, we can see that our original object was modified too even though we didn't change anything directly. So why is that happening? At the moment of the spread, we made a copy of all property in `obj` but the properties inside of the info object are still connected with the original variable.

# Deep Object Cloning

To get a real copy of an object, we need to use another technique called “deep cloning”, which consists of visiting each property and creating a copy for each object (and its children), resulting in a copy that is completely disconnected from the original one.

```js
const obj1 = {
  name: "Christina",
  info: {
    age: 35,
    job: "Surgeon",
  },
}

const obj3 = { ...obj1, info: { ...obj1.info } } // deep clone

obj3.name = "Alex" // will modify the name on obj3

obj3.info.age = 42 // will modify info.age for obj3 deep copy!

console.log(obj1) // { name: 'Christina', info: { age: 35, job: 'Surgeon' } }

console.log(obj3) // { name: 'Alex', info: { age: 42, job: 'Surgeon' } }
```

In this example, we have our `obj1` of the latest example and we make a copy of our object with a spread as we make the last one, but this time we are going to make a copy of the properties of the info object too with the spread. We declared another value for the property named `Alex` and another one for age `42`. At the memento to print the console, we can see that `obj1` has the same property without any modification and `obj3` has modified their properties. Why is this happening? When we made the spread in the info object we made a deep copy of the object in general and made a total disconnection from the original one.

# Merging Objects

If we want to combine 2 objects we can use the method `Object.assign()` that is used to copy all the properties from one object (source) to another object (target) and return the target object.

```js
const obj1 = {
  name: "Christina",
  age: 35,
}

const obj2 = {
  job: "surgeon",
  status: "widow",
}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3)

// {
//   name: 'Christina',
//   age: 35,
//   job: 'surgeon',
//   status: widow,
// }
```

In this example we have two objects with people’s info and we want to combine both, so we used the method `assign`. We declared the new variable with the object combine and declared the object target what will be our `obj1` where we are going to combine the objects. Finally we declared our object `source` that is going to be inside of our target object `obj2`, all this will give us the result of `obj2` being part of a new property.

# Static methods

## Object.create()

This method creates a new object using an existing object as a prototype of the new object created.

```js
const sayHi = {
  name: "",
  lastName: "",
  phrase: "",
  printIntroduction: function() {
    console.log(`My name is ${this.name} ${this.lastName} and ${this.phrase}`);
  }
};

const me = Object.create(sayHi);
me.name = "Britney"
me.lastName = "Spears"
me.phrase = "it's britney b*tch!"
me.printIntroduction() //"My name is Britney Spears and it's britney b*tch!"
console.log(me) // { name: 'Britney', lastName: 'Spears', phrase: "it's britney b*tch!" }

In this example, we create the object `me` from the object `sayHi` using the method create.
```

## Object.entries()

This method receives an object and returns an array.

```js
const obj1 = {
  1: "Rachel",
  2: "Ross",
  3: "Monica",
  4: "Phoebe",
  5: "chandler",
}

const obj2 = Object.entries(obj1)
console.log(obj2)

// [
//   [ '1', 'Rachel' ],
//   [ '2', 'Ross' ],
//   [ '3', 'Monica' ],
//   [ '4', 'Phoebe' ],
//   [ '5', 'chandler' ]
// ]
```

In this example we have an object with different names, we apply the `entries` method and that gives us as a result an array of names.

## Object.fromEntries()

This is a method that transforms a list of pars `key-value` on an object.

```js
const arrNames = [
  ["1", "Sabrina"],
  ["2", "Harvey"],
  ["3", "Hilda"],
  ["4", "Zelda"],
]
const obj = Object.fromEntries(arrNames)
console.log(obj)
// { '1': 'Sabrina', '2': 'Harvey', '3': 'Hilda', '4': 'Zelda' }
```

In this example we have an array with names and numbers, we applied the method `fromEntries` and this one returns an object with keys and values, in this case, the number as a key and the value as the name.

## Object.keys()

Is a method that returns an array with enumerable names of the object's property

```js
const doctorHouse = {
  Gregory: "House",
  Alison: "Cameron",
  Lisa: "Cuddy",
  James: "Wilson",
  Eric: "Foreman",
  Robert: "Chase",
}

console.log(Object.keys(doctorHouse))
// [ 'Gregory', 'Alison', 'Lisa', 'James', 'Eric', 'Robert' ]
```

We have an object with the name as a key and last name as a value. So we apply the method `Object.keys` to the object and this is going to return an array with all the keys from the object.

## Object.values()

Is a method that returns an array with the values of the properties of the object.

```js
const doctorHouse = {
  Gregory: "House",
  Alison: "Cameron",
  Lisa: "Cuddy",
  James: "Wilson",
  Eric: "Foreman",
  Robert: "Chase",
}

console.log(Object.values(doctorHouse))
// [ 'House', 'Cameron', 'Cuddy', 'Wilson', 'Foreman', 'Chase' ]
```

We have the same example but this time, we apply the method `Object.values` and all this will give us as a result, the values of the properties, in this case, the last name.

### References

https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/#:~:text=A%20deep%20copy%20means%20that,into%20how%20JavaScript%20stores%20values.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

https://ultimatecourses.com/courses/javascript
