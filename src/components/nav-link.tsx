import Link from "next/link";

const linkClass = "tui-button white-168 text-lg tui-border-solid";

export function NavLink({
  href,
  text,
  isInternalLink = false,
}: {
  href: string;
  text: string;
  isInternalLink?: boolean;
}) {
  if (isInternalLink) {
    return (
      <Link className={linkClass} href={href}>
        {text}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={linkClass}>
      {text}
    </a>
  );
}
