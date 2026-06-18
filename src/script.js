import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo-container">
        <img
          className="Logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contect Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaruntCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src="https://cdn3.foodviva.com/static-content/food-images/rice-recipes/vegetable-pulav-recipe/vegetable-pulav-recipe.jpg"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisins}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaruntCard
          resName="Meghana Food"
          cuisins="Biryani,North India,Asian"
          rating="4.4"
          time="38 min"
        />
        <RestaruntCard
          resName="KFC"
          cuisins="Burger,Fast Food,etc"
          rating="4.0"
          time="30 min"
        />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
