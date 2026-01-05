import { Conversions } from "@/components/chart-blocks";
import Container from "@/components/container";

export default function DashboardPage() {
  return (
    <Container className="flex flex-col gap-6 py-8">
      <div className="grid grid-cols-1 gap-6">
        {/* This is your $1.4B Vertical Brain Chart */}
        <div className="col-span-1 min-h-[500px]">
          <Conversions />
        </div>
      </div>
    </Container>
  );
}