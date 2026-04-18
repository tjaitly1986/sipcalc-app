import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | SIP Calculator",
  description:
    "About SIP Calculator — who built it, why it exists, and how it stays free and private.",
  alternates: { canonical: "https://sipcalcapp.vercel.app/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About SIP Calculator",
    description: "Who built SIP Calculator, why it exists, and our privacy philosophy.",
    url: "https://sipcalcapp.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-slate-800">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <span>About</span>
          </nav>

          <h1 className="text-4xl font-bold text-slate-900">About SIP Calculator</h1>
          <p className="mt-3 text-lg text-slate-600">Free SIP, step-up, and goal-planning calculator for Indian investors</p>

          <div className="prose max-w-none mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Why This Tool Exists</h2>
              <p>
                SIP Calculator was built to solve one focused problem well, without asking
                you to sign up, install anything, or hand over your financial data. Too many
                tools on the internet wrap a simple utility in an account wall, an email
                capture, or a heavy SaaS interface. This one doesn&apos;t.
              </p>
              <p>
                Our thesis is simple: the best small tools are ones you can use in under
                ten seconds, trust with sensitive inputs, and come back to any time
                without friction. That&apos;s the bar we hold ourselves to.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">How It Works</h2>
              <p>
                SIP Calculator runs every calculation in your browser using modern JavaScript.
                Nothing you type is uploaded to our servers. We see page views (anonymized, via
                Google Analytics) but never your investment amounts, return assumptions, or goals.
              </p>
              <p>
                If your internet connection drops after the page loads, the tool keeps
                working. That&apos;s not an accident — it&apos;s the architecture. Client-side
                processing is faster, more private, and more resilient than any
                server-backed alternative.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Our Privacy Philosophy</h2>
              <p>
                We do not collect, store, or transmit the numbers you enter into the tool.
                There is no database of user submissions because there is no submission to
                the server in the first place. The only data we see is standard web
                analytics: page views, referrers, rough geography, browser — the
                aggregated kind of data that every website receives.
              </p>
              <p>
                Read the full details in our{" "}
                <Link href="/privacy" className="text-green-600 underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Not Financial Advice</h2>
              <p>
                SIP Calculator is a calculator. It is not investment advice, a recommendation
                to buy any scheme, or a substitute for a SEBI-registered advisor. Projections
                are hypothetical based on the rate of return you choose. Mutual fund
                investments are subject to market risk; read scheme-related documents
                carefully before investing. See our{" "}
                <Link href="/terms" className="text-green-600 underline">Terms of Service</Link>{" "}
                for the full financial disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Who Built This</h2>
              <p>
                SIP Calculator is built and maintained by TJ (Tushar Jaitly), a Solution
                Architect who spends his nights and weekends shipping small, focused tools
                that scratch real itches. The broader portfolio is a collection of
                utilities — each solving one problem, each free, each privacy-first.
              </p>
              <p>
                You can find the rest of the portfolio and follow along on{" "}
                <a href="https://github.com/tjaitly1986" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">GitHub</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">How This Tool Stays Free</h2>
              <p>
                SIP Calculator is funded by non-intrusive display advertising (Google
                AdSense) on some pages. That covers hosting and keeps the tool free for
                everyone. If you want to support it without seeing ads, sharing the tool
                with someone who needs it is the best thing you can do — word of mouth is
                how a free utility survives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Tech Credits</h2>
              <p>
                SIP Calculator is built with{" "}
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Next.js</a>,{" "}
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">React</a>,{" "}
                <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">TypeScript</a>, and{" "}
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Tailwind CSS</a>.
                It is hosted on{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Vercel</a>.
                Thank you to all the open-source maintainers whose work makes this possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Get in Touch</h2>
              <p>
                Found a bug? Have a feature request? Want to suggest a tool we should
                build next? We read every message. Visit our{" "}
                <Link href="/contact" className="text-green-600 underline">contact page</Link>{" "}
                to reach out.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
