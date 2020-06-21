---
title: Life-cycle
featuredImage: life-cycles.png
date: "2020-06-03"
---

## What is the lifecycle in React?

They can be defined as a series of methods that are invoked in different states of the component's existence.

Let's explain the most used life-cycles methods with a countdown exercise.
We have a Pomodoro Clock,  that has an input, in that input you can write on, the number of minutes will be during the time of the countdown clock, then you will have 3 buttons, one button is the play one, which will start the count of the clock, then the second button pause, will pause the countdown clock in any moment and finally, the rewind button that will rewind the countdown clock to 5 minutes which is going to be the default value.

> For this exercise, we are using the `tiny-timer` library that receives the time that will be counted in milliseconds, and then after we start the timer it will emit each second the amount of time left in milliseconds.  

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
import Timer from "tiny-timer";
import "./style.css";
//
const convertMinutestoMilliseconds = minutes => {
  // adding 1 second to "show the 00:00"
  return Math.floor(minutes * 60 * 1000) + 1000;
};

const convertMillisecondsToTime = ms => {
  const timeAPI = {
    MINUTES: 1000 * 60,
    SECONDS: 1000
  };

  if (ms <= 0) {
    return {
      minutes: `00`,
      seconds: `00`
    };
  }

  const minutes = Math.floor(ms / timeAPI.MINUTES);
  ms %= timeAPI.MINUTES;
  // substracting 1 to show the "00:00"
  let seconds = Math.round(ms / timeAPI.SECONDS);

  if (seconds > 0) {
    seconds = seconds - 1;
  }

  return {
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0")
  };
};

class App extends Component {
  state = {
    timeInMinutes: 5,
    timeInMiliseconds: convertMinutestoMilliseconds(5),
    timeLeft: {
      minutes: "05",
      seconds: "00"
    }
  };

  timer = new Timer();

  handleChange = e => {
    const minutes = e.target.value;
    const miliseconds = convertMinutestoMilliseconds(minutes);
    this.setState({
      timeInMinutes: minutes,
      timeInMiliseconds: miliseconds
    });
  };

  handlePlay = () => {
    if (this.timer.status === "paused") {
      this.timer.resume();
      return;
    }
    this.timer.start(this.state.timeInMiliseconds);
  };

  handlePause = () => {
    this.timer.pause();
    this.forceUpdate();
  };

  handleRewind = () => {
    this.timer.stop();
    this.setState({
      timeInMinutes: 5,
      timeInMiliseconds: convertMinutestoMilliseconds(5),
      timeLeft: {
        minutes: "05",
        seconds: "00"
      }
    });
  };
  render() {
    return (
      <div>
        <h2>Pomodoro Clock!</h2>
        <div>
          {this.state.timeLeft.minutes}:{this.state.timeLeft.seconds}
        </div>

        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.timeInMinutes}
        />
        {this.timer.status === "running" ? (
          <button onClick={this.handlePause}>Pause</button>
        ) : (
          <button onClick={this.handlePlay}>Play</button>
        )}
        <button onClick={this.handleRewind}>Rewind</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
```

First, we have the input with the 3 buttons, those have functions who listen to all events in the component, in the buttons play and pause, we have an if, which will decide which button is going to show on the screen depending on the status of the countdown. 

In our class component, we init a state with 3 properties, the time in minutes, time in milliseconds both with default values, and an object with the left time with minutes and seconds which is going to be shown on the screen. 

We init our timer with a new instance of the library timer. 

Our `handleChange` function will listen to the changes in the input and will convert the minutes to milliseconds and change the state with the new minutes and milliseconds with the new time. 

Our play function will listen to the click events in our play button. first, we will verify if the status of our timer and if is equal to paused, if it is true we will start our countdown with the left time if this is false, will start the countdown with the time required. 

Our pause function will listen to the click events in our pause button, and pause the countdown. This function will use the method `fordeUpdate()` which one will update and renderer the component, allowing our countdown to run again. 

Our rewind function will listen to the click events in our rewind button, first will stop the countdown, in our function we update the state for complete that allow us to rewind the countdown with the default values. 

## Class components and lifecycles

### Render()

It is the most used method in lifecycles functions because it is the only one who is required in every class component. This method is in charge of the component's rendering on the UI without any side effects, in other words, it is a pure method.

### ComponenDdidMount()

This method is called when the component has been mounted and ready, this function allows you the use of `setState()` and update the component, causing the rendering before the browser update de UI.

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
import Timer from "tiny-timer";
import "./style.css";
//
const convertMinutestoMilliseconds = minutes => {
  // adding 1 second to "show the 00:00"
  return Math.floor(minutes * 60 * 1000) + 1000;
};

const convertMillisecondsToTime = ms => {
  const timeAPI = {
    MINUTES: 1000 * 60,
    SECONDS: 1000
  };

  if (ms <= 0) {
    return {
      minutes: `00`,
      seconds: `00`
    };
  }

  const minutes = Math.floor(ms / timeAPI.MINUTES);
  ms %= timeAPI.MINUTES;
  // substracting 1 to show the "00:00"
  let seconds = Math.round(ms / timeAPI.SECONDS);

  if (seconds > 0) {
    seconds = seconds - 1;
  }

  return {
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0")
  };
};

class App extends Component {
  state = {
    timeInMinutes: 5,
    timeInMiliseconds: convertMinutestoMilliseconds(5),
    timeLeft: {
      minutes: "05",
      seconds: "00"
    }
  };

  timer = new Timer();

  handleChange = e => {
    const minutes = e.target.value;
    const miliseconds = convertMinutestoMilliseconds(minutes);
    this.setState({
      timeInMinutes: minutes,
      timeInMiliseconds: miliseconds
    });
  };

  handlePlay = () => {
    if (this.timer.status === "paused") {
      this.timer.resume();
      return;
    }
    this.timer.start(this.state.timeInMiliseconds);
  };

  handlePause = () => {
    this.timer.pause();
    this.forceUpdate();
  };

  handleRewind = () => {
    this.timer.stop();
    this.setState({
      timeInMinutes: 5,
      timeInMiliseconds: convertMinutestoMilliseconds(5),
      timeLeft: {
        minutes: "05",
        seconds: "00"
      }
    });
  };

  componentDidMount() {
    this.timer.on("tick", ms => {
      this.setState({
        timeInMiliseconds: ms
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Pomodoro Clock!</h2>
        <div>
          {this.state.timeLeft.minutes}:{this.state.timeLeft.seconds}
        </div>

        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.timeInMinutes}
        />
        {this.timer.status === "running" ? (
          <button onClick={this.handlePause}>Pause</button>
        ) : (
          <button onClick={this.handlePlay}>Play</button>
        )}
        <button onClick={this.handleRewind}>Rewind</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
```

We used this method because we need to listen to our timer just one time, in other words, we need just one countdown in our life-cycle component and did not change with any update or rendered, so we declare on our function the timer, and update our property state with the milliseconds who the function gave us. 



### ComponentDidUpdate()

This method is for any update, the most common use of this function is to update the DOM in response to props or state changes.

The most common example to use this method is when you have to call an API or a condition that changes the state’s value.

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
import Timer from "tiny-timer";
import "./style.css";
//
const convertMinutestoMilliseconds = minutes => {
  // adding 1 second to "show the 00:00"
  return Math.floor(minutes * 60 * 1000) + 1000;
};

const convertMillisecondsToTime = ms => {
  const timeAPI = {
    MINUTES: 1000 * 60,
    SECONDS: 1000
  };

  if (ms <= 0) {
    return {
      minutes: `00`,
      seconds: `00`
    };
  }

  const minutes = Math.floor(ms / timeAPI.MINUTES);
  ms %= timeAPI.MINUTES;
  // substracting 1 to show the "00:00"
  let seconds = Math.round(ms / timeAPI.SECONDS);

  if (seconds > 0) {
    seconds = seconds - 1;
  }

  return {
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0")
  };
};

class App extends Component {
  state = {
    timeInMinutes: 5,
    timeInMiliseconds: convertMinutestoMilliseconds(5),
    timeLeft: {
      minutes: "05",
      seconds: "00"
    }
  };

  timer = new Timer();

  handleChange = e => {
    const minutes = e.target.value;
    const miliseconds = convertMinutestoMilliseconds(minutes);
    this.setState({
      timeInMinutes: minutes,
      timeInMiliseconds: miliseconds
    });
  };

  handlePlay = () => {
    if (this.timer.status === "paused") {
      this.timer.resume();
      return;
    }
    this.timer.start(this.state.timeInMiliseconds);
  };

  handlePause = () => {
    this.timer.pause();
    this.forceUpdate();
  };

  handleRewind = () => {
    this.timer.stop();
    this.setState({
      timeInMinutes: 5,
      timeInMiliseconds: convertMinutestoMilliseconds(5),
      timeLeft: {
        minutes: "05",
        seconds: "00"
      }
    });
  };

  componentDidMount() {
    this.timer.on("tick", ms => {
      this.setState({
        timeInMiliseconds: ms
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timeInMiliseconds != prevState.timeInMiliseconds) {
      this.setState({
        timeLeft: convertMillisecondsToTime(this.state.timeInMiliseconds)
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Pomodoro Clock!</h2>
        <div>
          {this.state.timeLeft.minutes}:{this.state.timeLeft.seconds}
        </div>

        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.timeInMinutes}
        />
        {this.timer.status === "running" ? (
          <button onClick={this.handlePause}>Pause</button>
        ) : (
          <button onClick={this.handlePlay}>Play</button>
        )}
        <button onClick={this.handleRewind}>Rewind</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
```

This method brings 2 params, previously props and previously state, we used this because we want to update our component every time our `timeInMiliseconds` property change, every time the property change, we want to update our `timeLeft` property in our state with the new time to show on the screen. 

### ComponentWillUnmount()

This method is invoked just before the component will be destroyed, if you have to make a clean action, this is the best spot to make it.

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
import Timer from "tiny-timer";
import "./style.css";
//
const convertMinutestoMilliseconds = minutes => {
  // adding 1 second to "show the 00:00"
  return Math.floor(minutes * 60 * 1000) + 1000;
};

const convertMillisecondsToTime = ms => {
  const timeAPI = {
    MINUTES: 1000 * 60,
    SECONDS: 1000
  };

  if (ms <= 0) {
    return {
      minutes: `00`,
      seconds: `00`
    };
  }

  const minutes = Math.floor(ms / timeAPI.MINUTES);
  ms %= timeAPI.MINUTES;
  // substracting 1 to show the "00:00"
  let seconds = Math.round(ms / timeAPI.SECONDS);

  if (seconds > 0) {
    seconds = seconds - 1;
  }

  return {
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0")
  };
};

class App extends Component {
  state = {
    timeInMinutes: 5,
    timeInMiliseconds: convertMinutestoMilliseconds(5),
    timeLeft: {
      minutes: "05",
      seconds: "00"
    }
  };

  timer = new Timer();

  handleChange = e => {
    const minutes = e.target.value;
    const miliseconds = convertMinutestoMilliseconds(minutes);
    this.setState({
      timeInMinutes: minutes,
      timeInMiliseconds: miliseconds
    });
  };

  handlePlay = () => {
    if (this.timer.status === "paused") {
      this.timer.resume();
      return;
    }
    this.timer.start(this.state.timeInMiliseconds);
  };

  handlePause = () => {
    this.timer.pause();
    this.forceUpdate();
  };

  handleRewind = () => {
    this.timer.stop();
    this.setState({
      timeInMinutes: 5,
      timeInMiliseconds: convertMinutestoMilliseconds(5),
      timeLeft: {
        minutes: "05",
        seconds: "00"
      }
    });
  };

  componentDidMount() {
    this.timer.on("tick", ms => {
      this.setState({
        timeInMiliseconds: ms
      });
    });
  }

  componentWillUnmount() {
    this.timer.removeAllListeners();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timeInMiliseconds != prevState.timeInMiliseconds) {
      this.setState({
        timeLeft: convertMillisecondsToTime(this.state.timeInMiliseconds)
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Pomodoro Clock!</h2>
        <div>
          {this.state.timeLeft.minutes}:{this.state.timeLeft.seconds}
        </div>

        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.timeInMinutes}
        />
        {this.timer.status === "running" ? (
          <button onClick={this.handlePause}>Pause</button>
        ) : (
          <button onClick={this.handlePlay}>Play</button>
        )}
        <button onClick={this.handleRewind}>Rewind</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
```

We use this method to remove all the listeners of the timer because if we don't do that when the timer will be destroyed at the end of the life-cycle, the timer will not be removed and will be in our memory.

Complete example here: 

https://stackblitz.com/edit/react-ae1ybw?file=index.js

