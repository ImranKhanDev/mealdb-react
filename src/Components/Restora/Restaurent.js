import { useState, useEffect } from "react";
import React from "react";
import './Restaurent.css'
import Meal from "../Meal/Meal";
//  import orderList from '../OrderList/OrderList'
import OrderList from "../OrderList/OrderList";

const Restaurent = () => {
  const [restora, setRestora] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=meat")
      .then((res) => res.json())
      .then((data) => setRestora(data.meals));
  }, []);
  // add to cart ooption
  const handleAddToOrder = meal=> {
    const newOrder= [...order,meal];
    setOrder(newOrder) 
    }
  return (
    <div className="restaurent-menu">
            <div className="menu-container">
        {restora.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}
          handleAddToOrder ={handleAddToOrder}
          ></Meal>
        ))}
                </div>
        <div className="order-list">
        <OrderList order="order"></OrderList>
      </div>
    </div>
  );
};

export default Restaurent;
