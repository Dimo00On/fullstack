import "./FilterComponent.css";
import { exit } from "../consts";
import { remove_tag } from "../functions";

export function FilterComponent(props) {
    return (<span className="filter_component">
        <span className="filter_component_text">{props.text}</span>
        <button className="filter_component" onClick={() => {remove_tag(props.text, props.tags, props.set_tags)}}>
            <img className="filter_component" src={exit}></img>
        </button>
    </span>);
}