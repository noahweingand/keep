import Link from 'next/link';
import { useRouter } from 'next/router';

const linkClass = 'tui-button white-168 text-lg tui-border-solid';

export const NavLink: React.FC<{
  href: string;
  text: string;
  isInternalLink?: boolean;
}> = ({ href, text, isInternalLink = false }) => {
  const router = useRouter();

  const handleNav = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(href);
  };

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={linkClass} onClick={handleNav}>
          {text}
        </a>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={linkClass}>
      {text}
    </a>
  );
};
