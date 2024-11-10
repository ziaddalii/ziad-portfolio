import Link from "next/link";

export function NavigationLink({ link }) {

  return (
    <li key={link.id} className="after:absolute after:w-[0%] hover:after:w-[100%] text-sm after:h-[1px] after:transition-all relative after:bg-secondary after:top-1/2 after:left-0">
      <Link href={link.href}>{link.name}</Link>
    </li>
  );
}
