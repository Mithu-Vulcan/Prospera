import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="p-4 text-5xl font-bold text-zinc-900 -tracking-tight my-5">
        Easy way to manage your money like you have never experienced before
      </p>
      <Link href={"/dashboard"}>
        <div className="flex justify-around">
          <p className="text-xl border px-8 py-4 font-bold rounded-full bg-zinc-900 text-white">
            {" "}
            Go to Dashboard
          </p>
        </div>
      </Link>
    </div>
  );
}
