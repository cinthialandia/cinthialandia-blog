---
title: Estados (state)

date: "2020-05-29"
---

## ¿Que es el estado? 

Es un objeto que determina como el componente debe comportar y renderizar, es decir el estado es quien permite crear componentes que son dinámicos e interactivos. 

## 

## Estado en componentes de clase 

```jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "New state!"
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


render(<MyComponent />, document.getElementById('root'));
```

> En este ejemplo, tenemos un componente que renderiza un botón y un <h1>, con información del estado, la construcción del mismo es de la siguiente manera, primero declaramos el estado con la sintaxis this.state y declaramos sus valores. Para poder hacer uso de ese estado, usamos la sintaxis this.state.name para traer la información del componente y poder mostrarla en pantalla, como podemos ver en el `<h1>`.Finalmente, para realizar actualizaciones del estado, en el componente podemos observar una función handleClick en donde declaramos, el nuevo valor de nuestro estado usando la sintaxis this.setState, y actualizando el objeto estado.dando como resultado, que cada vez que se dé click en el botón se muestre la información actual del estado, en este caso new state!



```jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class MyComponent extends React.Component {
      state = {
      name: 'Initial State'
    };
  
  handleClick = () => {
    this.setState({
      name: "New state!"
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


render(<MyComponent />, document.getElementById('root'));
```

> Para aquellas personas que estén utilizando, `@babel/plugin-proposal-class-properties`, no es necesario declarar `super(props)` y `bind sintaxis, como pueden observar en el ejemplo. 
>
> Para más información sobre el plugin en este link encontrará más al detalle del mismo: https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

## 

## Estado en componentes funcionales

```jsx
import React, { Component, useState } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

function MyComponent() {
  const [name, setName] = useState("Initial State");

 const handleClick = () => {
   setName("New state!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );
}

render(<MyComponent />, document.getElementById("root"));
```

> En este ejemplo, podemos observar el mismo ejercicio pero como componente funcional, y podemos ver una sintaxis llamada `hooks`.`Hooks` son un array desestructurado que es igualado a una propiedad react llamada `setState` en el cual se declara el valor del “estado” por defecto. Como podemos ver en nuestro `<h1>`, tenemos la misma oracion a ser renderizada, pero esta vez para mostrar la información del estado, sólo declaramos la primera variable (name) del hook en llaves. Finalmente, nuestra function `handleClick` con la misma lógica, declaramos nuestro nuevo valor del estado con la sintaxis `setState` y entre paréntesis escribimos el nuevo valor del mismo. 