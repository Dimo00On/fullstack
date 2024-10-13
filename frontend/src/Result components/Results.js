import "./Results.css";
import { Result } from "./Result";
import { result_page_size, navigate_buttons} from "../consts";
import { next_result, prev_result } from "../functions";
import { useEffect, useState } from "react";

export function Results(props) {
    const [index, set_index] = useState(0);
    const [size, set_size] = useState(Array.from(props.results).length);
    useEffect(() => {
        set_size(Array.from(props.results).length);
    }, [props.results]);
    
    return (
        <div className="whole_result_block">
            <div className="results">
                {Array.from(props.results).slice(index, index + result_page_size).map((result, index) => (
                <Result key={index} result={result}/>
                ))}
            </div>
            <div className="navigate_buttons">
                <button className="navigate_buttons" onClick={() => {prev_result(index, set_index);}}>
                <img className="navigate_buttons" src={navigate_buttons[0]}></img>
                </button>
                <span className="navigate_buttons">
                    {Math.ceil((index + 1) / result_page_size)} из {Math.ceil(size / result_page_size)}
                </span>
                <button className="navigate_buttons" onClick={() => {next_result(index, set_index, size);}}>
                <img className="navigate_buttons" src={navigate_buttons[1]}></img>
                </button>
            </div>
        </div>
    );
}