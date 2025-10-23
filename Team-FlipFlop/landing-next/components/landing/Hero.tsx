'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Hero() {
  const heroRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Smooth mouse following
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(mousePosition.x, springConfig)
  const mouseY = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.45], [0, 1])
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.65], [0, 1])
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100])
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [100, 0])
  const y3 = useTransform(scrollYProgress, [0.4, 0.65], [100, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
  <section ref={heroRef} className="relative min-h-[350vh] bg-black overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* First Screen - Problem (Information Overload) */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale }}
        className="sticky top-0 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Frustrated/Angry Emojis - Continuously shaking */}
          <motion.div
            animate={{ 
              rotate: [-15, 15, -15],
              x: [-3, 3, -3],
              y: [-3, 3, -3]
            }}
            transition={{ 
              duration: 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -left-8 sm:-left-20 top-10 text-5xl sm:text-7xl"
          >
            😡
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: [15, -15, 15],
              x: [3, -3, 3],
              y: [3, -3, 3]
            }}
            transition={{ 
              duration: 0.3,
              repeat: Infinity,
              ease: "linear",
              delay: 0.1
            }}
            className="absolute -right-8 sm:-right-20 top-10 text-5xl sm:text-7xl"
          >
            😡
          </motion.div>

          <motion.div
            animate={{ 
              rotate: [-12, 12, -12],
              scale: [1, 1.05, 1],
              y: [-2, 2, -2]
            }}
            transition={{ 
              duration: 0.3,
              repeat: Infinity,
              ease: "linear",
              delay: 0.05
            }}
            className="absolute -left-4 sm:-left-20 bottom-16 text-5xl sm:text-7xl md:text-8xl"
          >
            😡
          </motion.div>

          <motion.div
            animate={{ 
              rotate: [12, -12, 12],
              scale: [1, 1.05, 1],
              x: [2, -2, 2]
            }}
            transition={{ 
              duration: 0.3,
              repeat: Infinity,
              ease: "linear",
              delay: 0.15
            }}
            className="absolute -right-4 sm:-right-20 bottom-24 text-5xl sm:text-7xl md:text-8xl"
          >
            😡
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
            Information<br />
            <span className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 bg-clip-text text-transparent">scattered everywhere</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-7 py-5 rounded-3xl rounded-br-sm text-left inline-block max-w-lg shadow-2xl backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg font-medium">Where did we discuss the budget approval?</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-200 px-7 py-5 rounded-3xl rounded-bl-sm text-left inline-block max-w-lg ml-auto block shadow-2xl backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg font-medium">Was it in Slack? Email? Or that meeting last week? 🤔</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-7 py-5 rounded-3xl rounded-br-sm text-left inline-block max-w-lg shadow-2xl backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg font-medium">I can't find it anywhere... 😤</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Second Screen - Lost Context */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="sticky top-0 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Confused/Frustrated Emojis - Continuously shaking */}
          <motion.div
            animate={{ 
              rotate: [-10, 10, -10],
              x: [-2, 2, -2]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -left-12 sm:-left-32 top-8 text-4xl sm:text-6xl md:text-7xl"
          >
            😵‍💫
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: [10, -10, 10],
              x: [2, -2, 2]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              ease: "linear",
              delay: 0.1
            }}
            className="absolute -right-12 sm:-right-32 top-8 text-4xl sm:text-6xl md:text-7xl"
          >
            😵‍💫
          </motion.div>

          <motion.div
            animate={{ 
              rotate: [-8, 8, -8],
              y: [-2, 2, -2]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              ease: "linear",
              delay: 0.05
            }}
            className="absolute -left-8 sm:-left-28 bottom-16 text-4xl sm:text-6xl md:text-7xl"
          >
            😵‍💫
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
            Lost context,<br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">repeated work</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-7 py-5 rounded-3xl rounded-br-sm text-left inline-block max-w-lg shadow-2xl backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg font-medium">Why did we choose vendor B again?</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-200 px-7 py-5 rounded-3xl rounded-bl-sm text-left inline-block max-w-lg ml-auto block shadow-2xl backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg font-medium">I don't remember... let me check my notes 📝</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-7 py-5 rounded-3xl rounded-br-sm text-left inline-block max-w-lg shadow-2xl backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg font-medium">We're wasting so much time... 😵‍💫</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Third Screen - Solution (TeamMemory) */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="sticky top-0 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Love/Heart Emojis - Floating animation */}
          <motion.div
            animate={{ 
              y: [-10, -20, -10],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-12 sm:-left-32 top-8 text-4xl sm:text-6xl md:text-7xl"
          >
            ✨
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [-15, -25, -15],
              rotate: [0, -5, 5, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="absolute -right-12 sm:-right-32 top-8 text-4xl sm:text-6xl md:text-7xl"
          >
            ✨
          </motion.div>

          <motion.div
            animate={{ 
              y: [-8, -18, -8],
              x: [-2, 2, -2],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1
            }}
            className="absolute -left-8 sm:-left-28 bottom-16 text-4xl sm:text-6xl md:text-7xl"
          >
            ✨
          </motion.div>

          <motion.div
            animate={{ 
              y: [-12, -22, -12],
              x: [2, -2, 2],
              scale: [1, 1.08, 1]
            }}
            transition={{ 
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -right-8 sm:-right-28 bottom-24 text-4xl sm:text-6xl md:text-7xl"
          >
            ✨
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
            Meet <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">TeamMemory</span><br />
            <span className="text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent font-normal mt-4 inline-block">Your AI-powered memory layer</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-7 py-5 rounded-3xl rounded-br-sm text-left inline-block max-w-lg shadow-2xl backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg font-medium">Why did we choose vendor B?</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-emerald-700 text-white px-7 py-5 rounded-3xl rounded-bl-sm text-left inline-block max-w-lg ml-auto block shadow-2xl backdrop-blur-sm border border-green-500/30"
            >
              <p className="text-base sm:text-lg font-medium">Found it! On March 15, you decided on vendor B because of their 24/7 support and 20% cost savings. Details in Slack thread 🎯</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-7 py-5 rounded-3xl rounded-br-sm text-left inline-block max-w-lg shadow-2xl backdrop-blur-sm"
            >
              <p className="text-base sm:text-lg font-medium">This is exactly what we needed! ✨</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-bold rounded-2xl hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transform hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden">
              <span className="relative z-10">Start Free Trial →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border-2 border-white/20 text-lg font-semibold rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl" 
        />
      </div>
    </section>
  )
}