import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Renew Hair Loss Center | Professional Hair Restoration in Orem, UT',
  description: 'Customized hair loss solutions including hair renewal treatments, wigs, cranial prosthesis, and scalp treatments. Certified Trichologist serving Orem, Utah.',
  keywords: 'hair loss, hair restoration, trichologist, wigs, cranial prosthesis, Orem Utah, hair renewal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="renew">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
