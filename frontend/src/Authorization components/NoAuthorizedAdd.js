import "./NoAuthorizedAdd.css";
import { Link } from "react-router-dom";
import { ExitButton } from "../Main components/ExitButton";

export function NoAuthorizedAdd() {
    return (<div className="authorization">
        <div className="authorization_text">Чтобы добавить файл, необходимо войти в аккаунт</div>
        <div className="button_container">
            <Link to={"/authorization"}>
                <button className="start_authorization">
                    <span className="start_authorization">Войти</span>
                    </button>
            </Link>
        </div>
        <ExitButton back={"/"}/>
    </div>);
}