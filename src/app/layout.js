import { Tajawal } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import HeaderGate from '@/components/HeaderGate';

const tajawal = Tajawal({ 
  subsets: ['arabic', 'latin'], 
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
});

export const metadata = {
  title: {
    default: 'نماء - جمعية تنموية شبابية',
    template: '%s | نماء',
  },
  description: 'جمعية تنموية شبابية غير ربحية، تأسست في الأردن في عام 2012، لتشارك بفعالية في الجهود الوطنية تجاه تمكين الشباب الأردني وتعزيز دوره في تنمية المجتمع',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className={tajawal.className} style={{ overflowX: 'hidden' }}>
        <Script
          src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/js/all.min.js"
          strategy="lazyOnload"
        />
        <HeaderGate>
          <Header />
        </HeaderGate>
        
        {children}
      </body>
    </html>
  );
}
