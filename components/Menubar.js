import {
  HomeIcon,
  PlusCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function MenuBar({activeTab}) {
  return (
    <section className="fixed bottom-0 left-0 w-full z-50 flex justify-between px-8 py-3 shadow-md rounded-2xl mb-1">
      <Link href={"/dashboard"}>
        <div className={`flex flex-col items-center ${activeTab === "dashboard" ? "text-emerald-500": "text-zinc-600"}  p-1 rounded-xl`}>
          <HomeIcon className=" h-8" />
          <p className="text-sm ">Dashboard</p>
        </div>
      </Link>
      <Link href={"goals"}>
        <div className={`flex flex-col items-center ${activeTab === "goals" ? "text-emerald-500": "text-zinc-600"}  p-1 rounded-xl`}>
          <PlusCircleIcon className=" h-8" />
          <p className="text-sm ">Add new Goal</p>
        </div>
      </Link>
      <div className={`flex flex-col items-center ${activeTab === "logout" ? "text-emerald-500": "text-zinc-600"}  p-1 rounded-xl`}>
        <PowerIcon className=" h-8" />
        <p className="text-sm ">Logout</p>
      </div>
    </section>
  );
}
