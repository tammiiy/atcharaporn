type SocialLink = { label: string; href: string };

type Props = {
  name?: string;
  links?: SocialLink[];
};

// Footer แบบเรียบ: ชื่อ ปี และลิงก์โซเชียล
export default function SimpleFooter({
  name = "Tam",
  links = [
    { label: "GitHub", href: "https://github.com/tammiiy" },
    { label: "Instagram", href: "https://www.instagram.com/t.mxhn?vrfl=NW4wdzMwbGpyajU2&utm_source=qr" },
    { label: "Email", href: "mailto:julyrayxa@gmail.com" },
  ],
}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-neutral-200 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>
          © {year} {name}. Built with Next.js, deployed on Vercel.
        </p>
        <ul className="flex gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-neutral-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
