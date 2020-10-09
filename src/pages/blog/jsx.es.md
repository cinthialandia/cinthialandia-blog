---
title: JSX
featuredImage: jsx-es.png
date: "2020-06-28"
---

## ¿Que es JSX?

Es una sintaxis que se utiliza como extensión de javascript la cual es utilizada dentro de componentes react para describir cómo se debería de ver la UI.

Es importante al utilizar JSX es importar react en cada archivo que utilice JSX, ya que cuando el código es compilado, este es transformado a elementos con extensión `.react`

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

function App() {
  return (
    <div>
      <div>
        <img src="//logo.png" />
      </div>
      <footer>Hi I'm footer</footer>
    </div>
  )
}

render(<App />, document.getElementById("root"))
```

Este es un ejemplo de un componente escrito con JSX

```jsx
import React, { Component } from "react"
import { render } from "react-dom"

var App = React.createElement(
  "div",
  null,
  React.createElement(
    "div",
    null,
    React.createElement("img", { src: "./img/logo.png" })
  ),
  React.createElement("footer", null, "Hi I'm footer")
)

render(<App />, document.getElementById("root"))
```

Este ejemplo es exactamente el mismo que el anterior, en donde podemos observar en que se convierte JSX cuando es compilado.

## ¿Para que fue creado JSX?

Esta sintaxis fue creada principalmente, bajo el concepto de que los componentes en react son pedazos de lógicas aisladas que hacen una función, pero se pueden compartir información entre ellas, teniendo esto en cuenta, con esta sintaxis podemos crear lógica JS, HTML y CSS en un mismo componente sin la necesidad de tenerlos en archivos aislados.

## ¿Como funciona?

JSX se utiliza dentro del componente donde se declaran los componentes a renderizar, para esto se debe escribir cualquier expresión javascript dentro de llaves y esta podrá ser utilizada.

```jsx
import React from "react"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{4 + 1}</h1> // 5
      </div>
    )
  }
}
export default App
```

Al momento de renderizar este componente nos mostrará el valor número 5

Otra manera de utilizar JSX es como expresiones, compilado JSX es convertido en javaScript, esto quiere decir que podemos utilizar `if statements` y `for loops`.

```jsx
function getName(user) {
  if (user) {

   return <h1>Hello, {formatName(user)}!</h1>;
 }

 return <h1>Hello, Stranger.</h1>;

```

## Atributos con JSX

Escribir atributos con un valor de string literal, sigue siendo entre comillas.

```jsx
const element = <div className="photo-banner"></div>
```

Para escribir atributos con expresiones javascript se debe utilizar llaves.

```jsx
const element = <img src={photo}></img>
```

Nota: En react DOM se utilizan los nombres de las propiedades con camelCase y tenemos algunos cambios como: Class pasan a ser ClassName tabindex pasa a ser tanIndex

## Children con JSX

Si el tag en tu código se encuentra vacío, tienes la posibilidad de cerrarlo sin necesidad de usar el tag de cierre.

```jsx
const photo = <img src={urlPhoto} />
```

Pero si tu tag contiene hijos directamente, debes cerrarlo como en HTLM5.

```jsx
const element = (
  <div>
    <h1>How are you!</h1>
    <h2>Oh?</h2>
  </div>
)
```
