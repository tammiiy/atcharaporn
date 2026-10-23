type Props = {
  name?: string;
  role?: string;
  bio?: string;
  image?: string; // เช่น "/me.jpg" (วางรูปไว้ในโฟลเดอร์ public)
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

// Hero แบบเรียบ: รูป ชื่อ ตำแหน่ง และปุ่ม 2 ปุ่ม
export default function HeroMinimal({
  name = "Tam",
  role = "Student developer from LAmpang",
  bio = "I like building small websites that solve real problems. Right now I'm learning React and Next.js.",
  image,
  primaryLabel = "See my work",
  primaryHref = "#projects",
  secondaryLabel = "Contact",
  secondaryHref = "mailto:julyrayxa@gmail.com",
}: Props) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      {image ? (
        <img src={image} alt={name} className="size-20 rounded-full object-cover" />
      ) : (
        // ยังไม่มีรูป: แสดงตัวอักษรแรกของชื่อแทน
        <div className="grid size-20 place-items-center rounded-full bg-neutral-900 text-2xl font-semibold text-white">
          {name.charAt(0)}
        </div>
      )}

      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        Hi, I&apos;m {name}.
      </h1>
      <p className="mt-2 text-xl text-neutral-500">{role}</p>
      <p className="mt-6 max-w-xl leading-relaxed text-neutral-600">{bio}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={primaryHref}
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          {primaryLabel}
        </a>
        <a
          href={secondaryHref}
          className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
        >
          {secondaryLabel}
        </a>
      </div>
    </section>
  );
}
