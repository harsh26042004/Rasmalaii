import { useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    if (playing) { el.pause(); setPlaying(false) }
    else { el.play(); setPlaying(true) }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-white/80 rounded-full border border-rose-200 px-3 py-2 shadow-sweet">
      <button onClick={toggle} className="text-sm font-medium text-rose-700 hover:text-rose-900">
        {playing ? 'Pause music' : 'Play music'}
      </button>
      <audio ref={audioRef} src="/bg-music.mp3" loop preload="auto" />
    </div>
  )
}
