---
sidebar_position: 2
---

# With React

This lesson is for installing FreeGPT.js for your React project.

## Create Project

Begin by creating your react project (skip if already created or you want to add to your project). Then, move to your project and start development server.

```bash
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

> Learn more about create-react-app [here](https://create-react-app.dev/docs/getting-started)

## Add library

Open your `public/index.html` and in your `<head>` add the following code to load FreeGPT.js:
```html title="public/index.html"
<head>
    ...
    <script src="https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegpt.js.org@master/src/freegpt.js"></script>
    ...
</head>
```

## Try FreeGPT

```jsx title="src/App.js"
...

function App() {
  (async () => {
    let response = await window.gpt.ask("Hello world");
    alert(response);
  })();
  ...
}
```

The `gpt.ask` or `window.gpt.ask` does some fetching so you must use it in a async function to work with it.