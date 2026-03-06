import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "../components/hero-pattern";
import { DashboardHeader } from "../components/dashboard-header";
import { TextInputPanel } from "../components/text-input-panel";
import { QuickActionsPanel } from "../components/quick-actions-panel";

export function DashboardView() {
  return (
    <div className="relative min-h-screen ">

      {/* Header */}
      <PageHeader title="Dashboard" className="lg:hidden"/>

      {/* Greeting - plain, no wave */}
      <div className="px-8 pt-6 pb-10">
        <DashboardHeader />
      </div>

      {/* Wave behind text input */}
      <div style={{ position: "relative", height: "320px" }}>

        {/* Wave - behind */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}>
          <HeroPattern />
        </div>

        {/* Text input - on top of wave */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          padding: "1rem 1.5rem",
        }}>
          <div className="w-full max-w-4xl">
            <TextInputPanel />
          </div>
        </div>

      </div>

      {/* Quick Actions below */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <QuickActionsPanel />
      </div>

    </div>
  );
}