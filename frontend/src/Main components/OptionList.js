import { InsideMenuButton } from "./InsideMenuButton";
import "./OptionList.css";

export function OptionList({ index, tags, set_tags, to}) {
    const className_by_index = "inside_menu dropdown-content" + index;
    switch (index) {
      case 0:
        return (
          <div className={className_by_index}>
            <InsideMenuButton
              type={"видеозапись"}
              lesson={"лекция"}
              action={"find"}
              tags={tags}
              set_tags={set_tags}
              to={to}
            />
            <InsideMenuButton
              type={"видеозапись"}
              lesson={"семинар"}
              action={"find"}
              tags={tags}
              set_tags={set_tags}
              to={to}
            />
          </div>
        );
      case 1:
        return (
          <div className={className_by_index}>
            <InsideMenuButton
              type={"конспект"}
              lesson={"лекция"}
              action={"find"}
              tags={tags}
              set_tags={set_tags}
              to={to}
            />
            <InsideMenuButton
              type={"конспект"}
              lesson={"семинар"}
              action={"find"}
              tags={tags}
              set_tags={set_tags}
              to={to}
            />
          </div>
        );
      case 2:
        return null;
      case 3:
        return (
          <div className={className_by_index}>
            <InsideMenuButton type={"видеозапись"} lesson={"none"} action={"add"} tags={tags} set_tags={set_tags} to={to}/>
            <InsideMenuButton type={"конспект"} lesson={"none"} action={"add"} tags={tags} set_tags={set_tags} to={to}/>
            <InsideMenuButton type={"решение"} lesson={"none"} action={"add"} tags={tags} set_tags={set_tags} to={to}/>
          </div>
        );
      case 4:
        return null;
    }
    return null;
  }