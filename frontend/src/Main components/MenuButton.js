import {add_tags} from "../functions.js"
import { OptionList } from "./OptionList.js";
import { menu_labels, menu_img } from "../consts.js";
import "./MenuButton.css";
import { Link } from "react-router-dom";

export function MenuButton(props) {
    var on_click = () => {};
    switch (props.index) {
      case 0:
        on_click = () => add_tags(["видеозапись"], props.tags, props.set_tags);
        break;
      case 1:
        on_click = () => add_tags(["конспект"], props.tags, props.set_tags);
        break;
      case 2:
        on_click = () => add_tags(["решение"], props.tags, props.set_tags);
        break;
      case 3:
        on_click = () => {};
        break;
      case 4:
        on_click = () => {};
        break;
    }
    const className_by_index = "menu dropdown" + props.index;
    var name = menu_labels[props.index];
    if (props.name !== undefined) {
      var name = props.name;
    }
    return (
      <div className={className_by_index}>
        <Link to={props.to}>
          <button className="menu" onClick={on_click}>
            <img className="menu" src={menu_img[props.index]}></img>
            <span className="menu">{name}</span>
          </button>
        </Link>
        <OptionList index={props.index} tags={props.tags} set_tags={props.set_tags} to={props.to}/>
      </div>
    );
  }