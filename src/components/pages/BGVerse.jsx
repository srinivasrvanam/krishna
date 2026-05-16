
import { useParams } from "react-router-dom";
import Verse from "../display/Verse";
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

function BG() {
    const { chapter_num, verse_num } = useParams();

    console.log('SV: chapter_num: '+chapter_num);
    console.log('SV: verse_num: '+verse_num);
    
    if(chapter_num !== undefined && verse_num !== undefined){
        let verses = chapter_num === '2' ? verses2 : verses3;
        switch(Number(chapter_num)){
            case 1: verses = verses1; break;
            case 2: verses = verses2; break;
            case 3: verses = verses3; break;
            case 4: verses = verses4; break;
            case 5: verses = verses5; break;
            case 6: verses = verses6; break;
            case 7: verses = verses7; break;
            case 8: verses = verses8; break;
            case 9: verses = verses9; break;
            case 10: verses = verses10; break;
            case 11: verses = verses11; break;
            case 12: verses = verses12; break;
            case 13: verses = verses13; break;
            case 14: verses = verses14; break;
            case 15: verses = verses15; break;
            case 16: verses = verses16; break;
            case 17: verses = verses17; break;
            case 18: verses = verses18; break;
            default: verses = []; break;
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
                <div className="w-full">
                  {/* <h1 className="text-3xl text-center pt-5"> Bhagavad Gita {chapter_num}-{verse_num}</h1> */}
                  <div>
                    <br />
                    <Breadcrumbs />
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-2 py-4">
                    {prevVerse && prevVerse.number && <Link to={`/bg/${chapter_num}/${prevVerse.number}`} className="sv-btn fixed bottom-4 left-5">Prev - {prevVerse.number}</Link>}
                    {nextVerse && nextVerse.number && <Link to={`/bg/${chapter_num}/${nextVerse.number}`} className="sv-btn fixed bottom-4 right-5">Next - {nextVerse.number}</Link>}
                  </div>
                  <Verse verse={verses.find(verse => verse.number === Number(verse_num))} />
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
 
export default BG;