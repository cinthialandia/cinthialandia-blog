---
title: What is the object number in javascript? and what are their methods?
featuredImage: numbers.png
date: "2020-07-02"
---

## Number in Javascript

Number is a primitive object used to represent and manipulate numbers like `2` or `-1.25`. The number constructor contains constants and methods for working with numbers, values of other types can be converted to numbers using the `Number()` function.

When used as a function, `Number(value)` converts a string or other value to the Number type. If the value can't be converted, it returns `NaN`.

```js
const x = 9.33 // A number with decimals
const y = 6 // A number without decimals
```

## Methods

### Number.isInteger()

The method determines whether the passed value is an integer and returns a `boolean` indicating whether the value is an integer or no.

```js
function isReallyInteger(value) {
  if (Number.isInteger(value)) {
    return "Yeah a integer!"
  }
  return "Ou god no! decimals >:("
}

console.log(isReallyInteger(10))
// console will print "Yeah, an integer!"

console.log(isReallyInteger(2.5))
// console will print 'Oh god no! decimals >:('
```

In this example, we have a function that receives a `param` as a number and this will be evaluated with the method `Number.isInteger()`, this will return the value `true` or `false`. In this case, the first example returns `true` and the second example `false`.

### Number.parseFloat()

This method receives a string argument and returns a floating-point number. If a number can’t be converted, it will return `NaN`.

```js
console.log(Number.parseFloat("djsbkjbas7823")) // console will print NaN

console.log(Number.parseFloat("51561dfgdfg")) // console will print 51561

console.log(Number.parseFloat("sdgdrg")) // console will print NaN

console.log(Number.parseFloat("1.58")) // console will print 1.58

console.log(Number.parseFloat("25")) // console will print 25

console.log(Number.parseFloat("25.56djkbkbsd")) // console will print 25.56

console.log(Number.parseFloat("288.256d541564")) // console will print 288.256
```

As we can observe in the example, this method just can convert a `string` into a number just in the case where the `string` starts with a number or a number of strings.

#### What is the difference between this and number method?

```js
console.log(Number.parseFloat("djsbkjbas7823")) // console will print NaN
console.log(Number("djsbkjbas7823")) // console will print NaN

console.log(Number.parseFloat("51561dfgdfg")) // console will print 51561
console.log(Number("51561dfgdfg")) // console will print NaN

console.log(Number.parseFloat("sdgdrg")) // console will print NaN
console.log(Number("sdgdrg")) // console will print NaN

console.log(Number.parseFloat("1.58")) // console will print 1.58
console.log(Number("1.58")) // console will print 1.58

console.log(Number.parseFloat("25")) // console will print 25
console.log(Number("25")) // console will print 25

console.log(Number.parseFloat("25.56djkbkbsd")) // console will print 25.56
console.log(Number("25.56djkbkbsd")) // console will print NaN

console.log(Number.parseFloat("288.256d541564")) // console will print 288.256
console.log(Number("288.256d541564")) // console will print NaN
```

In this example, we can observe that the only difference is, for example, the `console.log(Number.parseFloat("51561dfgdfg"))` example, where the `parseFloat` method can convert a string with letters to a number but the number method cannot convert a string combined with numbers and letters.

### Number.parseInt()

Method that receives as first argument a string and second an specific radio or base that returns an integer number.

```js
function hexToRgb(color) {
  const r = Number.parseInt(color.slice(0, 2), 16)
  const g = Number.parseInt(color.slice(2, 4), 16)
  const b = Number.parseInt(color.slice(4, 6), 16)

  return { r, g, b }
}

console.log(hexToRgb("FFAABB")) // console will print { r: 255, g: 170, b: 187 }
```

In this example, we have a function that converts a hexadecimal color to an RGB value, that accepts as an argument a color as a`string`. Every two letters from our hexadecimal color are the equivalent to the 3 first RGB values. In our function we used the `Number.parseInt()` the method that receives the first argument of the first 2 letters of the hexadecimal color as a string and the RGB base, the number 16.

### ToFixed()

Is a method that creates a format to a `number` using fixed-point notation and returns a `string` that represents the number with the new fixed-point notation.

```js
function fixNumber(number) {
  return number.toFixed(2)
}

console.log(fixNumber(123.4566))
// console will print: "123.46"

console.log(fixNumber(0.004))
// consola imprimira: "0.00"
```

As you can observe in the example, we have a function that receives a number as a `param` and this number will be evaluated with the method `toFixed(number)`, in this case, we are setting just 2 decimals, that's why the example returns numbers with 2 decimals.

### ToString()

Is a method that returns a string that represents a specific number. The method evaluates a number object and receives as `param` a radio number (which is optional).

```js
function rgbToHex(r, g, b) {
  const hex1 = Number(r).toString(16).toUpperCase()
  const hex2 = Number(g).toString(16).toUpperCase()
  const hex3 = Number(b).toString(16).toUpperCase()

  return `${hex1}${hex2}${hex3}`
}

console.log(rgbToHex("255", "170", "187")) // console will print 'FFAABB'
```

In this example, we have a function that makes the contrary functionality than the last example. This function will receive hexadecimal colors and will pass to an RGB, so accept three arguments, which are the three values of RGB as a string, those string are converted to a number using the method `Number()`, now we can use the method `toString` and convert that string to a radio 16 value, that will be converted in the representation of a number as a string, finally we convert that string in uppercase and concatenate the value to have the complete color.

For more information about number object, methods, and properties here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
