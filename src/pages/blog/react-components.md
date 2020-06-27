---
title: Functional and Class component
featuredImage: react-components.png
date: "2020-05-18"
---

## React components

Components are like JavaScript functions, they accept inputs (called props) and return elements that described what should appear on the screen.

## Functional components

Functional components are simple JavaScript functions that accept props as an argument and return a React element.

```jsx
const SayHello(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class components

A class component requires you to extend from `React. Component` and create a render function that returns a React element.

```jsx
class SayHello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

## What are their differences?

### State

#### Functional components

To manage the state of the component you will use hooks, the component will refresh if the state change.

```jsx
const MyCount = () => {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>Click-me</button>
}
```

#### Class components

`setState()` schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

```jsx
class MyCount extends React.Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <button onClick={() => this.setState({ count: count + 1 })}>
        Click-me
      </button>
    )
  }
}
```

### Props

#### Functional components

When using a function component, props are all that gets passed, they’re available by adding props as the function argument

```jsx
const SayHello = props => {
  return (
    <div>
      <h1>{props.hello}</h1>
      <p>{props.bye}</p>
    </div>
  )
}
```

#### Class components

In a class component, props are passed by default. They’re accessible as `this.props` in a component instance.

```jsx
import React, { Component } from "react"

class SayHello extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <p>{this.props.bye}</p>
      </div>
    )
  }
}
```

### lifecycle

#### Functional components

When using a function component, we'll need the `useState` and `useEffect` hooks.

For more information about lifecycles and functional components, [here](/blog/life-cyles-and-hooks/)

#### Class components

React components go through lifecycles of events, the most common on class components are:

- `Mounting`
- `Update`
- `Unmount`

### Which one do I prefer?

If I am honest when I started studying class components I wasn't a fan of them, the word `this` for any declaration was not natural and to much code, I prefer functional components because its a normal JavaScript function, for example, props are just arguments that are easy to understand and hooks make great work with state and lifecycles.
