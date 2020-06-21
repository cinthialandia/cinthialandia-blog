---
title: Ciclos de vida y Hooks
featuredImage: life-cycles-and-hooks.png
date: "2020-06-21"
---

## ¿Qué son los ciclos de vida en React?

Se podrían definir como una serie de métodos que son invocados en diferentes estados de la existencia del componente.

Vamos a explicar los ciclos de vida más utilizados realizando un countdown.

Tenemos un pomodoro Clock, que tiene un input, en el cual se podrá escribir la cantidad de minutos que durará el countdown clock, en el mismo se encontrará 3 botones; el botón play el cual comenzará el conteo del reloj, un botón de pause para parar el contador en cualquier momento, y finalmente el botón de rewind que reiniciara el countdown a 5 minutos el cual será su valor por defecto.

> Para este ejercicio, estaremos utilizando, la librería `tiny-timer`, esta recibe, el tiempo que se desea ser contado, y realizará la lógica de regresarnos la cantidad de milisegundos, que nos quedan para que ese tiempo se cumpla.

```jsx
import React, { Component, useState, useMemo, useEffect } from "react"
import { render } from "react-dom"
import Timer from "tiny-timer"
import "./style.css"

const convertMinutestoMilliseconds = minutes => {
  // adding 1 second to "show the 00:00"
  return Math.floor(minutes * 60 * 1000) + 1000
}

const convertMillisecondsToTime = ms => {
  const timeAPI = {
    MINUTES: 1000 * 60,
    SECONDS: 1000,
  }

  if (ms <= 0) {
    return {
      minutes: `00`,
      seconds: `00`,
    }
  }

  const minutes = Math.floor(ms / timeAPI.MINUTES)
  ms %= timeAPI.MINUTES
  // substracting 1 to show the "00:00"
  let seconds = Math.round(ms / timeAPI.SECONDS)

  if (seconds > 0) {
    seconds = seconds - 1
  }

  return {
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  }
}

function App() {
  const [timeInMinutes, setTimeInMinutes] = useState(5)
  const [timeInMiliseconds, setTimeInMiliseconds] = useState(
    convertMinutestoMilliseconds(5)
  )
  const [timeLeft, setTimeLeft] = useState({ seconds: "00", minutes: "00" })
  // a force render hack :)
  const [_, forceRender] = useState([])

  const handleChange = e => {
    console.log(e)
    const minutes = e.target.value
    const miliseconds = convertMinutestoMilliseconds(minutes)
    setTimeInMinutes(minutes)
    setTimeInMiliseconds(miliseconds)
  }

  const handlePlay = () => {
    if (timer.status === "paused") {
      timer.resume()
      return
    }
    timer.start(timeInMiliseconds)
  }

  const handlePause = () => {
    timer.pause()
    forceRender([])
  }

  const handleRewind = () => {
    timer.stop()
    setTimeInMinutes(5)
    setTimeInMiliseconds(convertMinutestoMilliseconds(5))
    setTimeLeft({ seconds: "00", minutes: "00" })
  }

  return (
    <div>
      <h2>Pomodoro Clock!</h2>
      <div>
        {timeLeft.minutes}:{timeLeft.seconds}
      </div>
      <input onChange={handleChange} type="text" value={timeInMinutes} />

      <button onClick={handlePause}>Pause</button>

      <button onClick={handlePlay}>Play</button>

      <button onClick={handleRewind}>Rewind</button>
    </div>
  )
}

render(<App />, document.getElementById("root"))
```

Comenzamos realizando el input y los 3 botones a utilizar, los cuales los 4 se les asigna una función `onClick` y `onchange`que escucharan los eventos de cambios realizados en estos elementos. En los botones play y pause, tenemos un if, el cual decidirá qué botón mostrar de acuerdo al estado del countdown.

Nuestro componente funcional, tiene 4 estados, el tiempo en minutos, tiempo en milisegundos, ambos con valores predeterminados, un objeto con el tiempo restantes en minutos y segundos los cuales serán mostrados en pantalla, en finalmente un pequeño hack, es un estado que renderiza cada vez que nuestra función `handlePause` es llamada

Nuestra función `handleChange` se encarga de escuchar el evento del cambio de minutos en el input, en el mismo se llama a la función encargada de convertir minutos a milisegundos, además de cambiar en el estado, los nuevos minutos y los milisegundos del nuevo tiempo.

Nuestra función `handlePlay`, se encarga de escuchar el evento de click al botón play, primero verificamos, que si nuestro timer (creado anteriormente) su estatus es igual a `pause` de ser así, volvemos a correr el countdown con el tiempo restante. Si no comenzará el countdown con la cantidad de minutos requerido.

Nuestra función `handlePause`, se encargará de escuchar el evento de click al botón pause, y pausar el countdown. En esta función utilizamos el método `forceUpdate()` el cual se encarga de renderizar el componente para actualizar, esto permitirá que nuestro countdown pueda correr de nuevo.

Y finalmente tenemos nuestra funcion `handleRewind`, esta se encargará primeramente de parar por completo el countdown y actualizamos el estado, con todos los valores por defecto.

## Componentes funcionales y ciclos de vida

### useMemo()

Es un Hook que es utilizado para crear un valor a guardar y la misma devuelve un valor guardado, por ejemplo a veces debemos calcular un valor, por medio funciones complejas las cuales llegan a ser pesadas, por lo tanto con este hook, esta operación solo se realiza una sola vez, luego el valor del mismo, se almacenará y la próxima vez que se desee hacer referencia a él, se obtendrá mucho más rápido.

En este ejercicio, creamos una instancia del nuevo timer (librería que estamos usando), pero lo crearemos dentro de este hook, para que el valor de la variable, no se reescribe cada vez que el componente renderice, sino que se mantenga el valor del mismo.

```jsx
import React, { Component, useState, useMemo, useEffect } from "react"
import { render } from "react-dom"
import Timer from "tiny-timer"
import "./style.css"

const convertMinutestoMilliseconds = minutes => {
  // adding 1 second to "show the 00:00"
  return Math.floor(minutes * 60 * 1000) + 1000
}

const convertMillisecondsToTime = ms => {
  const timeAPI = {
    MINUTES: 1000 * 60,
    SECONDS: 1000,
  }

  if (ms <= 0) {
    return {
      minutes: `00`,
      seconds: `00`,
    }
  }

  const minutes = Math.floor(ms / timeAPI.MINUTES)
  ms %= timeAPI.MINUTES
  // substracting 1 to show the "00:00"
  let seconds = Math.round(ms / timeAPI.SECONDS)

  if (seconds > 0) {
    seconds = seconds - 1
  }

  return {
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  }
}

function App() {
  const [timeInMinutes, setTimeInMinutes] = useState(5)
  const [timeInMiliseconds, setTimeInMiliseconds] = useState(
    convertMinutestoMilliseconds(5)
  )
  const [timeLeft, setTimeLeft] = useState({ seconds: "00", minutes: "00" })
  // a force render hack :)
  const [_, forceRender] = useState([])

  const timer = useMemo(() => new Timer(), [])

  const handleChange = e => {
    console.log(e)
    const minutes = e.target.value
    const miliseconds = convertMinutestoMilliseconds(minutes)
    setTimeInMinutes(minutes)
    setTimeInMiliseconds(miliseconds)
  }

  const handlePlay = () => {
    if (timer.status === "paused") {
      timer.resume()
      return
    }
    timer.start(timeInMiliseconds)
  }

  const handlePause = () => {
    timer.pause()
    forceRender([])
  }

  const handleRewind = () => {
    timer.stop()
    setTimeInMinutes(5)
    setTimeInMiliseconds(convertMinutestoMilliseconds(5))
    setTimeLeft({ seconds: "00", minutes: "00" })
  }

  return (
    <div>
      <h2>Pomodoro Clock!</h2>
      <div>
        {timeLeft.minutes}:{timeLeft.seconds}
      </div>
      <input onChange={handleChange} type="text" value={timeInMinutes} />

      <button onClick={handlePause}>Pause</button>

      <button onClick={handlePlay}>Play</button>

      <button onClick={handleRewind}>Rewind</button>
    </div>
  )
}

render(<App />, document.getElementById("root"))
```

### useEffect()

`useEffect hook is a function that allows you to have side effects in a functional component. In class components we have life-cycle methods as`componentDidMount`,`componentDidUpdate`, and`componentWillUnmount, this hook has the same functionality of all three methods in the functional component.

In this example, we used the first `useEffect` and we started the countdown, this one gives us the number of milliseconds left and we update the state with that number, we also remove all the listeners in the component, this function is making all the functionality as `componentDidMount` and `componentWillUnmount`.

The next `useEffect`, updates the state with the time left which is going to show in the screen this function is going to update every time the milliseconds change, this function is making the same functionality of the method `componentDidUpdate`

```jsx
import React, { Component, useState, useMemo, useEffect } from "react"
import { render } from "react-dom"
import Timer from "tiny-timer"
import "./style.css"

const convertMinutestoMilliseconds = minutes => {
  // adding 1 second to "show the 00:00"
  return Math.floor(minutes * 60 * 1000) + 1000
}

const convertMillisecondsToTime = ms => {
  const timeAPI = {
    MINUTES: 1000 * 60,
    SECONDS: 1000,
  }

  if (ms <= 0) {
    return {
      minutes: `00`,
      seconds: `00`,
    }
  }

  const minutes = Math.floor(ms / timeAPI.MINUTES)
  ms %= timeAPI.MINUTES
  // substracting 1 to show the "00:00"
  let seconds = Math.round(ms / timeAPI.SECONDS)

  if (seconds > 0) {
    seconds = seconds - 1
  }

  return {
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  }
}

function App() {
  const [timeInMinutes, setTimeInMinutes] = useState(5)
  const [timeInMiliseconds, setTimeInMiliseconds] = useState(
    convertMinutestoMilliseconds(5)
  )
  const [timeLeft, setTimeLeft] = useState({ seconds: "00", minutes: "00" })
  // a force render hack :)
  const [_, forceRender] = useState([])

  const timer = useMemo(() => new Timer(), [])

  const handleChange = e => {
    console.log(e)
    const minutes = e.target.value
    const miliseconds = convertMinutestoMilliseconds(minutes)
    setTimeInMinutes(minutes)
    setTimeInMiliseconds(miliseconds)
  }

  const handlePlay = () => {
    if (timer.status === "paused") {
      timer.resume()
      return
    }
    timer.start(timeInMiliseconds)
  }

  const handlePause = () => {
    timer.pause()
    forceRender([])
  }

  const handleRewind = () => {
    timer.stop()
    setTimeInMinutes(5)
    setTimeInMiliseconds(convertMinutestoMilliseconds(5))
    setTimeLeft({ seconds: "00", minutes: "00" })
  }

  useEffect(() => {
    timer.on("tick", ms => {
      setTimeInMiliseconds(ms)

      return () => {
        timer.removeAllListeners()
      }
    })
  }, [])

  useEffect(() => {
    setTimeLeft(convertMillisecondsToTime(timeInMiliseconds))
  }, [timeInMiliseconds])

  return (
    <div>
      <h2>Pomodoro Clock!</h2>
      <div>
        {timeLeft.minutes}:{timeLeft.seconds}
      </div>
      <input onChange={handleChange} type="text" value={timeInMinutes} />

      <button onClick={handlePause}>Pause</button>

      <button onClick={handlePlay}>Play</button>

      <button onClick={handleRewind}>Rewind</button>
    </div>
  )
}

render(<App />, document.getElementById("root"))
```

Ejercicio completo aquí:

https://stackblitz.com/edit/react-nft7ra
