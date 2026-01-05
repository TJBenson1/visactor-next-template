"use client";

import { VChart } from "@visactor/react-vchart";
import type { ICirclePackingChartSpec } from "@visactor/vchart";
import { addThousandsSeparator } from "@/lib/utils";

interface MerchantData {
  name: string;
  vertical: string;
  corridor: string;
  value: number;
  alpha: number;
  status: string;
}

const rawData: MerchantData[] = [
  { "name": "Farfetch", "vertical": "Luxury", "corridor": "Brazil (Pix)", "value": 138400000, "alpha": 12.21, "status": "High Priority" },
  { "name": "Coinbase", "vertical": "Crypto", "corridor": "Spain (Bizum)", "value": 121000000, "alpha": 9.45, "status": "High Priority" },
  { "name": "Gymshark", "vertical": "Apparel", "corridor": "Germany (Giropay)", "value": 85500000, "alpha": 7.30, "status": "Qualified" }
];

const spec: ICirclePackingChartSpec = {
  data: [{ id: "data", values: rawData }],
  type: "circlePacking",
  categoryField: "name",
  valueField: "value",
  drill: true,
  padding: 0,
  layoutPadding: 5,
label: {
    style: {
      fill: "white",
      stroke: false,
      visible: (d: Record<string, unknown>) => (d as any).depth === 0,
      text: (d: Record<string, unknown>) => addThousandsSeparator((d as any).value),
      fontSize: (d: Record<string, unknown>) => (d as any).radius / 2,
      dy: (d: Record<string, unknown>) => (d as any).radius / 8,
    },
  },
  legends: [
    {
      visible: true,
      orient: "top",
      position: "start",
      padding: 0,
    },
  ],
  tooltip: {
    trigger: ["click", "hover"],
    mark: {
      content: {
        value: (d: Record<string, unknown>) => addThousandsSeparator((d as any).value),
      },
    },
  },
  animationEnter: { easing: "cubicInOut" },
  animationExit: { easing: "cubicInOut" },
  animationUpdate: { easing: "cubicInOut" }
};

export default function Chart() {
  return <VChart spec={spec} />;
}