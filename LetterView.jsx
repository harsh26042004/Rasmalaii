import { LETTERS } from "../data/letters";
import EnvelopeCard from "./EnvelopeCard";

export default function LetterView({ selectedLetterId }) {
  // Prevent rendering if no letter is selected
  if (!selectedLetterId) return <div>Please select a letter.</div>;

  const letter = LETTERS.find((l) => l.id === selectedLetterId);

  if (!letter) return <div>Letter not found.</div>;

  return (
    <EnvelopeCard
      title={letter.title}
      content={letter.content}
      photo={letter.photo}
    />
  );
}

// Usage example (this part is not in the original code, but added based on the user prompt)
<LetterView selectedLetterId={selectedLetterId} />