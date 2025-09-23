import { Link } from "react-router-dom";
import SVSLinks from "../utility/SVSLinks";

function SVSHome() {
  return (
    <div className="w-full">
      <br />
      <div className="text-4xl text-center">Sri Venkateswara Suprabhatham </div>
      <br /><br />
      <div className="flex flex-col md:flex-row">
        {/* First Column (30%) */}
        <div className="w-full lg:w-3/10 flex items-center justify-center">
          <div className="flex flex-row justify-center"> 
            <img src="https://www.tallengestore.com/cdn/shop/files/SriTirupatiVenkateswaraSwamy_Balaji_Painting_large.jpg?v=1694996304" alt="Sri Venkateswara Swamy" />
          </div>
        </div>

        {/* Second Column (70%) */}
        <div className="w-full lg:w-7/10 flex items-center justify-center p-2">
          <div className="md:px-10 px-5">
            Please click the links below to access Suprabhatham, Stotram, Prapatti and Mangalaashasanam.
            <br /><br />
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <Link to="/svs/1" className="sv-btn">SV-सुप्रभातम्</Link>
              <Link to="/svs/2" className="sv-btn">SV-स्तोत्रम्</Link>
              <Link to="/svs/3" className="sv-btn">SV-प्रपत्ति</Link>
              <Link to="/svs/4" className="sv-btn">SV-मङ्गलाशासनम्</Link>
            </div>   
            <br />  
            Suprabhatham is a sacred text dedicated to Lord Venkateswara. 
            <br />
            It is traditionally recited in the early morning to awaken the deity and seek blessings.
            <br />
            It is generally recited along with Stotram, Prapatti and Mangalaashasanam.
            <br />
            It is composed by the great poet Prativadi Bhayankaram Annangaracharya (13th to 14th century), is a Sanskrit and Tamil scholar, a Sri Vaishnava acharya and is a disciple of Sri Manavala Mamuni.
            <br /><br />
            
            This site contains all slokas in a list format to just recite/chant. 
            <br />
            Also, if you click on a particular sloka, you can read more details of the sloka, pada cheda (breaking down of words), anvaya krama (rearranging words to understand meaning in prose format), translations, word-to-word meanings and sanskrit notes for some words.
            <br /><br />
            {/* <div className="flex justify-center">
              <iframe width="749" height="562" src="https://www.youtube.com/embed/VGSy_p5epsw?start=39" title="Sri Venkateswara Suprabhatam (Animated Film)" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> */}
          <br />
          <div className="text-3xl">Reference Links:</div>
          <SVSLinks />
          <br />
          </div>
        </div>
      </div>


     
      
      <br />
    </div>
  );
}

export default SVSHome;
