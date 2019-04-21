import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui pointing menu">
      <Link className="item" to={"/"}>
        Home
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui transparent icon input">
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
