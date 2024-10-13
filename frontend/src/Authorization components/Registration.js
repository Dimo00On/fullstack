import "./Registration.css";
import { AuthorizationModal } from "./AuthorizationModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ExitButton } from "../Main components/ExitButton";
import { onAuth } from "./Authorization";
import { ApiService } from "../services/ApiService";

export function Registration(props) {
    const [login, set_login] = useState('');
    const [password_first, set_password_first] = useState('');
    const [password_second, set_password_second] = useState('');
    const [is_modal_opened, set_is_modal_opened] = useState(false);
    const [text, set_text] = useState('');

    const onRegister = async (event) => {
      if (password_first !== password_second) {
        set_text("Пароли не совпадают");
        set_is_modal_opened(true);
        return;
      }
      const formData = new FormData();
      formData.append("username", login);
      formData.append("password", password_first);

      let success = [false];
      await ApiService("users/", {
          headers: {},
          method: "post",
          body: formData,
        },
        success
      );

      await onAuth(event, login, password_first, set_is_modal_opened);
    };


    return (<div className="login-page-container">
        <div className="login-form-container">
        <h2>Регистрация</h2>
        <div className="form-group">
          <label>Логин:</label>
          <input type="text" value={login} onChange={(e) => set_login(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Пароль:</label>
          <input type="password" value={password_first} onChange={(e) => set_password_first(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Пароль ещё раз:</label>
          <input type="password" value={password_second} onChange={(e) => set_password_second(e.target.value)} />
        </div>
          <button className="authorization" onClick={onRegister}>
              Зарегистрироваться
          </button>
      </div>
      <ExitButton back={"/authorization"}/>
      {is_modal_opened && <AuthorizationModal text={text} set_is_modal_opened={set_is_modal_opened} />}
    </div>);
}