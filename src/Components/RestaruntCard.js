import { CDN_URL } from "../utills/constants";

const RestaruntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg  bg-gray-100  hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

const withPromtedLabel = (RestaruntCard) =>{
  return () => {
    
  }
}

export default RestaruntCard;
