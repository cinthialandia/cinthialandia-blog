---
title: The this keyword
featuredImage: state.png
date: "2020-07-20"
---

## What is this? 

A function’s this references the execution context for that call, determined entirely by how the function was called. In other words, that this keyword assignment, if you look at a function that has a keyword in it, it is assigned based upon how the function is called.

## Rules

### Default Binding

The first rule we will examine comes from the most common case of function calls: standalone function invocation. Think of this rule as the default catch-all rule when none of the other rules apply.

```js
function foo() {
    console.log( this.a );
}
var a = 2;

foo(); // 2 or type error 
```

#### Strict mode

This will be always undefined 

#### No strict mode 

This will be global scope. 

### Implicit Binding

Implicit binding occurs when dot notation is used to invoke a function. whatever is to the left of the dot becomes the context for `this` in the function.

```js
function Foo() {
  console.log("Foo", this.a); 
}

var obj = {
  a: 2,
  foo: Foo,
};

// WITH FUNCTION OUTSIDE
// deconstructing for easier access?
var { foo } = obj;

// nope, won't work.
// foo is not executed as a method so no implicit this
 foo(); //TypeError: Cannot read property 'a' of undefined

//this will work
obj.foo(); // 'Foo' 2

```

In this example, we have the function `foo()` that prints a console.log with the word `Foo` and the instance of `a` that is declared outside of the object. Then we declared an object with the properties `a` and a `foo` with the method foo. After that, we have a deconstruction of `foo` with the execution of `foo` and finally the execution of `obj.bar`.
As we can see, in the first call we have an error and this happens because the function is executed as "stand alone", so the default rule kicks in. In the second execution, since the function is executed as a method of the object, the value of `this` will be the object itself.

Let's take a look at a second example:

```js
var obj = {
  a: 2,
  bar() {
  console.log("bar", this.a); // "bar" 2
  },
};

// WITH FUNCTION DECLARED INSIDE OBJECT
// it should work now, right?
// bar is declared inside the object...
var {bar} = obj;

// still no!
bar() // TypeError: Cannot read property 'a' of undefined
// it doesn't matter where it was declared

// but HOW it was EXECUTED
 obj.bar(); //'bar' 2
// Implicit binding:
// if a function is EXECUTED as a method of
// an object, THIS will be the object.
```

So as you can see, even if we declare the function as a method of `obj`, when we deconstruct it and execute it, the default rule will be applied. But the second call works because we are calling the function as a method from the object as the rule said, with this example, we have clear that the result will depend on how you call the function, not how it was declared. It doesn't matter if the function is declared inside or outside the object, it depends on how we call the function. 

### Explicit Binding

Explicit binding of this occurs when `.call()`, `.apply()`, or `.bind()` are used on a function. We call these explicit because you are explicitly passing in this context to call() or apply(). We’ll talk about bind() in just a moment.

```js
function foo() {
    console.log( this.a );
}
 
var obj = {
    a: 2
};
 
foo.call( obj ); // 2
```

In this example we are Invoking `foo` with explicit binding by `foo.call(..)` that allows us to force this to be `obj`, having as a result `2`

```js
function getBrand() {
  console.log(this.brand);
}

getBrand(); // type error: cannot read property brand of undefined

const ferrariBrand = getBrand.bind({brand: "ferrari"});

ferrariBrand(); // ferrari
```

In this example, we have a function `getBrand()` that has a console that prints `this.brand`, first, we call the function and have an error, why does this happen? Because the first rule, in strict mode the value of this is undefined. Then there is a declaration `ferrariBrand` where we set a value with the keyword `bind` to the brand, in this case, `ferrari` so when we call `ferrariBrand`, in the console print `ferrari`, in this case, we don't have an error because we are setting with bind the value of `this` on that variable. 

### New Binding

In JavaScript, we have the `new` operator that is the 4 rule of the `this`, the constructor in classes in JavaScript are just functions that are called with the keyword `this` when the function is called the following events happen. 

1. A new object is created. 
2. The new constructor object is linked (prototype)
3. The new constructor object is set in `this` binding for the function called. 
4. It returns the instance of the created function. 

```js
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function() {
  console.log(`Starting car of brand ${this.brand}...`);
}

const huracan = new Car("lamborghini");
const veyron = new Car("bugatti");

// .start belongs to Car, but THIS is different for each object
huracan.start(); // 'Starting car of brand lamborghini...'
veyron.start(); // 'Starting car of brand bugatti...'
```

In this example, the function car has the property `brand`, and the method starts, which is a function with a console that prints a text. 
We created 2 instances of car, the first one is `huracan` with the brand `lamborghini` and the second one with the brand `bugatti`, both new instances have a different brand but the same method with a different `this`.