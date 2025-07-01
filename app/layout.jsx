import "./globals.css"

export const metadata = {
  title: "Ahmed  - Computer Science Student",
  description:
    "Computer Science student passionate about web development, specializing in React, Next.js, and modern web technologies.",
  keywords: ["Ahmed ", "Computer Science Student", "Web Developer", "React", "Next.js", "Web Development"],
  authors: [{ name: "Ahmed " }],
  creator: "Ahmed ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lsahmed.tech",
    title: "Ahmed  - Computer Science Student",
    description: "Computer Science student passionate about web development and building innovative projects",
    siteName: "Ahmed ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed  - Computer Science Student",
    description: "Computer Science student passionate about web development and building innovative projects",
    creator: "@Ahmedradnora",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
