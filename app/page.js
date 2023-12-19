import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get cooking! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
