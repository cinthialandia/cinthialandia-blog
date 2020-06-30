---
title: Variables y tipos en JavaScript
featuredImage: state.png
date: "2020-06-30"
---

## ¿Que son variables? 

Las variables son contenedores que contienen data reusable es básicamente la unidad de almacenamiento en Javascript.

## Declaración de variables 

Las variables en Js pueden ser declaradas con las palabras reservadas `const`, `let` y `var`. 

### let

Es una variable que te permite reasignar su valor cuantas veces sea necesario y su scope será el bloque de código donde sea declarada, decir todo lo que esté dentro de llaves `{}`.

```js
let newVariable; 
```

### const 

Es una variable como su nombre lo dice constante, es decir no puede ser reasignado y su scope al igual que let será el bloque de código donde es declarada. 

```js
const newVariable;
```

### var 

Es una variable que también puede ser reasignada y tiene un comportamiento parecido a `let`, pero tienen una importante diferencia, que esta no depende del bloque donde se es declarada, sino a nivel de funciones.

```js
var newVariable;
```

## Inicialización de variables 

Después de declarar una variable se debe asignar un valor.

```js
const newVariable =  0;
```

## Reasignación de variable 

Se puede asignar un valor distinto a una variable, de la siguiente manera. 

```js
let newVariable = 0;

newVariable = 24;

```

## Reglas en declaración de variables

1. El nombre debe empezar con letras (a hasta z), piso (_) o signo del dolar ($).
2. Después de la primera letra se pueden usar números.
3. Las variables distinguen entre mayuscula y minuscula, es decir `const  x` y `const X` son diferentes variables. 

## CamelCase convención

Es importante saber que no es un regla estricta sino por convención general, que las variables deben empezar con una letra minúscula y si es el nombre es una palabra compuesta, se debe escribir la primera palabra con letra mayúscula.

```js
const palabraCompuesta = 0;
```

## ¿Que es hoisting?

Conceptualmente el hoisting es el comportamiento que se le da a las variables declaradas por `var` y funciones cuando estas son movidas físicamente al principio del código, técnicamente no pasa de manera literal, sino que al momento de JS compilar, estos son procesados en un orden distinto. 

```js
function hello(condition) {
  if (condition) {
    let nameToPrint = "Cinthia";
    console.log(nameToPrint);
  } else {
    let nameToPrint = "Gerardo";
    console.log(nameToPrint); // La consola imprime “Gerardo”
  }

  console.log(nameToPrint, 'outside of blocks'); // La consola muestra un error 
}

hello(false)

```

Tenemos una función que imprime un nombre, dependiendo del valor de su parámetro (true o false) , si es true imprime `Cinthia` si es false imprime `Gerardo`, nuestros 2 primeros `console.log` imprimen la respuesta, pero el tercero muestra un error, ya que nuestro `console.log` se encuentra en el scope de la función, no del `if`, por lo tanto no tiene acceso al valor de las variables, esto pasa con variables `const` y `let`.

```js
function hello(condition) {
  if (condition) {
    var nameToPrint = "Cinthia"; // La consola imprime “Cinthia” 
    console.log(nameToPrint);
  } else {
    var nameToPrint = "Gerardo";
    console.log(nameToPrint); 
  }

  console.log(nameToPrint, 'outside of blocks'); // La consola imprime "Gerardo" "outside of blocks"
}

hello(true)

```

En este ejemplo, cambiamos nuestro argumento a true, y ahora nuestro ejercicio imprime `Cinthia`, y cambiamos nuestros `let` por `var`, y podemos observar que como nuestras variables ahora están disponibles a nivel de función, ahora nuestro `console.log ` si tiene acceso y muestra un resultado. 

## Tipos de valores 

```js
Undefined = "Es un valor primitivo el cual se le asigna a variables que no se les ha identificado un valor". 

Boolean: "Es un tipo de valor de data lógico que solo puede valer true o false" 

Number: "Es un tipo de data numérico"

String: "Es una secuencia de caracteres usados para representar texto" 

Null: "Es un valor primitivo"

Function: "Es un conjunto de declaraciones que realiza una tarea o calcula un valor"

Object: "Es un tipo de dato en Js  y es usado para almacenar colección de información"

```

## Typeof 

Es un operador que retorna a string indicando el tipo del operando no evaluado. 

```js
console.log(typeof 42);
// se imprime en consola tipo: "number"
```

## Truthy y Falsy Valores

### Truthy

En Js un valor truthy es un valor considerado true cuando se encuentra en un `boolean` context. Todos los valores son truthy a menos que sean definidos como falsy. 

```js
if (true) 
if ({}) 
if ([])
if (42) 
if ("0") 
if ("false")
if (new Date())
if (-42) 
if (12n) 
if (3.14) 
if (-3.14) 
if (Infinity) 
if (-Infinity)
```

### Falsy

Es un valor que es considerado falso cuando se encuentra en un contexto `boolean`. 

```js
False: false
0: numero zero
-0: numero negativo zero
0n: 
"": string vacio
Null: null - la ausencia de valor
Undefined: undefined - valor primitivo
NaN: NaN - no es un número

```

