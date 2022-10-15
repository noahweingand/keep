import { links } from '../constants/links';
import { NavLink } from './Link';

export const LinkSection = () => {
  return (
    <div className="tui-window">
      <div className="flex justify-center gap-4 p-4">
        {links.map((props) => {
          return <NavLink key={props.id} {...props} />;
        })}
      </div>
    </div>
  );
};
