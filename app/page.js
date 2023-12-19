import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to the NextJS Recipe Share App!</h1>
      <p>🔥 Let&apos;s get cooking! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
