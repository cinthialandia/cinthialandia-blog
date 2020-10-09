---
title: Objetos en Javascript
featuredImage: objects-es.png
date: "2020-07-28"
---

# ¿Que es un objeto?

Un objeto literal en javascript es un es un tipo de data declarada con una variable que es utilizada para almacenar colección de ítems con valores (keys y values). Los objetos pueden ser modificados sus propiedades o métodos pueden ser declarados de manera arbitraria sin ningún tipo de orden.

```js
const objetito = {}
```

En este ejemplo podemos observar que la sintaxis del objeto es la declaración de la variable `const`, seguido por el nombre del objeto `objetito` y luego la declaración de llaves `{}`, en las se encontrarán todas las propiedades del objeto.

## Propiedades

Las propiedades de un objeto literal se definen como la unión del nombre y valor (key y value), mediante el nombre del mismo se podrá acceder a las propiedades del objeto.

```js
const objetito = {
  key: "value",
}

console.log(obj.key) // 'value'
```

En este ejemplo podemos observar que la propiedad de nuestro `objetito` es `key: “value”`, y que para acceder a esta propiedad y su valor en específico, debemos utilizar el nombre o key.

## Métodos

Los métodos son funciones que están asociadas al objeto. Estas funciones son asignadas como propiedad del objeto y es definida al igual que una función normal. Para tener acceso a un método de un objeto, se debe utilizar el nombre de objeto, seguido por el nombre de la propiedad (key) que es el nombre de la función.

```js
const objetito = {
  key: "value",
  metodo: function () {
    console.log("Hola soy un metodo!!!")
  },
}

console.log(obj.key) // 'value'
objetito.metodo() // 'Hola soy un metodo!!!
```

En este ejemplo, tenemos nuestro ejercicio anterior y ahora agregamos a nuestro `objetito` el método `function` el cual imprime en consola un texto, este método es declarado como otra propiedad del objeto, siendo el nombre de la función `metodo` y su valor la ejecución de la función.

## Keys y Values

Como dijimos anteriormente, keys y values son el conjunto de propiedades de un objeto donde `key` es el nombre de la propiedad del mismo y `value` es el valor de esa propiedad.

```js
const objetito = {
  key: "value",
  metodo: function () {
    console.log("Hola soy un metodo!!!")
  },
  nombre: "Britney",
}

console.log(obj.key) // 'value'
objetito.metodo() // 'Hola soy un metodo!!!'
console.log(objetito.nombre) // 'Britney'
```

Seguimos con el ejemplo anterior y podemos ver 3 propiedades en nuestro objeto, nuestra última propiedad declarada tiene como key `nombre` y cómo value `Britney`.

# Desestructurando propiedades del objeto

La desestructuración es una sintaxis en javascript que se utiliza para extraer valores de arrays o propiedades de un objeto y convertirlos en variables.

```js
const objetito = {
  nombre: "Adele",
  edad: 32,
  trabajo: "cantante",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`)
  },
}
const { nombre, edad, saludar } = objetito
console.log(nombre, edad) // 'Adele' 32
saludar() // 'Hola soy Adele y soy cantante'
```

En este ejemplo tenemos en nuestro `objetito` los datos de una persona en nuestras propiedades y tenemos la desestructuración del objeto. La sintaxis de la misma se constituye de esta manera: declaramos const (o let) y entre llaves aquellas propiedades que se quieran extraer, en este caso, `nombre` `edad` y `saludar` y esto lo igualamos al nombre del objeto. Hecho esto las propiedades ahora son variables, y se pueden acceder a ellas sin necesidad de acceder al objeto.

```js
const objetito = {
  nombre: "Adele",
  edad: 32,
  trabajo: "cantante",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`)
  },
}
const { nombre: nombreProfesional, edad, saludar } = objetito
console.log(nombreProfesional, edad) // 'Adele' 32
saludar() // 'Hola soy Adele y soy cantante'
```

¿Es posible cambiar el nombre de la variable? Si lo es, en este ejemplo podemos observar, que después del nombre de la variable declaramos 2 puntos y el nuevo nombre de la variable, en este caso nombre ahora es `nombreProfesional`

# Adicionando y actualizando las propiedades de un objeto

## Cómo acceder a un objeto

Hasta ahora hemos aprendido que es un objeto, sus propiedades y su estructuración pero ¿Cómo accedemos a él y que debemos tener en cuenta?

1. Si sabemos el nombre de la propiedad accedemos declarando el nombre del objeto seguido de punto y el nombre de la propiedad.

```js
const objetito = {
  nombre: "Meredith Grey",
  edad: 32,
  trabajo: "Cirujana",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`)
  },
}

console.log(objetito.nombre) // 'Meredith Grey'
console.log(objetito.edad) // 32
```

En este ejemplo tenemos los datos de una persona en nuestro objeto y si queremos acceder a estos datos, declaramos el nombre del objeto en este caso `objetito` seguido del nombre de la propiedad en este caso `nombre` y nos da como resultado el valor que sería el nombre de la persona.

2. Si el nombre de la propiedad tiene caracteres especiales o espacio, podemos acceder utilizando corchetes, declarando el nombre del objeto seguido de los corchetes y dentro de ellos el nombre de la propiedad.

```js
const objetito = {
  nombre: "Meredith Grey",
  edad: 32,
  trabajo: "Cirujana",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`)
  },
}

console.log(objetito.nombre) // 'Meredith Grey'
console.log(objetito.edad) // 32
console.log(objetito["saludar"]) // [Function: saludar]
```

En este ejemplo tenemos los datos anteriores, y para acceder a nuestra propiedad `saludar` podemos utilizar la sintaxis nombre del objeto seguido de los corchetes y dentro de este el string `”saludar”` dando como resultado el valor.

3. Si el nombre de la propiedad se encuentra dentro de una variable, es necesario utilizar corchetes para acceder a la misma.

```js
const objetito = {
  nombre: "Meredith Grey",
  edad: 32,
  trabajo: "Cirujana",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`)
  },
}

let prop = "edad"
console.log(objetito[prop]) // 32
prop = "trabajo"
console.log(objetito[prop]) // Cirujana
```

Seguimos con el ejemplo anterior y vemos que tenemos una variable llamada prop la cual tiene como valor el string `“edad”`. Si queremos acceder a objtetito con la variable debemos utilizar corchetes y éste evaluará la expresión de esa variable, en este caso esa expresión es el nombre de la propiedad y nos trae como resultado en la consola el valor de la misma.

## Cómo actualizar un objeto

Si queremos actualizar las propiedades de un objeto, debemos tener en cuenta que las mismas reglas para acceder a un objeto son aplicadas también cuando actualizamos una propiedad. La sintaxis es: el nombre del objeto seguido de punto o corchetes según sea el caso más el nombre de la propiedad e igualamos todo esto con el valor actualizado.

```js
const objetito = {
  nombre: "Meredith Grey",
  edad: 32,
  trabajo: "Cirujana",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`)
  },
}

objetito.nombre = "Mer Grey"
objetito["edad"] = 33
console.log(objetito) // {
//   nombre: 'Mer Grey',
//   edad: 33,
//   trabajo: 'Cirujana',
//   saludar: [Function: saludar]
// }
```

En este ejemplo tenemos un objeto con los datos de una persona y queremos cambiar el nombre y edad, declaramos el nombre del objeto `objetito` seguido de punto y nombre de la propiedad `nombre`, todo esto igualado al nuevo valor a reemplazar `Mer Grey`.

## Adicionar una propiedad en un objeto

Para agregar propiedades a un objeto se tiene que tener en cuenta que las mismas reglas para acceder son las mismas para actualizar y adicionar propiedades en un objeto. La sintaxis es: el nombre del objeto seguido de punto o corchetes según sea el caso y todo eso deberá ser igualado al nuevo valor.

```js
const objetito = {
  nombre: "Meredith Grey",
  edad: 32,
  trabajo: "Cirujana",
  pasatiempo: "leer, cocinar, ver television",
  comida: "Pizza y pasta",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`)
  },
}

const chat = function () {
  console.log(`me gusta ${pasatiempos} y comer ${comida}`)
}

objetito.hijos = 3
objetito["personal"] = chat
console.log(objetito) // {
//   nombre: 'Meredith Grey',
//   edad: 32,
//   trabajo: 'Cirujana',
//   pasatiempo: 'leer, cocinar, ver television',
//   comida: 'Pizza y pasta',
//   saludar: [Function: saludar],
//   hijos: 3,
//   personal: [Function: chat]
// }
```

En este ejemplo estamos agregando las propiedades `hijos` y `personal` al objeto, declaramos el nombre del objeto más el nombre de la propiedad igualado al valor en este caso 3.

# Eliminar propiedades de un objeto

Para eliminar la propiedad de un objeto se puede realizar de 2 maneras. La primera es utilizando el término `delete` seguido del nombre del objeto y la propiedad. La segunda es asignándole `undefined` como valor de la propiedad que se quiera eliminar.. En ambos casos se debe tener en cuenta usar punto o corchetes al momento de la declaración.

```js
const objetito = {
  nombre: "Meredith Grey",
  edad: 32,
  trabajo: "Cirujana",
  pasatiempo: "leer, cocinar, ver television",
  comida: "Pizza y pasta",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`)
  },
}

delete objetito.saludar
objetito.edad = undefined

console.log(objetito) // {
//  nombre: 'Meredith Grey',
//  edad: undefined,
//  trabajo: 'Cirujana',
//  pasatiempo: 'leer, cocinar, ver television',
//  comida: 'Pizza y pasta'
// }
```

En este ejemplo estamos removiendo las propiedades saludar y edad. La propiedad saludar la eliminamos de la primera manera, utilizando el término `delete` seguido de `objetito` y el nombre de la propiedad a eliminar. La segunda propiedad que eliminamos fue `edad` que utilizamos el nombre del objeto `objetito` seguido de la propiedad edad y le asignamos como valor `undefined`.

# Shallow copies (copia parcial de un objeto)

Cuando un objeto es asignado a una variable, el objeto es creado en algún lugar en memoria y lo que se devuelve es la referencia (o dirección) a esa locación. Lo mismo ocurre cuando se asignan objetos como valor de una propiedad de otro object: el objeto es creado en memoria y lo que se guarda es la referencia.Esto puede causar comportamientos inesperados cuando se intenta crear una copia de un objeto. A este tipo de copias se le denomina “shallow copy”, o copia parcial:

```js
const obj1 = {
  nombre: "Christina",
  info: {
    edad: 35,
    trabajo: "Cirujano",
  },
}

const obj2 = { ...obj1 } // shallow copy (copia parcial)

obj2.nombre = "Derek" //solo modificaremos .nombre en obj2
obj2.info.edad = 40 // oops! Esto modificó obj1.info.edad también!

console.log(obj1) // { nombre: 'Christina', info: { edad: 40, job: Cirujano} }
console.log(obj2) // { nombre: 'Derek', info: { edad: 40, job: Cirujano} }
```

En este ejemplo tenemos un objeto con información de una persona y realizamos una copia utilizando la sintaxis spread la cual realiza una copia nueva del objeto sin alterar el objeto original y lo guardamos en nuestra nueva variable `obj2`. Ahora que tenemos nuestro nuevo objeto, cambiamos el valor la propiedad `name` dando como resultado `{name: “Derek”}` y cambiamos el valor de la propiedad `age` que se encuentra dentro del objeto `info` dando como resultado 40. Cuando imprimimos en consola los valores actuales de ambos objetos, podemos observar que nuestro objeto original ha cambiado la edad también, aun así cuando no lo hicimos de manera directa ¿Por que pasa esto? Al momento de realizar el spread, se hace hecho una copia parcial de todas las propiedades del objeto, pero aquellas propiedades dentro del objeto info aun siguen conectadas con el objeto original.

# Deep object cloning (clonación de objeto)

Para obtener una copia real de un objeto es necesario recurrir a otra técnica llamada “deep cloning”, que consiste en visitar cada propiedad y crear una copia de cada objeto que se encuentre (incluyendo sus hijos), resultado en una copia que está completamente desconectada del objeto original:

```js
const obj1 = {
  nombre: "Christina",
  info: {
    edad: 35,
    trabajo: "Cirujano",
  },
}

const obj3 = { ...obj1, info: { ...obj1.info } } // deep clone (copia profunda)

obj3.nombre = "Alex" // solo modificara .nombre para obj3
obj3.info.edad = 42 // esto solo modificara info.edad para obj3, copia profunda!

console.log(obj1) // { nombre: 'Christina', info: { edad: 35, job: 'Cirujano' } }

console.log(obj3) // { nombre: 'Alex', info: { edad: 42, job: 'Cirujano' } }
```

En este ejemplo, tenemos nuestro `obj1` del último ejemplo y hacemos una copia de nuestro objeto con una extensión mientras hacemos el último, pero esta vez también vamos a hacer una copia de las propiedades del objeto de información con la propagación Declaramos otro valor para la propiedad llamada `Alex` y otro para la edad`42`. En el momento de imprimir la consola, podemos ver que `obj1` tiene la misma propiedad sin ninguna modificación y`obj3` ha modificado sus propiedades. ¿Por qué está pasando esto? Cuando realizamos la propagación en el objeto de información, hicimos una copia profunda del objeto en general e hicimos una desconexión total del original.

# Combinar objetos

Si queremos unir 2 objetos podemos utilizar el método `**Object.assign()**` que se utiliza para copiar propiedades de un objeto (source) a otro objeto (target) y retorna el objeto target.

```js
const obj1 = {
  nombre: "Christina",
  edad: 35,
}

const obj2 = {
  trabajo: "Cirujana",
  estatus: "Viuda",
}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3)

// {
//   nombre: 'Christina',
//   edad: 35,
//   trabajo: 'Cirujana',
//   estatus: Viuda,
//   }
//
```

En este ejemplo, tenemos dos objetos con la información de las personas y queremos combinar ambos, por lo que utilizamos el método 'asignar'. Declaramos la nueva variable y el objetivo del objeto, que será nuestro `obj1` donde combinaremos los objetos. Finalmente, declaramos nuestro objeto `fuente` que va a estar dentro de nuestro objeto de destino`obj2`, todo esto nos dará el resultado de que `obj2` sea parte de una nueva propiedad.

# Metodos estaticos

## Object.create()

Este método crea un nuevo objeto usando un objeto existente como el prototipo del nuevo objeto creado.

```js
const sayHi = {
  nombre: "",
  apellido: "",
  frase: "",
  printIntroduction: function () {
    console.log(
      `Mi nombre es ${this.nombre} ${this.apellido} and ${this.frase}`
    )
  },
}

const me = Object.create(sayHi)
me.nombre = "Britney"
me.apellido = "Spears"
me.frase = "it's britney b*tch!"
me.printIntroduction() //"Mi nombre es Britney Spears and it's britney b*tch!"
console.log(me) /
  { nombre: "Britney", apellido: "Spears", frase: "it's britney b*tch!" }
```

En este ejemplo creamos el objecto `me` a partir del objeto `sayHi` utilizando el método create.

## Object.entries()

Este método recibe un objeto y retorna un array.

```js
const obj1 = {
  1: "Rachel",
  2: "Ross",
  3: "Monica",
  4: "Phoebe",
  5: "chandler",
}

const obj2 = Object.entries(obj1)
console.log(obj2)

// [
//   [ '1', 'Rachel' ],
//   [ '2', 'Ross' ],
//   [ '3', 'Monica' ],
//   [ '4', 'Phoebe' ],
//   [ '5', 'chandler' ]
// ]
```

En este ejemplo, tenemos un objeto con diferentes nombres, aplicamos el método `entries` y nos da como resultado un array.

## Object.fromEntries()

Es un método que transforma una lista de par de `key-value` en un objeto.

```js
const arrNames = [
  ["1", "Sabrina"],
  ["2", "Harvey"],
  ["3", "Hilda"],
  ["4", "Zelda"],
]

const obj = Object.fromEntries(arrNames)

console.log(obj)

// { '1': 'Sabrina', '2': 'Harvey', '3': 'Hilda', '4': 'Zelda' }
```

En este ejemplo tenemos un array de nombres y un número, aplicamos el método `fromEntries` y este nos retorna un objeto con key y values en este caso el key como el número y el value como el nombre.

## Object.keys()

Es un método que retorna un array numerable de los nombres de las propiedades.

```js
const doctorGouse = {
  Gregory: "House",
  Alison: "Cameron",
  Lisa: "Cuddy",
  James: "Wilson",
  Eric: "Foreman",
  Robert: "Chase",
}

console.log(Object.keys(doctorHouse))
// [ 'Gregory', 'Alison', 'Lisa', 'James', 'Eric', 'Robert' ]
```

Tenemos un objeto con el nombres y apellidos, nombres como keys, apellidos como values y aplicamos el método `Object.keys` al objeto el cual retorna un array con todos los keys del mismo.

## Object.values()

Es un método que retorna un array con los valores de la propiedad del objeto.

```js
const doctorHouse = {
  gregory: "House",
  Alison: "Cameron",
  Lisa: "Cuddy",
  James: "Wilson",
  Eric: "Foreman",
  Robert: "Chase",
}

console.log(Object.values(doctorHouse))
// [ 'House', 'Cameron', 'Cuddy', 'Wilson', 'Foreman', 'Chase' ]
```

Tenemos el mismo ejemplo que el anterior, esta vez aplicamos el método `Object.values` y esto nos dará como resultado los valores de las propiedades los apellidos en este caso.

### Referencias

https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/#:~:text=A%20deep%20copy%20means%20that,into%20how%20JavaScript%20stores%20values.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

https://ultimatecourses.com/courses/javascript
