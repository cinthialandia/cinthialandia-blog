---
title: Control Flow statements (bucles)
featuredImage: loops-es.png
date: "2020-07-02"
---

## ¿Que son los control flow statements?

Es el orden de instrucciones en el cual una declaración o función es ejecutada.

### Expresión

Cualquier unidad de código que pueda ser evaluada es una expresión.

### Statement - If...Else

Ejecuta una declaración `if` a una condición especifica si esta es `true`. Si la condición es `false`, otra declaración será ejecutada.

#### Sintaxis

1. La condición es una expresión que va a ser considerada `true` o `false` .

2. La primera declaración es ejecutada si es `true` .

3. La segunda declaración es ejecutada si la condición es `false`.

```js
function obtenerEdad(numero) {
  let resultado
  if (numero >= 18) {
    resultado = "Bienvenido joven adulto!"
  } else {
    resultado = "Eres un niño!"
  }
  return resultado
}

console.log(obtenerEdad(17)) // console print "Eres un niño!"
```

En este ejemplo tenemos una función que recibe como parámetro una edad, nuestra primera condición imprimirá `"Bienvenido eres un joven adulto"`, si es evaluada `true` es decir número es mayor o igual a 18, de lo contrario imprimirá `"Eres un niño"` si esta es evaluada como `false`.

### Nested if else statement

Múltiples declaraciones `if ...else` pueden ser anidadas para crear un bloque de condición extra.

```js
function obtenerEdad(numero) {
  let resultado
  if (numero < 12) {
    resultado = "Puedes ver solo películas clasificación A"
  } else if (numero <= 17) {
    resultado = "Puedes ver solo películas clasificación A y B"
  } else {
    resultado = "Puedes ver peliculas clasificación A, B y C "
  }
  return resultado
}

console.log(obtenerEdad(9)) //  imprimira "Puedes ver solo películas clasificación A"
```

En este ejemplo, la función recibe una edad, nuestra primera declaración, evalúa si la edad es menor a 12, de ser así, la consola imprimirá `”Puedes ver solo películas de clasificación A”`, la próxima declaración es si número es menor o igual al número 17, si esta declaración es `true`, imprimirá `"Puedes ver solo películas clasificación A y B"`, finalmente todo número mayor a 18 imprimirá en la consola `"Puedes ver peliculas clasificación A, B y C"`.

### Switch statement

El switch statement evalúa una expresión que coincida con el valor de la expresión del caso y ejecuta una declaración asociada al mismo.

#### Sintaxis

1. La expresión es aquel resultado que se compara con cada caso
2. El caso value N es usado para comparar la expresión con los casos, si uno coincide, se ejecuta la declaración dentro del caso.
3. Default case se ejecuta cuando el valor de la expresión no coincide con ningún caso.

```js
function obtenerNumeroTelefonico(nombre) {
  switch (nombre) {
    case "Lily":
      console.log("0400581278")
      break
    case "Marshall":
      console.log("0400525877")
      break
    case "Bartney":
      console.log("21565646541")
      break
    case "Ted":
      console.log("548456156156")
      break
    case "Robin":
      console.log("548456156156")
      break
    default:
      console.log("Error!") //console imprimira  '0400581278'
  }
}

obtenerNumeroTelefonico("Lily")
```

En este ejemplo, tenemos una función que recibe un nombre como parámetro, el cual tiene un `switch statement`, el cual tiene en cada caso tiene un nombre y su expresión es el numero de telefono de ese nombre. El nombre `Lily`, se comparará con el valor de cada caso, en este caso, nuestro valor coincide con el primer caso e imprime en consola el el numero de telefono `"0400581278"`, si este no coincidiera con ningún caso, se ejecutaría el `default` caso imprimiria en consola `Error!`.

#### ¿Que pasa si no declaras la palabra `break` en el switch?

```js
function obtenerNumeroTelefonico(nombre) {
  switch (nombre) {
    case "Lily":
      console.log("0400581278")
    case "Marshall":
      console.log("0400525877")
      break
    case "Bartney":
      console.log("21565646541")
      break
    case "Ted":
      console.log("548456156156")
      break
    case "Robin":
      console.log("548456156156")
      break
    default:
      console.log("Error!")
  }
}
obtenerNumeroTelefonico("Lily") // consola imprimira '0400581278' y '0400525877'
```

En este ejemplo, removemos el primer `break` del `switch` y podemos observar, como este bucle sigue corriendo hasta que se encuentra con un declaración de `break`, imprimiendo en consola los números de teléfono tanto de `lily` como de `marshall`, este comportamiento pasa porque el `switch` necesita la declaración `break` en cada caso, para que él mismo sepa dónde debe detenerse en el bucle.

### While statement

El while statement crea un loop que ejecuta una declaración hasta que la condición deje de ser true.

#### Sintasis

1. Condición es una expresión evaluada antes de casa paso por el loop, si la condición se evalúa `true`, la declaración es ejecutada, cuando la ejecución es evaluada `false` se detendrá.

2. Statement será ejecutada hasta que la condición sea evaluada `false`.

```js
function sumarNumero(numero) {
  while (numero < 10) {
    numero++
  }
  console.log(numero) // imprimira numero 10
}

sumarNumero(0)
```

En este ejemplo, tenemos una función llamada `sumarNumero` que recibe un parámetro, en este caso el número 0, dentro de la misma se encuentra un `while` el cual evalúa una condición que número sea menor a 10, si la condición es `true` sumará uno a número, esta condición se evaluará hasta que sea falsa, en este caso, hasta que numero sea 10.

### The do...while statement

Crea un loop que ejecuta una declaración hasta que la condición se evalúa falsa. La condición es evaluada después de ejecutar la declaración, resultando la declaración ejecutada aunque sea una vez.

#### Sintasis

1. La declaración es ejecutada al menos una vez, y es re ejecutada cada vez que la condición se evalúe como verdadera.
2. La condición es una expresión evaluada después de cada paso de ciclo en el loop, si la condición es evaluada verdadera la declaración será ejecutada de nuevo.

```js
let numero = 4
do {
  numero++
} while (numero < 3)
console.log(numero) // imprime numero 5
```

En este loop, declaramos una variable con valor número 4, y ejecutamos una declaración donde número se le sumará uno hasta que en nuestra condición número sea menor a 3. En este caso, así nuestra condición sea falsa, correrá una sola vez, y nuestra consola imprimirá el número 5.

### For statement

Crea un loop que consiste en 3 expresiones opcionales que están dentro de paréntesis y separadas por punto y coma, seguido de esto una bloque de código que será ejecutada en el loop.

#### Sintaxis

1. Inicialización es una expresión o la declaración de una variable que será evaluada antes de que el loop comience.
2. La condición es una expresión que será evaluada antes de cada iteración del loop, si esta expresión es true, la declaración será efectuada.
3. La expresión final será evaluada al final de cada iteración del loop, esto pasará antes de la próxima evaluación de la condición.
4. La declaración será ejecutada hasta que se evalúe falsa.

```js
for (let numero = 0; numero < 5; numero++) {
  console.log(numero)
  // la consola imprima 0 1 2 3 4
}
```

En este ejemplo, tenemos un `for` donde declaramos `number` como variable con valor 0, luego tenemos una condición donde `number` es menos que 5 y finalmente la expresión final donde sumamos uno a la variable `number` hasta que la condición sea `false`.

### The for...of statement

Crea un loop iterable sobre objetos y arrays.

#### Sintaxis

1. En cada iteración un valor de diferente propiedad es asignado a la variable.
2. Las propiedades del objeto son iteradas.

```js
const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const numero of arrNumeros) {
  console.log(numero + 1) // La consola imprimirá 2 3 4 5 6 7 8 9 10 11
}
```

En este ejemplo, tenemos un `array` de números y en nuestro for declaramos la variable `const numero` que es donde será guardada en la iteración cada número del array, y declaramos nuestro array `arrNumeros`, y en nuestro loop, le sumamos el número uno a cada número de nuestro array, dando como resultado en la consola cada número sumado más uno.

### The for...in statement

Itera sobre todas las propiedades de un objeto.

#### Sintaxis

1. Un nombre distinto se le es asignado a la variable en cada iteración.
2. Las propiedades del objeto las cuales serán iteradas.

```js
let friends = {
  Monica: 25,
  Chandler: 30,
  Rachel: 25,
  Ross: 24,
  Joy: 28,
}

for (let nombre in friends) {
  console.log(`${nombre} cumplirá ${friends[nombre] + 1}  años`)
}

// 'Monica cumplirá 26  años'
// 'Chandler cumplirá 31  años'
// 'Rachel cumplirá 26  años'
// 'Ross cumplirá 25  años'
// 'Joy cumplirá 29  años'
```

En este ejemplo, tenemos un `for in`, donde estamos iterando sobre un objeto, con los nombres de personas y sus edades (valores), agregamos uno a las edades del objeto y la misma frase a todos, primero declaramos nombre, que es la propiedad de nuestro objeto más la concatenación de la palabra tiene, luego concatenamos nuestro valor de la propiedad accediendo a ella, `friends[nombre]`, y adicionamos la palabra años.

#### ¿Por que no es bueno usar un for… in en un array?

Los índices de los arrays son innumerables propiedades con nombres integrales, no hay garantía que un `for… in` retornara esos índices en algún orden en particular.
