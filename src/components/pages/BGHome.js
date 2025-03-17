import { Link } from "react-router-dom";
import verses from '../../content/bg/bg_2';

function BGHome() {

  let verseNumbersArray = [];
  if(verses.length > 0){
    verseNumbersArray = verses.map(verse => verse.number)
  }
    
    return (
    <div>
      <h1> Bhagavad Gita HOME PAGE </h1>
      <nav>
        {verseNumbersArray.map((verseNum,index) => (
          <Link key={index} to={`/BG/2/${verseNum}`} className="home">{verseNum}</Link>
        ))}
      </nav>
    </div>
      );
  }
  
export default BGHome;