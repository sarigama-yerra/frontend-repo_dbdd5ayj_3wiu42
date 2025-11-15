import { useState } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Amber/Yellow Gradient Glow Layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-32 opacity-50 mix-blend-screen bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,196,0,0.25),transparent_60%)]" />
        <div className="absolute -inset-24 opacity-40 mix-blend-screen bg-[conic-gradient(from_180deg_at_50%_50%,rgba(246,176,24,0.2),rgba(255,230,120,0.12),rgba(246,176,24,0.2))] animate-drift-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_90%,rgba(255,209,77,0.08),transparent_60%)]" />
      </div>

      {/* Soft Grain + Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light grain-noise animate-grain" />

      {/* Geometric hints: subtle honeycomb + branching overlay */}
      <svg className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Honeycomb pattern */}
          <pattern id="hex" width="48" height="42" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
            <path d="M12 0l12 7 12-7 12 7v14l-12 7-12-7-12 7-12-7V7l12-7z" fill="none" stroke="rgba(255,224,130,0.18)" strokeWidth="0.5" />
          </pattern>
          {/* Branching gradient mask */}
          <linearGradient id="branchGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,200,60,0.0)" />
            <stop offset="40%" stopColor="rgba(255,200,60,0.08)" />
            <stop offset="100%" stopColor="rgba(255,200,60,0.0)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
        <g stroke="url(#branchGlow)" strokeWidth="0.6" fill="none">
          <path d="M5,90 Q20,70 40,80 T80,70 T120,60" />
          <path d="M20,120 Q40,95 70,110 T120,95 T180,85" />
          <path d="M80,10 Q100,30 130,25 T190,40 T260,50" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-2xl px-6 md:px-10">
          <div className="text-center space-y-8 md:space-y-10">
            <div className="inline-flex items-center justify-center">
              <div className="absolute -z-0 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl animate-pulse-glow" />
              <h1 className="relative z-10 text-4xl md:text-6xl tracking-tight font-semibold text-amber-100/90">
                DIKE Protocol
              </h1>
            </div>

            <p className="text-amber-100/70 text-base md:text-lg tracking-wide">
              Prediction has a new dimension.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-2 flex w-full max-w-xl items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@realm.xyz"
                  className="w-full rounded-md bg-white/5 text-amber-50 placeholder:text-amber-100/40 outline-none border border-amber-200/10 focus:border-amber-300/30 px-4 py-3 backdrop-blur-md transition-colors"
                />
                <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-amber-300/10" />
              </div>
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-md bg-amber-400/90 px-5 py-3 text-sm font-medium text-black shadow-[0_0_20px_rgba(255,200,60,0.3)] transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60"
              >
                <span className="relative z-10">Join the Waitlist</span>
                <span className="absolute inset-0 rounded-md bg-gradient-to-br from-amber-300/40 to-yellow-200/10 opacity-0 blur-md transition-opacity group-hover:opacity-100 animate-pulse-subtle" />
              </button>
            </form>

            {submitted && (
              <div className="text-amber-100/70 text-sm md:text-base animate-in">
                Invitation pending. The door will know your name.
              </div>
            )}

            {/* Micro gradient bands */}
            <div className="pointer-events-none mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
            <div className="pointer-events-none mx-auto h-[1px] w-1/2 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent animate-drift-bands" />

            <div className="pt-2 text-xs uppercase tracking-[0.25em] text-amber-100/30">Soon</div>
          </div>
        </div>
      </div>

      {/* Vignette for cinematic focus */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_140%_at_50%_0%,transparent_30%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  )
}

export default App
