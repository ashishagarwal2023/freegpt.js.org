---
sidebar_position: 1
---

# CORS error

Fix the CORS error easily!

## Testing it

Your code was like/similiar to this:

```html title="~/html_projects/freegpt.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegpt.js.org@master/src/freegpt.js"></script>
    <title>Document</title>
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

But you get this:

![CORS error](/img/cors.png)

The solution is: **you are trying freegpt.js on file:// or such protocol. Try it on `http://` or `https://`!**

Ok, let me check this on a http server.

![CORS are now fixed!](/img/success-cors.png)

Now FreeGPT worked. It was simple to fix this CORS error.

> If you face any other issues we have not guided, please make a issue on the github repo