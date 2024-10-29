import './globals.css';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import { Providers } from './providers';
import { GoogleAnalytics } from '@next/third-parties/google';

/**
 * Metadata for the website.
 * @type {Object}
 * @property {string} charSet - The character encoding for the HTML document.
 * @property {string} title - The title of the website.
 * @property {string} description - The description of the website.
 * @property {Array<string>} keywords - The keywords for SEO.
 * @property {string} author - The author of the website.
 * @property {Object} icons - The icons for the website.
 * @property {Array<Object>} icons.icon - The icon configurations.
 * @property {string} icons.icon.rel - The relationship between the current document and the linked resource.
 * @property {string} icons.icon.media - The media query for the icon.
 * @property {string} icons.icon.type - The MIME type of the icon.
 * @property {string} icons.icon.url - The URL of the icon.
 * @property {URL} metadataBase - The base URL for the metadata.
 * @property {Object} openGraph - The Open Graph metadata for the website.
 * @property {string} openGraph.title - The Open Graph title of the website.
 * @property {string} openGraph.description - The Open Graph description of the website.
 * @property {string} openGraph.url - The Open Graph URL of the website.
 * @property {string} openGraph.siteName - The Open Graph site name of the website.
 */
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
