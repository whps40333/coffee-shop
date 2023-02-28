import RestaurantList from "./Restaurants/RestaurantList";
import React, { useState, useEffect, useCallback } from "react";

function CommentSection() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurantHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://coffee-writing-default-rtdb.firebaseio.com/restaurants.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedRestaurants = [];

      for (const key in data) {
        loadedRestaurants.push({
          id: key,
          title: data[key].title,
          visitDate: data[key].visitDate,
          comment: data[key].comment,
        });
      }

      setRestaurants(loadedRestaurants);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRestaurantHandler();
  }, [fetchRestaurantHandler]);

  let content = <p>Found no comments.</p>;

  if (restaurants.length > 0) {
    content = <RestaurantList restaurants={restaurants} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <button onClick={fetchRestaurantHandler}>查看評論</button>
      <section>{content}</section>
    </>
  );
}

export default CommentSection;
