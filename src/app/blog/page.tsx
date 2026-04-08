import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SIP Blog | Investment Articles & Financial Planning Tips",
  description:
    "Read our blog for insights on SIP investments, step-up SIP, lump sum vs SIP, and financial goal planning.",
  openGraph: {
    title: "SIP Blog | Investment Articles & Financial Planning Tips",
    description:
      "Read our blog for insights on SIP investments, step-up SIP, lump sum vs SIP, and financial goal planning.",
  },
};

const blogPosts = [
  {
    slug: "sip-calculator-guide",
    title: "What is SIP? Complete Guide to Systematic Investment Plans in India",
    excerpt:
      "Learn what SIP is, how it works, and why it's one of the best investment strategies for beginners in India.",
    date: "2026-04-08",
    readTime: "8 min read",
  },
  {
    slug: "step-up-sip-benefits",
    title:
      "Step-Up SIP: How Increasing Your SIP by 10% Yearly Can Double Your Corpus",
    excerpt:
      "Discover the power of step-up SIP and how a simple annual increase can significantly boost your wealth.",
    date: "2026-04-07",
    readTime: "7 min read",
  },
  {
    slug: "sip-vs-lumpsum",
    title: "SIP vs Lump Sum: Which Investment Strategy is Better for You?",
    excerpt:
      "Compare SIP and lump sum investments to find the strategy that aligns with your financial goals.",
    date: "2026-04-06",
    readTime: "9 min read",
  },
  {
    slug: "financial-goal-planning",
    title: "How to Plan Your Financial Goals Using SIP Investments",
    excerpt:
      "A step-by-step guide to setting financial goals and creating an investment plan to achieve them.",
    date: "2026-04-05",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">SIP Investment Blog</h1>
          <p className="text-green-100">
            Expert insights and guides on systematic investment planning
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden cursor-pointer group">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-block text-green-600 font-semibold">
                    Read More →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            <p>© 2026 SIP Calculator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
