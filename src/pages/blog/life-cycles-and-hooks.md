---
title: What are the new hooks used for the life cycle? and how to use them in react?
featuredImage: life-cycles-and-hooks.png
date: "2020-06-21"
---

## What is the lifecycle in React?

They can be defined as a series of methods that are invoked in different states of the component's existence.

Let's explain the most used life-cycles methods with a countdown exercise.
We have a Pomodoro Clock, that has an input, in that input you can write on, the number of minutes will be during the time of the countdown clock, then you will have 3 buttons, one button is the play one, which will start the count of the clock, then the second button pause, will pause the countdown clock in any moment and finally, the rewind button that will rewind the countdown clock to 5 minutes which is going to be the default value.

> For this exercise, we are using the `tiny-timer` library that receives the time that will be counted in milliseconds, and then after we start the timer it will emit each second the amount of time left in milliseconds.

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

First, we have the input with the 3 buttons, those have functions who listen to all events in the component, in the buttons play and pause, we have an if, which will decide which button is going to show on the screen depending on the status of the countdown.

In our functional component, we have 4 `useState` (hooks), the time in minutes, time in milliseconds both with default values, an object with the left time with minutes and seconds which is going to be shown on the screen and finally a littler hack, this is a `useState` who make a render in our `handlePause` every time our function is called.

Our `handleChange` function will listen to the changes in the input and will convert the minutes to milliseconds and change the state with the new minutes and milliseconds with the new time.

Our play function will listen to the click events in our play button. First, we will verify the status of our timer and if it is equal to paused, if it is true we will start our countdown with the left time. If this is false, we will start the countdown with the time required.

Our pause function will listen to the click events in our pause button, and pause the countdown.

Our rewind function will listen to the click events in our rewind button, first will stop the countdown, in our function we update the state for complete that allow us to rewind the countdown with the default values.

## Functional components and lifecycles

### useMemo()

It is used to create a value to store and the function returns that value that was stored. For example, sometimes we need to calculate a value, using complex functions that can be costly. This operation is done only once, and the value will be stored and you'll get it much faster the next time you make a reference.

In this example, we create an instance of the timer (the library we are using), now the variable’s value it's not going to be replaced every time the component will render and will maintain the same value.

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

`useEffect` hook is a function that allows you to have side effects in a functional component. In class components we have life-cycle methods as`componentDidMount`,`componentDidUpdate`, and`componentWillUnmount`, this hook has the same functionality of all three methods in the functional component.

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

Complete example here:

https://stackblitz.com/edit/react-nft7ra
