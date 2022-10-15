import { Icon } from './Icon';
import { KeepSvg } from './KeepSVG';

export const Header = () => {
  return (
    <div className="flex justify-around items-center">
      <Icon
        file={'keepguy.svg' as unknown as undefined}
        color={'#ffffff'}
        lightColor={'#ffffff'}
        scale={10}
        style={{ height: '600px', width: '600px' }}
        spin={1}
      />
      <KeepSvg />
      <Icon
        file={'keepguy.svg' as unknown as undefined}
        color={'#ffffff'}
        lightColor={'#ffffff'}
        scale={10}
        style={{ height: '600px', width: '600px' }}
        spin={1}
      />
    </div>
  );
};
