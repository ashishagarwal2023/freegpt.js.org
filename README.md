 <h1>FreeGPT.js</h1>
🤖 A powerful client-side JavaScript library for ChatGPT allowing you to use ChatGPT without any limits!
<br>

> Give it a try! Go [here](https://ashishagarwal.is-a.dev/freegptjs) to test the FreeGPT.js out! It's free!

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

## ⚡ Importing the library

</div>

Load `https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegptjs/src/freegpt.min.js` as a script in your `<head>` and call it after its loaded.

```html
<script src="https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegptjs/src/freegpt.min.js"></script>
```

> Remove .min from the src to recieve a pure version, which is not optimized for production.

## 💻 Usage

```js
(async () => {
  let response = await gpt.ask("Explain variables in javascript");
  console.log(response); // you got it!
})();
```

There's literally nothing more coded. It's a reverse engineering of You.com API (which is completely free, I was shocked to see)

## 🤖 Why client-side?

You got it, I also got it. The route where I recieve the fetch in the library is protected by Cloudflare. Got it?

> When I tried to get the response using NodeJS, it appeared that it gave HTML, and oh, there was Cloudflare security. I tried several web scrapers for NodeJS (and even tried python) but there was one paid, that I cannot afford and so this AJAX request still worked.

> **Why we just care about the AJAX?** Listen, you can simply do your client's fetch requests using AJAX when the user comes to chat, and its simple when using pure HTML-JavaScript, so give it a try!

> Generative Mode is **enabled**. This means GPT will not remember anything you tell it. I'm working to implement a conversative mode.

### Why I just made it?

There was a chatgptpy library for Python and several for NodeJS also. But I wanted to build a completely free one, so I made this.

Give it a star if you want to help me keep it active. Follow me when?

It depends on **You.com**'s API, however its reverse engineered, but it has no tokens/login or such.

## 🤝Contributing

You are welcome! I'm looking for some cool peoples to help me push this project further!

> The API routes are given in plan.js, so read it if you would like to know how the API would work

If you made a working webscraper and would like me to use it (Cloudflare Bypass), you are welcome, but remember I cannot afford a bit, sorry.
