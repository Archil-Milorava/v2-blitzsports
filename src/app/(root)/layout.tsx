import { Navbar } from '@/features/Navbar/Navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Navbar />
      <div className='lg:px-28'>{children}</div>
    </main>
  )
}
