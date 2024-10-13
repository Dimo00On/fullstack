import "./Authorization.css"

import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { handle_login } from "../functions";
import { AuthorizationModal } from "./AuthorizationModal";
import { ExitButton } from "../Main components/ExitButton";
import { ApiService } from "../services/ApiService";

export const onAuth = async (event, login, password, set_is_modal_opened) => {
  event.preventDefault();

  window.localStorage.removeItem("access");
  window.localStorage.removeItem("refresh");
  let success = [false];
  const { access, refresh } = await ApiService("token/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: login, password }),
    },
    success
  );
  if (!success[0]) {
    set_is_modal_opened(true);
    return;
  }
  
  window.localStorage.setItem("username", login);
  window.localStorage.setItem("access", access);
  window.localStorage.setItem("refresh", refresh);
  window.location.href = "/";
}

function Authorization(props) {
  const [login, set_login] = useState('');
  const [password, set_password] = useState('');
  const [is_modal_opened, set_is_modal_opened] = useState(false);
  
  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2>Вход</h2>
        <div className="form-group">
          <label>Логин:</label>
          <input type="text" value={login} onChange={(e) => set_login(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Пароль:</label>
          <input type="password" value={password} onChange={(e) => set_password(e.target.value)} />
        </div>
          <button className="authorization" onClick={(event) => {onAuth(event, login, password, set_is_modal_opened);}}>
              Войти
          </button>
      </div>
      <div className="register-links">
         <Link to="/authorization/new">
            <button className="registration">
                Зарегистрироваться
            </button>
        </Link>
      </div>
      <ExitButton back={"/"}/>
      {is_modal_opened && <AuthorizationModal text={"Неправильный логин или пароль"} set_is_modal_opened={set_is_modal_opened} />}
    </div>
  );
};

export default Authorization;