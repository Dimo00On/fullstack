import "./FiltersPreview.css";
import { Filter, FilterPreviewComponent } from "./FilterPreviewComponent";
import { Link } from "react-router-dom";

export function FiltersPreview(props) {
    return (
    <Link to={props.to}>
        <div className="filters">
            <span className="filters">Фильтры:</span>
            {Array.from(props.tags).slice(0, 4).map((tag, index) => (
            <FilterPreviewComponent key={index} text={tag} set_tags={props.set_tags} />
            ))}
            <FilterPreviewComponent text={"..."} tags={props.tags} set_tags={props.set_tags}/>
        </div>
    </Link>
    );
}