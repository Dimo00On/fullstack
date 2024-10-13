import {add_tags} from "../functions.js"
import { names } from "../consts.js";
import "./InsideMenuButton.css";
import { Link } from "react-router-dom";

export function InsideMenuButton(props) {
    if (props.action == "add") {
      return (
          <button
            className="inside_menu"
            onClick={() => {
              add_tags([props.type], props.tags, props.set_tags);
            }}
          >
            <Link to={props.to}>
            <button className="link_button">
            {names[props.type]}
            </button>
            </Link>
          </button>
      );
    } else {
      return (
          <button
            className="inside_menu"
            onClick={() => {
              add_tags([props.type, props.lesson], props.tags, props.set_tags);
            }}
          >
            <Link to={props.to}>
            <button  className="link_button">
            {names[props.lesson]}
            </button>
            </Link>
          </button>
      );
    }
  }