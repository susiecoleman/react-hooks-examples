# React Hooks Examples

Some examples of how to use React Hooks (specifically state and effect). Full React Hooks docs [here](https://reactjs.org/docs/hooks-intro.html)

### Why use Hooks?

This allows you to maintain state and do 'stateful things' while writing functional as opposed to class based components. Functional components are preferable as React is optimised for functional components

## Set up 

```
yarn install
```

## Run the project

```
yarn start 
```

The project runs on port 3000

## Examples

This project has 4 components (App, App1, App2, App3)

To see the different behaviors change which component is used in [`index.js`](./src/index.js)

### Example 1 - App.js

Class based component using state. How to do state without React hooks.

### Example 2 - App2.js

Functional component using the [State](https://reactjs.org/docs/hooks-state.html) React hook. This is a rewrite of `App.js`

### Example 3 - App3.js

Class based component using state and `componentDidMount`. This example also works for `componentDidUpdate` and `componentWillUnmount`

### Example 4 - App4.js

Functional component using the [Effect](https://reactjs.org/docs/hooks-effect.html) React hook. This is a rewrite of `App3.js`.

#### Expanding this for `componentDidUpdate` and `componentWillUnmount`

`useEffect` takes 2 params. This function is the equivalent of `componentDidMount`. The function passed will run when the component mounts.

```javascript
useEffect(() => {
setCount(getRandomInt(2, 100));
}, []);
```

Modifications include:

* Removing the square brackets. This will trigger the function passed as the first param on every re-render
```javascript
useEffect(() => {
setCount(getRandomInt(2, 100));
});
```

* Specifying a specific state property. This will only call the function passed when count changes
```javascript
useEffect(() => {
setCount(getRandomInt(2, 100));
}, [count]);
```

* The function returns a function. This function will be called when the component is destroyed (`componentWillUnmount`)
```javascript
useEffect(() => {
setCount(getRandomInt(2, 100));
return () => console.log('end')
}, []);
```

## Custom Hooks

A hook is just a function so it is possible to [define your own](https://reactjs.org/docs/hooks-custom.html)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
