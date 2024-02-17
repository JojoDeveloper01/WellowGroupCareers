// ./src/app/layout.tsx
import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import '@/fonts/uaf.css';
import type { Metadata } from 'next';
import React from 'react';
import { JobProvider } from './JobContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'wellow site candidaturas',
  description: 'Candidaturas da Wellow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JobProvider>
      <html lang="pt">
        <body>
          <Header />
          <main style={{ marginTop: "var(--height-header)" }}>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </JobProvider>
  );
}
