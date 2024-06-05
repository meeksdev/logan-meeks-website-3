// import { Inter } from "next/font/google";
import "./globals.css";
// import { Metadata } from "next";

import Header from "./header/header.js";
import Footer from "./footer/footer.js";

import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  // title: "Your Title",
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/x-icon",
        url: "/favicon-dark.ico",
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/x-icon",
        url: "/favicon-light.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Logan Meeks Web Development" />
        <meta name="keywords" content="Logan, Meeks, Web, Development" />
        <meta name="author" content="Logan Meeks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="theme-color" content="#000000" /> */}

        {/* <link
          rel="icon"
          href="/favicon-dark.ico"
          sizes="all"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-light.ico"
          sizes="all"
          media="(prefers-color-scheme: dark)"
        /> */}
      </head>
      
      <body className="m-0 grid min-h-[100vh] bg-gradient-to-br from-white to-white bg-fixed text-black dark:from-shakespeare-900 dark:to-shakespeare-bg dark:text-white">
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-JVHLSHJL5B" />
    </html>
  );
}
