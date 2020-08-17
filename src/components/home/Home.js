import React, { Component } from "react";
import Stotram from "../stotram/Stotram";
import EachNama from "../eachNama/EachNama";
import krishna from "../../krishna.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>!! విష్ణు సహస్రనామాలు - తెలుగు !!</h1>

        <img src={krishna} width={"200"} height={"auto"} alt="Krishna Image" />
        <br />
        <span
          style={{
            color: "red",
            border: "2px blue solid",
            padding: "10px",
            display: "inline-block",
          }}
        >
          !! సర్వం శ్రీ కృష్ణార్పణమస్తు !!
        </span>
        <hr />
        <EachNama nama={{ title: "విశ్వం", meaning: "జగమే తానై ఉన్న వాడు" }} />
        <EachNama
          nama={{ title: "విష్ణుః", meaning: "అంతా వ్యాపించి ఉన్న వాడు" }}
        />
        <hr />
        <Stotram />
      </div>
    );
  }
}

export default Home;
