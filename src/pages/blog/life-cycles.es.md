---
title: Ciclos de vida
featuredImage: life-cycles.png
date: "2020-06-03"
---

## ¿Qué son los ciclos de vida en React?

Se podrían definir como una serie de métodos que son invocados en diferentes estados de la existencia del componente. 

Vamos a explicar los ciclos de vida más utilizados realizando un countdown. 

Tenemos un pomodoro Clock, que tiene un input, en el cual se podrá escribir la cantidad de minutos que durará el countdown clock, en el mismo se encontrará 3 botones; el botón play el cual comenzará el conteo del reloj, un botón de pause para parar el contador en cualquier momento, y finalmente el botón de rewind que reiniciara el countdown a 5 minutos el cual será su valor por defecto.

> Para este ejercicio, estaremos utilizando, la librería `tiny-timer`, esta recibe, el tiempo que se desea ser contado, y realizará la lógica de regresarnos la cantidad de milisegundos, que nos quedan para que ese tiempo se cumpla. 

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

Comenzamos realizando el input y los 3 botones a utilizar, los cuales los 4 se les asigna una función `onClick` y `onchange`que escucharan los eventos de cambios realizados en estos elementos. En los botones play y pause, tenemos un if, el cual decidirá qué botón mostrar de acuerdo al estado del countdown. 

En nuestro componente clase inicializamos un estado con 3 propiedades, el tiempo en minutos, con 5 minutos, el tiempo en milisegundos, que su valor sería la expresión de la una funcion que convierte minutos a milisegundos en este caso 5 y un objeto con el tiempo restante (el tiempo que se mostrará en pantalla) con los minutos y segundos restantes, que por defecto son 5 minutos. 

Se inicializa nuestro timer con una nueva instancia de la liberia timer.
Nuestra función `handleChange` se encarga de escuchar el evento del cambio de minutos en el input, en el mismo se llama a la función encargada de convertir minutos a milisegundos, además de cambiar en el estado, los nuevos minutos y los milisegundos del nuevo tiempo. 

Nuestra función `handlePlay`, se encarga de escuchar el evento de click al botón play, primero verificamos, que si nuestro timer (creado anteriormente) su estatus es igual a `pause` de ser así, volvemos a correr el countdown con el tiempo restante. Si no comenzará el countdown con la cantidad de minutos requerido. 

Nuestra función `handlePause`, se encargará de escuchar el evento de click al botón pause, y pausar el countdown. En esta función utilizamos el método `forceUpdate()` el cual se encarga de renderizar el componente para actualizar, esto permitirá que nuestro countdown pueda correr de nuevo. 

Y finalmente tenemos nuestra funcion `handleRewind`, esta se encargará primeramente de parar por completo el countdown y actualizamos el estado, con todos los valores por defecto. 



## Componentes de clase y ciclos de vida

### Render()

Es el método más utilizado de los ciclos de vida, porque es el único que es requerido en el componente de clase. Este maneja la renderización del componente en la UI sin efectos secundarios es decir es un método puro.

### ComponenDdidMount()

Es llamado cuando el componente ha sido preparado y listo, esta función permite el uso del `setState()` y actualizar el mismo causando la renderización antes de que el buscador actualice la UI.

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

Utilizamos este método, porque necesitamos escuchar nuestro timer una sola vez, es decir necesitamos un solo countdown en la vida de nuestro componente, y este no cambie independientemente de las actualizaciones y renderizaciones, por lo que declaramos en nuestra función, el timer como iniciado y actualizamos nuestro estado la propiedad con los milisegundos restantes que nos regresa la función. 



### ComponentDidUpdate()

Es invocado al momento de actualizar, el uso más común para esta función es para actualizar DOM en respuesta de props o cambios del estado.

El ejemplo más común para utilizar este método, sería cuando tienes que llamar una API o una condición que cambie el valor del estado.

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

Este método, trae 2 parámetros, los props anteriores y el estado anterior, lo utilizamos porque queremos actualizar nuestro componente cada vez que la propiedad `timeInMiliseconds` cambia, y cada vez que esto suceda, actualizar la propiedad de nuestro estado `timeLeft` con el tiempo nuevo a mostrar en pantalla. 

### ComponentWillUnmount()

Método que es llamado justo antes de que el componente sea destruidos, si tienes que realizar una acción de limpieza, este sería el mejor lugar para hacerlo.

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

Este método lo utilizamos, para remover todos los listener del timer, y este se pueda destruir al finalizar el ciclo del componente, si no realizamos este método, el timer no será eliminado y quedará guardado en memoria. 



Ejercicio completo aqui: 

https://stackblitz.com/edit/react-ae1ybw?file=index.js

