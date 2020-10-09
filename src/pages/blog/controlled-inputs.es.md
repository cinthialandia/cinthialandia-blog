---
title: Forms Inputs controlados
featuredImage: input-controlled-es.png
date: "2020-06-29"
---

## Componentes controlados

En HTML los elementos como `<input>`, `<textarea>` y `<select>`, mantienen la actualización de su estado basado en el propio input. En React, los estados que mutan, deben guardarse en el estado del componente.

Es decir es una buena práctica, guardar el estado de input en el estado del componente, para mantener una sola fuente de la verdad, por lo tanto inputs que son controlados por el estado del componente son llamados “controlled component” o “controlled input”.

## Hooks e inputs controlados

En nuestro componente funcional, declaramos un estado (hook) con una variable `name` donde guardaremos el valor escrito y la función `setName` que guarda el texto escrito en nuestra variable.

El componente renderiza un div con un texto y un input tipo texto con información manejada por una función con evento, en esta función se actualiza el estado, por otra parte el valor de nuestro input es igual a la variable de nuestro hook, es decir ambos valores del input están atados al estado, y tienen la misma información.

```jsx
import React, { Component, useState } from "react"
import { render } from "react-dom"

function App() {
  const [name, setName] = useState("Your name here!")

  const handleChange = event => {
    setName(event.target.value)
  }
  return (
    <form>
      <div>What is your name?</div>
      <input type="text" value={name} onChange={handleChange} />
    </form>
  )
}

render(<App />, document.getElementById("root"))
```

## Hooks y select tag

En nuestro componente funcional, declaramos un estado (hook) con una variable `dessert` donde guardaremos el valor seleccionado y la función `setDessert` que guarda el valor seleccionado en la variable.

Este componente renderiza un input select de postres, el cual su valor es manejado por una función con evento, y la misma actualiza nuestro hook de estado, con el valor escogido, por otra parte le asignamos el valor al input de la variable `dessert`, para que los valores de este input estén atados al estado.

```jsx
import React, { Component, useState } from "react"
import { render } from "react-dom"

function App() {
  const [name, setName] = useState("Your name here!")
  const [dessert, setDessert] = useState("chocolate cake")

  const handleChange = event => {
    setName(event.target.value)
  }

  const handleChangeSelect = event => {
    setDessert(event.target.value)
  }

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
  )
}

render(<App />, document.getElementById("root"))
```

## Hooks y multiples inputs

Cuando necesites controlar múltiples inputs, puedes adicionar el atributo nombre al input y dejar que la función handle selecione que input tendrá el evento

Seguimos con nuestra anterior ejercicio y en nuestro componente funcional creamos otro estado (hook), con una variable que tendrá como valor un objeto con 2 propiedades y la función para modificar esa variable. Nuestro componente renderiza ahora un checkbox con una pregunta y un textarea donde podemos escribir información, ambos inputs comparten la función handle, y sus valores dependen del estado como los anteriores inputs.

En nuestra function `handleChangeInput`con un if evaluamos con el evento, que elemento debe ser actualizado y dependiendo de este se actualiza el estado objeto que tenemos.

```jsx
import React, { Component, useState } from "react"
import { render } from "react-dom"

function App() {
  const [name, setName] = useState("Your name here!")
  const [dessert, setDessert] = useState("chocolate cake")
  const [takeAway, setTakeAway] = useState({ takeAway: false, direction: "" })

  const handleChange = event => {
    setName(event.target.value)
  }

  const handleChangeSelect = event => {
    setDessert(event.target.value)
  }

  const handleInputChange = event => {
    const target = event.target
    if (target.name === "takeAway") {
      setTakeAway({ takeAway: target.checked, direction: "" })
    } else {
      setTakeAway({ direction: target.value, takeAway: true })
    }
  }

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
  )
}

render(<App />, document.getElementById("root"))
```

## File input tag

En HTML el input file deja escoger uno o más archivos, este elemento al ser un valor “sólo lectura”, se convierte en input no controlado.

```jsx
<input type="file" />
```

Ejercicio completo aquí: https://stackblitz.com/edit/react-esebfz

## Componentes de clase e inputs controlados

En nuestro componente de clase, declaramos con la propiedad `name`, el componente va a renderizar en pantalla un div con un texto y un input tipo texto con información manejada por una función con evento, en esta función se actualiza el estado, por otra parte el valor de nuestro input es igual al estado, es decir ambos valores del input están atados al estado, y tienen la misma información.

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Your name here!",
    }
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

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
    )
  }
}

render(<App />, document.getElementById("root"))
```

## Componentes de clase y select tag

Declaramos nuestro nueva propiedad `dessert`en el estado del componente y un input select con una función que guarda el valor seleccionado en nuestro estado. Escribimos en el valor de nuestro input el valor de la propiedad `dessert`.

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Your name here!",
      dessert: "chocolate Cake",
    }
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  handleChangeSelect = event => {
    this.setState({ dessert: event.target.value })
  }

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
        <select value={this.state.dessert} onChange={this.handleChangeSelect}>
          <option value="chocolate cake">Chocolate cake</option>
          <option value="ice cream">ice cream</option>
          <option value="lime pie">Lime pie</option>
          <option value="cup cake">Cupcake</option>
        </select>
      </form>
    )
  }
}

render(<App />, document.getElementById("root"))
```

## Componentes de clase y multiples inputs

Cuando se necesita controlar múltiples inputs, se puede adicionar el atributo name al input y dejar que la función handle selecione que input tendrá el evento.

Seguimos con nuestra anterior ejercicio y en nuestro componente creamos 2 propiedades más en el estado llamadas, takeAway y direction. Por otra parte nuestro componente renderiza ahora un checkbox con una pregunta y un textarea donde podemos escribir información, ambos inputs comparten la función handle, y sus valores dependen del estado como los anteriores inputs. En nuestra function `handleChangeInput`con un if evaluamos con el evento, que elemento debe ser actualizado y dependiendo de este se actualiza el estado.

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Your name here!",
      dessert: "chocolate Cake",
      takeAway: false,
      direction: "",
    }
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  handleChangeSelect = event => {
    this.setState({ dessert: event.target.value }, () => {
      console.log(this.state.dessert)
    })
  }

  handleInputChange = event => {
    const target = event.target
    if (target.name === "takeAway") {
      this.setState({ takeAway: target.checked })
    } else {
      this.setState({ direction: target.value, takeAway: true })
    }
    console.log(this.state.direction)
  }

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
        <select value={this.state.dessert} onChange={this.handleChangeSelect}>
          <option value="chocolate cake">Chocolate cake</option>
          <option value="ice cream">ice cream</option>
          <option value="lime pie">Lime pie</option>
          <option value="cup cake">Cupcake</option>
        </select>
        <p>Take away?</p>
        <input
          name="takeAway"
          type="checkbox"
          checked={this.checked}
          onChange={this.handleInputChange}
        />
        <p> Direction</p>
        <textarea
          name="direcction"
          value={this.direction}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

render(<App />, document.getElementById("root"))
```

Ejercicio completo aquí: https://stackblitz.com/edit/react-da4bwv
