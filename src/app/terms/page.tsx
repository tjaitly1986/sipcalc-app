import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | SIP Calculator",
  description:
    "Terms of service for SIP Calculator. Read the rules and disclaimers before using the tool.",
  alternates: { canonical: "https://sipcalcapp.vercel.app/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const updated = "April 18, 2026";

  return (
    <>
      <main className="min-h-screen bg-white text-slate-800">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Terms of Service</span>
          </nav>

          <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

          <div className="prose max-w-none mt-10 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using SIP Calculator at sipcalcapp.vercel.app (the &quot;Service&quot;), you
                agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not
                agree, please do not use the Service.
              </p>
              <p>
                These Terms form a binding agreement between you and TJ (Tushar Jaitly), the operator of SIP Calculator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">2. Description of Service</h2>
              <p>
                SIP Calculator is a free web-based tool that calculates expected returns on
                systematic investment plans (SIPs), step-up SIPs, lump-sum investments, and
                goal-based plans. All calculations happen in your browser. We do not store or
                transmit the numbers you enter. See our{" "}
                <Link href="/privacy" className="text-green-600 underline">Privacy Policy</Link> for details.
              </p>
            </section>

            <section className="rounded-lg border-2 border-amber-300 bg-amber-50 p-5">
              <h2 className="text-2xl font-semibold text-amber-900">3. Financial Disclaimer (Important)</h2>
              <p className="text-amber-900">
                <strong>SIP Calculator is an educational calculator, not financial advice.</strong>{" "}
                All outputs are hypothetical projections based on the numbers and assumed rate of
                return you provide. Actual mutual fund returns fluctuate daily and may be
                significantly lower than (or higher than) the inputs you choose.
              </p>
              <p className="text-amber-900 mt-2">
                We are not a SEBI-registered investment adviser (RIA), a mutual fund distributor,
                or a financial planner. Nothing on this Service constitutes a recommendation to
                buy, sell, or hold any security or scheme. Past performance is not indicative of
                future results. Mutual fund investments are subject to market risk; please read
                the scheme documents carefully before investing.
              </p>
              <p className="text-amber-900 mt-2">
                Before making any investment decision, consult a qualified, SEBI-registered
                financial advisor and review the scheme information document (SID) of any fund
                you are considering.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">4. User Responsibilities</h2>
              <p>When using the Service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the Service only for lawful, personal, educational purposes</li>
                <li>Not rely on calculator output as the sole basis for an investment decision</li>
                <li>Not attempt to reverse-engineer, scrape, or exploit the Service</li>
                <li>Not use automated means to abuse rate limits or hosting resources</li>
                <li>Respect intellectual property of third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">5. Intellectual Property</h2>
              <p>
                The Service, including its design, code, content, and branding, is owned
                by TJ (Tushar Jaitly) and protected by copyright, trademark, and other laws.
                Except as expressly permitted, you may not copy, modify, redistribute, or
                create derivative works of the Service.
              </p>
              <p>
                Any numbers you enter or results you generate through the Service remain yours.
                We claim no rights over your content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">6. Prohibited Uses</h2>
              <p>You may not use the Service to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violate any applicable law, regulation, or third-party right</li>
                <li>Engage in fraud, phishing, or deceptive practices</li>
                <li>Distribute malware or harmful code</li>
                <li>Harass, abuse, or harm others</li>
                <li>Interfere with the operation of the Service</li>
                <li>Resell the Service or present it as your own</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">7. Disclaimers</h2>
              <p>
                <strong>The Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without
                warranties of any kind</strong>, express or implied, including but not
                limited to merchantability, fitness for a particular purpose, and
                non-infringement. We do not warrant that the Service will be
                uninterrupted, error-free, or produce results accurate for every use case.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, TJ (Tushar Jaitly) and the operators
                of SIP Calculator shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of
                profits, data, goodwill, or investment capital, arising out of or in
                connection with your use of the Service. Total liability for any direct
                damages shall not exceed USD $100 or the amount you paid for the Service in
                the prior 12 months, whichever is greater (noting that the Service is free).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless TJ (Tushar Jaitly) and its operators
                from any claim, demand, loss, or expense arising from your use of the
                Service or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">10. Third-Party Links &amp; Services</h2>
              <p>
                The Service may contain links to third-party websites or services. We do
                not control or endorse those third parties and are not responsible for
                their content, policies, or practices. Your use of third-party services is
                governed by their respective terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">11. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Service at
                our sole discretion, with or without cause or notice. These Terms survive
                termination to the extent necessary to enforce rights and obligations that
                arose before termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">12. Governing Law</h2>
              <p>
                These Terms are governed by applicable laws and regulations without regard
                to conflict-of-law principles. Any dispute arising under these Terms will
                be resolved in a court of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">13. Changes &amp; Contact</h2>
              <p>
                We may revise these Terms from time to time. Revisions will be posted on
                this page with an updated &quot;Last updated&quot; date. Your continued use of the
                Service after changes constitutes acceptance of the revised Terms.
              </p>
              <p>
                For questions about these Terms, contact us at{" "}
                <a href="mailto:jaitly.tushar1@gmail.com" className="text-green-600 underline">our support email</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
