import "./Result.css";
import {download_file} from "../functions.js";

export function Result(props) {
    // console.log(props.result.main_file_url, props.result.image_url);
    return (
        <div className="one_result" onClick={()=>{download_file(props.result.main_file_url, props.result.title)}}>
            <img className="one_result" src={props.result.image_url}></img>
            <span className="one_result">{props.result.title}</span>
        </div>
    );
}
