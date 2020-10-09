---
title: String and methods
featuredImage: strings.png
date: "2020-07-03"
---

## String

The string is used to represent and manipulate a sequence of characters, they are useful for holding data that can be represented in a text form. Strings can be created as primitives, strings literals, or as objects.

```js
const str = "Hello I'm a string"
```

## String and properties

### String length

The length of the string property returns the length of the string, this information is just read-only.

```js
const str = "Cinthia!"
console.log(str.length) // the console will print 8
```

In this example, we have a string with a name and we used the length property to know the length of `str`, in our console, will return the value that in this case is 8.

## String methods

### ToUpperCase()

This method returns a string with the value converted in uppercase.

```js
const stringUpperCase = "I just need pizza, wifi, and sleep!"

console.log(stringUpperCase.toUpperCase())
// console will print 'I JUST NEED PIZZA, WIFI, AND SLEEP!'
```

In this example, we have a phrase in lowercase, we apply the `toUpperCase` method to the string and will convert the phrase in uppercase.

### ToLowerCase()

Is a method that returns a string value convert in lowercase.

```js
const stringLowerCase = "I Just nEEd piZZa, WIFI, aNd sLeep!"
console.log(stringLowerCase.toLowerCase())
// console will print 'i just need pizza, wifi, and sleep!'
```

In this example, we have a phrase in uppercase and lowercase, we applied the method `toLowerCase()` to the string and will convert the phrase in lowercase.

### Concat()

Is a method that receives and concatenates a string and returns a new string.

```js
function sayHello(name) {
  console.log(
    "hello and welcome to your profile".concat(
      " ",
      name,
      " ",
      "have a nice day!"
    )
  )
}

sayHello("Cinthia") // the console will print 'hello and welcome to your profile Cinthia have a nice day!'
sayHello("Britney Spears") // the console will print 'hello and welcome to your profile Britney Spears have a nice day!'
```

In this example, we have a function that receives a name as a string and we want to concatenate with a message, in this case, we declare the first string and then we apply the `concat()` method, inside this method we declare all the necessary strings separated by a comma.

#### Another way to concatenate strings

##### The + Operator

The `+` operator can be used to concatenate two strings.

```js
function sayHello(name) {
  console.log(
    "hello and welcome to your profile" + " " + name + " " + "have a nice day!"
  )
}

sayHello("Cinthia") // the console will print 'hello and welcome to your profile Cinthia have a nice day!'
sayHello("Britney Spears") // the console will print 'hello and welcome to your profile Britney Spears have a nice day!'
```

We have the same example as the last one, but this time we are going to concatenate the string with the addition operator, as you can see we have the same result.

##### Template literals or template string

The template literals allow set expressions enclosed by backtick, those are going to be indicated by the dollar sign and curly braces `${string or expression}`.

```js
function sayHello(name) {
  console.log(
    `${"hello and welcome to your profile0 ${name}"} ${"have a nice day!"}`
  )
}

sayHello("Cinthia") // the console will print 'hello and welcome to your profile Cinthia have a nice day!'
sayHello("Britney Spears") // the console will print 'hello and welcome to your profile Britney Spears have a nice day!'
```

Another way to make this example is using template string, is the best way the easiest way to concatenate strings, in this case, we have the same function from latest example and we added each string as an expression with the syntax `${}` that will give us the same result as the latest examples.

### PadStart()

Is a method that completes a string with another string until the string completes the established length. This method accepts as a first argument the length of the first `string` and the second argument is the `padString` that is the string with which one will be completed.

```js
function formatTime(hour, minutes) {
  const formattedHour = String(hour).padStart(2, "0")
  const formattedMinutes = String(minutes).padStart(2, "0")

  return `${formattedHour}:${formattedMinutes}`
}

console.log(formatTime(3, 15)) // console will print "03:15"
```

In this example, we have a function that receives an hour and minutes, and we have to set an hour format, first, we set to hour the method `padStart` with the first argument number 2, that means that `hour` should have a 2 index length, then the string `0` that is the string with which will be completed the hour. We make the same with the minutes and have as a result 03:15 with an hour format.

### PadEnd()

Is a method that completes a string with an established length, that will be applied at the end of the string and received as a first argument the established length of the string and as a second argument that is a string with which will be completed, returning a string as a result.

```js
const str1 = "Sour Candy"

console.log(str1.padEnd(25, "!"))
// console will print 'Sour Candy!!!!!!!!!!!!!!!'

const str2 = "Kill this love"

console.log(str2.padEnd(20))
// console will print 'Kill this love
```

In those examples we can see 2 `strings` the first received the length of 25 and the symbol `!` to complete until 25 in the index. In the second str2 we set 20 of length and we didn't put any string to complete, as a result, the method completes the string with space.

### Match()

Is a method that recovers the result of matching a string against a regular expression.

```js
let sample = "Whitespace is important in separating words"
let countWhiteSpace = /\s/g
let result = sample.match(countWhiteSpace).length
console.log(result) // console will print 5
```

In this example, we have the variable sample with a string and another variable with `regular expression`, that regular expression means that will match with any white space in the string, in the example, we used the method match in the string sample looking for all white space and using the length property will get how many spaces are in that string, in this case, there are 5.

### Slice()

The method that extracts a section of a string and returns a new string, without modifying the original one. This method accepts 2 arguments, the first one is the begin Index that is the index where you need to start the slice and the second argument is the end Index that is the index where you need to finish the slice.

```js
function hexToRgb(color) {
  const r = Number.parseInt(color.slice(0, 2), 16)
  const g = Number.parseInt(color.slice(2, 4), 16)
  const b = Number.parseInt(color.slice(4, 6), 16)

  return { r, g, b }
}

console.log(hexToRgb("FFAABB")) // console will print { r: 255, g: 170, b: 187 }
```

We have the same example that we used for the parseInt method, but in this case, we are explaining how slice works, at first, we have a function that converts hexadecimal colors to RGB this function received the color as a string and we need to extract sections of the string to convert each part in the value of RGB color, our first variable `r`, has param color and we apply the slice method, the first argument is the index, in this case, we want to start with the beginning of the word and the second argument in the number of the index we are going to extract from the string in this case 2, having, as a result, something like this {FF, AA, BB} after this we apply the rest of the methods to obtain the RGB color.

```js
const name = "Meredith"
console.log(name.slice(0)) // wil print 'Meredith'

const name1 = "Meredith"
console.log(name1.slice(3)) // wil print 'edith'
```

In this example, we can see if we do not declare a second argument, it will extract the string from the `beginIndex` and return the rest of the string.

```js
const cc = "2222555544441111"
const last4 = cc.slice(-4)
const maskecCc = last4.padStart(16, "X")

console.log(maskecCc) // console will print 'XXXXXXXXXXXX1111'
```

In this example, when we use a negative index the behavior on this is that the begin index starts backward, in this example, we have credit card variable with a number in a string, we want just the latest 4 numbers from the string, in that case we apply the slice method with a beginning index of -4 and will return `1111`.

```js
const name2 = "Meredith"
console.log(name2.slice(2, -4)) // console will print 're'
```

In this example, we can observe an end index as a negative and has the same behavior that they begin index, in this case, we extract with the begin index until `r` and then our end index with a negative value will be `e` because it will start backward from letter h to letter r, resulting the console will print "re"

### Includes()

Is a method that determines whether one string may be found in another string, this returns true or false, this method accepts as argument one string, and the position of this string, the second one is optional.

```js
const sentence =
  "Oops I did it again I played with your heart got lost in the game Oh baby baby Oops you think Im in love That Im sent from above Im not that innocent"

const word = "carlos"
const word1 = "baby"

console.log(
  `The word "${word1}" ${
    sentence.includes(word1) ? "is" : "is not"
  } in the sentence`
) //true
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
) // false

// 'The word "baby" is in the sentence'
// 'The word "carlos" is not in the sentence'
```

In this example we have a string with a chorus of a song, we apply to that string the `include()` method and the first word was `Carlos`, the first one return false value, so the console print that the word is not found it in the sentence and the second word `baby` returns a true value and the console print that the word was found in the sentence.

### Split()

That method divides a `string` into a ordered set of substrings, puts these substring into an array, this method accepts as a first argument the separator (optional) this can be a string or a regular expression and the second argument is the limit (optional), that is a number no negative, that limit the number of pieces.

```js
const str = "this text is really looonggggg"

console.log(str.split(" ", 2)) //[ 'this', 'text' ]

const str1 = "this text is really looonggggg"

console.log(str1.split("", 2)) // [ 't', 'h' ]
```

In this example we have a string with text that we want to split, we apply the string method `split()` and declare as a first argument how we want to split the string, a string empty with space will be separate by words with a limit of two as our second argument declares, the second example we have the text, but this time we want to separate by letter, so we declare as a first argument an empty string with no space.

For more information about string methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
