---
title: ¿Qué son las funciones en javascript?
featuredImage: functions-es.png
date: "2020-07-06"
---

## Definiendo funciones

Las funciones son valores que pueden ser llamados o declarados, son uno de los bloques de construcción más importantes en Javascript que performan tareas o calculan valores.

## Declaración de función

### **La palabra función**

Cuando declaramos una función, la primera declaración es la palabra `function`.

```js
function () {}
```

### **Nombre de la función**

Después de crear nuestra función, se le deberá asignar un nombre a la misma, en algunos casos se pueden crear funciones anónimas, es decir sin nombre.

```js
function littlerFunction() {}
```

### Parametros

Los parámetros son los nombres que se definen en la definición de la función, a veces algunos desarrolladores confunden los parámetros con los argumentos, la mejor manera de aclararlo es entender que los parámetros están solo en la definición de la función, son la palabra que van a recibir el valor.

```js
function littlerFunction(param1, param2, param3) {}
```

### Argumentos

Los argumentos son valores pasados a la función cuando ésta es invocada, a veces algunos desarrolladores confunden estos 2 términos, la mejor manera de entender esto es entender que los argumentos son solos los valores que la función va a recibir cuando sea llamada, y estos valores van a estar siendo recibidos por los parámetros.

```js
function littlerFunction(param1, param2, param3) {}

littlerFunction(1, 2, 3)
```

### Parámetros por defecto

Los parámetros por defecto permiten que los parámetros con nombres se inicializan con valores predeterminados en caso de que no haya ningún valor o se pase uno indefinido.

```js
function littlerFunction(param1 = 2, param2 = 2, param3 = 3) {}

littlerFunction()
```

En este ejemplo, tenemos la misma función, pero en este caso, estamos asignando valores a los parámetros, estos valores son por defecto, ya que nuestra función, se está ejecutando sin ningún tipo de argumentos.

### **La declaración**

La declaración es todo dentro de las llaves, esta es la parte de la función donde sucederá la lógica, la tarea o el procedimiento y devolverá un valor como resultado de la ejecución de la función.

```js
function littlerFunction(param1 = 1, param2 = 2, param3 = 3) {
  return console.log(param1 + param2 + param3)
}

littlerFunction(1, 2, 3) // la consola imprimira  6
```

En este ejemplo tenemos una función, que es llamada con 3 argumentos (números), los cuales son recibidos como parámetros, la declaración de la misma (lo que está dentro de llaves), guarda la lógica de retornar el valor de la suma de todos los parámetros, obteniendo en esta caso el resultado de 6.

### Invocando una función

Definir una función no hace que esta sea ejecutada, definirla es nombrar la función y especificar qué hará cuando sea llamada. La manera de llamar una funcion es declarando su nombre con paréntesis `littlerFunction()` siempre teniendo el cuenta el alcance de donde es llamada (scope).

```js
function littlerFunction(param1 = 1, param2 = 2, param3 = 3) {
  return console.log(param1 + param2 + param3)
}

littlerFunction(1, 2, 3) // console will print 6
```

En este ejemplo podemos observar que nuestra `littlerFunction` es declarada y para ser ejecutada, declaramos el nombre de la función y la llamamos con paréntesis, en este caso con los argumentos `1,2, 3`.

## Expresión de funciones (function expressions)

Las expresiones de funciones son una forma diferente de definir una función, asignamos el resultado de la expresión a una variable, por lo tanto podemos llama la función mediante la variable misma.

```js
const saveLittlerFunction = function littlerFunction(param1, param2, param3) {
  return console.log(param1 + param2 + param3)
}

saveLittlerFunction(1, 5, 9) // consola imprimira 15
```

En este ejemplo, declaramos la variable `saveLittlerFunction` y asignamos el valor de la expresión a la misma, la manera de llamar esta función es declarando el nombre de la variable como una función y pasando a través de ella los argumentos como cualquier función normal.

## Funciones anónimas

En algunos casos es posible tener funciones anónimas, con functions expressions al momento de llamar la función, esta es realizada declarando el nombre de la variable, por lo que no es necesario que la misma se tenga un nombre.

```js
const saveLittlerFunction = function (param1, param2, param3) {
  return console.log(param1 + param2 + param3)
}

saveLittlerFunction(1, 5, 9) // consola imprimira 15
```

Este ejemplo tiene el mismo ejercicio que el anterior, y cuando llamamos a la función, usamos el nombre de la variable y no el nombre de la función, en otras palabras, no es necesario que la función tenga una.

## Alcance (scoping)

No se puede acceder a las variables definidas dentro de una función desde cualquier lugar fuera de la función porque la variable se define solo en el alcance de la función. Pero una función puede acceder a todas las variables y funciones definidas dentro del alcance en el que se define.

### Global

El global scope se refiere al contexto actual del código que determina la accesibilidad de las variables. El global es donde se declaran todas las funciones y objetos, por ejemplo una variable declarada en el ámbito global, es visible desde todos los ámbitos y por lo tanto puede ser modificada por cualquiera.

```js
const additionTotal = 30

const saveLittlerFunction = function (param1, param2, param3) {
  const addition = param1 + param2 + param3 + additionTotal
  console.log(addition)
  return
}

saveLittlerFunction(1, 5, 9) // la consola imprimira 45
```

En este ejemplo hemos declarado en global scope, la variable `additionTotal` y nuestra función del ejercicio anterior, y como podemos observar nuestra función, tiene acceso al valor de la variable, por lo que se puede ejecutar la suma declarada y como resultado se imprimirá en la consola 45

### Local

El local scope es el alcance donde esta declarado la variable o función, es decir el bloque de código entre llaves que fue declarado.

```js
const additionTotal = 30

function bigfunction(one, two) {
  const number1 = 5
  const multiply = one * two + number1
  console.log(multiply)
  return
}

bigfunction(2, 3) // la consola imprimira 11

const saveLittlerFunction = function (param1, param2, param3) {
  const addition = param1 + param2 + param3 + additionTotal
  console.log(addition)
  return
}

saveLittlerFunction(1, 5, 9) // la consola imprimira 45
```

En este ejemplo, se ha declarado la funcion `bigfunction` la cual recibe 2 parámetros (números) y dentro de la lógica del mismo, se ha declarado una multiplicación y una suma. Primero se multiplican los números, valores que fueron pasados como argumentos y luego se le suma el valor de la variable `number1`, esta variable ha sido declarada en el scope local de la función `bigfunction`, la cual solo esta función tiene acceso a su valor.

```js
const additionTotal = 30

function bigfunction(one, two) {
  const number1 = 5
  const multiply = one * two + number1
  console.log(multiply)
  return
}

bigfunction(2, 3)

const saveLittlerFunction = function (param1, param2, param3) {
  const addition = param1 + param2 + param3 + additionTotal + number1
  console.log(addition)
  return
}

saveLittlerFunction(1, 5, 9) // ReferenceError: number1 is not defined
```

En nuestra function expression hemos declarado en nuestra lógica la variable `number1`, y como resultado tenemos el mensaje de `ReferenceError: number1 is not defined` el cual nos indica que no encuentra la variable indicada, esto quiere decir que no tiene acceso, ya que esta variable solo puede ser usada en su scope local ya que fue declara en el scope local.

## Hoisting

Es el comportamiento de cuando el código es movido al principio del scope (alcance del código)

```js
hola('Mario', '29'); // consola imprimira 'Hola Mario, tienes 29 años'

function hola(nombre, edad) {
 console.log(`Hola ${nombre}, tienes ${edad} años`);
```

En este ejemplo tenemos la declaración de una función, y la declaración de su ejecución se encuentra antes de la función, este no da un error porque las funciones al momento de ser compiladas son movidas en memoria al tope del código, es decir cuando la ejecución llame a esta función podrá encontrarla.

## Arrow Functions

Arrow functions tienen una expresión más corta, comparada con functions expressions y no tienen su propio `this`. Arrows functions siempre son anónimas.

```js
const buenosDias = name => {
  return console.log(`Buen dia ${name}`)
}

buenosDias("Saul Goodman") // console.log 'Buen dia Saul Goodman'

const hey = name => console.log(`hey ${name}`)

hey("Jesse Pinkman") // consola imprimira 'hey Jesse Pinkman'
```

En este ejemplo tenemos 2 arrow functions, la primera function expression tiene como sintaxis, `= () =>` seguido de nuestra declaración y nuestro segundo ejemplo, tenemos otra function expression pero en este casos nuestra sintaxis es la misma, exceptuando que no tenemos llaves, y declaramos directamente nuestro expresión que será retornada.

## Callbacks

Son funciones que se ejecutarán después de que otra haya terminado de ejecutarse. Las funciones en javascript son objetos, por esta razón, una función puede tomar funciones como argumentos.

```js
const mensaje = function () {
  console.log("Este mensaje aparecera despues de 3 segundos")
}

setTimeout(mensaje, 3000)
```

En este ejemplo, tenemos una función `setTimeout` la cual, ejecutará la función `message` después de 3000 milisegundos, e imprimirá el consola el mensaje declarado. En este caso nuestra función `message` es nuestro callback que está siendo utilizado como argumento al momento de ejecutarse la función que la recibe.
