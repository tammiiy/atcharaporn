type Stat = { value: string; label: string };

type Props = {
  heading?: string;
  paragraphs?: string[];
  image?: string;
  stats?: Stat[];
  accent?: string;
};

// About แบบแบ่งครึ่ง: รูปซ้าย ข้อความและตัวเลขเด่นขวา (บนมือถือเรียงบนลงล่าง)
export default function AboutSplit({
  heading = "A little about me",
  paragraphs = [
    "I got into coding by changing the colors of a website with DevTools. Since then I've built a class website, a quiz game and this portfolio.",
    "Outside of code I play basketball and draw posters for school events.",
  ],
  image,
  stats = [
    { value: "1", label: "Websites built" },
    { value: "1", label: "GitHub repos" },
    { value: "2", label: "Hackathon" },
  ],
  accent = "#0ea5e9",
}: Props) {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {image ? (
          <img src={image} alt="" className="aspect-[4/5] w-full rounded-3xl object-cover" />
        ) : (
          // ยังไม่มีรูป: ใช้กล่องสีแทน
          <div
            className="aspect-[4/5] w-full rounded-3xl"
            style={{ background: `linear-gradient(135deg, ${accent}, #f5f5f5)` }}
          />
        )}

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">{heading}</h2>
          {paragraphs.map((text) => (
            <p key={text} className="mt-5 leading-relaxed text-neutral-600">
              {text}
            </p>
          ))}

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold" style={{ color: accent }}>
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
