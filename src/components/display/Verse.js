/**
 * Represents all aspects of each Sloka (includes Sloka, Vicheda, Anvaya, Translations, and Notes)
 */
import Section from "./Section";

const Verse = ({ verse }) => {
  return (
    <div className="verse">
      <h3 style={{ textAlign: "center" }}>{verse.number}</h3>
      <Section type="sloka" lines={verse.sloka} />
      <Section type="vicheda" lines={verse.vicheda} />
      <Section type="anvaya" lines={verse.anvaya} />
      <Section type="transl" lines={verse.transl} />
      <Section type="notes" lines={verse.notes} />
    </div>
  );
};

export default Verse;
