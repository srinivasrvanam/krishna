
import { useParams } from "react-router-dom";
import Verse from "../display/Verse";
import { Link } from "react-router-dom";
import verses1 from '../../content/vsn/vsn_1';
import verses2 from '../../content/vsn/vsn_2';
import verses3 from '../../content/vsn/vsn_3';
import verses4 from '../../content/vsn/vsn_4';
import Breadcrumbs from "../utility/Breadcrumbs";

function VSNVerse() {
    const { chapter_num, verse_num } = useParams();

    console.log('SV: chapter_num: '+chapter_num);
    console.log('SV: verse_num: '+verse_num);
    
    if(chapter_num !== undefined && chapter_num >= 1 && chapter_num <=4 && verse_num !== undefined){
      let verses = [];  
      let title = '';
      switch(Number(chapter_num)){
            case 1:
              verses = verses1;
              title = "पूर्व पीठिका";
              break;
            case 2:
              verses = verses2;
              title = "न्यासः / ध्यानम्";
              break;
            case 3:
              verses = verses3;
              title = "सहस्रनामम्";
              break;
            case 4:
              verses = verses4;
              title = "उत्तर पीठिका";
              break;
            default:
              verses = [];
        }
        const verse = verses.find(verse => verse.number === Number(verse_num));
        console.log('SV: verse: '+verse);

        // To get Prev and Next Sloka numbers dynamically
        const sortedArray = verses.sort((a,b) => a.number - b.number);
        const targetIndex = sortedArray.findIndex(verse => verse.number === Number(verse_num));
        const prevVerse = targetIndex > 0 ? sortedArray[targetIndex-1] : undefined;
        const nextVerse = targetIndex < sortedArray.length - 1 ? sortedArray[targetIndex+1] : undefined;
        if(prevVerse !== undefined){
            console.log('SV: prev Verse Num: '+prevVerse.number);
        } 
        if(nextVerse !== undefined){
            console.log('SV: next Verse Num: '+nextVerse.number);
        }

        if(verse !== undefined){
            return (
                <div className="w-full h-full">
                  {/* <h1 className="text-3xl text-center pt-5">{title} - {verse_num}</h1> */}
                  <div>
                    <br />
                    <Breadcrumbs />
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-2 py-4">
                    {prevVerse && prevVerse.number && <Link to={`/vsn/${chapter_num}/${prevVerse.number}`} className="sv-btn fixed bottom-4 left-5">Prev - {prevVerse.number}</Link>}
                    {nextVerse && nextVerse.number && <Link to={`/vsn/${chapter_num}/${nextVerse.number}`} className="sv-btn fixed bottom-4 right-5">Next - {nextVerse.number}</Link>}
                  </div>
                  <Verse verse={verses.find(verse => verse.number === Number(verse_num))} />
                    <br />
                    <br />
                </div>
            );
        }
    }

    return (
        <div>
            <h1>Incorrect Chapter/Sloka Number - Sloka NOT found</h1>
        </div>
    );
}
 
export default VSNVerse;