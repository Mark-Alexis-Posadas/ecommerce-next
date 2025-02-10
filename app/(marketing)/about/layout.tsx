export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>about nav</nav>
        <main className="bg-blue-200 p-10 min-h-screen">
          <h1>About layout</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
