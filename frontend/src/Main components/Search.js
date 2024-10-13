import search_img from "../img/search.png";
import {find_results} from "../functions.js"
import "./Search.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Search(props) {
    const [title, set_title] = useState('');
    return (
      <form className="search">
        <input className="search" type="text" value={title} onChange={(e) => set_title(e.target.value)}/>
        <div className="search">
          <Link to="/results">
            <button className="search" onClick={() => find_results(title, props.tags, props.set_results)}>
              <img className="search" src={search_img}></img>
              <span className="search">Найти</span>
            </button>
          </Link>
        </div>
      </form>
    );
  }