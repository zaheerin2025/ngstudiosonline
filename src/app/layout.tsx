import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NG Studios — Web & Mobile App Development Agency',
  description:
    'NG Studios builds high-performance web and mobile applications that scale. From MVP to enterprise — custom Next.js, Flutter, React Native solutions for startups and established businesses.',
  keywords: [
    'web development',
    'mobile app development',
    'Next.js agency',
    'Flutter development',
    'React Native',
    'custom software',
    'SaaS development',
    'UI/UX design',
    'NG Studios',
    'ngstudios.online',
  ],
  metadataBase: new URL('https://ngstudios.online'),
  alternates: {
    canonical: 'https://ngstudios.online',
  },
  openGraph: {
    title: 'NG Studios — Web & Mobile App Development Agency',
    description: 'Building exceptional digital products that scale. From MVPs to enterprise platforms.',
    type: 'website',
    siteName: 'NG Studios',
    url: 'https://ngstudios.online',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NG Studios — Web & Mobile App Development Agency',
    description: 'Building exceptional digital products that scale. From MVPs to enterprise platforms.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
