import Link from "next/link";

interface PrimaryNavLinkProps {
  text: string;
  href: string;
  external?: boolean;
}

export default function PrimaryNavLink({ text, href, external }: PrimaryNavLinkProps) {
  return (
    <div style={{ width: "fit-content" }}>
      <Link
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
      >
        <div className="bg-cusYellow px-12 py-3 hover:bg-black hover:text-white duration-500 cursor-pointer text-base uppercase font-bold text-black mt-9">
          {text}
        </div>
      </Link>
    </div>
  );
}
