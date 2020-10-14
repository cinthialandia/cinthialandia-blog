---
title: What is the state in react? and how to use it?
featuredImage: state.png
date: "2020-05-29"
---

## What is state?

Is an object that determines how that component renders and behavior, in other words `state` is whats allows you to create components that are dynamic and interactive.

## State in Class Components

```jsx
import React, { Component } from "react"
import { render } from "react-dom"
import Hello from "./Hello"
import "./style.css"

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Initial State",
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      name: "New state!",
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

render(<MyComponent />, document.getElementById("root"))
```

In this example, we have a component who is rendering a button that when is clicked show a sentence. In this case, the sentence is the information in the state so, first, we declared the state as an object with a default value with the `this` syntax, after that we declare in our `<h1>` the sentence a showing in the render, with the syntax, `this.state`, with this we access to the value of the state.
Finally, in our `handleClick` function, we set the new value of the state with the syntaxes `this.setState` and set the new value in the object.

```jsx
import React, { Component } from "react"
import { render } from "react-dom"
import Hello from "./Hello"
import "./style.css"

class MyComponent extends React.Component {
  state = {
    name: "Initial State",
  }

  handleClick = () => {
    this.setState({
      name: "New state!",
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

render(<MyComponent />, document.getElementById("root"))
```

For those people, who are using the `@babel/plugin-proposal-class-properties`, it's no necessary the declarations `super(props)` and `bind` syntax as we can see in the example.

More information about this plugin in this link: https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

## State in functional Components

```jsx
import React, { Component, useState } from "react"
import { render } from "react-dom"
import Hello from "./Hello"
import "./style.css"

function MyComponent() {
  const [name, setName] = useState("Initial State")

  const handleClick = () => {
    setName("New state!")
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{name}</h1>
    </div>
  )
}

render(<MyComponent />, document.getElementById("root"))
```

In this example, we have the same exercise but with a functional component, and here we can see a new syntax called `hooks`.
Hooks are a destructured array that is equalized to a setState who is a react property that declares the default value in the state.
As we can see, we have our same `<h1>` with the same sentence to render in the screen, but this time, to show the information from the state, we just declare the first variable (name) of the hook in brackets.
Finally our function `handleClick`, with the same logic, we set the new value of the state, using the second variable of the hook (which is always a function) and declares the new value.
