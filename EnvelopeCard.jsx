import { motion } from "framer-motion";

export default function EnvelopeCard({ title, content, photo }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold text-pink-600 mb-4">{title}</h2>
      
      {photo && (
        <img
          src={photo}
          alt="Memory"
          className="mx-auto rounded-xl shadow-md mb-4 border-2 border-pink-200"
          style={{
            display: "block",
            maxWidth: "240px",
            maxHeight: "160px",
            width: "100%",
            height: "auto",
            objectFit: "cover"
          }}
          loading="lazy"
        />
      )}

      <p className="text-gray-700 text-lg leading-relaxed">{content}</p>
    </motion.div>
  );
}
