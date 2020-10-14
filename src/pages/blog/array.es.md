---
title: ¿Qué son los arrays y cómo se usan en javascript?
featuredImage: arrays-es.png
date: "2020-07-28"
---

# ¿Que es un array?

Es un objeto javascript que te permite guardar múltiples valores en una sola variable.

```js
const array1 = []
const array2 = new Array()
```

## Propiedades

### Elementos

El elemento es el valor que se encuentra guardado en el el array.

```js
const array1 = [1, 2, 3, 4, 5, 6]
console.log(array1) // [ 1, 2, 3, 4, 5, 6 ]
```

Los elementos son esos valores dentro de paréntesis y separados por una coma.

### Index

El index de un array es básicamente un puntero que se usa para indicar que elemento de la matriz se utilizará. Hay que tener en cuenta que la estructura de la matriz es secuencial y comienza a partir de 0.

```js
const arrayTbbt = [
  "Penny",
  "Sheldon",
  "Leonard",
  "Amy",
  "Howard",
  "Raj",
  "Bernadette",
]

console.log(arrayTbbt.indexOf("Penny")) //0
console.log(arrayTbbt.indexOf("Leonard")) //2
console.log(arrayTbbt.indexOf("Howard")) //4
console.log(arrayTbbt.indexOf("Bernadette")) //6
```

Para identificar el index de cada nombre en el array utilizamos el método `indexOf` el cual se le pasa el valor que se debe encontrar en el array y este devolverá el número de index donde se encuentra el valor en específico, podemos observar que la consola imprima cual es el número de index de cada nombre.

### Length

El length de un array en javascript retorna el número de elementos que se encuentran en un array.

```js
const arrayTbbt = [
  "Penny",
  "Sheldon",
  "Leonard",
  "Amy",
  "Howard",
  "Raj",
  "Bernadette",
]

console.log(arrayTbbt.length) // 7
```

Utilizando el ejemplo anterior tenemos un array con nombres y para poder saber cuántos elementos se encuentran dentro de él, utilizamos la propiedad length, la cual nos retorna el número de elementos, en esta caso el número 7.

# Multi-dimensional arrays

Javascript no proporciona un array multidimensional de manera nativa, pero se puede crear definiendo un array de elementos dentro de un array de elementos y así sucesivamente.

```js
const arraySeries = [
  ["Penny", "Sheldon", "Leonard", "Amy", "Howard", "Raj", "Bernadette"],
  ["House", "Wilson", "Cameron", "Chase", "Foreman", "Cuddy"],
  ["Walter", "Jessie", "Gus", "Hank", "Skyler", "Saul", "Marie"],
]

console.log(arraySeries) // [
//   [
//     'Penny',
//     'Sheldon',
//     'Leonard',
//     'Amy',
//     'Howard',
//     'Raj',
//     'Bernadette'
//   ],
//   [ 'House', 'Wilson', 'Cameron', 'Chase', 'Foreman', 'Cuddy' ],
//   [
//     'Walter', 'Jessie',
//     'Gus',    'Hank',
//     'Skyler', 'Saul',
//     'Marie'
//   ]
// ]
```

En este ejemplo tenemos un array de series y dentro de este array de series se encuentran otros arrays con el nombre de los actores de cada serie, como podemos ver, se pueden tener arrays dentro de arrays, y se podrían seguir creando para tener más subniveles.

# Destructurando un array

La desestructuración es una sintaxis que nos permite extraer valores de un array y guardarlo en variables. Se debe declarar las variables donde se guardarán los valores y todo esto es igualado al array.

```js
const arrayTbbt = [
  "Penny",
  "Sheldon",
  "Leonard",
  "Amy",
  "Howard",
  "Raj",
  "Bernadette",
]

const [penny, sheldon, leonard] = arrayTbbt

console.log(penny) // 'Penny'
console.log(sheldon) // 'Sheldon'
console.log(leonard) // 'Leonard'
```

En este ejemplo tenemos el array anterior de actores y actrices, si quisiéramos extraer algunos nombre del array, la manera de hacerlo es declarar una variable y dentro de corchetes escribir los nombres de las variables donde se guardarán los valores, en estos casos fueron los mismos nombres, todo esto se iguala al array a extraer.
Imprimimos en consola la variable ahora `penny` y nos da como valor penny que se encontraba guardado en el array.

# Adicionando elementos en un array

## Adicionar un item del final de un array

### push()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
arrTahm.push("Walden")

console.log(arrTahm) // [ 'Charlie', 'Alan', 'Jake', 'Walden' ]
```

En este ejemplo tenemos un array con nombres y utilizamos el método `push()` para adicionar el nombre de otra persona al array, le pasamos a la función el string del nombre y ahora el array ha sido modificado con un elemento más.

### Otra manera de adicionar ítems al array es usando el método concat()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
const arrCast = arrTahm.concat("Walden")
console.log(arrCast) // [ 'Charlie', 'Alan', 'Jake', 'Walden' ]
```

Usando el ejemplo anterior, usamos el método `concat()` y tenemos el mismo resultado. Ten en cuenta que esto crea un nuevo array y no modifica el array original.

## Adicionar un item del principio de un array

### unshit()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
arrTahm.unshift("Walden")

console.log(arrTahm) // [ 'Walden', 'Charlie', 'Alan', 'Jake' ]
```

Tenemos el array de nombres y si queremos sumar un nombre adicional al principio utilizamos el método `unshift()` con el nombre a adicionar, dando como resultado un array de 4 nombres.

# Eliminando elementos en un array

## Eliminar un item del final del array

### pop()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
arrTahm.pop()

console.log(arrTahm) // [ 'Charlie', 'Alan' ]
```

En este ejemplo hemos eliminado el último elemento del array usando el método `pop()`, esto nos da como resultado un array de 2 elementos.

## Eliminar un ítem del principio del array

### shift()

```js
const arrTahm = ["Charlie", "Alan", "Jake"]
arrTahm.shift()

console.log(arrTahm) // [ 'Alan', 'Jake' ]
```

En este ejemplo hemos eliminado el primer elemento del array usando el método `shift()`, esto nos da como resultado 2 elementos en el array.

# Eliminar o adicionar un ítem de acuerdo a la posición del index

## splice()

Con el método `splice()` se puede utilizar para eliminar o agregar elementos al array. El primer argumento especifica el index donde será agregado ese elemento y el segundo argumento es el número de elementos que serán eliminados (sino se quiere eliminar nada, se debe declarar el número 0).

```js
const arrTahm = [
  "Charlie",
  "Alan",
  "Jake",
  "Walden",
  "Judith",
  "Berta",
  "Evelyn",
]
arrTahm.splice(0, 1)

console.log(arrTahm) // [ 'Alan', 'Jake', 'Walden', 'Judith', 'Berta', 'Evelyn' ]
```

En este ejemplo queremos sacar el nombre de `charlie`, por lo que aplicamos el método `splice()`, declaramos desde donde queremos comenzar que seria la posicion 0, ya que el nombre charlie está de primero, y luego declaramos el segundo argumento de cuantos elementos queremos eliminar, como solo queremos eliminar uno, declaramos el número uno, dando como resultado un array sin el nombre `charlie`

```js
const arrTahm = [
  "Charlie",
  "Alan",
  "Jake",
  "Walden",
  "Judith",
  "Berta",
  "Evelyn",
]
arrTahm.splice(4, 0, "Bridget", "Zoey", "Missi")
console.log(arrTahm) // [
//   'Charlie', 'Alan',
//   'Jake',    'Bridget',
//   'Zoey',    'Missi',
//   'Walden',  'Judith',
//   'Berta',   'Evelyn'
// ]
```

En este ejemplo queremos agregar nombres de personajes al array los cuales quiero que sean agregados después del nombre de walden, como el método `splice()` acepta un tercer parámetro que son elementos que se desean agregar, declaramos el número 4 que sería el index donde deberá de agregar los elementos en el array, seguido de esto declaramos el número 0 porque no queremos eliminar ningún elemento en el array y por último los elementos a adicionar.

# Iterar sobre un array

## Array.forEach()

Es un método que llama una función (callback) una vez por cada elemento del array. La función recibe 3 argumentos el ítem, index y el array mismo.

```js
let names = ["Charlie", "Alan", "Jake"]

names.forEach(name => {
  console.log(`Hello my name is ${name}`)
})

// 'Hello my name is Charlie'
// 'Hello my name is Alan'
// 'Hello my name is Jake'
```

Tenemos un array de nombres, por lo que queremos iterar sobre el e imprimir un texto con cada uno de los nombres, declaramos el método `forEach` y escribimos nuestro callback, en este caso hicimos un arrow function donde declaramos el elemento `name` que es cada uno de los nombres iterados e imprimimos un texto en cada iteración.

## Array.map()

Es un método que crea un nuevo array performando una función en cada elemento del array. La función recibe como argumento el valor, index, el array mismo y `thisValue` que es un valor que se usa como this cuando se ejecuta la función.

```js
let numbers = [20, 35, 40]

const newNumber = numbers.map(function (number) {
  return number * 2
})

console.log(newNumber) // [ 40, 70, 80 ]
```

En este ejemplo tenemos un array de números, pero queremos un nuevo array con estos valores multiplicados por 2, declaramos la variable donde será guardado la expresión de esta ejecución y le aplicamos el método `map` a numbers, declaramos nuestra función y nuestro number que será cada número del array multiplicado. Esto nos da como resultado `newNumber` con el resultado de cada elemento multiplicado.

## Array.filter()

Es un método que crea un nuevo array con todos los elementos que aprueben el test implementado por la función. La función recibe como argumento el valor, index, el array mismo y `thisValue` que es un valor que se usa como this cuando se ejecuta la función.

```js
const names = ["Jake", "Alan", "Charlie", "Walden", "Evelyn", "Berta"]

const result = names.filter(word => word.length > 5)

console.log(result)
// [ 'Charlie', 'Walden', 'Evelyn' ]
```

En este ejemplo tenemos un array de nombres y queremos guardar en otro array los nombres mayor a 5 letras, aplicamos a `names` el método `filter()` y evaluamos a word (que es cada elemento del array) el largo de cada nombre sea mayor a 5. Como resultado vemos un nuevo array con 3 nombres que ha sido aquellos que han pasado el test de la función del array.

## Array.reduce()

El método `reduce()` ejecuta una función reduce (que usted provee) en cada elemento del array, resultando un solo valor.

Esta función recibe 4 argumentos:

1. El primero es el acumulador, es aquel que acumula el valor y será retornado en la última invocación de la función.
2. Current value que es el elemento que es procesado en el array
3. Index qué es el index del elemento que se está procesando en en el array.
4. El array mismo.

Y por último un valor inicial, si este valor no es dado a la función, se utilizará el primer elemento del array.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = numbers.reduce(function (accumulator, value) {
  return accumulator + value
})

console.log(result) // 45
```

En este ejemplo tenemos un array de números y queremos sumarlos todo y tener el valor total, por lo que declaramos nuestro nuevo array `result` y aplicamos el método `reduce` al array de numbers, declaramos nuestra función y los argumentos `accumulator` que es el que acumulara el valor de la suma y el `value` que es es el elemento que estamos sumando. La suma nos da como resultado el número 45.

## Array.every()

Es un método que testea todos los elementos de un array, si el array pasa por este test proveído por la función este retornara un valor booleano. Este método recibe como argumentos una función con 3 argumentos: el elemento del array, el index y el array y finalmente un segundo parámetro llamado `thisArg` que es un valor que utliza this al ejecutar la función.

```js
const numbers = [1, 3, 3, 4, 5, 6, 7, 8, 9]

const result = numbers.every(function (number) {
  return number < 10
})

console.log(result) // true
```

En este ejemplo, evaluamos un array con 9 números y queremos saber si todos pasan un test, aplicamos a numbers array el método `every()` declaramos la función y el number como representación de todos los elementos, donde cada elemento es evaluado si es mayor a 10. Como ningún elemento es mayor a 10 nos retorna true.

## Array.some()

Es un método que realiza un test a cada elemento del array que es proveído por la función, al finalizar, este devolverá un valor boolean. Este método recibe como argumentos una función con 3 argumentos: el elemento del array, el index y el array y finalmente un segundo parámetro llamado `thisArg` que es un valor que utliza this al ejecutar la función.

```js
const numbers = [15, 5, 8, 20, 30, 60, 15, 15, 15]

const result = numbers.some(function (number) {
  return number < 5
})

console.log(result) // false

const numbers2 = [15, 5, 8, 20, 30, 60, 15, 15, 15]

const result2 = numbers2.some(function (number) {
  return number < 8
})

console.log(result2) // true
```

En este ejemplo tenemos 2 arrays de números iguales, aplicamos el método `some()` y evaluamos a cada elemento del array, este método retorna el boolean true si uno de los elementos pasa el test y false si no lo pasa ningún elemento.
En el primer ejemplo declaramos la función y evaluamos si `number` es menor a 5, esto retornará false ya que ningún valor es menor a 5.
En el segundo ejemplo declaramos la función y evaluamos si `number` es menor a 8, esto retornara true ya que hay elementos que son menores a 8.

## Array.find()

Es un método que retorna el valor del primer elemento del array que satisfaga con el test proveído por la función. Este método recibe como argumentos una función con 3 argumentos: el elemento del array, el index y el array y finalmente un segundo parámetro llamado `thisArg` que es un valor que utliza this al ejecutar la función.

```js
const numbers = [15, 5, 8, 20, 30, 60, 15, 15, 15]

const result = numbers.find(function (number) {
  return number > 40
})

console.log(result) // 60
```

En este ejemplo tenemos un array de números, y queremos saber cual es el primer elemento que cumple con la evaluación de la función. Le aplicamos el método `find()` al array y declaramos la función con la evaluación de number es mayor a 40. Esto nos da como resultado el primer elemento que cumplio con la evaluacion, el numero 60.

# Copiar un array

## slice()

Es un método que retorna una copia parcial de un array, este método acepta como argumento el número de index donde comenzará la copia y el final el número donde finaliza la copia. Hay que tener en cuenta que este retorna un array nuevo.

```js
const friends = ["rachel", "Monica", "Chandler", "Ross", "Joey", "Phoebe"]

friends.slice(1, 3) // [ 'Monica', 'Chandler' ]
friends.slice(0) // [ 'rachel', 'Monica', 'Chandler', 'Ross', 'Joey', 'Phoebe' ]
```

En este ejemplo realizaremos la copia de los elementos de array de friends, así que aplicamos el método `slice()`, como queremos la copia a partir de mónica hasta chandler, declaramos uno el index donde empezar a copiar y 3 el index donde terminar de copiar. En el segundo ejemplo queremos una copia de todo el array por lo que comenzamos desde el index 0 y no declaramos nada en el segundo argumento.

### Referencias

https://javascript.info/array

https://www.tutorialrepublic.com/javascript-reference/javascript-array-object.php

https://www.freecodecamp.org/news/javascript-array-length/

https://www.javascripttutorial.net/javascript-multidimensional-array/

https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/

https://www.dyn-web.com/javascript/arrays/add.php

https://www.hostingadvice.com/how-to/javascript-remove-element-array/

https://www.w3schools.com/js/js_array_iteration.asp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
