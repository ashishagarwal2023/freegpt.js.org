 <h1>FreeGPT.js</h1> 
 **This might be your best library you've seen, while searching for stable, working GPT libraries!**
🤖 A powerful client-side JavaScript library for ChatGPT allowing you to use ChatGPT without any limits!
<br>

> Give it a try! Go [here](https://freegpt.js.org) to test the FreeGPT.js out! It's free!

<br><div align="center">

[![](https://img.shields.io/github/stars/ashishagarwal2023/freegptjs?label=Stars&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/ashishagarwal2023/freegptjs/stargazers) [![](https://img.shields.io/badge/License-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/ashishagarwal2023/freegptjs/blob/main/LICENSE.md) [![](https://img.shields.io/github/commit-activity/m/ashishagarwal2023/freegptjs?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/ashishagarwal2023/freegptjs/commits/main)

</div>

</div>

<div id="intro">

## 💡 About

</div>

freegpt is a powerful javascript library you can use to get ChatGPT on your website, and its free!

- Simple, just one function
- Open-source, free
- Easy-to-use
- Lightweight (yet optimally performant)
- No authentication, free for all
- Unlimited GPT 3.5 Model

<div id="importing">

## ⚡ Adding the library

</div>

Load `https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegptjs/src/freegpt.min.js` as a script in your `<head>` and call it after its loaded.

```html
<script src="https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegptjs/src/freegpt.min.js"></script>
```

> Integrating with Next.js or any such framework is also possible. Check out the **react** branch for a sample chat application.
> Load the freegpt lib the same way in your <head> in your layout of Next/React project, then use `await gpt.ask` to see if it works.

> The library will only work on client-side.

## 💻 Usage

```js
(async () => {
  let response = await gpt.ask("Explain variables in javascript");
  console.log(response); // you got it!
})();
```

And that is all.

## 🤖 Why client-side?

The route from where the responses are taken are protected with Cloudflare. If you wish, you can recommend me a good working free Cloudflare scraper so you can even use this on servers, however everyone would need scraper so.

> Please do not make issues regarding not working with Nodejs like #1

By the way, GPT will not remember anything as generative mode is. I might look to make conversations soon!

### Why I just made it?

Building AI applications isn't free, but I wanted to do it. This does not cost me a penny, feel free to use!

Give it a star if you want to help me keep it active.

It depends on **You.com**'s API, however its reverse engineered, but it has no tokens/login or such.

## 🤝Contributing

You are welcome! I'm looking for some cool peoples to help me push this project further!

> The API routes are given in plan.js, so read it if you would like to know how the API would work

If you made a working webscraper and would like me to use it (Cloudflare Bypass), you are welcome, but remember I cannot afford a bit, sorry.
