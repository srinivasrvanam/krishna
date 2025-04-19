import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import verses1 from '../../content/bg/bg_1';
import verses2 from '../../content/bg/bg_2';
import verses3 from '../../content/bg/bg_3';
import verses4 from '../../content/bg/bg_4';
import verses5 from '../../content/bg/bg_5';
import verses6 from '../../content/bg/bg_6';
import verses7 from '../../content/bg/bg_7';
import verses8 from '../../content/bg/bg_8';
import verses9 from '../../content/bg/bg_9';
import verses10 from '../../content/bg/bg_10';
import verses11 from '../../content/bg/bg_11';
import verses12 from '../../content/bg/bg_12';
import verses13 from '../../content/bg/bg_13';
import verses14 from '../../content/bg/bg_14';
import verses15 from '../../content/bg/bg_15';
import verses16 from '../../content/bg/bg_16';
import verses17 from '../../content/bg/bg_17';
import verses18 from '../../content/bg/bg_18';
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
      case 5:
        verses = verses5;
        title = "5. Karma Sanyasa Yoga";
        break;
      case 6:
        verses = verses6;
        title = "6. Dhyana Yoga";
        break;
      case 7:
        verses = verses7;
        title = "7. Jnana Vijnana Yoga";
        break;
      case 8:
        verses = verses8;
        title = "8. Aksara Brahma Yoga";
        break;
      case 9:
        verses = verses9;
        title = "9. Raja Vidya Raja Guhya Yoga";
        break;
      case 10:
        verses = verses10;
        title = "10. Vibhuti Yoga";
        break;
      case 11:
        verses = verses11;
        title = "11. Vishwarupa Darshana Yoga";
        break;
      case 12:
        verses = verses12;
        title = "12. Bhakti Yoga";
        break;
      case 13:
        verses = verses13;
        title = "13. Kshetra Kshetragna Vibhaga Yoga";
        break;
      case 14:
        verses = verses14;
        title = "14. Gunatraya Vibhaga Yoga";
        break;
      case 15:
        verses = verses15;
        title = "15. Purushottama Yoga";
        break;
      case 16:
        verses = verses16;
        title = "16. Daivasura Sampad Vibhaga Yoga";
        break;
      case 17:
        verses = verses17;
        title = "17. Sraddhatraya Vibhaga Yoga";
        break;
      case 18:
        verses = verses18;
        title = "18. Moksha Sanyasa Yoga";
        break;
      default:
        verses = [];
    }

    let verseNumbersArray = [];
    if(verses.length > 0){
      verseNumbersArray = verses.map(verse => verse.number)
    }
      
    return (
      <div className="w-full">
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
        <Chapter verses={verses} type="bg" compact="true" />
        {/* compact="true" says to display only Sloka & Translation, If false, all sections are displayed */}
        {/* In future will be updated to display based on toggles */}
        <br /><br />
        <br />
      </div>
    );
  }
  
  return (
      <div className="w-full">
          <h1>Incorrect Chapter - Chapter NOT found</h1>
      </div>
  );
}
  
export default BGChapter;