---
title: Hooks
featuredImage: hooks.png
date: "2020-06-01"
---

## ¿Que son Hooks?

Los hooks son funciones que te permiten mantener estado y reaccionar a ciclos de los componentes funcionales.

```jsx
const [accion, setAccion] = useState("saludar")
```

La sintaxis del hook es la siguiente, `useState` es una API de react la cual es un array desestructurado, que trae como primer valor un variable, donde se guardará el valor del estado, y una segunda variable que es una función que nos permite actualizar el estado a cualquier valor que queramos, todo esto es igualado al `useState` que nos facilita un valor por defecto del estado.

## ¿Por qué se crearon los hooks?

### Componentes con lógicas complicadas hace que sea más difícil de entender

cuando mantenemos componentes con distintos tipos de ciclos de vida y extensa lógica, son más propensos a bugs o inconsistencias, con los hooks se divide en pequeñas funciones basada en cómo la data está relacionada.

### Clases confunden a las personas y las máquinas

`this` es una sintaxis que tienes que entender a profundidad, y para utilizarlo con componentes de clases, representa una cantidad de código más amplia. Hooks pueden ser utilizados en componentes funcionales, haciendo menos código y menos complejidad al mismo.

## Hooks y estados

Los Hooks han sido creados para que los componentes funcionales puedan manejar un estado, y el mismo nos introduce en su sintaxis una nueva API llamada `useState`, la cual te permite adicionar un estado al componente funcional.

Para mas información sobre componentes funcionales y estado, [aquí](/es/blog/state/).

## Hooks y ciclos de vida

Hooks nos trae una nueva API para el manejo de los ciclos de vida, llamados `useEffect`, que sería la combinación de los ciclos de vida `componentDidMount`, `componentDidUpdate`,  y `componentWillUnmountut` utilizados en componentes de clases.

Para mas información sobre componentes funcionales y ciclos de vida, [aquí](/es/blog/life-cyles-and-hooks/).

## Reglas de Hooks

- Los `hooks` no pueden ser llamados, dentro de loops, condiciones y funciones anidadas.
- Los `hooks` deben ser llamados en el mismo orden cada vez que sean llamados.
- Hooks solo pueden llamados solamente desde componentes de `React`

## Crea tus propios hooks

`Hooks` personalizados, te permiten crear una funcionalidad que puede ser reutilizada a través de diferentes componentes. Lo que hace a un `hook` sea personalizado, es que es una función que utiliza otros.

`Hooks`, por convención el nombre de la función deberá empezar con “use”, esto para poder agilizar la identificación de hooks en el código de funciones comunes.

```jsx
import React, { useState } from "react"

const useGreeting = () => {
  const [action, setAction] = useState("saludar")

  const phrases = {
    saludar: "hola, como estas?",
    despedir: "chao!!!",
  }

  const toggleAction = () => {
    if (action === "saludar") {
      setAction("despedir")
    } else {
      setAction("saludar")
    }
  }

  return [{ action, phrase: phrases[accion] }, toggleAction]
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

En este ejemplo, realizamos el `hook` personalizado, `useStado` el cual maneja un estado con accion por defecto, y tiene una funcion `toggleState` que actualiza el valor de este, esta funcion realiza una logica de mostrar una saludo dependiendo del valor de estado, y este es utilizado en nuestros 2 componentes funcionales, compartiendo la logica e informacion del estado de nuestro `useStado` para ser utilizado por otros hooks.

## Los hooks llegaron para solventar algunos problemas que se encontraban en React.

### Dificultad de reutilizar la lógica del estado entre componentes

Antes de los hooks se tenían que utilizar patrones como render props y higher-order-components para solventar estos casos, con los hooks se puede extraer la lógica del estado del componente, se puede usar de manera independiente y ser reutilizada, es decir permite compartir información sin tener que realizar cambios drásticos al componente.

```jsx
import React, { Component } from "react"

const phrases = {
  saludar: "hola, como estas?",
  despedir: "chao!!!",
}

export class ClassComponent1 extends Component {
  state = {
    estado: "saludar",
  }

  handleToggle = () => {
    if (this.state.estado === "saludar") {
      this.setState({ estado: "despedir" })
    } else {
      this.setState({ estado: "saludar" })
    }
  }

  render() {
    return (
      <div>
        <h2>ClassComponent1</h2>
        <p>Estado: {this.state.estado}</p>
        <p>Frase: {phrases[this.state.estado]}</p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}

export class ClassComponent2 extends Component {
  state = {
    estado: "saludar",
  }

  handleToggle = () => {
    if (this.state.estado === "saludar") {
      this.setState({ estado: "despedir" })
    } else {
      this.setState({ estado: "saludar" })
    }
  }

  render() {
    return (
      <div>
        <h2>ClassComponent2</h2>
        <p>Estado: {this.state.estado}</p>
        <p>Frase: {phrases[this.state.estado]}</p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}
```

En este ejercicio,tenemos la misma lógica de nuestro ejemplo anterior, pero declarada en un componente de clase, si quisiéramos utilizar la lógica declarada y la información del estado, deberíamos utilizar patrones para poder hacerlo de manera más interactiva, en este caso, copiamos el componente completo, ya que en nuestro ejercicio queremos 2 componentes que hagan lo mismo.
