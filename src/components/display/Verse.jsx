/**
 * Represents all aspects of each Sloka (includes Sloka, Vicheda, Anvaya, Translations, and Notes)
 */
import Section from "./Section";

const Verse = ({ verse }) => {
  return (
      <div className="border-t-2 border-gray-300 dark:border-gray-700 py-8 mb-4">
        <div className="text-2xl text-center font-bold pb-3">{verse.number}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Section type="sloka" lines={verse.sloka} />
          <Section type="vicheda" lines={verse.vicheda} />
          <Section type="anvaya" lines={verse.anvaya} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">       
          <Section type="transl" lines={verse.transl} />
          <Section type="notes" lines={verse.notes} />
        </div> 
      </div>
  );
};

export default Verse;
