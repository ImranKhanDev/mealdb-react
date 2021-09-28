import React from "react";
// import OrderList from "../OrderList/OrderList";
import "./Meal.css";
const Meal = (props) => {
//   console.log(props);
  // destructuring start
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  const { handleAddToOrder } = props;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="meal-img" />
      <h4>{strMeal}</h4>
      <p>{strInstructions.slice(0, 120)}</p>
      <button onClick={() =>
         handleAddToOrder(props.meal)}>Add this food</button>
    </div>
  );
};

export default Meal;
