import { links } from '../constants/links';
import { Link } from './Link';

export const LinkSection = () => {
  return (
    <div className="tui-window">
      <div className="flex justify-center gap-4 p-4">
        {links.map((props) => {
          return <Link key={props.id} {...props} />;
        })}
      </div>
    </div>
  );
};
