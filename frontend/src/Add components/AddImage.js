import "./AddImage.css"
import { handle_file } from "../functions";

export function AddImage({image, set_image}) {
    return (<div className="add_file">
        <h2>Добавьте превью для файла</h2>
        <input type="file" onChange={(event)=>{handle_file(event, set_image);}}></input>
        {image && (
        <div>
          <img className="add_image" src={URL.createObjectURL(image)}></img>
        </div>
      )}
    </div>);
}