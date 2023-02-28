import React from "react";
import Restaurant from "./Restaurant";
import classes from "../../../styles/pages/UserPages/Comments/CommentList.module.css";
function RestaurantList(props) {
  return (
    <ul className={classes["comment-list"]}>
      {props.Restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          title={restaurant.title}
          visitDate={restaurant.visitDate}
          comment={restaurant.comment}
        />
      ))}
    </ul>
  );
}

export default RestaurantList;
