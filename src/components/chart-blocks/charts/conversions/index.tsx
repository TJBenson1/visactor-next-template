import { CirclePercent } from "lucide-react";
import { addThousandsSeparator } from "@/lib/utils";
import ChartTitle from "../../components/chart-title";
import Chart from "./chart";

// This matches the data in your chart.tsx exactly
const rawData = [
  { name: "Farfetch", value: 138400000 },
  { name: "Coinbase", value: 121000000 },
  { name: "Gymshark", value: 85500000 },
  { name: "SSENSE", value: 72400000 },
  { name: "Kraken", value: 68000000 },
  { name: "Net-A-Porter", value: 62000000 },
  { name: "Binance", value: 59000000 },
  { name: "StockX", value: 41200000 },
  { name: "LVMH Group", value: 51000000 },
  { name: "Shein", value: 29000000 }
];

export function Conversions() {
  // Dynamically calculate the sum of leakage (TPV)
  const totalLeakage = rawData.reduce((acc, curr) => acc + curr.value, 0);
  
  // Dynamically calculate the Stripe Revenue Potential (approx 1.5% weighted avg)
  const totalStripeRevenue = totalLeakage * 0.015;

  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Vertical Intelligence: Predator Leaderboard" icon={CirclePercent} />
      
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div>
          <span className="block text-sm text-muted-foreground/60 uppercase tracking-wider font-semibold">
            Total Revenue Leakage (TPV)
          </span>
          <span className="text-3xl font-bold text-white">
            ${addThousandsSeparator(totalLeakage)}
          </span>
        </div>
        <div>
          <span className="block text-sm text-muted-foreground/60 uppercase tracking-wider font-semibold text-blue-400">
            Stripe Revenue Upside (Est.)
          </span>
          <span className="text-3xl font-bold text-blue-500">
            ${addThousandsSeparator(totalStripeRevenue)}
          </span>
        </div>
      </div>

      <div className="relative mt-6 max-h-96 flex-grow border-t border-white/5 pt-6">
        <Chart />
      </div>
    </section>
  );
}

export default Conversions;
