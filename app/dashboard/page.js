import { currentUser } from "@clerk/nextjs/server";
import MenuBar from "../../components/Menubar";
import {ArrowDownTrayIcon, ArrowTrendingDownIcon, BanknotesIcon, ArrowTrendingUpIcon, WalletIcon} from "@heroicons/react/24/outline"
import { Progress } from "@/components/ui/progress";



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
        <div className="flex justify-between gap-1">
            <div className="bg-emerald-400 min-w-2/6  flex items-center rounded-lg px-5 py-2 gap-2">
                <ArrowDownTrayIcon className="h-5 text-white"/>
                <p className="text-white text-sm"> Add Income</p>
            </div>
            <div className="border min-w-2/6 flex items-center rounded-lg px-5 py-2 gap-2">
                <ArrowTrendingDownIcon className="h-5"/>
                <p className="text-sm"> Add Spending</p>
            </div>
        </div>
      </div>

      <div className="flex justify-between border border-zinc-500/10 px-5 py-5 rounded-lg mt-2">

        <div className="min-w-5/12">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-emerald-400 rounded-full">
              <WalletIcon className="h-10 text-white" />
            </div>
            <div className="flex mx-1.5 text-emerald-500">
              <ArrowTrendingUpIcon className="h-5"/>
              <p>+3.42%</p>
            </div>
          </div>
          <p className="text-zinc-500">Income</p>
          <p className="font-bold text-lg">LKR 20000.00</p>
        </div>
        
        <div className="min-w-5/12">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-blue-400 rounded-full">
              <BanknotesIcon className="h-10 text-white" />
            </div>
            <div className="flex mx-1.5 text-rose-500">
              <ArrowTrendingUpIcon className="h-5"/>
              <p>+3.42%</p>
            </div>
          </div>
          <p className="text-zinc-500">Spending</p>
          <p className="font-bold text-lg">LKR 12000.00</p>
        </div>

      </div>

      <div className="mt-5">

        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl">My Goals</p>
          <p className="font-md text-sm text-black/50">See more &gt;</p>
        </div>

        <div className="mx-1">

          <div className="mt-5 border border-zinc-500/10 px-5 rounded-lg">
            <p className="text-xl font-semibold mb-2.5">Buy laptop</p>
            <Progress value={50}/>
            <div className="flex justify-between text-sm mt-2">
              <p>LKR 90000,00</p>
              <p>LKR 180000,00</p>
            </div>
          </div>
          <div className="mt-5 border border-zinc-500/10 px-5 rounded-lg">
            <p className="text-xl font-semibold mb-2.5">Buy laptop</p>
            <Progress value={50}/>
            <div className="flex justify-between text-sm mt-2">
              <p>LKR 90000,00</p>
              <p>LKR 180000,00</p>
            </div>
          </div>
          <div className="mt-5 border border-zinc-500/10 px-5 rounded-lg flex justify-center items-center h-20">
            <p className="font-semibold text-lg">Create a new Goal</p>
          </div>

        </div>
        
      </div>

      <div className="mb-25"></div>

      <MenuBar activeTab={"dashboard"}/>
    </section>
  );
}
