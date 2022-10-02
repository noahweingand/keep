export const Link: React.FC<{ href: string; text: string; noShadow?: boolean }> = ({
  href,
  text,
  noShadow = false,
}) => {
  const className = noShadow
    ? 'tui-button text-lg tui-border-solid tui-no-shadow'
    : 'tui-button text-lg tui-border-solid';

  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};
