import { Link } from "react-router-dom";
import verses from '../../content/bg/bg_2';

function BGHome() {
    
  return (
    <div className="">
      <br />
      <div className="text-4xl text-center">Bhagavad Gita </div>
      <br /><br />
      <div className="flex flex-col md:flex-row">
        {/* First Column (30%) */}
        <div className="w-full lg:w-3/10 flex items-center justify-center">
          <div className="flex flex-row justify-center"> 
            <img src="https://www.bhagavad-gita.us/wp-content/uploads/2012/09/gita-104.jpg" width="300px" alt="Sri Krishna" />
          </div>
        </div>

        {/* Second Column (70%) */}
        <div className="w-full lg:w-7/10 flex items-center justify-center p-2">
          <div className="md:px-10 px-5">
            Bhagavad Gita is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a conversation between Prince Arjuna and the Lord Krishna, who serves as his charioteer.
            <br /><br />
            Please click the links below to access Bhagavad Gita by chapter.
            <br />
            <br /><br />
            <div className="flex flex-col align-center gap-2 mt-2 w-max mx-auto">
              {/* <div className="text-xl font-bold">Chapter-wise</div> */}
              {/* <Link to="/bg/1" className="sv-btn">SV-सुप्रभातम्</Link> */}
              <Link to="/bg/2" className="sv-btn text-center">2 - Sankhya Yoga</Link>
              <Link to="/bg/3" className="sv-btn text-center">3 - Karma Yoga</Link>
              {/* <Link to="/svs/4" className="sv-btn">SV-मङ्गलाशासनम्</Link> */}
            </div>   

            {/* TODO: Topic-wise Study*/}   
            <br />
            {/* <div className="text-3xl">Reference Links:</div>
            <SVSLinks /> */}
            <br />
          </div>
        </div>
      </div>


    
      
      <br />
    </div>
  );
}
  
export default BGHome;