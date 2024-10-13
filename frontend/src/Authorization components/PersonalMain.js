import "./PersonalMain.css";
import { menu_img } from "../consts";
import { get_name, logout } from "../functions";
import { Link } from "react-router-dom";

export function PersonalMain() {
    return (<div className="personal_main_container">
        <img className="personal" src={menu_img[4]}></img>
        <span className="personal">{get_name()}</span>
        {/* <Link to={"/"}> */}
            <button className="personal" onClick={() => {logout();}}>Выйти</button>
        {/* </Link> */}
    </div>);
}