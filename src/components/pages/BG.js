
import { useParams } from "react-router-dom";
import verses from '../../content/bg/bg_2';

function BG() {
    const { pageName } = useParams();

    console.log('SV: pageName: '+pageName);

    //   const contentMap = {
    //     about: "This is the About page.",
    //     contact: "This is the Contact page.",
    //     services: "These are our Services.",
    //   };
    
      return (
        <div>
          {/* <h2>{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h2>
          <p>{contentMap[pageName] || "Page not found."}</p> */}
          <h1> Bhagavad Gita </h1>
          <h2>{verses[0].sloka[0]}</h2>
        </div>
      );
  }
  
export default BG;