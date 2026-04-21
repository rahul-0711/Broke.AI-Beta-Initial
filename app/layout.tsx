import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Broke.AI — AI Automation, Agents & Web Solutions',
  description:
    'Broke.AI delivers cutting-edge AI automations, AI chatbots, voice agents, website development, video editing, and business consultancy. Transform your business with intelligent systems.',
  keywords: 'AI automation, AI agents, chatbots, voice agents, website building, video editing, business consultancy',
  openGraph: {
    title: 'Broke.AI — AI Automation, Agents & Web Solutions',
    description: 'Transform your business with intelligent AI systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
