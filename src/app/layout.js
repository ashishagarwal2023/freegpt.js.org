import "./globals.css";
import {inter} from "./fonts"

export const metadata = {
  title: "FreeGPT React Demo",
  description: "Use our library to integrate ChatGPT into your app for free!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegptjs/src/freegpt.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
