import RestaruntCard from "./RestaruntCard";
import resList from "../utills/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurants </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaruntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
