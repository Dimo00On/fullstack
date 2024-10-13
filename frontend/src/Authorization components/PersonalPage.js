import { ExitButton } from "../Main components/ExitButton";
import "./PersonalPage.css";
import { useState } from "react";
import { handle_change_login, handle_change_password } from "../functions";
import {AuthorizationModal} from "./AuthorizationModal";
import { PersonalMain } from "./PersonalMain";

export function PersonalPage() {
    const [is_modal_opened, set_is_modal_opened] = useState(false);
    const [text, set_text] = useState('');
    const [login, set_login] = useState('');
    const [password, set_password] = useState('');

    return (<div className="personal_page">
        <PersonalMain />
        <ExitButton back={"/"}/>
        <div className="form-group-change">
          <label>Изменить логин:</label>
          <input type="text" value={login} onChange={(e) => set_login(e.target.value)} />
          <button className="change" onClick={()=>{handle_change_login(login, set_text, set_is_modal_opened)}}>изменить</button>
        </div>
        <div className="form-group-change">
          <label>Изменить пароль:</label>
          <input type="password" value={password} onChange={(e) => set_password(e.target.value)} />
          <button className="change" onClick={()=>{handle_change_password(password, set_text, set_is_modal_opened)}}>изменить</button>
        </div>
        {is_modal_opened && <AuthorizationModal text={text} set_is_modal_opened={set_is_modal_opened} />}
    </div>);
}