#namste-react course

#parcel
-dev-build
-local server
-HMR:hot module replacement
-file watching algorithum = written in c++
-caching = faster builds
-image optimization
-minification
-bundling
-compress
-consistant hashing
-code spliting
-differential bundling = sporting older browser
-diagnostic
-error handling
-https
-tree shanking algorithm = remove unused code
-different dev and prod bundles

=>Header
-Logo
-Nav Item
=>Body
-Search
-RestarantContainer
-RestaruntCard
-img
-name of the res ,star rating,cuising,delivery time,etc
=>Footer
-CopyRight
-Link
-Address
-Content

Two Type of Export/Inport

-Default Export/Inport

Ex: export default <name of variable \ component>;
import <name of variable \ component> from path;

-Named Export/Inport

Ex: export const Component;
import {Component} from path;

#React Hooks
(Normal JS utility Function)
-useState(); = Superpowerfull state variable in React
-useEffect(); = hook is a built-in React tool that lets functional components synchronize with or connect to external system

On Effect:
=> If no dependency array => useEffect is called on every render
=>If dependency array is empty = [] => useEffect is called on initial render(just once)

#2 types of Routing in Web Apps
-Clint side Routing
-Server side Routing

Code For RestaurantMenu :(swiggy api doesn't work)

import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaruntMenu from "../utills/useRestaruntMenu";

const RestaurantMenu = () => {
const { resId } = useParams();
const resInfo = useRestaruntMenu(resId);
if (resInfo === null) return <Shimmer />;

const { name, cuisines, costForTwoMessage } =
resInfo?.cards[0]?.card?.card?.info;

const { itemCards } =
resInfo?.cards[2]?.groupedCard?.cardsGroupMap?.REGULAR?.cards[1]?.card
?.card;

return (
<div className="menu">
<h1>{name}</h1>
<p>{cuisines.join(", ") - { costForTwoMessage }}</p>
<h2>Menu</h2>
<ul>
{itemCards.map((item) => (
<li key={item.card.info.id}>
{item.card.info.name}-{"Rs."}
{item.card.info.Price || item.card.info.defaultPrice}
</li>
))}
</ul>
</div>
);
};
export default RestaurantMenu;

//End of API Code

        MOUNTING

Constructor(Dummy)
Render(Dummy)
<HTML Dummy>
Component Did Mount
<API Call>
<this.setState> -> State Variable is updated

        Update

Render()

<HTML new api data>
Component Did Update
