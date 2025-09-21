import { Roboto } from 'next/font/google'; // todo get the font from figma
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400','700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="ar" className={roboto.className} dir="rtl">
    <body>{children}</body>
    </html>
  );
}
