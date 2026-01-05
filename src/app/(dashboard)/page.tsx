import { Conversions } from "@/components/chart-blocks";
import Container from "@/components/container";

export default function DashboardPage() {
  return (
    <Container className="flex flex-col gap-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* The Vertical Brain Section */}
        <div className="md:col-span-12">
          <Conversions />
        </div>
      </div>
    </Container>
  );
}