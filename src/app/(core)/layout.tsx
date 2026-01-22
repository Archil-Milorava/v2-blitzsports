import NavbarMain from '@/components/navbar/NavbarMain';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full min-h-screen bg-red-300'>
      {' '}
      <NavbarMain />
      {children}
    </div>
  );
}
