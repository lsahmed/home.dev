import "./globals.css"

export const metadata = {
  title: "Ethan  - Computer Science Student",
  description:
    "Computer Science student passionate about web development, specializing in React, Next.js, and modern web technologies.",
  keywords: ["Ethan ", "Computer Science Student", "Web Developer", "React", "Next.js", "Web Development"],
  authors: [{ name: "Ethan " }],
  creator: "Ethan ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lsahmed.tech",
    title: "Ethan  - Computer Science Student",
    description: "Computer Science student passionate about web development and building innovative projects",
    siteName: "Ethan ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan  - Computer Science Student",
    description: "Computer Science student passionate about web development and building innovative projects",
    creator: "@ethanradnora",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
