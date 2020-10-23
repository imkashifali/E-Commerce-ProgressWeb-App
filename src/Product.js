import React from "react";
import "./Product.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "./StateProvider";
import { AnimationWrapper } from "react-hover-animation";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("add new Basket", basket);

  const addToBasket = () => {
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  const notify = () =>
    toast.info(`🚀 ${title},${price}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="product" value={AnimationWrapper}>
      <div className="product__info">
        <h4>{title}</h4>
        <p className="product__price">
          <strong>$ {price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star">
                🌟
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button
        onClick={() => {
          addToBasket();
          notify();
        }}
      >
        Add to Basket
      </button>
      <ToastContainer />
    </div>
  );
}

export default Product;
