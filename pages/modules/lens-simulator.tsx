import Layout from '../../components/Layout'
import dynamic from 'next/dynamic'
import { useState } from 'react'

// Load Canvas dynamically to avoid SSR issues
const ThreeLensSimulator = dynamic(() => import('../../components/ThreeLensSimulator'), { ssr: false })

export default function LensModule() {
  const [focal, setFocal] = useState(50)
  const [subject, setSubject] = useState('portrait')

  return (
    <Layout>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-4 rounded-2xl">
          <ThreeLensSimulator focal={focal} subject={subject} />
        </div>

        <aside className="glass-card p-4 rounded-2xl">
          <h3 className="font-semibold">Lens Controls</h3>
          <div className="mt-4">
            <label className="text-sm text-gray-300">Focal Length: {focal}mm</label>
            <input
              type="range"
              min={14}
              max={400}
              value={focal}
              onChange={(e) => setFocal(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm text-gray-300">Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full mt-2 p-2 rounded-lg bg-black/20">
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
              <option value="architecture">Architecture</option>
              <option value="wildlife">Wildlife</option>
              <option value="street">Street</option>
            </select>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Readouts</h4>
            <ul className="mt-2 text-sm text-gray-300">
              <li>Field of View: dynamic</li>
              <li>Perspective & Compression: visual</li>
              <li>Working Distance: adjustable</li>
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
