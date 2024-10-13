import "./AddPage.css";
import { AddFile } from "./AddFile";
import { FiltersPreview } from "../Result components/FiltersPreview";
import { useState } from "react";
import { handle_saving_file } from "../functions";
import { AuthorizationModal } from "../Authorization components/AuthorizationModal";
import { AddImage } from "./AddImage";
import { ExitButton } from "../Main components/ExitButton";

export function AddPage({tags, set_tags}) {
    const [is_modal_opened, set_is_modal_opened] = useState(false);
    const [text, set_text] = useState('');
    const [file, set_file] = useState(null);
    const [image, set_image] = useState(null);
    const [title, set_title] = useState('');
    return (<div className="add_page">
        <h2>Добавьте необходимые теги:</h2>
        <FiltersPreview to={"/add/filters"} tags={tags} set_tags={set_tags}/>
        <AddFile file={file} set_file={set_file}/>
        <AddImage image={image} set_image={set_image}/>
        <div>
          <h2>Добавьте название:</h2>
          <input type="text" value={title} onChange={(e) => set_title(e.target.value)} />
        </div>
        <div>
            <button className="add" onClick={()=>{handle_saving_file(title, file, image, tags, set_text, set_is_modal_opened);}}>Добавить</button>
        </div>
        <ExitButton back={"/"}/>
        {is_modal_opened && <AuthorizationModal text={text} set_is_modal_opened={set_is_modal_opened} />}
    </div>);
}