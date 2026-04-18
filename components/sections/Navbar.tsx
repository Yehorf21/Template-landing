import Link from "next/link";
import cn from "classnames";

export const Navbar = () => {
  const nav = ["Home", "About Us", "Contact us", "Wassup?"];

  return (
    <nav className="self-center m-0 flex gap-16 list-none">
      {nav.map((item, i) => (
        <Link
          href={"/" + i}
          className={cn(
            "font-mono text-xl hover:opacity-60 transition-opacity cursor-pointer",
            {},
          )}
          key={item}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};
