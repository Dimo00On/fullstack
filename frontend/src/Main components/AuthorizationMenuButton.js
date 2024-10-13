import "./AuthorizationMenuButton.css";
import { MenuButton } from "./MenuButton";
import { get_name } from "../functions";

export function AuthorizationMenuButton(props) {
    var button = !window.localStorage.getItem("access") ? (
            <MenuButton index={4} tags={props.tags} set_tags={props.set_tags} to={"/authorization"}/>
            ) : (
            <MenuButton index={4} tags={props.tags} set_tags={props.set_tags} name={get_name()} to={"/personal"}/>
            )
    return button;
}