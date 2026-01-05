"use client";

import { VChart } from "@visactor/react-vchart";
import type { ICirclePackingChartSpec } from "@visactor/vchart";
import { addThousandsSeparator } from "@/lib/utils";

// Define an interface for our data so TypeScript is happy
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
  { "name": "Gymshark", "vertical": "Apparel", "corridor": "Germany (Giropay)", "value": 85500000, "alpha": 7.30, "status": "Qualified" },
  { "name": "SSENSE", "vertical": "Luxury", "corridor": "Italy (Satispay)", "value": 72400000, "alpha": 11.10, "status": "High Priority" },
  { "name": "Kraken", "vertical": "Crypto", "corridor": "UK (Faster Payments)", "value": 68000000, "alpha": 8.15, "status": "Qualified" },
  { "name": "Net-A-Porter", "vertical": "Luxury", "corridor": "France (Cartes Bancaires)", "value": 62000000, "alpha": 10.50, "status": "High Priority" },
  { "name": "Binance", "vertical": "Crypto", "corridor": "France (Lydia)", "value": 59000000, "alpha": 7.90, "status": "Qualified" },
  { "name": "Mytheresa", "vertical": "Luxury", "corridor": "Germany (Sofort)", "value": 54000000, "alpha": 9.80, "status": "High Priority" },
  { "name": "LVMH Group", "vertical": "Luxury", "corridor": "China (Alipay)", "value": 51000000, "alpha": 14.20, "status": "High Priority" },
  { "name": "Revolve", "vertical": "Apparel", "corridor": "USA (Affirm)", "value": 48500000, "alpha": 6.45, "status": "Qualified" },
  { "name": "ASOS", "vertical": "Apparel", "corridor": "Poland (BLIK)", "value": 44000000, "alpha": 8.90, "status": "High Priority" },
  { "name": "StockX", "vertical": "Marketplace", "corridor": "Netherlands (iDEAL)", "value": 41200000, "alpha": 10.20, "status": "High Priority" },
  { "name": "eToro", "vertical": "Fintech", "corridor": "Australia (BPAY)", "value": 39000000, "alpha": 7.10, "status": "Qualified" },
  { "name": "Selfridges", "vertical": "Luxury", "corridor": "Middle East (Mada)", "value": 37500000, "alpha": 11.80, "status": "High Priority" },
  { "name": "Zalando", "vertical": "Apparel", "corridor": "Switzerland (Twint)", "value": 35000000, "alpha": 8.40, "status": "Qualified" },
  { "name": "Robinhood", "vertical": "Fintech", "corridor": "USA (Venmo)", "value": 33000000, "alpha": 5.90, "status": "Qualified" },
  { "name": "Harrods", "vertical": "Luxury", "corridor": "China (WeChat Pay)", "value": 31000000, "alpha": 13.50, "status": "High Priority" },
  { "name": "Shein", "vertical": "Apparel", "corridor": "Mexico (OXXO)", "value": 29000000, "alpha": 10.10, "status": "High Priority" },
  { "name": "CEX.IO", "vertical": "Crypto", "corridor": "Portugal (Multibanco)", "value": 27500000, "alpha": 9.20, "status": "Qualified" },
  { "name": "MatchesFashion", "vertical": "Luxury", "corridor": "Nordics (Trustly)", "value": 25000000, "alpha": 8.80, "status": "High Priority" },
  { "name": "Bitstamp", "vertical": "Crypto", "corridor": "EU (SEPA Instant)", "value": 23000000, "alpha": 7.40, "status": "Qualified" },
  { "name": "Boohoo", "vertical": "Apparel", "corridor": "UK (Clearpay)", "value": 21500000, "alpha": 6.80, "status": "Qualified" },
  { "name": "Grailed", "vertical": "Marketplace", "corridor": "Canada (Interac)", "value": 19000000, "alpha": 9.50, "status": "High Priority" },
  { "name": "Uphold", "vertical": "Crypto", "corridor": "LATAM (PSE)", "value": 17500000, "alpha": 11.40, "status": "Qualified" },
  { "name": "Farfetch (Secondary)", "vertical": "Luxury", "corridor": "Japan (Konbini)", "value": 16000000, "alpha": 10.90, "status": "High Priority" },
  { "name": "GOAT", "vertical": "Marketplace", "corridor": "South Korea (Kakao Pay)", "value": 14500000, "alpha": 12.10, "status": "High Priority" },
  { "name": "Gemini", "vertical": "Crypto", "corridor": "USA (ACH)", "value": 13000000, "alpha": 4.50, "status": "Nurture" },
  { "name": "Vestiaire Collective", "vertical": "Marketplace", "corridor": "Belgium (Bancontact)", "value": 11500000, "alpha": 8.70, "status": "Qualified" },
  { "name": "Bybit", "vertical": "Crypto", "corridor": "Southeast Asia (GrabPay)", "value": 9800000, "alpha": 9.10, "status": "Qualified" },
  { "name": "Moda Operandi", "vertical": "Luxury", "corridor": "Global (Crypto.com Pay)", "value": 8200000, "alpha": 13.00, "status": "High Priority" }
];

const spec: ICirclePackingChartSpec = {
  data: [
    {
      id: "data",
      values: rawData,
    },
  ],
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
      visible: (d: Record<string, any>) => d.depth === 0,
      text: (d: Record<string, any>) => addThousandsSeparator(Number(d.value)),
      fontSize: (d: Record<string, any>) => Number(d.radius) / 2,
      dy: (d: Record<string, any>) => Number(d.radius) / 8,
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
    style: {
      fill: "white",
      stroke: false,
      visible: (d: Record<string, any>) => d.depth === 0,
      text: (d: Record<string, any>) => addThousandsSeparator(Number(d.value)),
      fontSize: (d: Record<string, any>) => Number(d.radius) / 2,
      dy: (d: Record<string, any>) => Number(d.radius) / 8,
    },
  },;

export default function Chart() {
  return <VChart spec={spec} />;
}