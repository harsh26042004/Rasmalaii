import { motion, AnimatePresence } from 'framer-motion'

export default function LetterModal({ open, onClose, letter }) {
  // Prevent rendering if letter is null/undefined
  if (!open || !letter) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-2xl rounded-2xl glass shadow-2xl border border-rose-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 border border-rose-200 text-rose-600 hover:bg-white shadow-sm"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{letter.emoji}</span>
                <h2 className="handwritten text-2xl sm:text-3xl text-rose-800 font-semibold">{letter.title}</h2>
              </div>
              {letter.photo && (
                <img
                  src={letter.photo}
                  alt="Memory"
                  className="mx-auto rounded-xl shadow-md mb-4 border-2 border-pink-200"
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "60vh",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }}
                  loading="lazy"
                />
              )}
              <div className="prose max-w-none whitespace-pre-wrap text-rose-900 leading-7">
                {letter.content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
