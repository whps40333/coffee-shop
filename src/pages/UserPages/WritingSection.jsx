import React, { useRef, useEffect } from "react";
import classes from "../../styles/pages/UserPages/WritingSection.module.css";
import Clrbutton from "../../components/UI/Buttons/ClrButton";

function WritingSection(props) {
  const titleRef = useRef("");
  const visitDateRef = useRef("");
  const commentRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const restaurant = {
      title: titleRef.current.value,
      visitDate: visitDateRef.current.value,
      comment: commentRef.current.value,
    };

    console.log(restaurant);
  }

  const addRestaurantHandler = async (restaurant) => {
    const response = await fetch(
      "https://coffee-writing-default-rtdb.firebaseio.com/restaurants.json",
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
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title"></label>
        <input type="text" id="title" ref={titleRef} placeholder="餐廳名稱" />
      </div>
      <div className={classes.control}>
        <label htmlFor="Date"></label>
        <input
          type="text"
          id="date"
          ref={visitDateRef}
          placeholder="2022-02-27"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="comment"></label>
        <textarea
          type="text"
          id="comment"
          ref={commentRef}
          placeholder="用餐回饋"
        ></textarea>
      </div>
      <Clrbutton type="submit" onClick={addRestaurantHandler}>
        提交
      </Clrbutton>
    </form>
  );
}

export default WritingSection;
