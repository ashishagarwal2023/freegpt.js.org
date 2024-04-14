---
sidebar_position: 1
---

# With HTML

This lesson is for installing FreeGPT.js for your HTML page.

## Load the library

In your HTML page's `<head>`, add the following code to load our library from jsDelivr:

```html title="index.html"
<script src="https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegpt.js.org@master/src/freegpt.js"></script>
```

> If you add freegpt.js to your `<body>`, you should then wait for the DOMContent to be loaded before using any of the FreeGPT.js's functions

## Test it out

Add some `<script>` on your body once the library is loaded and see the result.

```html title="index.html"
<script>
(async () => {
    let response = await gpt.ask("Explain variables in javascript");
    console.log(response);
})();
</script>
```

Check the browser console and it should print the response from FreeGPT.js.

> If you get a CORS error, please see the Troubleshooting Guide, we have the solution for it.

## Full code
```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegpt.js.org@master/src/freegpt.js"></script>
</head>
<body>
    <script>
        (async () => {
            let response = await gpt.ask("Explain variables in javascript");
            console.log(response);
        })();
    </script>
</body>
</html>
```