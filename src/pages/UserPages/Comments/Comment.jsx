import React from "react";
import classes from "../../../styles/pages/UserPages/Comments/Comments.module.css";

const Comment = (props) => {
  return (
    <li className={classes.wrapper}>
      <h2>{props.title}</h2>
      <h3>{props.visitDate}</h3>
      <p>{props.comment}</p>
    </li>
  );
};

export default Comment;
