import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Stotram from "../stotram/Stotram";
// import EachNama from "../eachNama/EachNama";
import krishna from "../../krishna.png";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <Router>
        <Header />

        <div className="content">
          <div className="left-content">
            <img src={krishna} width={"200"} height={"auto"} alt="Krishna" />
            <div className="intro">
              ఈ వెబ్సైట్ ను సందర్శించినందుకు ముందుగా మీకు స్వాగతం. ఈ సైట్ లో
              మీరు విష్ణు సహస్రనామ స్తోత్రంతో పాటుగా ప్రతి ఒక్క నామం యొక్క అర్ధం
              తెలుగులో తెలుసుకోవచ్చు. రండి, ఈ కలియుగం లో అన్ని కల్మషాలను
              తొలగించే ఆ స్వామి వారి నామాలను అర్ధంతో పాటుగా తెలుసుకొని పారాయణ
              చేసి తరిద్దాం.{" "}
              <span className="caption">!! సర్వం శ్రీ కృష్ణార్పణమస్తు !!</span>
            </div>
          </div>

          <div className="right-content">
            <Route
              path="/"
              exact
              render={(props) => (
                <Link className="link-style" to="/stotram">
                  స్తోత్రం కొరకు ఇక్కడ క్లిక్ చేయండి!
                </Link>
              )}
            />
            <Route path="/stotram" component={Stotram} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;

/* 
<EachNama
nama={{ title: "విశ్వం", meaning: "జగమే తానై ఉన్న వాడు" }}
/>
<EachNama
nama={{ title: "విష్ణుః", meaning: "అంతా వ్యాపించి ఉన్న వాడు" }}
/>
<hr />
*/
