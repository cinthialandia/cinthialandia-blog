---
title: Life-cycle
featuredImage: life-cycles.png
date: "2020-06-03"
---

## What is the lifecycle in React?

They can be defined as a series of methods that are invoked in different states of the component's existence.
But before explain more deeply each concept, you have to know that the syntax of those methods change depending on the type the component is declared.

## Class components and lifecycles

### Render()

It is the most used method in lifecycles functions because it is the only one who is required in every class component. This method is in charge of the component's rendering on the UI without any side effects, in other words, it is a pure method.

```jsx
class Hello extends Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}
```

### ComponenDdidMount()

This method is called when the component has been mounted and ready, this function allows you the use of `setState()` and update the component, causing the rendering before the browser update de UI.

### ComponentDidUpdate()

This method is for any update, the most common use of this function is to update the DOM in response to props or state changes.

The most common example to use this method is when you have to call an API or a condition that changes the state’s value.

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.person !== this.state.person) {
    console.log('person state has changed.')
  }
}
```

This method has 2 params, one is props and the second was a state both previously, in this example, we are comparing if the previous state and the actual state are the same, if not, a `console.log`, will be executed. Something important to know about this method is any logic you want you to declare inside in the function must be in a condition and not have a future loop.

### ComponentWillUnmount()

This method is invoked just before the component will be destroyed, if you have to make a clean action, this is the best spot to make it.
