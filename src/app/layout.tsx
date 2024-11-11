import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Aqua Alert - Houd je planten fris, zonder zorgen!',
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={poppins.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
