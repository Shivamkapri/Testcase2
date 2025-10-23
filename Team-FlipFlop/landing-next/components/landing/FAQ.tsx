'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does MaaS work?',
      answer: 'MaaS (Memory as a Service) stores your agent\'s conversation context and interaction history. When your AI agent needs context, it queries our API which returns the most relevant memories instantly - like giving your AI a long-term memory.'
    },
    {
      question: 'What AI models are supported?',
      answer: 'We support all major LLM providers including OpenAI (GPT-3.5, GPT-4), Anthropic (Claude), Google (PaLM, Gemini), Meta (Llama 2), and open-source models. Our service is model-agnostic and works with any conversational AI.'
    },
    {
      question: 'How secure is my data?',
      answer: 'We take security seriously. All data is encrypted at rest with AES-256 and in transit with TLS 1.3. We\'re GDPR and SOC 2 compliant, with regular security audits. Your data is isolated in your own namespace and never used to train models.'
    },
    {
      question: 'Can I self-host MaaS?',
      answer: 'Yes! We offer on-premise and private cloud deployment options for enterprise customers. You get the same powerful API with complete control over your data and infrastructure.'
    },
    {
      question: 'What\'s your pricing model?',
      answer: 'We charge based on tokens processed and search queries. Start with our free tier (1M tokens, 10K queries), then scale with Pro ($19/mo) or Scale ($399/mo) plans. No surprise fees - only pay for what you use.'
    },
    {
      question: 'How do I migrate existing conversations?',
      answer: 'Our migration tools make it easy. Simply export your current conversation data (JSON, CSV, or database), then use our batch import API. We\'ll handle the indexing and optimization automatically. Most migrations complete in under an hour.'
    }
  ]

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Common questions
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about memory as a service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-800 rounded-xl overflow-hidden transition-all hover:border-blue-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left bg-gray-900 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 sm:px-6 pb-5 text-gray-300 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Have more questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 hover:text-blue-300 transition-all"
          >
            Contact our team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
