const RestaurantMenu = () => {
  const restaurant = {
    name: "Name of Restaurant",
    cuisines: "Cuisines as Per Restaurant",
    rating: "Rating as Per Restaurant",
    cost: "Cost as Per Restaurant",
  };

  const menu = [
    {
      id: 1,
      name: "Chilli Bean Patty Rice Bowl",
      price: 289,
      description:
        "A hearty rice bowl with kidney beans, vegetables and aromatic spices.",
    },
    {
      id: 2,
      name: "Paneer Tikka Sandwich",
      price: 249,
      description:
        "Freshly baked bread filled with grilled paneer tikka and veggies.",
    },
    {
      id: 3,
      name: "Veg Burger",
      price: 199,
      description: "Crispy veg patty with lettuce, tomato and cheese.",
    },
    {
      id: 4,
      name: "French Fries",
      price: 149,
      description: "Golden crispy fries served with tomato ketchup.",
    },
    {
      id: 5,
      name: "Cold Coffee",
      price: 129,
      description: "Refreshing chilled coffee topped with cream.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Details */}
      <div className="border-b pb-6">
        <h1 className="text-4xl font-bold">{restaurant.name}</h1>

        <p className="text-gray-600 mt-2">{restaurant.cuisines}</p>

        <p className="mt-2 font-medium">
          {restaurant.rating} • {restaurant.cost}
        </p>
      </div>

      {/* Search */}
      <div className="my-6">
        <input
          type="text"
          placeholder="Search for dishes..."
          className="w-full border rounded-lg p-3 outline-none"
        />
      </div>

      {/* Menu */}
      <h2 className="text-2xl font-bold mb-5">Recommended ({menu.length})</h2>

      {menu.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-6"
        >
          <div className="w-3/4">
            <h3 className="text-xl font-semibold">{item.name}</h3>

            <p className="font-bold mt-2">₹{item.price}</p>

            <p className="text-gray-500 mt-2">{item.description}</p>
          </div>

          <div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
