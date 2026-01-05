import { CirclePercent } from "lucide-react";
import { addThousandsSeparator } from "@/lib/utils";
import ChartTitle from "../../components/chart-title";
import Chart from "./chart";

export default function Convertions() {
  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Conversions" icon={CirclePercent} />
      <Indicator />
      <div className="relative max-h-80 flex-grow">
        <Chart />
      </div>
    </section>
  );
}

function Indicator() {
  // We hard-code the total sum ($1.4B) to match your 'Predator' data
  // This removes the dependency on the broken @/data/convertions import
  const totalLeakage = 1400000000; 

  return (
    <div className="mt-3">
      <span className="mr-1 text-2xl font-medium">
        {addThousandsSeparator(totalLeakage)}
      </span>
      <span className="text-muted-foreground/60">Total Identified Leakage ($)</span>
    </div>
  );
}
