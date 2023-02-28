import React from "react";
import WritingSection from "./WritingSection";

function UserLayout() {
  async function addRestaurantHandler(restaurant) {
    const response = await fetch(
      "https://react-http-f2802-default-rtdb.firebaseio.com/restaurants.json",
      {
        method: "POST",
        body: JSON.stringify(restaurant),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <WritingSection onAddRestaurant={addRestaurantHandler} />
    </>
  );
}

export default UserLayout;
