/**
 * Represents each section of a Sloka
 */
const Section = ({type, lines}) => {

    let heading = '';
    switch(type){
        case "sloka":   heading = "श्लोकः"; break;
        case "vicheda": heading = "पदच्छेदः"; break;
        case "anvaya":  heading = "अन्वयक्रम:"; break;
        case "transl":  heading = "Translation: "; break;
        case "notes":   heading = "Notes: "; break;
        default:        heading = "";
    }


    if (type === "transl" || type === "notes") {
        return (
            <div className="section part2">
                <div className="heading">{heading}</div>
                <ul>
                    {lines.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
      }
      else{
        return (
            <div className="section part1">
                <div className="heading">{heading}</div>
                <div className={type}> {/* Currently used to make sloka bold and bigger font */}
                    {lines.map((line,index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
            </div>
            );
      }
    
    
};

export default Section;