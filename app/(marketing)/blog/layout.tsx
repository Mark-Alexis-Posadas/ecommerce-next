export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>blog nav</nav>
        <main className="bg-green-200 p-10 min-h-screen">
          <h1>Blog layout</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
