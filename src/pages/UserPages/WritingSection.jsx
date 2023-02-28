import React, { useRef } from "react";
import classes from "../../styles/pages/UserPages/WritingSection.module.css";
import Clrbutton from "../../components/UI/Buttons/ClrButton";

function WritingSection(props) {
  const titleRef = useRef("");
  const visitDateRef = useRef("");
  const commentRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const restaurant = {
      title: titleRef.current.value,
      visitDate: visitDateRef.current.value,
      comment: commentRef.current.value,
    };

    console.log(restaurant);
    props.onAddRestaurant(restaurant);
  }

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
      <Clrbutton type="submit">提交</Clrbutton>
    </form>
  );
}

export default WritingSection;
