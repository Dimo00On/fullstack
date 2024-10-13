import "./AddMenuButton.css";
import { MenuButton } from "./MenuButton";

export function AddMenuButton(props) {
    var button = !window.localStorage.getItem("access") ? (
            <MenuButton index={3} tags={props.tags} set_tags={props.set_tags} to={"/add/authorization"}/>
            ) : (
            <MenuButton index={3} tags={props.tags} set_tags={props.set_tags} to={"/add"}/>
            )
    return button;
}