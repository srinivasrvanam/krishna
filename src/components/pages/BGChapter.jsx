import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import verses2 from '../../content/bg/bg_2';
import verses3 from '../../content/bg/bg_3';
import Breadcrumbs from "../utility/Breadcrumbs";
import Chapter from '../display/Chapter';

function BGChapter() {
  const { chapter_num } = useParams();
  console.log('BG: chapter_num: '+chapter_num);

  if(chapter_num !== undefined && chapter_num >= 1 && chapter_num <= 18){
    let verses = [];
    let title = '';
    switch(Number(chapter_num)){
      case 1:
        verses = verses1;
        title = "1. Arjuna Vishada Yoga";
        break;
      case 2:
        verses = verses2;
        title = "2. Sankhya Yoga";
        break;
      case 3:
        verses = verses3;
        title = "3. Karma Yoga";
        break;
      case 4:
        verses = verses4;
        title = "4. Karma Sanyasa Yoga";
        break;
      default:
        verses = [];
    }

    let verseNumbersArray = [];
    if(verses.length > 0){
      verseNumbersArray = verses.map(verse => verse.number)
    }
      
    return (
      <div className="w-full h-screen">
        <div className="text-4xl text-center pt-5">{title}</div>
        <div>
          <Breadcrumbs />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {verseNumbersArray.map((verseNum,index) => (
            <Link key={index} to={`/bg/${chapter_num}/${verseNum}`} className="sv-btn">{verseNum}</Link>
          ))}
        </div>
        <br />
        <div className="text-lg text-center px-5">Please click on the Sloka to see full details of that Sloka!</div>
        <Chapter verses={verses} compact="true" />
        {/* compact="true" says to display only Sloka & Translation, If false, all sections are displayed */}
        {/* In future will be updated to display based on toggles */}
        <br /><br />
        <br />
      </div>
    );
  }
  
  return (
      <div className="w-full h-screen">
          <h1>Incorrect Chapter - Chapter NOT found</h1>
      </div>
  );
}
  
export default BGChapter;