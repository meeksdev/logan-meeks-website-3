// import { Inter } from "next/font/google";
import './globals.css';
// import { Metadata } from "next";

import Header from './header/header.js';
import Footer from './footer/footer.js';
import { Providers } from './providers';

import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
    charSet: 'UTF-8',
    title: 'Logan Meeks - Professional Web Design & Development Services',
    description:
        'Unlock the potential of your online business with stunning website designs and custom web development applications tailored to your vision & goals.',
    keywords: ['Logan Meeks', 'web design', 'web development', 'custom websites', 'web development company'],
    author: 'Logan Meeks',
    icons: {
        icon: [
            {
                rel: 'icon',
                media: '(prefers-color-scheme: light)',
                type: 'image/x-icon',
                url: '/favicon-dark.ico',
            },
            {
                rel: 'icon',
                media: '(prefers-color-scheme: dark)',
                type: 'image/x-icon',
                url: '/favicon-light.ico',
            },
        ],
    },
    metadataBase: new URL('https://meeksdev.com'),
    openGraph: {
        title: 'Logan Meeks - Professional Web Design & Development Services',
        description:
            'Unlock the potential of your online business with stunning website designs and custom web development applications tailored to your vision & goals.',
        url: 'https://meeksdev.com',
        siteName: 'Logan Meeks Web Development',
        // images: [
        //   {
        //     url: 'https://meeksdev.com/og-image.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Logan Meeks Web Development'
        //   }
        // ],
        locale: 'en-US',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* <meta charSet="UTF-8"/>
        <meta name="description" content="Logan Meeks Web Development" />
        <meta name="keywords" content="Logan, Meeks, Web, Development" />
        <meta name="author" content="Logan Meeks" /> */}
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
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
            <GoogleAnalytics gaId="G-JVHLSHJL5B" />
        </html>
    );
}
