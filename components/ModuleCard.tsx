import Link from 'next/link'

export default function ModuleCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link href={href}>
      <a className="block glass-card p-4 rounded-xl hover:scale-[1.01] transition-transform">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-300 mt-2">{description}</div>
      </a>
    </Link>
  )
}
