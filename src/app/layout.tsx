import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIP Calculator India | Step-Up SIP, Goal Planner & Investment Returns",
  description:
    "Free SIP calculator for India. Calculate systematic investment plan returns, step-up SIP benefits, lump sum vs SIP comparison, and plan your financial goals.",
  keywords: [
    "SIP calculator",
    "mutual fund calculator",
    "step up SIP",
    "goal based investing",
    "India",
    "systematic investment plan",
    "SIP calculator online",
    "mutual fund investment",
    "financial goal planner",
  ],
  metadataBase: new URL("https://sipcalcapp.vercel.app"),
  openGraph: {
    title: "SIP Calculator India | Step-Up SIP, Goal Planner & Investment Returns",
    description:
      "Free SIP calculator for India. Calculate systematic investment plan returns, step-up SIP benefits, and plan your financial goals.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SIP Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIP Calculator India | Step-Up SIP, Goal Planner & Investment Returns",
    description:
      "Free SIP calculator for India. Calculate systematic investment plan returns and plan your financial goals.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="googleb445e36c7da0e542"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4N56LRGCZ5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4N56LRGCZ5');`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8077190120013612"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
