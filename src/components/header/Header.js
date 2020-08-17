import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1>!! విష్ణు సహస్రనామాలు !!</h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/stotram">స్తోత్రం</Link>
        </div>
      </div>
    );
  }
}

export default Header;
