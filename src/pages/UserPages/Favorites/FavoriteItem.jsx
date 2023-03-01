import { useContext } from "react";
import classes from "../../../styles/pages/UserPages/Favorites/FavoriteItem.module.css";
import FavoriteContext from "../../../Store/FavroiteContext";

const FavoriteItem = (props) => {
  const favoriteCtx = useContext(FavoriteContext);

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.time}</div>
        <div className={classes.price}>{props.price}</div>
        <div className={classes.time}>{props.time}</div>
      </div>
    </li>
  );
};

export default FavoriteItem;
