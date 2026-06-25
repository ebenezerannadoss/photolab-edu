import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl sm:text-5xl font-extrabold leading-tight">
            PhotoLab EDU
            <div className="text-lg font-medium mt-2 text-gray-300">Learn Photography by Seeing the Difference.</div>
          </motion.h1>

          <p className="mt-6 text-gray-300 max-w-xl">Interactive virtual photography laboratory — manipulate lenses, exposure, lighting and instantly see results. Built for teachers and learners to experiment visually.</p>

          <div className="mt-6 flex gap-4">
            <a href="/modules/lens-simulator" className="px-5 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold shadow-soft">Try Lens Simulator</a>
            <a href="/dashboard" className="px-5 py-3 rounded-lg border border-white/6 text-sm">Open Dashboard</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl">Interactive modules</div>
            <div className="glass-card p-4 rounded-xl">Teacher Presentation Mode</div>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-4 h-80 flex items-center justify-center">
          {/* Placeholder for interactive preview or animated Three.js scene */}
          <div className="text-center text-gray-300">Interactive preview (try the Lens Simulator)</div>
        </div>
      </div>
    </section>
  )
}
