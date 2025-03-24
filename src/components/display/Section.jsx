/**
 * Represents each section of a Sloka
 */
const Section = ({type, lines, compact}) => {

    let heading = '';
    switch(type){
        case "sloka":   heading = "श्लोकः"; break;
        case "vicheda": heading = "पदच्छेदः"; break;
        case "anvaya":  heading = "अन्वयक्रम:"; break;
        case "transl":  heading = "Translation: "; break;
        case "notes":   heading = "Notes: "; break;
        default:        heading = "";
    }


    if (type === "transl" || type === "notes" || type === "anvaya") {
        return (
          <div className="shadow-lg rounded-lg px-10 py-6 bg-gray-100 dark:bg-gray-800">
            <h4 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">{heading}</h4>
            <ul className="text-gray-800 dark:text-gray-200 list-disc list-outside ">
                {lines.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        );
      }
      else{
        return (
          <div className="shadow-lg rounded-lg p-4 min-w-max bg-gray-100 dark:bg-gray-800">
            {compact!=="true" && <h4 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">{heading}</h4>}
            <div className="text-gray-600 dark:text-gray-200 text-center text-xl"> 
                {lines.map((line,index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
          </div>
        );
      }
    
    
};

export default Section;