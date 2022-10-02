import { Icon } from './Icon';

export const Header = () => {
  return (
    <div className="flex justify-around items-center">
      <Icon
        file={'fortnite.svg' as unknown as undefined}
        color={'#1DA1F2'}
        scale={10}
        style={{ height: '500px', width: '500px' }}
        spin={1}
      />
      <h1 className="text-7xl font-semibold text-center text-cyan-50">KEEP</h1>
      <Icon
        file={'fortnite.svg' as unknown as undefined}
        color={'#1DA1F2'}
        scale={10}
        style={{ height: '500px', width: '500px' }}
        spin={1}
      />
    </div>
  );
};
