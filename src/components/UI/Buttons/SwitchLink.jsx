import { NavLink } from "react-router-dom";
import classes from "../../../styles/SwitchLink.module.css";

function SwitchLink({ text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? classes.switchLink__active : classes.switchLink
      }
    >
      {text}
    </NavLink>
  );
}
export default SwitchLink;
