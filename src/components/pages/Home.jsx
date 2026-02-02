import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <br /><br />
      <div className="text-center text-2xl font-bold">
        This site contains Sloka Study from Sri Venkateswara Suprabhatham,
        Bhagavad Gita and Sri Vishnu Sahasranamam.
        <br /><br />
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <Link to="/svs" className="sv-btn">Suprabhatham</Link>
          <Link to="/bg" className="sv-btn">Bhagavad Gita</Link>
          <Link to="/vsn" className="sv-btn">Sahasranamam</Link>
          <Link to="/las" className="sv-btn">Ashtottaram</Link>
          <Link to="/gps" className="sv-btn">Pancharatnam</Link>
          <Link to="/da" className="sv-btn">Damodara</Link>
        </div>
        <br /><br />
        <div className="flex flex-col align-center justify-around h-[60vh] w-[90%] md:w-[80%] lg:w-[60%] mx-auto"> 
          {/* <img src="https://www.tallengestore.com/cdn/shop/files/SriTirupatiVenkateswaraSwamy_Balaji_Painting_large.jpg?v=1694996304" /> */}
          
          <div className="text-xl bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
           || B.G. 4.38 || <br />
            न हि ज्ञानेन सदृशं पवित्रमिह विद्यते | <br />
            तत्स्वयं योगसंसिद्ध: कालेनात्मनि विन्दति ||
          </div>

          <div className="text-lg bg-gray-100 dark:bg-gray-800  rounded-lg p-4">
          In this world, there is nothing as purifying as divine knowledge. One who has attained purity of mind through prolonged practice of Yoga, receives such knowledge within the heart, in due course of time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
