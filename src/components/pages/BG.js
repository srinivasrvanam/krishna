
import { useParams } from "react-router-dom";
import Verse from "../display/Verse";
import verses from '../../content/bg/bg_2';

function BG() {
    const { chapter_num, verse_num } = useParams();

    console.log('SV: chapter_num: '+chapter_num);    
    console.log('SV: verse_num: '+verse_num);
    
    if(chapter_num !== undefined && verse_num !== undefined){
        const verse = verses.find(verse => verse.number === Number(verse_num));
        console.log('SV: verse: '+verse);
        if(verse !== undefined){
            return (
                <div>
                  <h1> Bhagavad Gita {chapter_num}-{verse_num}</h1>
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