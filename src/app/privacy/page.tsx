import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SIP Calculator",
  description:
    "Privacy policy for SIP Calculator. We process everything client-side — your investment numbers never leave your browser.",
  alternates: { canonical: "https://sipcalcapp.vercel.app/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const updated = "April 18, 2026";

  return (
    <>
      <main className="min-h-screen bg-white text-slate-800">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </nav>

          <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

          <div className="prose max-w-none mt-10 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">1. Introduction</h2>
              <p>
                SIP Calculator (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a free web application that helps Indian investors calculate systematic investment plan (SIP) returns, step-up SIPs, and goal-based investment plans. We are committed to protecting your privacy. This policy
                explains what information we do and do not collect, how it is used, and
                what choices you have.
              </p>
              <p>
                By using SIP Calculator (the &quot;Service&quot;) at sipcalcapp.vercel.app, you agree to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">2. Information We Do Not Collect</h2>
              <p>
                SIP Calculator is designed to be privacy-first. <strong>We do not collect, store, transmit, or share any of the investment numbers you enter into the tool.</strong>{" "}
                All calculations happen locally in your browser using JavaScript. Your inputs never leave your device.
              </p>
              <p>Specifically, we do not collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Monthly SIP amounts, lump-sum amounts, or expected returns you enter</li>
                <li>Investment horizons, step-up percentages, or financial goals</li>
                <li>Personal identification such as name, address, phone number, or PAN</li>
                <li>Account credentials (there are no user accounts)</li>
                <li>Payment information (the Service is free)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">3. Information Collected Automatically</h2>
              <p>
                To understand how visitors use the Service and to fund its ongoing
                development, we use the following third-party services that may collect
                limited technical data:
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-4">3.1 Google Analytics 4 (GA4)</h3>
              <p>
                We use Google Analytics 4 to measure aggregate, anonymized traffic
                patterns (page views, session duration, referring sites, approximate
                geographic region, device type, and browser). GA4 uses cookies and
                similar technologies. The data collected is aggregated and does not
                personally identify you.
              </p>
              <p>
                You can opt out of Google Analytics via the official{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-4">3.2 Google AdSense</h3>
              <p>
                We display advertising via Google AdSense to support the free operation
                of this Service. Google, as a third-party vendor, uses cookies (including
                the DART cookie) to serve ads based on your prior visits to this and
                other websites.
              </p>
              <p>
                You can opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Google Ads Settings</a>{" "}
                or by using the{" "}
                <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Digital Advertising Alliance opt-out page</a>.
                More information is available in Google&apos;s{" "}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">advertising policies</a>.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-4">3.3 Server Logs</h3>
              <p>
                Our hosting provider (Vercel) maintains standard server logs including IP
                address, user agent, timestamp, and requested URL. These logs are used
                for security, performance monitoring, and abuse prevention, and are
                retained per the hosting provider&apos;s policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">4. Cookies &amp; Tracking Technologies</h2>
              <p>We use the following categories of cookies:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Analytics cookies</strong> set by Google Analytics (_ga, _gid, etc.)</li>
                <li><strong>Advertising cookies</strong> set by Google AdSense and partner networks</li>
                <li><strong>No first-party tracking cookies</strong> are set by SIP Calculator itself</li>
              </ul>
              <p>
                You can manage or disable cookies through your browser settings. Disabling
                cookies will not affect the core functionality of the tool.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">5. Third-Party Services</h2>
              <p>We rely on the following trusted third parties:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Vercel</strong> &mdash; hosting and content delivery</li>
                <li><strong>Google Analytics 4</strong> &mdash; aggregated usage analytics</li>
                <li><strong>Google AdSense</strong> &mdash; advertising</li>
              </ul>
              <p>Each provider has its own privacy policy. We encourage you to review them.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">6. Data Security</h2>
              <p>
                Because we do not collect or store your tool inputs, there is no database
                of personal data that could be breached. The Service is served over
                HTTPS. We take reasonable measures to protect the small amount of
                technical data that is collected (via our analytics and hosting providers).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">7. Children&apos;s Privacy</h2>
              <p>
                SIP Calculator is not directed at children under 13. We do not knowingly
                collect personal information from children under 13. If you believe a
                child has provided us with personal information, please contact us and we
                will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">8. International Users &amp; GDPR</h2>
              <p>
                If you are located in the European Economic Area (EEA) or United Kingdom,
                the General Data Protection Regulation (GDPR) grants you rights including
                access, rectification, erasure, and data portability regarding any
                personal data we process. The legal basis for our processing of cookie
                data is your consent, which you can withdraw at any time by disabling
                cookies in your browser.
              </p>
              <p>
                To exercise any GDPR right, contact us at{" "}
                <a href="mailto:jaitly.tushar1@gmail.com" className="text-green-600 underline">our support email</a>.
              </p>
            </section>

            <section id="california">
              <h2 className="text-2xl font-semibold text-slate-900">9. California Privacy Rights (CCPA / CPRA)</h2>
              <p>
                If you are a California resident, the California Consumer Privacy Act
                (CCPA) and California Privacy Rights Act (CPRA) provide you with specific
                rights regarding your personal information. We do not sell personal
                information. The limited data our analytics and advertising partners
                collect is governed by their respective policies.
              </p>
              <p>
                <strong>Do Not Sell or Share My Personal Information:</strong> To exercise
                this right regarding advertising cookies, please use the opt-out links in
                Section 3.2 above or email{" "}
                <a href="mailto:jaitly.tushar1@gmail.com" className="text-green-600 underline">our support email</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">10. Your Choices</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Disable cookies in your browser to block analytics and ads</li>
                <li>Use the Google Analytics opt-out add-on linked above</li>
                <li>Use Google Ads Settings to manage personalized ads</li>
                <li>Use private/incognito browsing for session-only visits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Updates will be
                posted on this page with a new &quot;Last updated&quot; date. Material changes will
                be highlighted at the top of the page for at least 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">12. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or how we handle data, please contact us:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><a href="mailto:jaitly.tushar1@gmail.com" className="text-green-600 underline">Email our support team</a></li>
                <li>GitHub: <a href="https://github.com/tjaitly1986" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">tjaitly1986</a></li>
                <li>Operator: TJ (Tushar Jaitly)</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
