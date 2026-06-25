import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useMemo } from 'react'

function Subject({ type }: { type: string }) {
  // Simple geometry variations for subject types
  if (type === 'portrait') return (
    <mesh position={[0, 0.8, 0]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial color="#f6d365" metalness={0.1} roughness={0.6} />
    </mesh>
  )
  if (type === 'landscape') return (
    <mesh position={[0, 0, -2]}>
      <boxGeometry args={[6, 0.2, 6]} />
      <meshStandardMaterial color="#6ee7b7" />
    </mesh>
  )
  if (type === 'architecture') return (
    <mesh position={[0, 0.8, 0]}> 
      <boxGeometry args={[1.2, 1.8, 0.8]} />
      <meshStandardMaterial color="#c7d2fe" />
    </mesh>
  )
  if (type === 'wildlife') return (
    <mesh position={[0, 0.6, 0]}>
      <coneGeometry args={[0.6, 1.2, 16]} />
      <meshStandardMaterial color="#fca5a5" />
    </mesh>
  )
  return (
    <mesh>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color="#fef08a" />
    </mesh>
  )
}

function Scene({ focal, subject }: { focal: number; subject: string }) {
  const sensorHeightMm = 24 // full-frame 35mm sensor height in mm
  const fov = useMemo(() => {
    // Convert focal length (mm) to vertical FOV in degrees
    const f = focal
    const fovRad = 2 * Math.atan(sensorHeightMm / (2 * f))
    return (fovRad * 180) / Math.PI
  }, [focal])

  // We set camera fov via PerspectiveCamera component and useOrbit for preview
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.8} position={[5, 10, 5]} />
      <group>
        <Subject type={subject} />
      </group>
      {/* overlay readout rendered via HTML/CSS outside of canvas in parent component */}
      <PerspectiveCamera makeDefault fov={fov} position={[0, 1.6, 3]} />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 1.9} />
    </>
  )
}

export default function ThreeLensSimulator({ focal, subject }: { focal: number; subject: string }) {
  return (
    <div className="w-full h-96 relative rounded-2xl overflow-hidden">
      <Canvas>
        <Scene focal={focal} subject={subject} />
      </Canvas>
      <div className="absolute left-4 top-4 bg-black/40 glass-card p-2 rounded-lg text-sm">
        <div>Focal: <strong>{focal}mm</strong></div>
      </div>
      <div className="absolute right-4 bottom-4 bg-black/40 glass-card p-2 rounded-lg text-sm">
        <div>Subject: <strong>{subject}</strong></div>
      </div>
    </div>
  )
}
