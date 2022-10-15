import { Icon } from './Icon';
import { KeepGuySvg } from './svgs/KeepGuySVG';

export const Header = () => {
  return (
    <div className="flex justify-around items-center">
      <Icon
        file={'keepelf_white.svg' as unknown as undefined}
        color={'#ffffff'}
        lightColor={'#ffffff'}
        scale={10}
        style={{ height: '600px', width: '600px' }}
        spin={2}
      />
      <KeepGuySvg />
      <Icon
        file={'keepelf_white.svg' as unknown as undefined}
        color={'#ffffff'}
        lightColor={'#ffffff'}
        scale={10}
        style={{ height: '600px', width: '600px' }}
        spin={2}
      />
    </div>
  );
};
