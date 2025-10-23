'use client'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Pricing from '@/components/landing/Pricing'
import FAQ from '@/components/landing/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Circular Orbit Animation Banner */}
      <div className="w-full bg-black border-b border-gray-800 py-12 flex flex-col items-center relative overflow-visible">
        <style jsx>{`
          .orbit {
            position: relative;
          }
          .orbit-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 70px;
            height: 70px;
            background: white;
            border-radius: 50%;
            padding: 12px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.3);
            object-fit: contain;
          }
          .orbit-icon[data-i='0'] {
            transform: rotate(0deg) translate(280px) rotate(0deg);
            animation: orbit-rotate-0 20s linear infinite;
            animation-delay: 0s;
          }
          .orbit-icon[data-i='1'] {
            transform: rotate(60deg) translate(280px) rotate(-60deg);
            animation: orbit-rotate-1 20s linear infinite;
            animation-delay: -3.33s;
          }
          .orbit-icon[data-i='2'] {
            transform: rotate(120deg) translate(280px) rotate(-120deg);
            animation: orbit-rotate-2 20s linear infinite;
            animation-delay: -6.66s;
          }
          .orbit-icon[data-i='3'] {
            transform: rotate(180deg) translate(280px) rotate(-180deg);
            animation: orbit-rotate-3 20s linear infinite;
            animation-delay: -10s;
          }
          .orbit-icon[data-i='4'] {
            transform: rotate(240deg) translate(280px) rotate(-240deg);
            animation: orbit-rotate-4 20s linear infinite;
            animation-delay: -13.33s;
          }
          .orbit-icon[data-i='5'] {
            transform: rotate(300deg) translate(280px) rotate(-300deg);
            animation: orbit-rotate-5 20s linear infinite;
            animation-delay: -16.66s;
          }
          @keyframes orbit-rotate-0 {
            0% { transform: rotate(0deg) translate(280px) rotate(0deg); }
            100% { transform: rotate(360deg) translate(280px) rotate(-360deg); }
          }
          @keyframes orbit-rotate-1 {
            0% { transform: rotate(60deg) translate(280px) rotate(-60deg); }
            100% { transform: rotate(420deg) translate(280px) rotate(-420deg); }
          }
          @keyframes orbit-rotate-2 {
            0% { transform: rotate(120deg) translate(280px) rotate(-120deg); }
            100% { transform: rotate(480deg) translate(280px) rotate(-480deg); }
          }
          @keyframes orbit-rotate-3 {
            0% { transform: rotate(180deg) translate(280px) rotate(-180deg); }
            100% { transform: rotate(540deg) translate(280px) rotate(-540deg); }
          }
          @keyframes orbit-rotate-4 {
            0% { transform: rotate(240deg) translate(280px) rotate(-240deg); }
            100% { transform: rotate(600deg) translate(280px) rotate(-600deg); }
          }
          @keyframes orbit-rotate-5 {
            0% { transform: rotate(300deg) translate(280px) rotate(-300deg); }
            100% { transform: rotate(660deg) translate(280px) rotate(-660deg); }
          }
        `}</style>
        <div className="relative flex items-center justify-center" style={{ height: '650px', width: '850px' }}>
          {/* Rotating icons in a circle */}
          <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg z-10">
              TeamMemory
            </span>
          </div>
          {/* Orbit icons */}
          <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="orbit relative" style={{ height: '620px', width: '620px' }}>
        <img src="/icons/slack.png" alt="Slack" className="orbit-icon" data-i="0" />
        <img src="/icons/notion.png" alt="Notion" className="orbit-icon" data-i="1" />
        <img src="/icons/google.png" alt="Google Workspace" className="orbit-icon" data-i="2" />
        <img src="/icons/slack.png" alt="Slack" className="orbit-icon" data-i="3" />
        <img src="/icons/notion.png" alt="Notion" className="orbit-icon" data-i="4" />
        <img src="/icons/google.png" alt="Google" className="orbit-icon" data-i="5" />
            </div>
          </div>
        </div>
      </div>

      <Hero />
      
      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              😫 Sound Familiar?
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6 mb-12">
            <div className="flex items-center gap-4 text-lg text-gray-300">
              <span className="text-3xl">❌</span>
              <p>"What did we decide about this?"</p>
            </div>
            <div className="flex items-center gap-4 text-lg text-gray-300">
              <span className="text-3xl">❌</span>
              <p>"Who suggested that approach?"</p>
            </div>
            <div className="flex items-center gap-4 text-lg text-gray-300">
              <span className="text-3xl">❌</span>
              <p>"When did we discuss the budget?"</p>
            </div>
            <div className="flex items-center gap-4 text-lg text-gray-300">
              <span className="text-3xl">❌</span>
              <p>"Why did we choose this tool?"</p>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto p-8 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl text-center">
            <p className="text-xl text-gray-200">
              Teams waste <strong className="text-red-500">20% of their time</strong> searching for information that already exists.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              ✨ One AI That Remembers Everything
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <div className="p-8 border-2 border-blue-500 rounded-xl text-center min-w-[200px] bg-gray-900">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Automatic Collection</h3>
              <p className="text-gray-300">Connects to all your work tools</p>
            </div>
            <span className="text-4xl font-bold text-blue-400 hidden md:block">→</span>
            <div className="p-8 border-2 border-blue-500 rounded-xl text-center min-w-[200px] bg-gray-900">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Ask Anything</h3>
              <p className="text-gray-300">Get instant answers</p>
            </div>
          </div>
          
          <ul className="max-w-xl mx-auto space-y-3 text-lg text-gray-300">
            <li>• Connects to all your work tools</li>
            <li>• Captures decisions automatically</li>
            <li>• Answers questions instantly</li>
            <li>• Works on mobile & desktop</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How TeamMemory Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bold text-white mb-3">Connect Your Tools</h3>
              <p className="text-lg text-gray-400">Link Slack, Notion, Gmail in 2 mins</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Captures Decisions</h3>
              <p className="text-lg text-gray-400">Automatically detects important info</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-bold text-white mb-3">Ask Natural Questions</h3>
              <p className="text-lg text-gray-400">"What database did we choose?"</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition shadow-lg">
              See It In Action →
            </button>
          </div>
        </div>
      </section>

      <Features />

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Fast-Moving Teams
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto p-8 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl text-center mb-12">
            <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-xl text-gray-300 italic mb-6">
              "TeamMemory saved us 10+ hours per week searching for decisions and context. 
              It's like having a perfect memory for our entire team."
            </blockquote>
            <div className="text-gray-400">
              <strong className="text-white">Sarah Chen</strong>, CTO at TechCo
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company) => (
              <div key={company} className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 font-semibold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Never Forget Again?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ teams using TeamMemory to supercharge their collective memory.
          </p>
          <button className="px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition shadow-xl">
            Start 14-Day Free Trial
          </button>
          <p className="mt-4 text-sm opacity-80">No credit card required</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
