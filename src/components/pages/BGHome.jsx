import { Link } from "react-router-dom";
import verses from '../../content/bg/bg_2';

function BGHome() {

  let verseNumbersArray = [];
  if(verses.length > 0){
    verseNumbersArray = verses.map(verse => verse.number)
  }
    
    return (
    <div className="w-full h-screen">
      <h1 className="text-3xl text-center p-5"> Bhagavad Gita Chapter 2 </h1>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {verseNumbersArray.map((verseNum,index) => (
          <Link key={index} to={`/bg/2/${verseNum}`} className="sv-btn">{verseNum}</Link>
        ))}
      </div>
    </div>
      );
  }
  
export default BGHome;