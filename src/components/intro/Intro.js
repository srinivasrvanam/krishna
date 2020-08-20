import React from "react";
import krishna from "../../krishna.png";
import "./Intro.css";

function Intro() {
  return (
    <div>
      <React.Fragment>
        <img src={krishna} width={"200"} height={"auto"} alt="Krishna" />
        <div className="intro">
          ఈ వెబ్సైట్ ను సందర్శించినందుకు ముందుగా మీకు స్వాగతం. ఈ సైట్ లో మీరు
          విష్ణు సహస్రనామ స్తోత్రంతో పాటుగా ప్రతి ఒక్క నామం యొక్క అర్ధం తెలుగులో
          తెలుసుకోవచ్చు. రండి, ఈ కలియుగం లో అన్ని కల్మషాలను తొలగించే ఆ స్వామి
          వారి నామాలను అర్ధంతో పాటుగా తెలుసుకొని పారాయణ చేసి తరిద్దాం.{" "}
          <span className="caption">!! సర్వం శ్రీ కృష్ణార్పణమస్తు !!</span>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Intro;
