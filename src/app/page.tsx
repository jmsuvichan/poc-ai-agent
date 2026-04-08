import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Optimized inference pipeline delivers responses in milliseconds with no compromise on quality.",
  },
  {
    icon: "🔐",
    title: "Secure by Default",
    desc: "End-to-end encryption and role-based access control keep your data safe at all times.",
  },
  {
    icon: "🧠",
    title: "Intelligent Agents",
    desc: "Build multi-step AI agents that reason, plan, and execute complex tasks autonomously.",
  },
  {
    icon: "🔗",
    title: "Easy Integration",
    desc: "Connect to your existing tools with our REST API, webhooks, and pre-built connectors.",
  },
  {
    icon: "📊",
    title: "Full Observability",
    desc: "Monitor every agent run with detailed traces, logs, and performance metrics.",
  },
  {
    icon: "🌐",
    title: "Global Scale",
    desc: "Deploy agents across multiple regions with automatic load balancing and failover.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4">
        {/* Background gradient blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-200 opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-200 opacity-40 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-300 bg-yellow-50 text-yellow-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            Now in Beta
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Build smarter agents
            <span className="block bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
              ship faster products
            </span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            POCAgent is an AI-native platform for building, testing, and deploying
            intelligent agents. From prototype to production — in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="px-8 py-4 rounded-xl text-base font-semibold text-gray-900 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start for free →
            </Link>
            <Link
              href="#"
              className="px-8 py-4 rounded-xl text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200"
            >
              View demo
            </Link>
          </div>

          <p className="mt-5 text-sm text-gray-400">No credit card required · Free tier available</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-200 bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "10M+", label: "Agent runs" },
            { value: "500+", label: "Companies" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<50ms", label: "Avg latency" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to ship AI
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              A complete toolkit for building production-ready AI agents without the complexity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative z-10">
            Ready to build your first agent?
          </h2>
          <p className="text-amber-900 mb-8 text-lg relative z-10">
            Join thousands of developers already building the future with POCAgent.
          </p>
          <Link
            href="#"
            className="relative z-10 inline-block px-8 py-4 rounded-xl text-base font-semibold text-yellow-700 bg-white hover:bg-yellow-50 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get started free →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 px-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} POCAgent · Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
