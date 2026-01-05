import { CirclePercent, TrendingUp, Zap } from "lucide-react";
import { addThousandsSeparator } from "@/lib/utils";
import ChartTitle from "../../components/chart-title";
import Chart from "./chart";

export function Conversions() {
  return (
    <section className="flex h-full flex-col gap-6">
      <ChartTitle title="Vertical Intelligence: Predator Leaderboard" icon={CirclePercent} />
      
      {/* Performance Metric Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Metric 1: Portfolio Increase */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-2 text-blue-400">
            <TrendingUp size={16} />
            <span className="text-[10px] uppercase font-bold tracking-widest">Portfolio Lift</span>
          </div>
          <span className="text-3xl font-bold">12.2%</span>
          <p className="text-[10px] text-muted-foreground/60 mt-1">Est. Portfolio Yield Increase</p>
        </div>

        {/* Metric 2: LPM Adoption Placeholder */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-2 text-purple-400">
            <Zap size={16} />
            <span className="text-[10px] uppercase font-bold tracking-widest">LPM Density</span>
          </div>
          <span className="text-3xl font-bold">34%</span>
          <p className="text-[10px] text-muted-foreground/60 mt-1">Avg. Top 3 LPM Adoption</p>
        </div>

        {/* Metric 3: Total TPV (The $727M) */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 block mb-2">Total Leakage (TPV)</span>
          <span className="text-2xl font-bold">$727,400,000</span>
        </div>

        {/* Metric 4: Stripe Revenue */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 block mb-2">Net Revenue Potential</span>
          <span className="text-2xl font-bold text-blue-500">$10,911,000</span>
        </div>
      </div>

      {/* The Main Chart */}
      <div className="relative flex-grow bg-black/20 rounded-2xl p-6 border border-white/5">
        <Chart />
      </div>
    </section>
  );
}

export default Conversions;
