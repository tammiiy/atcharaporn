type SkillGroup = { title: string; skills: string[] };

type Props = {
  heading?: string;
  groups?: SkillGroup[];
};

// ทักษะแบบป้าย แบ่งเป็นกลุ่ม
export default function SkillTags({
  heading = "Skills",
  groups = [
    { title: "Languages", skills: ["HTML", "CSS", "JavaScript", "TypeScript"] },
    { title: "Tools", skills: ["VS Code", "Git", "GitHub", "Figma"] },
    { title: "Learning now", skills: ["React", "Next.js", "Tailwind CSS"] },
  ],
}: Props) {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">{heading}</h2>
        <div className="mt-8 space-y-6">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-neutral-500">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm text-neutral-800 shadow-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
