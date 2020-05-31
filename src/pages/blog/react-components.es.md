---
title: Componentes funcionales y de clase
date: "2020-05-18"
---

## Componentes React

Los componentes son como funciones de JavaScript, aceptan inputs llamado (props) y retornan elementos que deberán aparecer en pantalla.

## Componentes funcionales

Componentes funcionales son simples funciones de javaScript que aceptan props como argumentos y retorna un elemento react.

```jsx
const SayHello(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Componentes clase

Un componente clase requiere ser extendido desde `React.Component` y crear una función render que retornara un elemento react.

```jsx
class SayHello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

## ¿En qué se diferencian?

### Estado

#### Componentes funcionales

Para manejar el estado del componente, es necesario el uso de `hooks` el componente será actualizado si el estado cambia.

```jsx
const MyCount = () => {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>Click-me</button>
}
```

#### Componentes clase

El componente clase utiliza la sintaxis `setState` para actualizar el valor del estado del componente, como respuesta a esto el mismo se renderiza para mostrando la nueva información.

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

#### Componentes funcionales

En un componente funcional, los props son enviados al componente hijo, adicionando la sintaxis props como argumento de la función.

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

#### Componentes clase

En un componente clase los props son enviados por defecto, usando la sintaxis `this.props` en la instancia del componente.

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

### Ciclo de vida

#### Componentes funcionales

Cuando usamos un componente funcional, debemos usar la sintaxis `useState` y `useEffects` hooks.

#### Componentes clase

Los componentes pasan tras muchos tipos de ciclos de vida y eventos, los más comunes son:

- **Mounting**
- **Update**
- **Unmount**

### ¿Cual prefiero?

Si soy honesta, cuando empecé a estudiar react, nunca fui fan de los componentes de clase, la palabra `this`, como declaración, no se me hacía natural y mucho código. Prefiero los componentes funcionales, porque son funciones JavaScript normales, por ejemplo los props son solo argumentos que se pasan a la función, los hooks, para actualizar el estado, son una manera más fácil e interesante de trabajar y los cambios que se realizaron con los ciclos de vida hacen programar en react más fácil.
