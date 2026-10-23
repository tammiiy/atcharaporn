# My Portfolio (CS Challenge Day 2)

Starter project สำหรับ [Challenge Day 2](https://natch-soros.vercel.app/projects/cs-challenge/day-2)
ใช้ Next.js + TypeScript + Tailwind CSS

## เริ่มต้น

```bash
npm install
npm run dev
```

แล้วเปิด http://localhost:3000

## ประกอบ portfolio

1. เปิด [Component Shop](https://natch-soros.vercel.app/projects/cs-challenge/shop) แล้วเลือก component
2. กด **Copy code** แล้ววางในไฟล์ใหม่ใน `components/` เช่น `components/HeroMinimal.tsx`
3. import มาใช้ใน `app/page.tsx` แล้วเปลี่ยน props เป็นข้อมูลของคุณ
4. วางรูปไว้ใน `public/` แล้วส่งเข้า prop `image="/me.jpg"`

## ก่อน deploy

```bash
npm run build
```

ถ้า build ผ่าน ให้ push ขึ้น GitHub แล้ว import repo ที่ [vercel.com/new](https://vercel.com/new)

## โครงสร้าง

```text
app/
  layout.tsx    ← โครงหน้าเว็บ ชื่อเว็บ
  page.tsx      ← หน้าแรก (ประกอบ component ที่นี่)
  globals.css   ← เปิดใช้ Tailwind CSS
components/     ← component ที่ copy มาจาก Shop
public/         ← รูปภาพ
```
# my-portfolio
