'use client';

import { ThemeProvider } from 'next-themes';

/**
 * Providers component wraps its children with the ThemeProvider from next-themes.
 * This enables theme switching functionality based on the user's system preferences or manual selection.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ThemeProvider.
 * @returns {JSX.Element} The rendered component with ThemeProvider.
 */
export function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
