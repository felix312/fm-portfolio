import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felix Mwenda — Cybersecurity Engineer & Cloud IT Professional",
  description:
    "Felix Mwenda — Cybersecurity Engineer & Cloud IT Professional based in Nairobi, Kenya. Penetration testing, vulnerability assessment, incident response, and institutional video content strategy.",
  metadataBase: new URL("https://fm-portfolio.github.io"),
  openGraph: {
    title: "Felix Mwenda — Cybersecurity Engineer & Cloud IT Professional",
    description:
      "Securing infrastructure and telling institutional stories — Nairobi, Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-white antialiased selection:bg-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
