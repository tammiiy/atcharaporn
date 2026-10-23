// หน้าแรกของ portfolio คุณ (เปิดดูที่ http://localhost:3000)
//
// วิธีประกอบ portfolio:
// 1. เปิด Component Shop: https://natch-soros.vercel.app/projects/cs-challenge/shop
// 2. เลือก component แล้วกด Copy code
// 3. สร้างไฟล์ใหม่ในโฟลเดอร์ components/ เช่น components/HeroMinimal.tsx แล้ววางโค้ด
// 4. import มาใช้ในไฟล์นี้ แล้วเปลี่ยน props เป็นข้อมูลของคุณ เช่น
//
//    import HeroMinimal from "@/components/HeroMinimal";
//
//    <HeroMinimal name="ชื่อคุณ" role="สิ่งที่คุณทำ" image="/me.jpg" />

import Tammi from "@/components/components/components/tammi";
import Bar from "@/components/components/components/bar";
import Bottom from "@/components/components/components/bottom";
import AboutSplit from "@/components/components/components/aboutme";
import Proj from "@/components/components/components/proj";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <Bar nam1="Tam" links={[
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ]} />
      <Tammi name="Tam" role="Student developer from Lampang" image="/cc366.JPG" />

      <AboutSplit
        heading="A little about me!"
        paragraphs={[
          "I started out liking browsing websites, so I practiced and got hands-on with it, and I also enjoy designing in Figma. Besides that, I like reading novels and watching movies.",
        ]}
        image="/ai1.JPG"
        stats={[
          { value: "1", label: "Websites built" },
          { value: "1", label: "GitHub repos" },
          { value: "2", label: "Hackathon" },
        ]}
      />
      <Proj
        heading="My projects"
        projects={[
          {
            title: "Portfolio",
            description: "This is my portfolio website built with Next.js and Tailwind CSS.",
            image: "",
            href: "#",
            tags: ["Next.js", "Tailwind CSS"],
          },
          {
            title: "Quiz Game",
            description: "A simple quiz game built with React.",
            image: "",
            href: "#",
            tags: ["React", "Game"],
          },
        ]}
      />
  
      <Bottom name="Tam" links={[
        { label: "GitHub", href: "https://github.com/tammiiy" },
        { label: "Instagram", href: "https://www.instagram.com/t.mxhn?vrfl=NW4wdzMwbGpyajU2&utm_source=qr" },
        { label: "Email", href: "mailto:julyrayxa@gmail.com" },
      ]} />
      
    </main>
  );
}
