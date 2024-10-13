import { AddMenuButton } from "./AddMenuButton.js";
import { AuthorizationMenuButton } from "./AuthorizationMenuButton.js";
import "./MainPage.css";
import { MenuButton } from "./MenuButton.js";
import { Search } from "./Search.js";

export default function MainPage({tags, set_tags, set_results}) { 
  return (
    <div className="MainPage">
      <nav className="menu">
        <MenuButton index={0} tags={tags} set_tags={set_tags} to={"/results"} />
        <MenuButton index={1} tags={tags} set_tags={set_tags} to={"/results"}/>
        <MenuButton index={2} tags={tags} set_tags={set_tags} to={"/results"}/>
        <AddMenuButton tags={tags} set_tags={set_tags}/>
        <AuthorizationMenuButton tags={tags} set_tags={set_tags}/>
      </nav>
      <Search tags={tags} set_results={set_results}/>
    </div>
  );
}
