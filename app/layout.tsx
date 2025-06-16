import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';
import { ReactQueryProvider } from '@/queries/provider';

export const metadata: Metadata = {
  title: 'Librarium',
  description: 'Find the books that speak to your soul.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
