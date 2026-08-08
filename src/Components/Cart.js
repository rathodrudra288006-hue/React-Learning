import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utills/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      {cartItems.length > 0 && (
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg my-4"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}

      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="border-b py-4 text-left max-w-md mx-auto"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
