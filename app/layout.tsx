import type { ReactNode } from 'react';
import NavBar from './components/NavBar';
import './globals.css';

export const metadata = {
  title: "Маршрутизация Next.js",
  description: "Контрольная точка №1",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
            <body>
                <NavBar />
                <main style={{ padding: '24px' }}>{children}</main>
            </body>
        </html>
    );
}