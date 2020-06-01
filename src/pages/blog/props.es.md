---
title: Props
date: "2020-05-21"
---

## ¿Que son props en React?

Son un patrón para compartir información entre un componente padre y un componente hijo, donde el componente padre setea atributos y los envía al componente hijo como un objeto. Es importante saber que esto trabaja de manera unilateral es decir, que la información solo se comparte desde padre hacía el hijo y no al revés.

## ¿Como usar props?

Los props son usados por componentes de React, pero la sintaxis de los mismos varían dependiendo del componente utilizado.

### Props componentes de clase

Los componentes de clases reciben props como propiedades de la instancia del componente y se puede acceder a ellos usando la sintaxis `this.props`.

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </React.Fragment>
    )
  }
}

class App extends Component {
  render() {
    return <Content title="hello" content="Hello World" num={15} />
  }
}

render(<App />, document.getElementById("root"))
```

En este ejemplo, el componente App (padre), esta renderizando el componente content (hijo). App envía información mediante `props` declarados en el componente content mediante la sintaxis `this`, de esta manera dentro del componente content tenemos acceso a la información.

### Props en componentes funcionales

El componente funcional recibe `props` como el primer parámetro de la función.

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

const Content = ({ title, content }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>{content}</p>
  </React.Fragment>
)

const App = () => {
  return <Content title="hello" content="Hello World" />
}

render(<App />, document.getElementById("root"))
```

En este ejemplo, el componente App (padre) envía props al componente content (hijo) y son recibidos como parámetros de la función, en este caso, estamos haciendo una deconstrucción y tomando solos los valores que necesitamos.

> Nota: Los props no se pueden modificar, esto significa que la información que se envia está en estado de lectura.

## Props y spread sintaxis.

Cuando necesitamos pasar más de un atributo a otro componente, utilizamos el operador de javaScript `spread...`

```jsx
import React, { Component, useState } from "react"
import { render } from "react-dom"

const Content = ({ title, content }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>{content}</p>
  </React.Fragment>
)

const App = props => {
  console.log(props)

  const { name, ...restProps } = props
  return (
    <React.Fragment>
      <p>{name}</p>
      <Content {...restProps} />
    </React.Fragment>
  )
}

render(
  <App title="hello" content="Hello from props" name="Gerardo" />,
  document.getElementById("root")
)
```

En este ejemplo, nuestro componente App (padre) está recibiendo props desde otro componente, y se realiza una deconstrucción para obtener algunos de los valores del objeto, En este caso utilizamos la sintaxis spread y guardamos en una variable los valores restantes del objeto.

```jsx
import React, { Component, useState } from "react"
import { render } from "react-dom"

const Content = ({ title, content }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>{content}</p>
  </React.Fragment>
)

const App = () => {
  const [state] = useState({
    title: "hello",
    content: "Hello world from state",
  })

  return (
    <React.Fragment>
      <Content {...state} />
    </React.Fragment>
  )
}

export default App

render(<App />, document.getElementById("root"))
```

En este ejemplo estamos usando el estado, el componente App (padre) pasa al componente content (hijo) el estado como un props (objeto).

```jsx
import React, { Component, useState } from "react"
import { render } from "react-dom"

const Content = ({ title, content }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>{content}</p>
  </React.Fragment>
)

const App = () => {
  const obj = {
    title: "hello",
    content: "Helo world",
  }

  return (
    <React.Fragment>
      <Content {...obj} />
    </React.Fragment>
  )
}

export default App

render(<App />, document.getElementById("root"))
```

El componente App (padre) declaro un objeto con algunos valores que serán enviados como props al componente content (hijo)

## Props con valor por defecto

En algunos casos, si quieres pasar props como valor por defecto, lo puedes realizar de las siguientes maneras.

```tsx
import React, { Component } from "react"
import { render } from "react-dom"

interface Props {
  name?: string
}

const MyComponent: React.FC<Props> = ({ name = "Gerardo" }) => (
  <p>Hello {name}</p>
)

const App = () => <MyComponent />

render(<App />, document.getElementById("root"))
```

En este ejemplo, tenemos un componente funcional, donde recibe un nombre como props, hacemos una deconstrucción para obtener el valor y setearlo como valor por defecto. `MyComponent` (hijo) no está recibiendo ningún prop del componente App (padre), en este caso se setea “Gerardo”, como el valor por defecto.

> Nota: Estamos utilizando typescript, así que para evitar conflictos con la herramienta, se deberá realizar la interface y setear en el valor del key el signo “?”, con esto estamos declarando que name no es obligatorio, asi que la herramienta no demandará de manera obligatorio un valor.

```tsx
import React, { Component } from "react"
import { render } from "react-dom"

interface Props {
  name?: string
}

const MyComponent: React.FC<Props> = ({ name }) => <p>Hello {name}</p>
MyComponent.defaultProps = {
  name: "Gerardo",
}
const App = () => <MyComponent />

render(<App />, document.getElementById("root"))
```

En este ejemplo, tenemos el componente App (padre) y no está enviando ningún props, por lo tanto utilizaremos la sintaxis “default props y declararemos el nombre como valor por defecto.
