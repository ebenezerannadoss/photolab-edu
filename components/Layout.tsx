import Nav from './Nav'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full">
        <Nav />
      </div>
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">{children}</main>
      <footer className="w-full text-center py-8 text-sm text-gray-400">© {new Date().getFullYear()} PhotoLab EDU — Learn Photography by Seeing the Difference.</footer>
    </div>
  )
}
