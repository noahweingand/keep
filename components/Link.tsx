export const Link: React.FC<{ href: string; text: string; noShadow?: boolean }> = ({
  href,
  text,
  noShadow = false,
}) => {
  const className = noShadow
    ? 'tui-button white-168 text-lg tui-border-solid tui-no-shadow'
    : 'tui-button white-168 text-lg tui-border-solid';

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {text}
    </a>
  );
};
