import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-12">
      <header className="text-4xl text-center font-thin mb-5">Welcome to Mini Apps</header>
      <ul>
        <li><Link href="/memory-game" className="text-lg font-thin">Memory Game for Little Kids</Link></li>
        <li><Link href="/odd-one-out" className="text-lg font-thin">Odd one Out Game for Little Kids</Link></li>
      </ul>
    </main>
  );
}
