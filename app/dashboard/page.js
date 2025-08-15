import { currentUser } from "@clerk/nextjs/server";
import MenuBar from "../../components/Menubar";
import {ArrowDownTrayIcon, ArrowTrendingDownIcon} from "@heroicons/react/24/outline"



export default async function dashboard() {
  const user = await currentUser();
  return (
    <section className="px-4">
      <p className="text-5xl font-bold mt-2 mb-5">
        Hi <span className="capitalize">{user ? user.firstName : ""}!{" "}</span>
      </p>

      <div className="border border-zinc-500/10 px-5 py-5 rounded-lg">
        <p className="text-sm text-zinc-400 mb-1">My Budget</p>
        <p className="text-2xl font-bold mb-2">LKR 60000.00</p>
        <div className="flex justify-between">
            <div className="bg-emerald-400 min-w-2/5 flex items-center rounded-lg px-5 py-2 gap-2">
                <ArrowDownTrayIcon className="h-5 text-white"/>
                <p className="text-white text-sm"> Add Income</p>
            </div>
            <div className="border min-w-2/5 flex items-center rounded-lg px-5 py-2 gap-2">
                <ArrowTrendingDownIcon className="h-5"/>
                <p className="text-sm"> Add Income</p>
            </div>
        </div>
      </div>

      <MenuBar activeTab={"dashboard"}/>
    </section>
  );
}
