import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Jeewan Multispeciality Centre | World-Class Medical Care',
  description: 'Providing world-class medical services with a heart. Dedicated to excellence in patient care for over two decades in Gurugram.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
