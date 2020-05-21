---
title: Props
date: "2020-05-21"
---

## What are props in react?

They are a pattern to share information between a father component and a children component, where the father component sets attributes and sent those to the children as an object. It's important to know this works just in one way, it means the father can share information with the children but not another way around.

## How to use props?

As we said previously, props are used for components in React in the same way, but the syntax to use them its a little different and depends on the type of the component are you using.

### Props in class components

The class component receive props as a properties' object called props and you can access them using the syntax `this.props`

```react
import React, { Component } from "react";
import { render } from "react-dom";

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return <Content title="hello" content="Hello World" num={15} />;
  }
}

render(<App />, document.getElementById("root"));
```

> In this example, we have the app component (father) which is rendering the content component (children). The component sends those props to the exact component that will be used. To access them, it's necessary to write the "this" word.

### Props in functional components

The functional component receives props as the first parameter in the function.

```react
import React, { Component } from "react";
import { render } from "react-dom";

const Content = ({ title, content }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>{content}</p>
  </React.Fragment>
);

const App = () => {
  return <Content title="hello" content="Hello World" />;
};

render(<App />, document.getElementById("root"));
```

> In the example, the app component (father) sends props to content components (children) and they are received as parameters from the function, in this case, we are doing deconstruction and taking the values that we need.

Note: Props can't modify, it means the information that you send is in a read-only state.

## Props and spread syntax

Something we need to pass a more that one attributes to another component, so for those cases, we can use the JavaScript operator spread.

```react
import React, { Component, useState } from "react";
import { render } from "react-dom";

const Content = ({ title, content }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>{content}</p>
  </React.Fragment>
);

const App = props => {
  console.log(props);

  const { name, ...restProps } = props;
  return (
    <React.Fragment>
      <p>{name}</p>
      <Content {...restProps} />
    </React.Fragment>
  );
};

render(
  <App title="hello" content="Hello from props" name="Gerardo" />,
  document.getElementById("root")
);

```

> In this example, our App component (father) is receiving props from another component and this case we made a deconstruction to obtain some values from the object and we used spread to save the others objects' values, which are going to be used in the content component (children)

```react
import React, { Component, useState } from "react";
import { render } from "react-dom";

const Content = ({ title, content }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>{content}</p>
  </React.Fragment>
);

const App = () => {
  const [state] = useState({
    title: "hello",
    content: "Hello world from state"
  });

  return (
    <React.Fragment>
      <Content {...state} />
    </React.Fragment>
  );
};

export default App;

render(<App />, document.getElementById("root"));
```

> In this example we are using the state, the App component (father) pass to content component (children), the state as a props (object).

```react
import React, { Component, useState } from "react";
import { render } from "react-dom";

const Content = ({ title, content }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>{content}</p>
  </React.Fragment>
);

const App = () => {
  const obj = {
    title: "hello",
    content: "Helo world"
  };

  return (
    <React.Fragment>
      <Content {...obj} />
    </React.Fragment>
  );
};

export default App;

render(<App />, document.getElementById("root"));
```

> In this example, we can see the App component (father), declare an object with some values which are passed as a props to content component (children).

## Props with a default value

In some cases, if you want to pass props as a default value you can do this in this way.

```react
import React, { Component } from "react";
import { render } from "react-dom";

interface Props {
  name?: string;
}

const MyComponent: React.FC<Props> = ({ name = "Gerardo" }) => (
  <p>Hello {name}</p>
);

const App = () => <MyComponent />;

render(<App />, document.getElementById("root"));
```

> In this example, we have a functional component where received a name as a props, in this case, we made a deconstruction to get the value and set their default value, in this case, "Gerardo". `MyComponent` (children) its no receiving nothing from the App component (father), so the value for default will be "Gerardo".
>
> Note: In this case, we are using typescript, so if we don't want to have any problem, we should make de interface normally and set a `?` in the key of the value, with this we are saying, names value is no obligatory.

```react
import React, { Component } from "react";
import { render } from "react-dom";

interface Props {
  name?: string;
}

const MyComponent: React.FC<Props> = ({ name }) => <p>Hello {name}</p>;
MyComponent.defaultProps = {
  name: "Gerardo"
};
const App = () => <MyComponent />;

render(<App />, document.getElementById("root"));
```

> In this example, we have an App component (father) and is not sending any props so we use the `default props` syntax and declare the name and its value as a default.
