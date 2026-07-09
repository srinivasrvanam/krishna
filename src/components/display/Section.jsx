/**
 * Represents each section of a Sloka
 */
const Section = ({type, lines, compact, ch_num, verse_num}) => {

    let heading = '';
    switch(type){
        case "sloka":       heading = "श्लोकः";       break;
        case "sloka_tel":   heading = "శ్లోకం";        break;
        case "vicheda":     heading = "पदच्छेदः";        break;
        case "anvaya":      heading = "अन्वयक्रम:";      break;
        case "prose":       heading = "Prose order"; break;
        case "transl":      heading = "Translation"; break;
        case "transl_tel":  heading = "అనువాదం"; break;
        case "essence":     heading = "Essence"; break;
        case "meanings":    heading = "Meanings: "; break;
        case "grammar":     heading = "व्याकरण"; break;
        case "notes":       heading = "Notes: "; break;
        default:            heading = "";
    }


    if (type === "prose" || type === "notes" || type === "anvaya" || type === "essence" || type === "meanings" || type === "grammar") {
        return (
          <div className="shadow-lg rounded-lg px-10 py-6 bg-gray-100 dark:bg-gray-800">
            <h4 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">{heading}</h4>
            <ul className="text-gray-800 dark:text-gray-200 list-disc list-outside lg:text-2xl">
                {lines.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        );
      }
      else{
        return (
          <div className="shadow-lg rounded-lg py-2 md:p-4 bg-gray-100 dark:bg-gray-800">
            {compact!=="true" && <h4 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">{heading}</h4>}
            {verse_num && <div className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100">{ch_num} - {verse_num}</div>}
            <div className="text-gray-600 dark:text-gray-200 text-center text-2xl"> 
                {lines.map((line,index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
          </div>
        );
      }
    
    
};

export default Section;