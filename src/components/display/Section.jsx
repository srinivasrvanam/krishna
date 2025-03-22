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
            <div className="card">
              <div className="card-body"></div>
                <h4 className="card-title">{heading}</h4>
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
            <div className="card">
              <div className="card-body" style={{fontSize: "20px", fontWeight: "bold"}}>
                <h4 className="card-title"  style={{fontSize: "24px", fontWeight: "bold"}}>{heading}</h4>
                <div className={type}> {/* Currently used to make sloka bold and bigger font */}
                    {lines.map((line,index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
              </div>
            </div>
            );
      }
    
    
};

export default Section;