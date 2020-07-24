---
title: Prototype
featuredImage: props.png
date: "2020-07-24"
---

_Colaboración con [Gerardo Leal](https://www.linkedin.com/in/gdlm91/)_

## Clases en JavaScript

En ES2015, la palabra `class` fue introducida para proveer una sintaxis más limpia al momento de crear objetos en javaScript y al mismo tiempo estar más familiarizado a otros lenguajes de programación `Object Oriented Programming (OOP)` como java o C++.

En javaScript, la definición de una clase se ve asi:

```jsx
class Car {
  constructor(brand) {
    this.brand = brand
  }

  start() {
    console.log("starting car of brand", this.brand)
  }
}

const bmw = new Car("BMW")
const bugatti = new Car("Bugatti")
```

Antes de ES2015, era requerida una sintaxis distinta para declarar lo mismo.

```jsx
function Car(brand) {
  this.brand = brand
}

Car.prototype.start = function () {
  console.log("starting car of brand", this.brand)
}

const bmw = new Car("BMW")
const bugatti = new Car("Bugatti")
```

Pero en la práctica ambos trabajan de la misma manera, `class` es una función especial y es declarada con diferente sintaxis.

## Prototype

La programación basada en `prototype` es un estilo de programación de `object-oriented` en la que es posible reutilizar el comportamiento (inheritance) mediante el uso de objetos existentes que sirven como “prototypes”. Entonces `class` (en su forma estricta) realmente nunca se define, sino que se crea un objeto y se reutiliza como la implementación para otros objetos.

Todo esto es posible gracias a un link especial entre objetos llamado `[[Prototype]].`

### El objeto prototype

![scope showed as a building](./diagram-one.jpg)

Cuando una función (o `class`) es definido, un objeto llamado `prototype object` es creado en memoria y es conectado a él vía la propiedad `.prototype`. Se crea también una conexión recíproca desde ese objeto hasta la función llamada propiedad `.constructor`.

Como se puede observar en el ejemplo de la función, se puede interactuar directamente con ese objeto usando la propiedad `prototype`, en este ejemplo hemos declarado el método `start()` fuera de nuestro `Car.`

Con la sintaxis `class`, la implementación está escondida de nosotros, pero está ocurriendo exactamente el mismo proceso.

### El [[Prototype]] chain

```jsx
class Car {...}

const bmw = new Car("BMW");
const bugatti = new Car("Bugatti");
```

Cuando un nuevo objeto es creado usando `new Car(..)` una serie de operaciones son ejecutadas.

**1. Un objeto completamente nuevo es creado en memoria.**

Este objeto se encuentra completamente vacío (no metodos, no propiedades).

![scope showed as a building](./diagram-two.jpg)

**2. La conexión [[Prototype]] es creada .**

En este punto el objeto es completamente conectado al `prototype object` de la función (o class) `Car`.

![scope showed as a building](./diagram-three.jpg)

**3. La función es ejecutada esta acción es llamada `constructor call` usando el nuevo objeto creado como valor del `this`.**

En este punto donde la propiedad del objeto es definida y asignada, es importante aclarar que cada propiedad es definida dentro de CADA objeto y no es parte de `property object` `Car`.

En el caso de la sintaxis `class` el método constructor es quien es ejecutado en esta etapa.

![scope showed as a building](./diagram-four.jpg)

Piensa que Javascript llama la función `Car` de esta manera:

```jsx
function Car(brand) {
  this.brand = brand
}

const bmw = Car.apply({}, "BMW") // {} is the newly created object in memory

// it's not really what's happening but it serves to ilustrate
// how the new object gets its properties defined.
```

**4. Una referencia de este nuevo objeto es retornada.:**

Y generalmente esa referencia es guardada en una variable (`bmw` and `bugatti` en este ejemplo) todo esto para que el mismo tenga acceso al objeto más tarde si es necesario.

```jsx
class Car {...}

const bmw = new Car("BMW"); // stored reference to object with "BMW" brand
const bugatti = new Car("Bugatti"); // stored reference to object with "Bugatti" brand
```

### Describiendo el **[[Prototype]] chain**

Cuando ejecutamos el método `start` en cada objeto, 2 cosas pasan:

```jsx
class Car {...}

const bmw = new Car("BMW");
const bugatti = new Car("Bugatti");

bmw.start() // starting car of brand BMW
bugatti.start() // starting car of brand Bugatti
```

**1. Encontrando el método en el [[Prototype]] chain**

Si vemos el diagrama y observamos al nuevo objeto creado, notaras que no se encuentra ningun metodo llamado `start`, solo se encuentra la propiedad `brand`, entonces ¿Como han podido ejecutar el método?

Javascript tiene un comportamiento especial en los objetos cuando trata de obtener un metodo de ellos. Si no pueden encontrarlo, seguirán el `[[Prototype]] chain` hasta el nuevo objeto con el cual está conectado y buscará en él, el mismo continuará buscando de objeto en objeto hasta que consiga el método y se ejecute o se suceda un error.

Esto es lo que hace posible para `bmw` y `bugatti` poder usar el método `start()` de la propiedad del objeto `Car`

**2. Usando el objeto como valor del `this`.**

La segunda parte de la magia es actualmente algo que vimos antes ¿Como la correcta `brand` es impresa en consola?

Como anteriormente explicamos en este [blog](/es/blog/this/), la regla `implict binding` es aplicada cuando la función es ejecutada como método de un objeto, ese objeto es usado como el valor de `this`.

Por lo tanto no importa donde el `[[Prototype]] chain` encuentre a la función, al haber sido llamado como método del objeto `bmw` o `bugatti`, el valor de `this` es correctamente aplicado.

**No es magia, es solo javaScript siguiendo las reglas que ya sabemos.**

### El final del [[Prototype]] chain

Ahora que sabemos como javascript encuentra un método o propiedad en el `[[Prototype]] chain` , pero ¿Como termina este comportamiento?\*\*

Hay una clase que técnicamente es la clase original llamada `Object` con (O mayúscula) y tiene su propio `prototype object`, al cual todos los objetos de javascript están conectados, directa o indirectamente a este objeto a través del `[[Prototype]] chain.`

Este `objeto` tiene una colección de métodos y propiedades que podrían ser familiares:

![scope showed as a building](./diagram-five.jpg)

Por lo tanto la búsqueda en el `[[Prototype]] chain` termina cuando este encuentra este `Objeto`:

![scope showed as a building](./diagram-six.jpg)

Todos los demás objetos primitivos como `functions`, `strings` or `numbers` están conectados a este objeto original también.

## Prototypal Inheritance

Es posible en javascript extender la `class` creando otro que tenga el comportamiento de aquel que se extendió, más nuevas características. Pongamos por ejemplo que creamos la `class ferrari` que es un car con la `brand` y un método `start()`, pero tiene más características como una limitada cantidad de colores.

Con ES2015, la sintaxis podría verse de esta manera usando la palabra `extends`:

```jsx
class Car {
  constructor(brand) {
    this.brand = brand
  }

  start() {
    console.log("starting car of brand", this.brand)
  }
}

class Ferrari extends Car {
  constructor(color) {
    // calling the constructor method of class Car. All Ferrari are of brand "Ferrari"
    super("Ferrari")

    // throw an error if setting an invalid color
    if (color !== "Yellow" && color !== "Red") {
      throw new Error("Ferrari should only be of color yellow or red...")
    }

    this.color = color // otherwise, set the color.
  }

  printColor() {
    console.log("This Ferrari is of color", this.color)
  }
}

const ferrari = new Ferrari("Red")
ferrari.start() // starting car of brand Ferrari
console.printColor() // This Ferrari is of color Red
```

Probablemente estás tentando a pensar que extendiendo la `class Car`, estas también creando una copia de todos sus métodos y propiedades y agregándole a `Ferrari`. Pero no estamos es realizando una conexión entre los objetos.

![scope showed as a building](./diagram-seven.jpg)

Nótese que la llamada `super()` en `Ferrari` constructor. Esa palabra especial que viene con la sintaxis `class` para llamar al constructor y extender a `class Car`. Esta llamada es la que inicializa la propiedad `brand` en `Ferrari`.

Cuando ejecutamos el método, el mismo principio del `[[Prototype]] chain` es aplicado. Si un método no existe en el objeto, el buscara en la siguiente conexión hasta encontrar o fallar. Es por esto que nuestro `Ferrari` tiene tambien el metodo `start()`

Lo mismo se puede lograr con funciones simples y manipulación de prototipos directamente, pero probablemente notará que implica un poco más de código y saber qué vincular:

```jsx
function Car(brand) {
  this.brand = brand
}

Car.prototype.start = function () {
  console.log("starting car of brand", this.brand)
}

function Ferrari(color) {
  Car.call(this, "Ferrari") // Constructor call to also initialize whatever Car does.

  // throw an error if setting an invalid color
  if (color !== "Yellow" && color !== "Red") {
    throw new Error("Ferrari should only be of color yellow or red...")
  }

  this.color = color // otherwise, set the color.
}

// Object.create creates an empty object, and link it to a given object
// Kind of like step 1 and 2 of calling `new`.
Ferrari.prototype = Object.create(Car.prototype)

Ferrari.prototype.printColor = function () {
  console.log("This Ferrari is of color", this.color)
}

const ferrari = new Ferrari("Red")
ferrari.start() // starting car of brand Ferrari
console.printColor() // This Ferrari is of color Red
```

## Classical OOP vs Prototypal

_JavaScript OOP son solo objetos vinculados a otros objetos ..._

### Las clases no son realmente clases

En la OOP clásica, las clases sirven como un "modelo" de cómo debería verse un objeto, son solo abstracciones. Lo único que puede hacer con ellos es "crear objeto" o extenderlos.

Como ha visto, incluso si JavaScript ahora incluye una palabra clave `class` (con`super` y `extend`), son solo funciones con objetos vinculados a ellas, y son los objetos los que tienen una implementación de métodos y propiedades.

### Los objetos no obtienen una copia de los métodos cuando se instancian

En la OOP clásica, cada objeto creado también recibe una copia de los métodos y propiedades que define la clase.

Con el prototipo de OOP, los objetos no obtienen una copia, sino un objeto a otro objeto que ya tiene la implementación, y se basa en la "delegación de comportamiento" para lograr el efecto de herencia.

### Puede agregar métodos y propiedades en tiempo de ejecución a prototipos

En la OOP clásica, no puede agregar más propiedades o métodos a una clase en tiempo de ejecución. Todo sucede cuando escribes y compilas tu código.

En prototypal OOP, puede agregar más métodos y propiedades a una clase en tiempo de ejecución, y todos los objetos vinculados a eso también tendrán acceso a estas nuevas propiedades / métodos:

```jsx
class Car {
  constructor(brand) {
    this.brand = brand
  }
}

const bmw = new Car("BMW")

function addStop() {
  Car.prototype.stop = function () {
    console.log("stoping car of brand", this.brand)
  }
}

// ... anywhere else

addStop()

// and now bmw has that new method

bmw.stop() // stoping car of brand BMW.
```

## Técnicas OOP con prototype

### Método Shadowing

Hay casos en que uno de los objetos necesita un comportamiento específico para un método de herencia. Para esto, hay una manera de agregar un método con el mismo nombre e incluso reutilizar parte de la lógica del método original si es necesario

```jsx
class Car {
  constructor(brand) {
    this.brand = brand
  }

  start() {
    console.log("starting car of brand", this.brand)
  }
}

const ferrari = new Car("Ferrari")

// method shadowing
ferrari.start = function () {
  this.start()
  console.log("FERRARI BABY!!!")
}

ferrari.start()
// starting car of brand Ferrari
// FERRARI BABY!!!
```

Un escenario más práctico es cuando se extienden las clases, y la nueva clase necesita un comportamiento diferente para el mismo método:

```jsx
class Car {
  constructor(brand) {
    this.brand = brand
    this.started = false
  }

  start() {
    console.log("starting car of brand", this.brand)
  }
}

class Ferrari {
  constructor() {
    super("Ferrari")
  }

  start() {
    super.start() // calling Car.start
    this.started = true
  }
}

const ferrari = new Ferrari()

ferrari.start() // starting car of brand ferrari
ferrari.started // true
```

### Método Static

En OOP hay una noción de métodos estáticos. Los métodos estáticos no se invocan en instancias de la clase. En cambio, son llamados a la clase misma. Estas son a menudo funciones de utilidad, como funciones para crear o clonar objetos.

Para la sintaxis `class` de ES2015, se proporciona una palabra clave especial`static`:

```jsx
class Car {
  constructor(brand) {
    this.brand = brand
  }

  start() {
    console.log("starting car of brand", this.brand)
  }

  static isColorVailable(color) {
    const availableColors = ["red", "blue"]

    return availableColors.includes(color)
  }
}

const ferrari = new Car("Ferrari")

ferrari.isColorVailable("blue") // TypeError: ferrari.isColorVailable is not a function

Car.isColorVailable("blue") // true
```

## Referencia

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://developer.mozilla.org/en-US/docs/Glossary/Prototype-based_programming
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
- https://en.wikipedia.org/wiki/Prototype-based_programming
- https://frontendmasters.com/courses/deep-javascript-v3/prototypes/
- You Don't Know JS: This and Object Prototype: Book by Kyle Simpson
