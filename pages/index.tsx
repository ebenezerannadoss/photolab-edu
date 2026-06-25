import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ModuleCard from '../components/ModuleCard'

export default function Home() {
  return (
    <Layout>
      <Hero />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Interactive Modules</h2>
        <p className="text-gray-300 mt-2">Try each visual module to learn by doing.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <ModuleCard title="Lens Simulator" href="/modules/lens-simulator" description="Focal length, FOV, perspective and compression" />
          <ModuleCard title="Exposure Triangle" href="#" description="ISO, Shutter Speed, Aperture interactions" />
          <ModuleCard title="Aperture Simulator" href="#" description="Depth of field, bokeh and sharpness" />
          <ModuleCard title="Lighting Studio" href="#" description="Drag lights and see live portrait updates" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Teacher Benefits</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card p-4 rounded-xl">Presentation mode with large controls</div>
          <div className="glass-card p-4 rounded-xl">Assignment & quiz generator</div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Student Experience</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card p-4 rounded-xl">Practice challenges</div>
          <div className="glass-card p-4 rounded-xl">AI photo review & recommendations</div>
        </div>
      </section>
    </Layout>
  )
}
