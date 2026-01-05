import { CirclePercent } from "lucide-react";
import { addThousandsSeparator } from "@/lib/utils";
import ChartTitle from "../../components/chart-title";
import Chart from "./chart";

// This MUST be named "Conversions" to match the import in page.tsx
export function Conversions() {
  const totalLeakage = 1400000000; 

  return (
    <section className="flex h-full flex-col gap-2">
      <ChartTitle title="Conversions" icon={CirclePercent} />
      <div className="mt-3">
        <span className="mr-1 text-2xl font-medium">
          {addThousandsSeparator(totalLeakage)}
        </span>
        <span className="text-muted-foreground/60">Total Identified Leakage ($)</span>
      </div>
      <div className="relative max-h-80 flex-grow">
        <Chart />
      </div>
    </section>
  );
}

// Also export as default just in case
export default Conversions;
