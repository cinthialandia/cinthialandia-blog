---
title: Forms controlled inputs
featuredImage: hooks.png
date: "2020-06-29"
---

## Controlled components 

In HTML the elements `<input>`, `<textarea>` and `<select>` maintain the update’s state based on their input. In react, states which are mutable must be saved in the component’s state. 

It is a good practice to save the input’s state in the state’s component, and maintain just one source of the true, in other words, inputs are controlled by the state’s component and they are called “controlled component” or “controlled input”. 

## Hooks and controlled inputs

In our functional component, we declare a state (hook) with a variable named `name` where it will save the value of the text and the function` setName` that will save the text in the variable. The component will render a div with the text, input, and the input's information will be handled by handle function and the event. In this function, we will update the state, and the input’s value is equal to the variable in our hook, in other words, both values are tied to the state and have the same information.

```jsx
import React, { Component, useState } from "react";
import { render } from "react-dom";
 
function App() {
  const [name, setName] = useState("Your name here!");
 
  const handleChange = event => {
    setName(event.target.value);
  };
  return (
    <form>
      <div>What is your name?</div>
      <input type="text" value={name} onChange={handleChange} />
   </form>
  );
}
 
render(<App />, document.getElementById("root"));
```

## Hooks and select tag 

Our functional component, have a state (hook) with the variable `dessert` where will save the select value and the function `setDessert` that save the select value in the variable. This component renders an input select of desserts, their value is handled by a function and an event and in this same function update the state with the select value. On another hand we assign the input’s value in the `dessert` value, having as a result input’s value and the text information are tied to the state.

```jsx
import React, { Component, useState } from "react";
import { render } from "react-dom";
 
function App() {
  const [name, setName] = useState("Your name here!");
  const [dessert, setDessert] = useState("chocolate cake");
 
  const handleChange = event => {
    setName(event.target.value);
  };
 
  const handleChangeSelect = event => {
    setDessert(event.target.value);
  };
 
  return (
    <form>
      <div>What is your name?</div>
      <input type="text" value={name} onChange={handleChange} />
      <p>select dessert</p>
      <select value={dessert} onChange={handleChangeSelect}>
        <option value="chocolate cake">Chocolate cake</option>
        <option value="ice cream">ice cream</option>
        <option value="lime pie">Lime pie</option>
        <option value="cup cake">Cupcake</option>
      </select>
         </form>
  );
}
 
render(<App />, document.getElementById("root"));

```

## Hooks and multiples inputs 

When you have multiples inputs, you can use the same handle function, in those cases, you can add the `name` attribute to the input and let the handle function select which input will have the event. 

Following our last exercise in our functional component created another state (hook), that has a variable and the function that will modify that variable. Our component render now a checkbox component with a question and a text area, both inputs share the same handle function and their values depend on the state’s component. In our `handleChangeInput` with an if we evaluated the event and which element must be update

```jsx
import React, { Component, useState } from "react";
import { render } from "react-dom";
 
function App() {
  const [name, setName] = useState("Your name here!");
  const [dessert, setDessert] = useState("chocolate cake");
  const [takeAway, setTakeAway] = useState({ takeAway: false, direction: "" });
 
  const handleChange = event => {
    setName(event.target.value);
  };
 
  const handleChangeSelect = event => {
    setDessert(event.target.value);
  };
 
  const handleInputChange = event => {
    const target = event.target;
    if (target.name === "takeAway") {
      setTakeAway({ takeAway: target.checked, direction: "" });
    } else {
      setTakeAway({ direction: target.value, takeAway: true });
    }
  };
 
  return (
    <form>
      <div>What is your name?</div>
      <input type="text" value={name} onChange={handleChange} />
      <p>select dessert</p>
      <select value={dessert} onChange={handleChangeSelect}>
        <option value="chocolate cake">Chocolate cake</option>
        <option value="ice cream">ice cream</option>
        <option value="lime pie">Lime pie</option>
        <option value="cup cake">Cupcake</option>
      </select>
      <p>Take away?</p>
      <input
        name="takeAway"
        type="checkbox"
        checked={takeAway.takeAway}
        onChange={handleInputChange}
      />
      <p> Direction</p>
      <textarea
        name="direction"
        value={takeAway.direcction}
        onChange={handleInputChange}
      />
    </form>
  );
}
 
render(<App />, document.getElementById("root"));
```

## Hooks and file input tag 

In HTML the input file lets you choose one or more files, this element is a read-only value, that's why this input is a no controlled input. 

```jsx
 <input type="file" />
```

The exercise complete here: https://stackblitz.com/edit/react-esebfz



## Class component and controlled inputs

In our class component, we declare a state with the property called `name`, the component will render a div and an input, the input's information will be handled by handle function and the event. In this function, we will update the state, and the input’s value is equal to our state, in other words, both values are tied to the state and have the same information.

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Your name here!",
    };
  }
 
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
 
  render() {
    return (
      <form>
        <div>What is your name?</div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
 
render(<App />, document.getElementById("root"));
```

## Class components and select tag

We declared our new property called `dessert` in the component’s state. In that component, we have an input select and this input has a function that will save the select value in our state. Finally, our select input’s value is equal to dessert’s value in the state.

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Your name here!",
      dessert: "chocolate Cake",
    };
  }
 
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
 
  handleChangeSelect = event => {
    this.setState({dessert: event.target.value});
  };
 
  render() {
    return (
      <form>
        <div>What is your name?</div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>select dessert</p>
        <select value={this.state.dessert} onChange={this.handleChangeSelect} >
          <option value="chocolate cake">Chocolate cake</option>
          <option value="ice cream">ice cream</option>
          <option value="lime pie">Lime pie</option>
          <option value="cup cake">Cupcake</option>
        </select>
      </form>
    );
  }
}
 
render(<App />, document.getElementById("root"));
```



## Class components and multiple inputs 

When we have more than one input, it is possible to add the `name` attribute in all inputs and let the handle function select which input will have the event. 

Following our last exercise in our component, we created 2 more properties in the state called `takeAway` and `direction`. On another hand, our component will render a checkbox with a question and a text area where we can write information, both inputs share the same handle function and their values depend on the component’s state. In our function `handleChangeInput` with an if will be evaluated with the event, which element will be updated. 

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Your name here!",
      dessert: "chocolate Cake",
      takeAway: false,
      direction: ""
    };
  }
 
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
 
  handleChangeSelect = event => {
    this.setState({dessert: event.target.value}, () => {
      console.log(this.state.dessert)
    });
  };
 
  handleInputChange = event => {
    const target = event.target;
    if (target.name === "takeAway") {
      this.setState({ takeAway: target.checked });
    } else {
      this.setState({ direction: target.value, takeAway: true });
    }
  console.log(this.state.direction)
  };
 
  render() {
    return (
      <form>
        <div>What is your name?</div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>select dessert</p>
        <select value={this.state.dessert} onChange={this.handleChangeSelect} >
          <option value="chocolate cake">Chocolate cake</option>
          <option value="ice cream">ice cream</option>
          <option value="lime pie">Lime pie</option>
          <option value="cup cake">Cupcake</option>
        </select>
        <p>Take away?</p>
        <input name="takeAway" type="checkbox" checked={this.checked} onChange={this.handleInputChange} />
        <p> Direction</p>
        <textarea name="direcction" value={this.direction} onChange={this.handleInputChange} />
      </form>
    );
  }
}
 
render(<App />, document.getElementById("root"));
```

The exercise complete here: https://stackblitz.com/edit/react-da4bwv