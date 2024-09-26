import './global.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto ({
  weight: ['100', '300', '400', '500', '700'],
  subsets : ['latin']
})

export default function RootLayout({
  children }) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
