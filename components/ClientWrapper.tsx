'use client';

import Preloader from './Preloader';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Preloader />
        {children}
    </>
  );
}