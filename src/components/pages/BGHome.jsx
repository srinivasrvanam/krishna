import { Link } from "react-router-dom";
import verses from '../../content/bg/bg_2';

function BGHome() {

  let verseNumbersArray = [];
  if(verses.length > 0){
    verseNumbersArray = verses.map(verse => verse.number)
  }
    
    return (
    <div>
      <h1 className="text-black dark:text-white bg-white dark:bg-black"> Bhagavad Gita Chapter 2 </h1>
      <div className="d-flex justify-content-center gap-3 mt-5">
        {verseNumbersArray.map((verseNum,index) => (
          <Link key={index} to={`/BG/2/${verseNum}`} className="btn btn-warning">{verseNum}</Link>
        ))}
      </div>
    </div>
      );
  }
  
export default BGHome;