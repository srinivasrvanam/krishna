import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Intro from "../intro/Intro";
import Stotram from "../stotram/Stotram";
import StotramDynamic from "../stotramDynamic/StotramDynamic";
// import EachNama from "../eachNama/EachNama";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <Router>
        <Header />

        <div className="content">
          <div className="left-content">
            <Route path="/" exact component={Intro} />
            <Route path="/stotram" component={Intro} />
            <Route path="/anuvadam" component={StotramDynamic} />
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
