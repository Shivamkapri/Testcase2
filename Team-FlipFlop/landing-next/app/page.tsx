'use client'

import { useState } from 'react'

export default function Home() {
  const [responseLength, setResponseLength] = useState('Medium (1000 tokens)')
  const [temperature, setTemperature] = useState(0.3)
  const [sources, setSources] = useState(4)
  const [searchSource, setSearchSource] = useState('All sources')

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-4">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            KnowledgeBase Pro
          </h1>
          <button 
            onClick={() => window.open('http://localhost:3000/', '_blank')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              KnowledgeBase Pro
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Your AI-Powered Knowledge Assistant
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of your data with advanced RAG technology. Chat with your documents, 
            Figma designs, and Slack conversations in one intelligent interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('http://localhost:3000/', '_blank')}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition shadow-lg text-lg cursor-pointer"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Intelligence</h3>
              <p className="text-gray-400">Advanced RAG technology with Gemini AI for precise, contextual responses</p>
            </div>
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Multi-Source Knowledge</h3>
              <p className="text-gray-400">Integrates Figma designs, Slack conversations, and uploaded documents</p>
            </div>
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Real-Time Processing</h3>
              <p className="text-gray-400">Lightning-fast vector search with confidence scoring for reliable answers</p>
            </div>
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-gray-400">JWT authentication with encrypted data storage and user privacy protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Settings Demo */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Response Settings
            </h2>
            <p className="text-xl text-gray-400">🎤 Voice features available</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Response Length</h3>
                <select 
                  value={responseLength} 
                  onChange={(e) => setResponseLength(e.target.value)}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                >
                  <option>Short (500 tokens)</option>
                  <option>Medium (1000 tokens)</option>
                  <option>Long (2000 tokens)</option>
                  <option>Very Long (4000 tokens)</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Temperature ({temperature})</h3>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.1" 
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-sm text-gray-400 mt-2">Lower = more focused, Higher = more creative</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Sources to retrieve ({sources})</h3>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={sources}
                  onChange={(e) => setSources(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-sm text-gray-400 mt-2">More sources = broader context</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Search Source</h3>
                <select 
                  value={searchSource} 
                  onChange={(e) => setSearchSource(e.target.value)}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                >
                  <option>All sources</option>
                  <option>Figma designs only</option>
                  <option>Slack chats only</option>
                </select>
                <p className="text-sm text-gray-400 mt-2">Filter retrieval to only Figma design nodes or Slack chats</p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Good Confidence</span>
                </div>
                <span className="text-lg font-bold text-green-400">67%</span>
              </div>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition">
                Save as PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16 md:py-24 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect Your Knowledge Sources
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-xl font-bold mb-3">Documents</h3>
              <p className="text-gray-400">Upload PDFs, Word docs, and text files for AI analysis</p>
            </div>
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Figma Designs</h3>
              <p className="text-gray-400">Connect Figma projects and chat with your design files</p>
            </div>
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3">Slack Conversations</h3>
              <p className="text-gray-400">Import Slack history and find answers from past discussions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Vector Search Technology</h3>
                    <p className="text-gray-400">Advanced semantic search across all your data sources</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Confidence Scoring</h3>
                    <p className="text-gray-400">Know how reliable each answer is with accuracy percentages</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Multi-Modal Understanding</h3>
                    <p className="text-gray-400">Process text, images, and design files seamlessly</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Sample Query:</div>
                <div className="p-4 bg-gray-800 rounded-lg text-blue-300 italic">
                  "What are the design specifications for the login button in our mobile app?"
                </div>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Sources Found:</span>
                  <span className="text-blue-400">4 matches</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Response Time:</span>
                  <span className="text-green-400">0.8s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Confidence:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 font-bold">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unlock Your Knowledge?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start chatting with your data today. Advanced RAG technology meets intuitive design.
          </p>
          <button 
            onClick={() => window.open('http://localhost:3000/', '_blank')}
            className="px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition shadow-xl cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 KnowledgeBase Pro. Powered by advanced RAG technology.
          </p>
        </div>
      </footer>
    </main>
  )
}
