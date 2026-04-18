import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">SIP Calculator</h3>
            <p className="mt-2 text-sm text-slate-600">
              Free SIP, step-up SIP, and goal-planning calculator for Indian investors.
              Client-side only — your numbers stay in your browser.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Product</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="text-slate-600 hover:text-green-600">Calculator</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-green-600">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-600 hover:text-green-600">About</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-green-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy" className="text-slate-600 hover:text-green-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-600 hover:text-green-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} SIP Calculator. All rights reserved.</p>
          <p className="text-xs text-slate-500">
            Built by{" "}
            <a href="https://github.com/tjaitly1986" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">TJ</a>
            {" "}&middot;{" "}
            <a href="mailto:jaitly.tushar1@gmail.com" className="text-green-600 hover:underline">Email Support</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
