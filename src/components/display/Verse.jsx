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
      <div className="border-t-2 border-gray-300 dark:border-gray-700 py-8 mb-4 w-[100%] md:w-[90%] lg:w-[80%] mx-auto">
        <div className="text-2xl text-center font-bold pb-3">{verse.chapter} - {verse.number}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Section type="sloka" lines={verse.sloka} />          
          <Section type="transl" lines={verse.transl} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">       
          <Section type="sloka_tel" lines={verse.sloka_tel} />
          <Section type="transl_tel" lines={verse.transl_tel} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-4">
          <Section type="vicheda" lines={verse.vicheda} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">       
          <Section type="anvaya" lines={verse.anvaya} />
          <Section type="prose" lines={verse.prose} />
        </div> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">       
          <Section type="meanings" lines={verse.meanings} />
          <Section type="grammar" lines={verse.grammar} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">       
          <Section type="essence" lines={verse.essence} />
          <Section type="notes" lines={verse.notes} />
        </div>
      </div>
  );
};

export default Verse;
