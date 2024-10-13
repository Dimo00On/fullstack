import "./AddFile.css";
import { handle_file } from "../functions";

export function AddFile({file, set_file}) {
    return (<div className="add_file">
        <h2>Добавьте файл</h2>
        <input type="file" onChange={(event)=>{handle_file(event, set_file);}}></input>
        {file && (
        <div>
          <p>Выбранный файл: {file.name}</p>
          <p>Размер файла: {file.size} байт</p>
        </div>
      )}
    </div>);
}