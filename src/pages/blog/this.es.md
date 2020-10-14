---
title: ¿Qué es this en javascript? y ¿Cuales son sus reglas?
featuredImage: this-es.png
date: "2020-07-20"
---

## ¿Que es this?

Es la referencia de `this` cuándo una función es llamada, y es determinada completamente en como es llamada dicha función.

## Reglas

### Por defecto Binding

La primera regla y esta es ejecutada cuando se llama una función y por defecto aplican ninguna de las reglas anteriores.

```js
function foo() {
  console.log(this.a)
}
var a = 2

foo() // 2 or type error
```

#### Modo estricto

Si estamos programando en modo estricto(lo más común hoy en día) al momento de llamar la función, el valor de `this` sera undefined como podemos ver en el ejercicio.

#### No modo estricto

Si estamos programado en no modo estricto (cosa que ya no es común hoy en día) al momento de llamar la función, el valor de this sera el scope global en el caso del ejercicio el valor de 2.

### Implicit Binding

El implicit binding ocurre cuando el punto es usado para invocar una función, todo lo que esté a la izquierda del punto se convierte en el contexto de `this` en la función.

```js
function Foo() {
  console.log("Foo", this.a)
}

var obj = {
  a: 2,
  foo: Foo,
}

// Con la funciona afuera?
// Deconstrucción para un mejor acceso?
var { foo } = obj

// No no funciona.
// foo no es ejecutado como método, entonces no es un implicit `this`

foo() //TypeError: Cannot read property 'a' of undefined

//Esto si funciona.
obj.foo() // 'Foo' 2
```

En este ejemplo, tenemos la función `foo()` que imprime un console.log con la palabra `Foo` y la instancia de `a` que es declarada fuera del objeto. Luego declaramos un objeto con las propiedades `a` y `foo` con el método `foo`. Declarado todo esto tenemos una desconstrucción de `foo` con la ejecución del mismo y finalmente la ejecucion de `obj.bar`.

Como podemos ver, en este primer ejemplo la llamada da como resultado un error, y esto pasa porque la función se ejecuta como `stand alone`, en este ejemplo la regla por defecto es aplicada. En la segunda ejecución, como la función es ejecutada como método del objeto, el valor de `this` va a ser el mismo objeto.

Veamos el segundo ejemplo

```js
var obj = {
  a: 2,
  bar() {
    console.log("bar", this.a) // "bar" 2
  },
}

// con la función declara dentro del objeto
// debería de funcionar? i
// bar es declara dentro del objeto
var { bar } = obj

// aun no funciona!
bar() // TypeError: Cannot read property 'a' of undefined
//Porque no importa donde fue declarada

//Si no cómo es ejecutada
obj.bar() //'bar' 2
// Implicit binding:
// si la función es declarada como método del objeto
// THIS sera el objeto
```

Como podemos observar, así declaremos la función como método del objeto, cuando hacemos la deconstrucción y la ejecutamos la regla por defecto será aplicada, pero en la segunda llamada si funcionara porque estamos llamado la función como método del objeto con este ejemplo tenemos claro que el resultado dependerá en cómo llamamos a la función y no en como es declarada. No importa si esta es declarada dentro o fuera del objeto si no de donde es llamada.

### Explicit Binding

Esta regla es aplicada cuando usamos en las funciones la palabra clave `.call()`, `.apply()`, o `.bind()`.
Podemos decir que es explícito porque explícitamente pasamos cuál será el contexto de `this`.

```js
function foo() {
  console.log(this.a)
}

var obj = {
  a: 2,
}

foo.call(obj) // 2
```

En este ejemplo estamos invocando `foo` con un explicit binding en `foo.call(..)`y nos permite forzar el `this` del obj, teniendo como resultado `2`.

```js
function getBrand() {
  console.log(this.brand)
}

getBrand() // type error: cannot read property brand of undefined

const ferrariBrand = getBrand.bind({ brand: "ferrari" })

ferrariBrand() // ferrari
```

En este ejemplo tenemos la función `getBrand()` que imprime en consola `this.brand`, primero llamamos la función y esta nos da como resultado un error, ¿por que pasa esto? Y es porque se aplica la primera regla en modo estricto el valor es `undefined`. Luego tenemos la declaración de `ferrariBrand` donde le asignamos el valor con la palabra `bind` a la marca, en este caso `ferrari`, cuando llamemos esta variable, la consola imprimirá `ferrari`. ¿por que en este caso no tenemos el error anterior? Y es porque con la palabra bind obligamos a asignarle un valor a `this`.

### New Binding

En javascript tenemos el operador `new` es la cuarta regla del `this`, el constructor de las clases en Js son solo funciones que son llamadas con la palabra `this`, cuando la función es llamada pasan los siguientes eventos.

1. Un objeto nuevo es creado.
2. El prototype del nuevo objeto es conectado al objeto de la función constructora.
3. El contexto `this` es creado e inicializado para el nuevo objeto
4. Regresa una referencia a la instancia del objeto creado.

```js
function Car(brand) {
  this.brand = brand
}

Car.prototype.start = function () {
  console.log(`Starting car of brand ${this.brand}...`)
}

const huracan = new Car("lamborghini")
const veyron = new Car("bugatti")

// .start belongs to Car, but THIS is different for each object
huracan.start() // 'Starting car of brand lamborghini...'
veyron.start() // 'Starting car of brand bugatti...'
```

En este ejemplo, la función car tiene la propiedad `brand` y el método `starts` que es una función que imprime en la consola un texto.

Hemos creado 2 instancias de car, en la primera una es `huracan` con la marca `lamborghini` y en la segunda con la marca `bugatti`, en ambas instancias tenemos diferentes marcas `brand` pero tienen el mismo método con diferentes `this`.

## Referencias

- You Don't Know JS: this & Object Prototypes Book by Kyle Simpson
