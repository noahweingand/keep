import { links } from "../constants/links";
import { NavLink } from "./nav-link";

export const LinkSection = () => {
  return (
    <div className="tui-bg-blue-black w-full">
      <div className="flex flex-wrap w-full justify-center gap-4 p-4">
        {links.map((props) => {
          return <NavLink key={props.id} {...props} />;
        })}
      </div>
    </div>
  );
};
