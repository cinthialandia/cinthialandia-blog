---
title: ¿Qué son strings en javascript? y ¿cuáles son sus métodos más comunes?
featuredImage: strings-es.png
date: "2020-07-03"
---

## String

El string es usado para representar y manipular una secuencia de caracteres, son útiles para cargar data que será representada en forma de texto. Strings puede crearse como valores primitivos, literas o como objetos.

```js
const str = "Hola soy un string"
```

## Propiedades del string

### String length

El length de la propiedad del string retorna la longitud del string, pero esta información es sólo de lectura.

```js
const str = "Cinthia!"

console.log(str.length) // consola imprimira 8
```

En este ejemplo, tenemos un string, con un nombre, y utilizamos la propiedad `length`para saber la longitud de `str`, nuestra consola nos devolverá el valor de la longitud de nuestro string, en esta caso 8.

## Métodos de string

### ToUpperCase()

Este método retorna un string con su valor convertido en mayúscula.

```js
const stringUpperCase = "lo único que necesito es, pizza, wifi y dormir!"

console.log(stringUpperCase.toUpperCase())
// consola imprimira  'LO ÚNICO QUE NECESITO ES, PIZZA, WIFI Y DORMIR!'
```

En este ejemplo tenemos una frase en minuscula, aplicamos el método `toUpperCase` al string y se convertirá toda la frase en mayúscula.

### ToLowerCase()

Es un método que retorna el valor de un string convertido en minúscula.

```js
const stringLowerCase = "Lo uNiCo QUE NEceSito ES PiZza, wifi y DoRmir"

console.log(stringLowerCase.toLowerCase())
// consola imprimira'lo único que necesito es pizza, wifi y dormir'
```

En este ejemplo tenemos una frase en mayúscula y minúscula, aplicamos el método `toLowerCase()` al string y se convertirá toda la frase en minúscula.

### Concat()

Es un método que recibe strings y los concatena retornando un nuevo string.

```js
function hola(nombre) {
  console.log(
    "Hola y bienvenido a tu perfil".concat(
      " ",
      nombre,
      " ",
      "que tengas un lindo día"
    )
  )
}

hola("Cinthia") // la consola imprimra 'Hola y bienvenido a tu perfil Cinthia que tengas un lindo día'
hola("Britney Spears") // la consola imprimira 'Hola y bienvenido a tu perfil Britney Spears que tengas un lindo día'
```

En este ejemplo, tenemos una función que recibe un nombre como string, y lo concatena en un mensaje automático, para cada uno de los nombres, en este caso, declaramos el primer string y le aplicamos el método `concat` y dentro de él declaramos todos los string a adicionar separados por coma.

#### Otras maneras de concatenar

##### Operador +

El operador de adición `+` puede ser usado para concatenar 2 o mas strings.

```js
function hola(nombre) {
  console.log(
    "Hola y bienvenido a tu perfil" +
      " " +
      nombre +
      " " +
      "que tengas un lindo día"
  )
}

hola("Cinthia") // la consola imprimra 'Hola y bienvenido a tu perfil Cinthia que tengas un lindo día
hola("Britney Spears") // la consola imprimira 'Hola y bienvenido a tu perfil Britney Spears que tengas un lindo día'
```

Realizando el ejemplo anterior, utilizamos la misma función, pero esta vez concatenamos los strings con el operador de adición `+`, dando el mismo resultado que con el método anterior.

##### Template literals o template string

El template literals te permite setear expresiones encerradas dentro de backtick, estas serán indicadas con el signo del dólar y llaves `${ string o expresión }`

```js
function hola(nombre) {
  console.log(
    `${"Hola y bienvenido a tu perfil"} ${nombre} ${"que tengas un lindo día"}`
  )
}

hola("Cinthia") // la consola imprimira 'Hola y bienvenido a tu perfil Cinthia que tengas un lindo día'
hola("Britney Spears") // la consola imprimira 'Hola y bienvenido a tu perfil Britney Spears que tengas un lindo día'
```

Otra manera de realizar este ejercicio es utilizando template string, siendo la mejor y la manera más fácil de concatenar strings, tenemos la misma función del ejemplo anterior, y concatenamos el mensaje, añadiendo cada string como expresión con la sintaxis `${}` dando el mismo resultado que los ejemplos anteriores.

### PadStart()

Es un método que completa un string con otro string (muchas veces si es necesario) hasta que el string cumpla con una longitud establecida. Este método acepta como primer argumento el largo de como debería ser el string y como segundo argumento el `padString` que sería el string con el cual completar retornando un string como resultado.

```js
function formatoDeTiempo(hora, minutos) {
  const horaConFormato = String(hora).padStart(2, "0")
  const minutosConFormato = String(minutos).padStart(2, "0")

  return `${horaConFormato}:${minutosConFormato}`
}

console.log(formatoDeTiempo(3, 15)) // La consola imprimira 03:15
```

En este ejemplo tenemos una función que recibe una y un minuto y los setea con un formato, de hora, primero tomamos el parámetro hora y le aplicamos el método `padStart()`, con el primer parámetro número 2 el cual nos indica que nuestro string debe ser de 2 indexes y como segundo parámetro el string `0` con el cual completamos al string que debe tener 2 indexes. Hacemos lo mismo con los minutos y tenemos como resultado en la consola 03:15 con formato de hora.

### PadEnd()

Es un método que completa un string (repetidamente si es necesario) con una longitud establecida, este es aplicada al final del string, y recibe como primer argumento, el número de la longitud del string y como segundo el string con el cual será completado el mismo, esto dará como resultado un string.

```js
const str1 = "Sour Candy"

console.log(str1.padEnd(25, "!"))
// la consola imprimira'Sour Candy!!!!!!!!!!!!!!!'

const str2 = "Kill this love"

console.log(str2.padEnd(20))
// la consola imprimira 'Kill this love
```

En estos 2 ejemplos, tenemos el primer string aplicando el método y recibiendo como primer parámetro el index 25, y como segundo argumento el símbolo `!` con el cual completar dando como resultado el símbolo repetido hasta que se complete el index hasta 25. Nuestro segundo `string` le aplicamos el método añadiendo como primer parámetro 20 de index pero sin ningún string con el cual completar, dando como resultado un string con espacio vacío.

### Match()

Es un método que devuelve el resultado de comparar un `string` contra una regular expression.

```js
let oracion = "El espacio es importante para separar palabras"
let contarSpacio = /\s/g
let resultado = oracion.match(contarSpacio).length
console.log(resultado) // la consola imprimira 6
```

En este ejemplo tenemos la variable `oración` con el valor de un string y la variable `contarSpacio` con el valor de una regular expression, esta expresión se utilizará para buscar espacios en blanco en cualquier string. Por lo tanto le aplicamos el método `match` a nuestra oración como argumento la regular expression y contabilizamos con la propiedad length cuantos espacios en blanco hay, en este caso 6.

### Slice()

Es un método que extrae una sección del `string` y retorna un nuevo string sin modificar el original. Este método acepta 2 argumentos, el primero es `beginIndex` que es el número donde comienza la extracción del string y el segundo argumento es el número de index donde terminará la extracción.

```js
function hexToRgb(color) {
  const r = Number.parseInt(color.slice(0, 2), 16)
  const g = Number.parseInt(color.slice(2, 4), 16)
  const b = Number.parseInt(color.slice(4, 6), 16)

  return { r, g, b }
}

console.log(hexToRgb("FFAABB")) // console will print { r: 255, g: 170, b: 187 }
```

Tenemos el mismo ejemplo que utilizamos para el método parseInt, pero en este caso, estamos explicando cómo funciona el corte, al principio, tenemos una función que convierte los colores hexadecimales a RGB, esta función recibió el color como una cadena y necesitamos extraer secciones de la cadena para convertir cada parte en el valor del color RGB, nuestra primera variable `r`, tiene color param y aplicamos el método de corte, el primer argumento es el índice, en este caso, queremos comenzar con el comienzo de la palabra y el segundo argumento en el número del índice que vamos a extraer de la cadena en este caso 2, teniendo como resultado algo como esto {FF, AA, BB} después de esto aplicamos el resto de Los métodos para obtener el color RGB.

```js
const cc = "2222555544441111"
const last4 = cc.slice(-4)
const maskecCc = last4.padStart(16, "X")
console.log(maskecCc) // la consoloa imprimira'XXXXXXXXXXXX1111'
```

Cuando utilizamos números negativos como argumentos en este método el comportamiento cambia, ya que el index de inicio comienza al revés, en este ejemplo tenemos el número de una tarjeta de crédito en un string, queremos obtener solo los ultimos 4 numeros del mismo, por lo que le aplicamos el método slice y declaramos como índice inicial `-4`, el cual nos traera los ultimos 4 numeros del string `1111`

```js
const name2 = "Meredith"
console.log(name2.slice(2, -4)) //la consola imprimira 're'
```

En este ejemplo podemos observar el índice final en negativo y también tiene el mismo comportamiento por lo que en este ejemplo, extraemos con índice inicial 2 que sería desde `r` y el índice negativo hasta la `e` contando desde h es decir el conteo se hace al revés.

### Includes()

Es un método que determina si se puede encontrar un string en otro string y retorna un true o false según sea el caso, este método recibe como argumento el string que será buscado y la posición del mismo (opcional).

```js
const oracion =
  "Oops I did it again I played with your heartgot lost in the game Oh baby baby Oops you think Im in love That Im sent from above Im not that innocent"

const palabra = "carlos"
const palabra1 = "baby"

console.log(
  `La palabra "${palabra}" ${
    oracion.includes(palabra) ? "esta" : "no esta"
  } en la oracion`
) // false
console.log(
  `La palabra "${palabra1}" ${
    oracion.includes(palabra1) ? "esta" : "no esta"
  } en la oracion`
) // true

// la consola imprimira'La palabra "carlos" no esta en la oracion'
//  la consola imprimira'La palabra "baby" esta en la oracion'
```

En este ejemplo, tenemos un una oración con el coro de una canción y queremos saber si dentro del string se encuentran algunas palabras, por lo que aplicamos el método `includes`a la oración y le pasamos el string que queremos buscar, en el primer ejemplo nos retorna false, por lo que nuestro consola imprime que la palabra no ha sido encontrada y en el segundo ejemplo retorno como valor true por lo que nuestra consola imprime que la palabra se encuentra en el `string`.

### split()

Este método divide un `string` en un set de substrings, y los coloca en un array, este método acepta como primer argumento el separador (opcional), puede ser un string o un regular expression, y el segundo argumento que es el limit (opcional), que es el número no negativo, que limita la cantidad de piezas.

```js
const str = "esto es un texto muuuuuuy largo"

console.log(str.split(" ", 2)) // la consola imprimira [ 'esto', 'es' ]

const str = "esto es un texto muuuuuuy largo"

console.log(str.split("", 2)) //  la consola imprimira [ 'e', 's' ]
```

En este ejemplo tenemos un string con un texto el cual queremos separar, aplicamos a este string el método y declaramos como primer argumento, como queremos separar el string, un string vacío y espacio separar nuestra frase en palabras con un límite de 2 como declaramos en nuestro segundo argumento. En el segundo ejemplo tenemos el mismo texto, solo que lo separemos por letra, usando como primer argumento un string sin espacio.

Para mas información sobre string y sus metodos aquí: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
