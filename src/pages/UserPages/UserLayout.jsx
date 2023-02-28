import React from "react";
import WritingSection from "./WritingSection";

function UserLayout() {
  async function addRestaurantHandler(restauraat) {
    const response = await fetch(
      "https://coffee-writing-default-rtdb.firebaseio.com/restaurants.json",
      {
        method: "POST",
        body: JSON.stringify(restauraat),
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
