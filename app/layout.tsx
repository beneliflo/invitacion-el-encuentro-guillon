import { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | El Encuentro',
    default: 'El Encuentro', // a default is required when creating a template
  },
  description: 'El Encuentro',
  openGraph: {
    images: 'https://www.elencuentro.org/og-image.png',
  },
  twitter: {
    images: ['https://www.elencuentro.org/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-09SLGMTFY9" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-09SLGMTFY9');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
