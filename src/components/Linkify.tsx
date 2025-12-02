import { LinkIt, LinkItUrl } from "react-linkify-it";
import Link from "next/link";

interface LinkifyProps {
  children?: React.ReactNode;
}

export default function Linkify({ children }: LinkifyProps) {
  return (
    <LinkifyUsername>
      <LinkifyHashtag>
        <LinkifyURL>{children}</LinkifyURL>
      </LinkifyHashtag>
    </LinkifyUsername>
  );
}

function LinkifyURL({ children }: LinkifyProps) {
  return (
    <LinkItUrl className="text-primary hover:underline">{children}</LinkItUrl>
  );
}

function LinkifyUsername({ children }: LinkifyProps) {
  return (
    <LinkIt
      component={(match, key) => (
        <Link
          key={key}
          href={`/users/${match.slice(1)}`}
          className="text-primary hover:underline"
        >
          {match}
        </Link>
      )}
      regex={/(@[a-zA-Z0-9_-]+)/}
    >
      {children}
    </LinkIt>
  );
}

function LinkifyHashtag({ children }: LinkifyProps) {
  return (
    <LinkIt
      component={(match, key) => (
        <Link
          key={key}
          href={`/hashtag/${match.slice(1)}`}
          className="text-primary hover:underline"
        >
          {match}
        </Link>
      )}
      regex={/(#[a-zA-Z0-9]+)/}
    >
      {children}
    </LinkIt>
  );
}
