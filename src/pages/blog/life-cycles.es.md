---
title: Ciclos de vida
featuredImage: life-cycles.png
date: "2020-06-03"
---

## ¿Qué son los ciclos de vida en React?

Se podrían definir como una serie de métodos que son invocados en diferentes estados de la existencia del componente. Pero antes de entrar a más profundidad sobre el tema, se debe destacar que la sintaxis de estos métodos cambian de acuerdo al componente donde serán utilizados.

## Componentes de clase y ciclos de vida

### Render()

Es el método más utilizado de los ciclos de vida, porque es el único que es requerido en el componente de clase. Este maneja la renderización del componente en la UI sin efectos secundarios es decir es un método puro.

```jsx
class Hello extends Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}
```

### ComponenDdidMount()

Es llamado cuando el componente ha sido preparado y listo, esta función permite el uso del `setState()` y actualizar el mismo causando la renderización antes de que el buscador actualice la UI.

### ComponentDidUpdate()

Es invocado al momento de actualizar, el uso más común para esta función es para actualizar DOM en respuesta de props o cambios del estado.

El ejemplo más común para utilizar este método, sería cuando tienes que llamar una API o una condición que cambie el valor del estado.

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.person !== this.state.person) {
    console.log('person state has changed.')
  }
}
```

Este método, tiene 2 parámetros, props y estado pasado, en este ejercicio, comparamos el estado pasado y el actual son diferentes, si es así, se ejecutara el console.log que se encuentra en el ejemplo. Hay que tener en cuenta que para utilizar este método, es necesario hacerlo dentro de una condición, para evitar que el mismo se convierta en un loop infinito.

### ComponentWillUnmount()

Método que es llamado justo antes de que el componente sea destruidos, si tienes que realizar una acción de limpieza, este sería el mejor lugar para hacerlo.
