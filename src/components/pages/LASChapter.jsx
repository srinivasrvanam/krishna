import { useParams } from "react-router-dom";
import Chapter from '../display/Chapter';
import verses1 from '../../content/las/las_1';
import verses2 from '../../content/las/las_2';
import verses3 from '../../content/las/las_3';
import Breadcrumbs from "../utility/Breadcrumbs";

function LASChapter() {
  const { chapter_num } = useParams();

  if(chapter_num !== undefined && chapter_num >= 1 && chapter_num <= 5){
    let verses = [];
    let title = '';
    switch(Number(chapter_num)){
        case 1:
          verses = verses1;
          title = "पूर्व पीठिका";
          break;
        case 2:
          verses = verses2;
          title = "लक्ष्मी अष्टोत्तरम्";
          break;
        case 3:
          verses = verses3;
          title = "फलश्रुतिः";
          break;
      default:
        verses = [];
    }
    return (
      <>
        <div className="text-4xl text-center pt-5">{title}</div>
        <div>
          <Breadcrumbs />
        </div>
        <div className="text-lg text-center px-5">Please click on the Sloka to see full details of that Sloka!</div>
        <Chapter verses={verses} type="las" compact="true" />
        {/* compact="true" says to display only Sloka & Translation, If false, all sections are displayed */}
        {/* In future will be updated to display based on toggles */}
        <br /><br />
        <br />
      </>
    );
  }

  return (
      <div className="w-full">
          <h1>Incorrect Chapter - Chapter NOT found</h1>
      </div>
  );
  }
  
  export default LASChapter;
