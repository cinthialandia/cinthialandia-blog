---
title: Número y sus métodos
featuredImage: numbers-es.png
date: "2020-07-02"
---

## Número en JavasCript

Número es un objeto primitivo usado para representar y manipular números como `2` o `-1.25`. El número constructor contiene constantes y métodos que trabajan con números, valores con otros tipo pueden ser convertidos a número usando la función `Number()`

Cuando usamos la función `Number(value)` se convierte un string u otro valor a tipo número, si este valor no puede ser convertido, este retornara `NaN`.

```js
const x = 9.33 // Número con decimales
const y = 6 //numero sin decimales
```

## Metodos

### Number.isInteger()

Este método determina si el valor pasado es un integral y retorna un valor booleano el cual indica si es `true` o `false`.

```js
function esIntegral(valor) {
  if (Number.isInteger(valor)) {
    return "Sii!! un integral!"
  }
  return "Ou dios no! decimales! >:("
}

console.log(esIntegral(10))
// la consola imprimira 'Sii!! un integral!'"

console.log(esIntegral(2.5))
// la consola imprimira 'Ou dios no! decimales! >:('
```

En este ejemplo tenemos una función que recibe como parámetro un número y este es evaluado con el método `Number.isInteger()`, este devolverá un valor `true` o `false`. En este caso en el primer ejemplo es `true` y el segundo es `false`.

### Number.parseFloat()

Este método recibe como argumento un string y retorna un número decimal. Si el número no puede ser convertido, este devolverá `NaN`.

```js
console.log(Number.parseFloat("djsbkjbas7823")) // La consola imprimira NaN

console.log(Number.parseFloat("51561dfgdfg")) // La consola imprimira 51561

console.log(Number.parseFloat("sdgdrg")) // La consola imprimira NaN

console.log(Number.parseFloat("1.58")) // La consola imprimira 1.58

console.log(Number.parseFloat("25")) // La consola imprimira 25

console.log(Number.parseFloat("25.56djkbkbsd")) // La consola imprimira 25.56

console.log(Number.parseFloat("288.256d541564")) // La consola imprimira 288.256
```

Como podemos ver en el ejemplo, este método, puede convertir un `string` en un número, solo en los casos, donde el string comienza con el número o es solo un string de números.

```js
console.log(Number.parseFloat("djsbkjbas7823")) // La consola imprimira NaN
console.log(Number("djsbkjbas7823")) // La consola imprimira NaN

console.log(Number.parseFloat("51561dfgdfg")) // La consola imprimira 51561
console.log(Number("51561dfgdfg")) // La consola imprimira NaN

console.log(Number.parseFloat("sdgdrg")) // La consola imprimira NaN
console.log(Number("sdgdrg")) // La consola imprimira NaN

console.log(Number.parseFloat("1.58")) // La consola imprimira 1.58
console.log(Number("1.58")) //  La consola imprimira 1.58

console.log(Number.parseFloat("25")) // La consola imprimira 25
console.log(Number("25")) //  La consola imprimira 25

console.log(Number.parseFloat("25.56djkbkbsd")) // La consola imprimira 25.56
console.log(Number("25.56djkbkbsd")) // La consola imprimira NaN

console.log(Number.parseFloat("288.256d541564")) // La consola imprimira 288.256
console.log(Number("288.256d541564")) // La consola imprimira NaN
```

En este ejemplo, podemos observar que la única diferencia es por ejemplo, `console.log(Number.parseFloat("51561dfgdfg"))`donde el método parseFloat puede convertir a string con letras y números pero el método número no puede convertir string combinados con números y letras.

### Number.parseInt()

Método que recibe como primer argumento un `string` y segundo un radio o base específico el cual retorna un número integral.

```js
function hexToRgb(color) {
  const r = Number.parseInt(color.slice(0, 2), 16)
  const g = Number.parseInt(color.slice(2, 4), 16)
  const b = Number.parseInt(color.slice(4, 6), 16)

  return { r, g, b }
}

console.log(hexToRgb("FFAABB")) // consola imprimira { r: 255, g: 170, b: 187 }
```

En este ejemplo, tenemos una función que convierte un color hexadecimal a RGB, el cual acepta como argumento un color como `string`, como nuestro color hexadecimal cada 2 letras es equivalente a los 3 primeros valores rgb. En nuestra función usamos el método `Number.parseInt()`, el cual recibe el primer argumento las 2 primeras letras del color hexadecimal como string y como base en rgba es decir en 16.

### ToFixed()

Es un método que le da formato a un número usando punto y retorna un string que representa el número con punto.

```js
function fixNumber(number) {
  return number.toFixed(2)
}

console.log(fixNumber(123.4566))
//  La consola imprimira "123.46"

console.log(fixNumber(0.004))
//  La consola imprimira "0.00"
```

Como se puede observar en el ejemplo, tenemos una función que recibe un número como parámetro y este número será evaluado con el método `toFixed(number)`, en este caso estamos declarando solos 2 decimales, retornando así números con solo 2 decimales.

### ToString()

Es un método que retorna un string representando un número específico. El método evalúa un objeto número y recibe como parámetro el radio o base del mismo el cual es opcional.

```js
function rgbToHex(r, g, b) {
  const hex1 = Number(r).toString(16).toUpperCase()
  const hex2 = Number(g).toString(16).toUpperCase()
  const hex3 = Number(b).toString(16).toUpperCase()

  return `${hex1}${hex2}${hex3}`
}

console.log(rgbToHex("255", "170", "187")) // consola imprimira  'FFAABB'
```

En este ejemplo, tenemos una función que hace el contrario del ejemplo pasado, esta función pasa colores hexadecimales a RGB, por lo cual acepta 3 argumentos, los cuales son los 3 valores del RGB como string, estos string, son pasados a número usando el método `Number()` para poder usar el método toString y poder convertir ese string a valor radio 16, el cual será convertido en la representacion del numero en string, finalmente pasamos ese string a mayúscula y lo concatenamos para tener el valor del color completo.

Para más información sobre el objeto número sus métodos y propiedades, aqui. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
