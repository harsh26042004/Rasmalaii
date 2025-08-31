import { useMemo, useState } from 'react'
import EnvelopeCard from './components/EnvelopeCard.jsx'
import LetterModal from './components/LetterModal.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import { LETTERS, PASSCODE } from './data/letters.js'
import { motion } from 'framer-motion'

export default function App() {
  const [selected, setSelected] = useState(null)
  const [unlocked, setUnlocked] = useState(false)
  const [code, setCode] = useState('')

  const grid = useMemo(() => LETTERS, [])

  const submitCode = (e) => {
    e.preventDefault()
    if (code.trim() === PASSCODE) setUnlocked(true)
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-rose-100 to-pink-50 p-6">
        <motion.div
          className="w-full max-w-md rounded-3xl glass p-8 border border-rose-200 shadow-sweet"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        >
          <div className="text-center mb-6">
            <div className="text-4xl">💌</div>
            <h1 className="handwritten text-3xl text-rose-800 mt-2">For You, With All My Love</h1>
            <p className="text-rose-700/80 mt-2">Enter our secret word to open your letters.</p>
          </div>
          <form onSubmit={submitCode} className="flex gap-2">
            <input
              type="password"
              placeholder="Secret passcode"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 rounded-xl border border-rose-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button className="rounded-xl bg-rose-600 text-white px-4 py-3 font-medium hover:bg-rose-700 shadow-sweet">
              Unlock
            </button>
          </form>
          <p className="text-xs text-rose-500 mt-3">Tip: Change the passcode in <code>src/data/letters.js</code>.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-rose-100 to-pink-50">
      <header className="px-6 sm:px-10 pt-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="handwritten text-3xl md:text-4xl text-rose-900">Open When — Letters for You</h1>
            <p className="text-rose-700/80">A little corner of the internet made just for you ❤️</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 text-sm bg-white/70 border border-rose-200 rounded-full px-4 py-2">
              <span>Made with love</span> <span>•</span> <span>Harsh</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
          {grid.map((l) => (
            <div
              key={l.id}
              onClick={() => setSelected(l)}
              style={{ cursor: 'pointer' }}
            >
              <EnvelopeCard
                title={l.title}
                emoji={l.emoji}
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 sm:px-10 pb-12 text-center text-rose-700/70">
        <p>Click any envelope to open your letter. New surprises may appear later ✨</p>
      </footer>

      <LetterModal open={!!selected} onClose={() => setSelected(null)} letter={selected} />
      <MusicPlayer />
    </div>
  )
}
