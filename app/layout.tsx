import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700', '900'],
   style: ['normal', 'italic'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhi Ketu Chakma | Student",

  description:
    "Explore the portfolio of Akhi Ketu Chakma, showcasing web development projects, robotics work, university notes, research, and creative technical solutions.",

  keywords: [
    "Akhi Ketu Chakma",
    "portfolio",
    "student developer",
    "full stack developer",
    "web development",
    "robotics",
    "projects",
    "university notes",
    "research",
  ],

  authors: [
    {
      name: "Akhi Ketu Chakma",
    },
  ],

  creator: "Akhi Ketu Chakma",
  generator: "Next.js",

  openGraph: {
    title: "Akhi Ketu Chakma | Student ",
    description:
      "Explore my web development projects, robotics work, university journey, research, and technical skills.",
    type: "website",
    siteName: "Akhi Ketu Chakma Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akhi Ketu Chakma | Student",
    description:
      "Explore my projects, university notes, research, and technical journey.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f5f1e8",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#1a1a1a",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akhi Ketu Chakma",
    jobTitle: "Student and Full Stack Developer",
    description:
      "Student, full stack developer, robotics enthusiast, and creative technologist.",
    knowsAbout: [
      "Full Stack Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Robotics",
      "Internet of Things",
      "Research",
    ],
  };

  return (
    <html
      lang="en"
      className={`${lato.className} scroll-smooth bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="bg-background text-foreground antialiased">
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
