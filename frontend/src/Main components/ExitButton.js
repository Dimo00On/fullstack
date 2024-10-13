import "./ExitButton.css"
import { exit } from "../consts";
import { Link } from "react-router-dom";

export function ExitButton({back}) {
    return (<div className="exit_button">
        <Link to={back}>
            <button>
                <img className="exit_button" src={exit}></img>
            </button>
        </Link>
    </div>);
}