export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Sub-300ms recall time. Retrieve memories 10× faster than alternatives.',
      metric: '10× faster'
    },
    {
      icon: '🧠',
      title: 'Human-like Memory',
      description: 'Built like the human brain with forgetfulness, updates, and contextual understanding.',
      metric: '95% accuracy'
    },
    {
      icon: '💸',
      title: 'Cost Effective',
      description: 'Enterprise-grade memory at 70% lower cost. No bloated infrastructure.',
      metric: '70% savings'
    },
    {
      icon: '🔗',
      title: 'Universal Integration',
      description: 'Connect Slack, Notion, Gmail, Teams, and 20+ tools instantly.',
      metric: '20+ integrations'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'SOC 2 compliant, end-to-end encryption, and GDPR ready out of the box.',
      metric: 'SOC 2 certified'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Get insights into decisions, patterns, and knowledge gaps across your team.',
      metric: 'Live insights'
    }
  ]

  return (
    <section id="features" className="py-12 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Works with every model.<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Faster. Better. Cheaper.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Everything your team needs to never forget important context
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 lg:p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:bg-gray-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-4">{feature.icon}</div>
              <div className="mb-3">
                <span className="inline-block px-2.5 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">
                  {feature.metric}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
