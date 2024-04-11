 <h1>FreeGPT.js</h1> 
 
 **This might be your best library you've seen, while searching for stable, working GPT libraries!**
 
🤖 A powerful client-side JavaScript library for ChatGPT allowing you to use ChatGPT without any limits!

> [!NOTE]
> If you are looking for a template or example, go ahead and look the branch **react**. It uses Next.js with FreeGPT.js to make a simple, but working, great and free unlimited chat application.

> [!TIP]
> Also checkout my ChatGPT Clone (UI and implementation): https://ashishagarwal.is-a.dev/chatgpt-clone/ - it works with FreeGPT.js!

> [!WARNING]
> FreeGPT.js/this project is not affiliated with ChatGPT in any kind. I'm not responsible for anything and this project is just for educational purposes.

> Give it a try! Go [here](https://ashishagarwal.is-a.dev/chatgpt-clone) to test the FreeGPT.js out! It's free!

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

## Examples
Not much yet, atleast someone should make something. ;-;
[ChatGPT Clone with Next.js and FreeGPT.js](https://ashishagarwal.is-a.dev/chatgpt-clone/)
![ChatGPT Clone with Next.js and FreeGPT.js](freegpt.png)

You built something **cool**? Make a issue or PR!

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

> [!IMPORTANT]
> If you are receiving error even when library is loaded (probably with React, and might also with Vue, Angular, etc), then use `window.gpt.ask` instead of `gpt.ask`.
> And next thing, the `window.gpt.ask` is only available on client-side components, as you may know.

## 🤖 Why client-side?

This is a reverse-engineer of a ChatGPT AI service, [You.com](https://you.com).

They, for their own security, added Cloudflare Protection to the API. This can only be bypassed on JavaScript client-side.

> Please do not make issues regarding not working with Nodejs like #1

### Why I just made it?

Building AI applications isn't free, but I wanted to do it. This does not cost me a penny, feel free to use!

Give it a star if you want to help me keep it active.

It depends on **You.com**'s API, however its reverse engineered. Please note that I'm not responsible for anything and this is just for educational purpose.s

## 🤝Contributing

You are welcome! I'm looking for some cool peoples to help me push this project further!

> I'm currently in-active on this project but you could, if you wish, try to implement conversations! :D

PRs are welcome, good issues too!