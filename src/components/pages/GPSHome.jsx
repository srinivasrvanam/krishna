import { Link } from "react-router-dom";
import SVSLinks from "../utility/SVSLinks";

function GPSHome() {
  return (
    <div className="w-full">
      <br />
      <div className="text-4xl text-center">Sri Ganesha Pancharatna Stotram </div>
      <br /><br />
      <div className="flex flex-col lg:flex-row">
        {/* First Column (30%) */}
        <div className="w-full lg:w-3/10 flex items-start justify-center">
          <div className="flex flex-row justify-center"> 
            <img src="https://m.media-amazon.com/images/I/71NFLEPKWuL._AC_SL1100_.jpg" alt="Ganesha" />
          </div>
        </div>

        {/* Second Column (70%) */}
        <div className="w-full lg:w-7/10 flex items-center justify-center p-2">
          <div className="md:px-10 px-5">
            <div className="text-center">Please click these buttons below to view slokas (list and detailed study) of Sri Ganesha Pancharatna Stotram.</div>
            <br /><br />
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <Link to="/gps/1" className="sv-btn">गणेशपञ्चरत्नम्</Link>
              {/* <Link to="/las/1" className="sv-btn">लक्ष्मी अष्टोत्तरम्</Link> */}
            </div>   
            <br /><br />
            {/* <div className="flex flex-col items-center justify-center">
              <b>Suprabhatham Video in VFX (Credits to Makers)</b>
              <iframe 
              className="w-full max-w-2xl aspect-video rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/VGSy_p5epsw?start=39" title="Sri Venkateswara Suprabhatam (Animated Film)" frameBorder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <br /><br /><br />
            <ul className="list-disc list-outside">
              <li>Suprabhatham is a sacred text dedicated to Lord Venkateswara. </li>
              <li>It is traditionally recited in the early morning to awaken the deity and seek blessings.</li>
              <li>It is generally recited along with Stotram, Prapatti and Mangalaashasanam.</li>
              <li>It is composed by the great poet Prativadi Bhayankaram Annangaracharya (13th to 14th century), is a Sanskrit and Tamil scholar, a Sri Vaishnava acharya and is a disciple of Sri Manavala Mamuni.</li>
              <li>It contains 4 main parts:</li>
                <ul className="list-disc list-outside ml-6">
                  <li><b>Suprabhatham</b> - contains 29 verses. Is recited to wake up the Lord</li>
                  <li><b>Stotram</b> - contains 11 verses. Is recited to praise the Lord</li>
                  <li><b>Prapatti</b> - contains 16 verses. Is recited as an expression of total surrender to the Lord</li>
                  <li><b>Mangalaashasanam</b> - contains 14 verses. Is recited for glory and well-being of the Lord</li>
                </ul>
            </ul> */}
            <br /><br />
            
            <b><u>How to use the site:</u></b><br />
            <ul className="list-disc list-outside">
              <li>This site contains all slokas in a list format to just recite/chant. </li>
              <li>If you click on a particular Sloka, you will see detailed study of the Sloka.</li>
              <li>It contains the following sections:</li>
              <ul className="list-disc list-outside ml-6">
                <li><b>श्लोकः</b> - The original sloka in Sanskrit</li>
                <li><b>पदच्छेदः</b> - Breaking down of words in the sloka</li>
                <li><b>अन्वयक्रम:</b> - Rearranging words to understand meaning in prose format</li>
                <li><b>Translation</b> - English translation of the sloka</li>
                <li><b>Essence</b> - Further explanations/important notes of the sloka</li>
                <li><b>Meanings</b> - Word-to-word meanings of the sloka</li>
                <li><b>Notes</b> - Grammar notes for some words</li>
              </ul>
            </ul>
            <br /><br /><br />
            
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

export default GPSHome;
