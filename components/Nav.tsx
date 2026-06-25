import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between">
      <Link href="/">
        <a className="flex items-center gap-3 font-semibold text-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center text-black font-bold">PL</div>
          <span>PhotoLab EDU</span>
        </a>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/dashboard"><a className="text-sm text-muted">Dashboard</a></Link>
        <Link href="/modules/lens-simulator"><a className="ml-2 px-4 py-2 rounded-lg bg-white/6 glass-card text-sm">Launch Demo</a></Link>
      </div>
    </nav>
  )
}
