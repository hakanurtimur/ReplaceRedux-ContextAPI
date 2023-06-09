import React from "react";
// import { ProductContext } from "../../ctx/product-context";
// import { useDispatch } from 'react-redux';

import  { useStore } from '../../hooks-store/store'

import Card from "../UI/Card";
import "./ProductItem.css";
// import { toggleFav } from '../../store/actions/products';

const ProductItem = React.memo((props) => {

  console.log('Rendering')
  const dispatch = useStore(false)[1]
  // const dispatch = useDispatch();
  // const productCtx = useContext(ProductContext);

  const toggleFavHandler = () => {
    // productCtx.toggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id)
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
