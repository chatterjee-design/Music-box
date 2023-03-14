import React, { Component } from "react";
import "./Navber.css";

export default class Navber extends Component {
  render() {
    return (
      <>
        <nav>
          <ul className="navber">
            <div className="brand">
              <li className="brandItems">
                <img src="Music-box-logo.png"></img>
                <a>Music-Box</a>
              </li>
            </div>
          </ul>
        </nav>
      </>
    );
  }
}
