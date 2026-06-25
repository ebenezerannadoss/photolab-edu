# PhotoLab EDU

PhotoLab EDU is an interactive Progressive Web App for teaching photography visually. This branch provides a scaffold for the application with a working Lens Simulator (Module 1) using React Three Fiber.

Features in this scaffold:
- Next.js + TypeScript project structure
- Tailwind CSS styling with glassmorphism
- Framer Motion included for animations
- React Three Fiber + Drei for the interactive 3D modules
- Supabase client placeholder for auth and data
- PWA manifest and a small service worker
- Reusable components and pages: Home, Dashboard, Modules/Lens Simulator

Next steps:
- Add more modules (Exposure Triangle, Aperture, Shutter, ISO, Lighting Studio)
- Integrate Supabase authentication and database models for users, courses, assignments
- Replace simple SW with workbox/next-pwa for robust offline support and caching strategies
- Add tests, CI, and linting

To run locally:
1. Install dependencies: npm install
2. Create a .env.local with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
3. Run: npm run dev

