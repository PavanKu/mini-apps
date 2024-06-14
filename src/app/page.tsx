import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-12">
      <header>Welcome to Mini Apps</header>
      <Link href="/memory-game">Memory Game for Little Kids</Link>
    </main>
  );
}
