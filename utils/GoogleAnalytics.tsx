"use client"

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-SWC7MTSL7V');
  }, []);

  return (
<>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SWC7MTSL7V"
        strategy="afterInteractive"
      />
    </>
  );
}
