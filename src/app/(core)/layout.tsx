import NavbarMain from '@/components/navbar/NavbarMain';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      {' '}
      <NavbarMain />
      {children}
    </div>
  );
}
