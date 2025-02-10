export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="bg-slate-200 p-10 min-h-screen">
          <h1>Auth layout</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
