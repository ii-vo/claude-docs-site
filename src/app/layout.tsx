import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claude-docs.com"),
  title: {
    default: "claude-docs | Up-to-date library docs for Claude Code",
    template: "%s | claude-docs",
  },
  description:
    "Give Claude Code access to up-to-date library documentation via MCP. Scans your dependencies, generates specialized doc agents. One command setup.",
  keywords: [
    "Claude Code",
    "Claude Code CLI",
    "MCP",
    "Model Context Protocol",
    "Context7",
    "AI coding assistant",
    "documentation agents",
    "developer tools",
    "Anthropic Claude",
  ],
  authors: [{ name: "ii-vo", url: "https://www.linkedin.com/in/iivo/" }],
  creator: "ii-vo",
  applicationName: "claude-docs",
  category: "technology",
  alternates: {
    canonical: "https://claude-docs.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claude-docs.com",
    title: "claude-docs | Up-to-date library docs for Claude Code",
    description:
      "Give Claude Code access to up-to-date library documentation via MCP. Scans your dependencies, generates specialized doc agents. One command setup.",
    siteName: "claude-docs",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "claude-docs - Up-to-date library documentation for Claude Code CLI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "claude-docs | Up-to-date library docs for Claude Code",
    description:
      "Give Claude Code access to up-to-date library documentation via MCP. Scans your dependencies, generates specialized doc agents.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
