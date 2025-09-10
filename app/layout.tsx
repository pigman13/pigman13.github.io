import "./globals.css";

export const metadata = { title: "Ivan G. Aurelius", description: "Industrial Techno Portfolio" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh antialiased bg-bg text-text">
        {children}
      </body>
    </html>
  );
}