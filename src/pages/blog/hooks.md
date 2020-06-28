---
title: Hooks
featuredImage: hooks.png
date: "2020-06-01"
---

## What are Hooks?

`Hooks` are functions that allow you to maintain a state and react to components' lifecycles.

```jsx
const [action, setAction] = useState("Hello!")
```

The hook's syntax is a react API called `useState` that is a destructured array, wich their first value is a variable with the value's state, the second variable is a function that allows you update the state of the component to any value, all this is equalized to `useState` who sets de default state's value.

## Why were the hooks created?

### Components with complicated logic make harder understand

When maintaining components with different types of life cycles and extensive logic, those are more prone to bugs or inconsistencies, hooks divide into littler pieces of logic in functions base on how the data is related.

### Classes confuse people and machines.

`This` is a syntax that you have to understand deeply, use components classes represent more quantity of code. Hooks can be used in functional components writing less code and less complexity in our logic.

## Hooks and state

Hooks are created, to add state to a functional component, and introduce us to a new syntax called `useState`, that allows you to have state and management in the component.

Para saber más información sobre hooks y el estaHiido.

## Hooks y ciclos de vida

Hooks nos trae una nueva API para el manejo de los ciclos de vida, llamados `useEffect`, que sería la combinación de los ciclos de vida `componentDidMount`, `componentDidUpdate`, y `componentWillUnmountut`utilizados en componentes de clases.

For more information about `hooks` and lifecycles

## Rules of Hooks

- Hooks can't be called inside loops, conditions, and nested functions.
- Hooks must be called in the same order every time they have been called.
- Hooks only can be called from `react` components

## Customize your own hooks

Customize hooks allows you to create a functionality that could be used through different components. A function is a hook if it is a function that uses another hook.

`Hooks` for the convention should start the function's name with "use", this is to speed up the identification of hooks in the code from common functions.

```jsx
import React, { useState } from "react"

const useGreeting = () => {
  const [action, setAction] = useState("hello")

  const phrases = {
    hello: "hello, how are you?",
    bye: "bye!!!",
  }

  const toggleAction = () => {
    if (action === "hello") {
      setAction("bye")
    } else {
      setAction("bye")
    }
  }

  return [{ action, phrase: phrases[action] }, toggleAction]
}

export const FunctionalComponent1 = () => {
  const [state, toggleGreeting] = useGreeting()

  return (
    <div>
      <h2>FunctionalComponent1</h2>
      <p>Estado: {state.action}</p>
      <p>Frase: {state.phrase}</p>
      <button onClick={toggleGreeting}>Toggle</button>
    </div>
  )
}

export const FunctionalComponent2 = () => {
  const [state, toggleState] = useGreeting()

  return (
    <div>
      <h2>FunctionalComponent2</h2>
      <p>Estado: {state.action}</p>
      <p>Frase: {state.phrase}</p>
      <button onClick={toggleGreeting}>Toggle</button>
    </div>
  )
}
```

In this example, we made a custom hook, `useState` handle the state with an action for default and have a toggle function that updates their value, this function makes a logic where is showing a greeting depending on the state's value, this hook is used for functional component 1 and 2, sharing the information and logic of our state, for being used for another hook.

## The hooks came to solve a few problems in reactIts

### It's hard to re-use the state's logic between components.

Before hooks in react, people needed to use patterns like render props or higher-order-components to solve some cases. With hooks, you can extract the logic of the component's state and used it in an independent and re-using way, in other words, hooks allow you to share information without making big changes in the component.

```jsx
import React, { Component } from "react"

const phrases = {
  hello: "hello!, How are you?",
  bye: "bye!!!",
}

export class ClassComponent1 extends Component {
  state = {
    state: "hello",
  }

  handleToggle = () => {
    if (this.state.state === "hello") {
      this.setState({ state: "bye" })
    } else {
      this.setState({ state: "hello" })
    }
  }

  render() {
    return (
      <div>
        <h2>ClassComponent1</h2>
        <p>Estado: {this.state.state}</p>
        <p>Frase: {phrases[this.state.state]}</p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}

export class ClassComponent2 extends Component {
  state = {
    estado: "hello",
  }

  handleToggle = () => {
    if (this.state.estado === "hello") {
      this.setState({ state: "Bye" })
    } else {
      this.setState({ state: "Hello" })
    }
  }

  render() {
    return (
      <div>
        <h2>ClassComponent2</h2>
        <p>Estado: {this.state.state}</p>
        <p>Frase: {phrases[this.state.state]}</p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}
```

In this exercise, we have the same logic as our example before, but this time is declared in a class component, in this case, we should use patterns to converting that logic in something more interactive, in this case, the component is copied twice because in this exercise we want both rendering the same information.
