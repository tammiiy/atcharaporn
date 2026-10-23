type NavLink = { label: string; href: string };

type Props = {
  nam1?: string;
  links?: NavLink[];
};

// Navbar แบบเรียบ: ชื่ออยู่ซ้าย ลิงก์อยู่ขวา
export default function NavbarMinimal({
  nam1: name = "Tam",
  links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
}: Props) {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-lg font-semibold tracking-tight text-neutral-900">
          {name}
        </a>
        <ul className="flex items-center gap-5 text-sm text-neutral-600 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-neutral-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
