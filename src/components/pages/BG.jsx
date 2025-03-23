
import { useParams } from "react-router-dom";
import Verse from "../display/Verse";
import { Link } from "react-router-dom";
import verses from '../../content/bg/bg_2';

function BG() {
    const { chapter_num, verse_num } = useParams();

    console.log('SV: chapter_num: '+chapter_num);
    console.log('SV: verse_num: '+verse_num);
    
    if(chapter_num !== undefined && verse_num !== undefined){
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
                <div className="w-full h-screen">
                  <h1 className="text-3xl text-center pt-5"> Bhagavad Gita {chapter_num}-{verse_num}</h1>
                  <div className="flex flex-wrap justify-center gap-2 mt-2 py-4">
                    {prevVerse && prevVerse.number && <Link to={`/bg/2/${prevVerse.number}`} className="sv-btn">Prev - {prevVerse.number}</Link>}
                    {nextVerse && nextVerse.number && <Link to={`/bg/2/${nextVerse.number}`} className="sv-btn">Next - {nextVerse.number}</Link>}
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