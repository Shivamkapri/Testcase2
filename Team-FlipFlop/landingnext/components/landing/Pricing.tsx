export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The fastest memory layer,<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              at a fraction of the cost
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Start free, experiment fast, and only pay when memory becomes your moat
          </p>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Ensure cards stack nicely on small screens */}
          {/* Free Plan */}
          <div className="relative p-6 sm:p-8 bg-gray-900 border-2 border-gray-800 rounded-2xl hover:shadow-2xl hover:border-gray-700 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">Perfect for getting started with memory as a service</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>1M tokens processed</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>10K search queries</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Email support</span>
              </li>
            </ul>
            <button className="w-full md:w-auto px-4 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-primary hover:text-primary hover:bg-slate-50 transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan - Popular */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-primary to-primary-hover text-white rounded-2xl shadow-xl md:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="inline-block px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full shadow-lg">
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">$19</span>
                <span className="opacity-90">/month</span>
              </div>
            </div>
            <p className="opacity-90 mb-6">Memory for power users and quick moving teams</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>3M tokens processed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>100K search queries</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <button className="w-full md:w-auto px-4 py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-50 transition shadow-lg">
              Start Pro Trial →
            </button>
          </div>

          {/* Scale Plan */}
          <div className="relative p-6 sm:p-8 bg-white border-2 border-slate-200 rounded-2xl hover:shadow-lg transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Scale</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-slate-900">$399</span>
                <span className="text-slate-600">/month</span>
              </div>
            </div>
            <p className="text-slate-600 mb-6">Enterprise-grade memory for large organizations</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>80M tokens processed</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>20M search queries</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Dedicated support</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Custom integration</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Slack support channel</span>
              </li>
            </ul>
            <button className="w-full md:w-auto px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600">
            All plans include encryption, GDPR compliance, and 99.9% uptime SLA
          </p>
        </div>
      </div>
    </section>
  )
}
