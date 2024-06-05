import { Inter } from "next/font/google";
import "./globals.css";
// import Head from "next/head";

// import AboutPage from "./about/page";
// import ContactPage from "./contact/page";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   description: 'Logan Meeks Web Development',
//   icons: {
//     icon: [
//       {
//         media: '(prefers-color-scheme: light)',
//         url: '/favicon-dark.ico',
//         href: "/favicon-dark.ico",
//       },
//       {
//         media: '(prefers-color-scheme: dark)',
//         url: '/favicon-light.ico',
//         href: "/favicon-light.ico",
//       }
//     ]
//   }
// };

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

        <link
          rel="icon"
          href="%PUBLIC_URL%/favicon-dark.ico"
          sizes="16x16"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="%PUBLIC_URL%/favicon-light.ico"
          sizes="16x16"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      
      <body className="m-0 grid min-h-[100vh] bg-gradient-to-br from-white to-white bg-fixed text-black dark:from-shakespeare-900 dark:to-shakespeare-bg dark:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
