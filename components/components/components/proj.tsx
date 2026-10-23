"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
};

type Props = {
  heading?: string;
  projects?: Project[];
};

// สีปกของการ์ดที่ไม่มีรูป ใช้วนไปตามลำดับ
const covers = [
  "from-violet-500 to-fuchsia-500",
  "from-sky-500 to-emerald-400",
  "from-amber-400 to-rose-500",
  "from-neutral-800 to-neutral-500",
];

// การ์ดโปรเจกต์แบบตาราง กดปุ่มด้านบนเพื่อกรองตาม tag
// ต้องมี "use client" เพราะใช้ useState จำว่าเลือก tag ไหนอยู่
export default function ProjectGrid({
  heading = "Projects",
  projects = [
    { title: "Class Website", description: "Homework and timetable for my class.", tags: ["Web"], href: "#" },
    { title: "Quiz Game", description: "A 10-question quiz built with JavaScript.", tags: ["Game", "Web"], href: "#" },
    { title: "Poster Series", description: "Posters for the school science fair.", tags: ["Design"], href: "#" },
    { title: "Weather App", description: "Shows today's weather from a free API.", tags: ["Web"], href: "#" },
  ],
}: Props) {
  const tags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">{heading}</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActive(tag)}
                className={
                  tag === active
                    ? "rounded-full bg-neutral-900 px-4 py-1.5 text-sm text-white"
                    : "rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100"
                }
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              {p.image ? (
                <img src={p.image} alt="" className="aspect-video w-full object-cover" />
              ) : (
                <div className={`aspect-video w-full bg-gradient-to-br ${covers[i % covers.length]}`} />
              )}
              <div className="p-5">
                <h3 className="font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
