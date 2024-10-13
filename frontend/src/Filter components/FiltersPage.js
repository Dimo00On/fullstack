import { FilterAdder } from "./FilterAdder.js";
import "./FiltersPage.css";
import {exit} from "../consts.js";
import { Link } from "react-router-dom";
import { FilterComponent } from "./FilterComponent.js";

export function FiltersPage({tags, set_tags, back}) {
    return (<div className="filter_page">
        <div className="main_block">
            <span className="main_block">Фильтры:</span>
            <button className="main_block">
                <Link to={back}>
                <img className="main_block" src={exit}></img>
                </Link>
            </button>
        </div>
        <div className="content_block">
            <span className="filter"><FilterAdder  tags={tags} set_tags={set_tags}/></span>
            {Array.from(tags).map((tag, index) => (
            <FilterComponent key={index} text={tag} tags={tags} set_tags={set_tags} />
            ))}
        </div>
    </div>);
}