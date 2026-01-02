import { useParams } from "react-router-dom";
import Chapter from '../display/Chapter';
import verses1 from '../../content/gps/gps_1';
import Breadcrumbs from "../utility/Breadcrumbs";

function GPSChapter() {
  const { chapter_num } = useParams();

  if(chapter_num !== undefined && chapter_num >= 1 && chapter_num <= 5){
    let verses = [];
    let title = '';
    switch(Number(chapter_num)){
      case 1:
        verses = verses1;
        title = "गणेशपञ्चरत्नम्";
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
        <Chapter verses={verses} type="gps" compact="true" />
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

  export default GPSChapter;