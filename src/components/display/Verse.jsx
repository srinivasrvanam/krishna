/**
 * Represents all aspects of each Sloka (includes Sloka, Vicheda, Anvaya, Translations, and Notes)
 */
import { Link } from "react-router-dom";
import Section from "./Section";

const Verse = ({ verse, type, compact }) => {
  /* Compact Display */
  if(compact === "true"){
    return(
      <div className="border-gray-300 dark:border-gray-700 py-2">
        <div className="flex flex-col align-center w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
          <div className="text-center">
            <Link to={`/${type}/${verse.chapter}/${verse.number}`} className="text-blue-500 hover:text-blue-700">
              <Section type="sloka" lines={verse.sloka} compact={compact} ch_num={verse.chapter} verse_num={verse.number} />
            </Link>
          </div>          
        </div>
      </div>
    )
  }

  /* Full Display */
  return (
      <div className="border-t-2 border-gray-300 dark:border-gray-700 py-8 mb-4">
        <div className="text-2xl text-center font-bold pb-3">{verse.chapter} - {verse.number}</div>
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
