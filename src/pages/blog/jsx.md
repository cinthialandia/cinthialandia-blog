---
title: JSX
featuredImage: jsx.png
date: "2020-06-28"
---

## What is JSX?

It is a syntax used as a JavaScript extension in react components to described how it is going to look like the UI.

Is important to know that when you use JSX you must import `react` in all files where you are using JSX because when the code will compile, that syntax will be transformed to an element with `React.extension`

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

function App() {
  return (
    <div>
      <div>
        <img src="//logo.png" />
      </div>
      <footer>Hi I'm footer</footer>
    </div>
  )
}

render(<App />, document.getElementById("root"))
```

This example is a react component with JSX

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

var App = React.createElement(
  "div",
  null,
  React.createElement(
    "div",
    null,
    React.createElement("img", { src: "./img/logo.png" })
  ),
  React.createElement("footer", null, "Hi I'm footer")
)

render(<App />, document.getElementById("root"))
```

This example is exactly the same that the last one, there we can observe what is JSX converted when it is compiled.

## What is the purpose of this syntax?

This syntax was created mainly under the concept that all react components are pieces of logic that make a function, and you can share information between them, knowing this, with this syntax we can create logic with JS, HTML5, and CSS in just one component and not have the necessity to maintain all files in different parts of our code.

## How does this work?

JSX is used inside in our react component where you declare all the components that will be rendered, for this you can write any JavaScript expression between curly braces and be used.

```jsx
import React from "react"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{4 + 1}</h1> // 5
      </div>
    )
  }
}
export default App
```

When the component will be rendered, it will show value number 5.

Another way to use JSX can be as an expression, when JSX is compiled will be converted to JavaScript, so we can use `if statements` and `for loops`.

```jsx
function getName(user) {
  if (user) {

   return <h1>Hello, {formatName(user)}!</h1>;
 }

 return <h1>Hello, Stranger.</h1>;
```

## Attributes with JSX

Writing an attribute with a literal string value is the same using quotes, but if we want to write a JavaScript expression we must always use curly braces.

```jsx
const element = <div className="photo-banner"></div>
```

Example string literal value

```jsx
const element = <img src={photo}></img>
```

JSX expression value

Note: In React DOM, we use property names with camelCase and we have some changes in a few properties, class as a className, tabindex as a tanIndex and etc.

## Children and JSX

If the tag in your code is empty, you have the possibility of the self-close tag.

```jsx
const photo = <img src={urlPhoto} />
```

But if you tag contain children directly, you must close the tag like in HTML5

```jsx
const element = (
  <div>
    <h1>How are you!</h1>
    <h2>Oh?</h2>
  </div>
)
```
