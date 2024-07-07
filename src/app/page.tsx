import Link from "next/link";

export default function Home() {
  return (
    <main className="p-3">
      <nav className="flex justify-center">
        <ul className="text-center w-26">
          <Link href={"/my-resume-1"} className="block px-2 py-2">
            <li className="bg-slate-500 px-3 py-2 ">Layout-1</li>
          </Link>
          <Link href={"/my-resume-2"} className="block px-2 py-2">
            <li className="bg-slate-500 px-3 py-2">Layout-2</li>
          </Link>
          <Link href={"/my-resume-3"} className="block px-2 py-2">
            <li className="bg-slate-500 px-3 py-2">Layout-3</li>
          </Link>
        </ul>
      </nav>
    </main>
  );
}
