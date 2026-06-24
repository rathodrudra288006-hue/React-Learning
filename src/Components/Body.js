import RestaruntCard from "./RestaruntCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5459818&lng=72.9292495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaruntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
