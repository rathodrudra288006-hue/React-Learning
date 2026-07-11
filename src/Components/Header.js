import { LOGO_URL } from "../utills/constants";
import { useState,useEffect } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  useEffect(() =>{
    console.log("Use Effect Called");
  },[]);

  return (
    <div className="Header">
      <div className="Logo-container">
        <img className="Logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contect Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
