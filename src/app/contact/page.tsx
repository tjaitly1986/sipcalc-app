import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | SIP Calculator",
  description:
    "Contact SIP Calculator — report a bug, request a feature, or ask a question. We read every message.",
  alternates: { canonical: "https://sipcalcapp.vercel.app/contact" },
  robots: { index: true, follow: true },
};

const bugMailto =
  "mailto:jaitly.tushar1@gmail.com?subject=%5BSIPCalculator%5D%20Bug%20Report&body=What%20happened%3A%0A%0AWhat%20I%20expected%3A%0A%0ABrowser%20%26%20OS%3A%0A%0AURL%3A%20";
const featureMailto =
  "mailto:jaitly.tushar1@gmail.com?subject=%5BSIPCalculator%5D%20Feature%20Request&body=What%20would%20you%20like%20SIP%20Calculator%20to%20do%3F%0A%0AWhy%20does%20it%20matter%20to%20you%3F%0A%0A";
const generalMailto = "mailto:jaitly.tushar1@gmail.com";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-slate-800">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>

          <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
          <p className="mt-3 text-lg text-slate-600">
            Bugs, feature requests, partnership ideas, or just a nice hello — we read every message.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <a href={bugMailto} className="group block rounded-xl border border-slate-200 bg-white p-6 hover:border-green-600 hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-green-600">Report a Bug</h2>
              <p className="mt-2 text-sm text-slate-600">Something not working as expected? Tell us what happened, what you expected, and which browser you were using.</p>
              <p className="mt-4 text-sm font-medium text-green-600">Email a bug report &rarr;</p>
            </a>
            <a href={featureMailto} className="group block rounded-xl border border-slate-200 bg-white p-6 hover:border-green-600 hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-green-600">Request a Feature</h2>
              <p className="mt-2 text-sm text-slate-600">Is there something SIP Calculator should do that it doesn&apos;t? We&apos;d love to hear about it. The smallest details matter.</p>
              <p className="mt-4 text-sm font-medium text-green-600">Send a feature idea &rarr;</p>
            </a>
            <a href={generalMailto} className="group block rounded-xl border border-slate-200 bg-white p-6 hover:border-green-600 hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-green-600">General Inquiry</h2>
              <p className="mt-2 text-sm text-slate-600">Press, partnerships, advertising, or anything else. Drop us a line and we&apos;ll get back to you.</p>
              <p className="mt-4 text-sm font-medium text-green-600">Send a general email &rarr;</p>
            </a>
          </div>

          <section className="mt-12 rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Direct Contact</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
              <div>
                <dt className="text-slate-500">Support email</dt>
                <dd><a href="mailto:jaitly.tushar1@gmail.com" className="text-green-600 underline font-medium">Email our support team</a></dd>
              </div>
              <div>
                <dt className="text-slate-500">GitHub</dt>
                <dd><a href="https://github.com/tjaitly1986" target="_blank" rel="noopener noreferrer" className="text-green-600 underline font-medium">@tjaitly1986</a></dd>
              </div>
              <div>
                <dt className="text-slate-500">Response time</dt>
                <dd className="text-slate-700">Within 48&ndash;72 hours (usually faster)</dd>
              </div>
              <div>
                <dt className="text-slate-500">Operator</dt>
                <dd className="text-slate-700">TJ (Tushar Jaitly)</dd>
              </div>
            </dl>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">Before You Reach Out</h2>
            <p className="mt-2 text-slate-700">Some quick answers that might save you a round trip:</p>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-6">
              <li>Your numbers stay on your device. We do not store anything you enter. See the{" "}
                <Link href="/privacy" className="text-green-600 underline">Privacy Policy</Link> for details.
              </li>
              <li>The tool is free and there is no signup required. If you see a signup request, you&apos;re on the wrong site.</li>
              <li>We are not SEBI-registered advisors and cannot give you personal investment advice. Please consult a qualified advisor for that.</li>
              <li>We don&apos;t accept unsolicited guest posts or link exchanges. Please don&apos;t email about those.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
