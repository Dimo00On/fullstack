import "./ResultsPage.css";
import { Search } from "../Main components/Search";
import { FiltersPreview } from "./FiltersPreview";
import { Results } from "./Results";
import { ExitButton } from "../Main components/ExitButton";

export function ResultsPage(props) {
    return (<div className="results_page">
        <Search tags={props.tags} set_results={props.set_results}/>
        <FiltersPreview to={"/results/filters"} tags={props.tags} set_tags={props.set_tags}/>
        <Results results={props.results}/>
        <ExitButton back={"/"}/>
    </div>)
}