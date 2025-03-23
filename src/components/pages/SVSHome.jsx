import { Link } from "react-router-dom";
import SVSLinks from "../utility/SVSLinks";

function SVSHome() {
  return (
    <div className="w-full h-full md:h-screen">
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
            Suprabhatham is a sacred text dedicated to Lord Venkateswara. It is traditionally recited in the early morning to awaken the deity and seek blessings.
            <br />
            It is generally recited along with Stotram, Prapatti and Mangalaashasanam.
            <br />
            Please click the links below to access Suprabatham, Stotram, Prapatti and Mangalaashasanam.
            <br /><br />
            <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Link to="/svs/1" className="sv-btn">SV-सुप्रभातम्</Link>
            <Link to="/svs/2" className="sv-btn">SV-स्तोत्रम्</Link>
            <Link to="/svs/3" className="sv-btn">SV-प्रपत्ति</Link>
            <Link to="/svs/4" className="sv-btn">SV-मङ्गलाशासनम्</Link>
          </div>      
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
