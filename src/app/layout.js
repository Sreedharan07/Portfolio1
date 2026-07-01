import './globals.css'

export const metadata = {
  title: 'Sreedharan M — AI Engineer & Computer Vision Developer',
  description: 'Portfolio of Sreedharan M, AI Engineer, Computer Vision Developer, and Deep Learning Researcher at SRM Institute of Technology. Published researcher in deepfake detection.',
  keywords: ['AI Engineer', 'Computer Vision', 'Deep Learning', 'Python', 'PyTorch', 'TensorFlow', 'Hyperspectral Imaging', 'Portfolio'],
  authors: [{ name: 'Sreedharan M' }],
  creator: 'Sreedharan M',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sreedharan.dev',
    title: 'Sreedharan M — AI Engineer & Computer Vision Developer',
    description: 'Cinematic portfolio of an AI Engineer, Computer Vision Developer, and Deep Learning Researcher.',
    siteName: 'Sreedharan M Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sreedharan M — AI Engineer & Computer Vision Developer',
    description: 'Portfolio of Sreedharan M. AI, Computer Vision, Deep Learning.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05060A',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
