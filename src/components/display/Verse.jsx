/**
 * Represents all aspects of each Sloka (includes Sloka, Vicheda, Anvaya, Translations, and Notes)
 */
import Section from "./Section";

const Verse = ({ verse }) => {
  return (
      <div className="flex flex-col items-center border-t-2 border-gray-300 dark:border-gray-700 py-8 mb-4">
        <div className="text-2xl">{verse.number}</div>
        <Section type="sloka" lines={verse.sloka} />
        <Section type="vicheda" lines={verse.vicheda} />
        <Section type="anvaya" lines={verse.anvaya} />
        <Section type="transl" lines={verse.transl} />
        <Section type="notes" lines={verse.notes} />
      </div>
  );
};

export default Verse;
