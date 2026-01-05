"use client";

import { VChart } from "@visactor/react-vchart";
import type { ICirclePackingChartSpec } from "@visactor/vchart";
import { addThousandsSeparator } from "@/lib/utils";

interface MerchantData {
  name: string;
  vertical: string;
  corridor: string;
  value: number; // Revenue Leakage (TPV)
  yieldGap: number;
  pspRevenue: number; // Stripe Upside
  missingLPMs: string[];
}

const rawData: MerchantData[] = [
  { 
    "name": "Farfetch", "vertical": "Luxury", "corridor": "Brazil", 
    "yieldGap": 12.21, "value": 138400000, "pspRevenue": 2768000, 
    "missingLPMs": ["Pix", "Boleto Flash"] 
  },
  { 
    "name": "Coinbase", "vertical": "Crypto", "corridor": "Spain", 
    "yieldGap": 9.45, "value": 121000000, "pspRevenue": 1815000, 
    "missingLPMs": ["Bizum", "Revolut Pay"] 
  },
  { 
    "name": "Gymshark", "vertical": "Apparel", "corridor": "Germany", 
    "yieldGap": 7.30, "value": 85500000, "pspRevenue": 855000, 
    "missingLPMs": ["Giropay", "Sofort"] 
  },
  { 
    "name": "SSENSE", "vertical": "Luxury", "corridor": "Italy", 
    "yieldGap": 11.10, "value": 72400000, "pspRevenue": 1086000, 
    "missingLPMs": ["Satispay", "PostePay"] 
  },
  { 
    "name": "Kraken", "vertical": "Crypto", "corridor": "UK", 
    "yieldGap": 8.15, "value": 68000000, "pspRevenue": 680000, 
    "missingLPMs": ["Faster Payments", "Clearpay"] 
  },
  { 
    "name": "Net-A-Porter", "vertical": "Luxury", "corridor": "France", 
    "yieldGap": 10.50, "value": 62000000, "pspRevenue": 930000, 
    "missingLPMs": ["Cartes Bancaires", "Lydia"] 
  },
  { 
    "name": "Binance", "vertical": "Crypto", "corridor": "France", 
    "yieldGap": 7.90, "value": 59000000, "pspRevenue": 590000, 
    "missingLPMs": ["Lydia", "SEPA Instant"] 
  },
  { 
    "name": "StockX", "vertical": "Marketplace", "corridor": "Netherlands", 
    "yieldGap": 10.20, "value": 41200000, "pspRevenue": 618000, 
    "missingLPMs": ["iDEAL", "Klarna"] 
  },
  { 
    "name": "LVMH Group", "vertical": "Luxury", "corridor": "China", 
    "yieldGap": 14.20, "value": 51000000, "pspRevenue": 1020000, 
    "missingLPMs": ["Alipay", "WeChat Pay"] 
  },
  { 
    "name": "Shein", "vertical": "Apparel", "corridor": "Mexico", 
    "yieldGap": 10.10, "value": 29000000, "pspRevenue": 725000, 
    "missingLPMs": ["OXXO", "Conekta"] 
  }
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      visible: (d: any) => d.depth === 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      text: (d: any) => d.name, // Only the Name
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fontSize: (d: any) => Math.max(d.radius / 3, 11),
      fontWeight: 'bold',
    },
  },
  tooltip: {
    trigger: ["click", "hover"],
    mark: {
      content: [
        {
          key: "Merchant",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value: (d: any) => d.name
        },
        {
          key: "Revenue Leakage (TPV)",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value: (d: any) => "$" + addThousandsSeparator(d.value)
        },
        {
          key: "Stripe Potential (Net)",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value: (d: any) => "$" + addThousandsSeparator(d.pspRevenue)
        },
        {
          key: "Yield Gap",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value: (d: any) => d.yieldGap + "%"
        },
        {
          key: "Missing Methods",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value: (d: any) => d.missingLPMs?.join(", ")
        }
      ]
    }
  },
  animationEnter: { easing: "cubicInOut" },
  animationExit: { easing: "cubicInOut" },
  animationUpdate: { easing: "cubicInOut" }
};

export default function Chart() {
  return <VChart spec={spec} />;
}