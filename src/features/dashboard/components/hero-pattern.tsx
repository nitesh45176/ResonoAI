"use client";

import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroPattern() {
  return (
    <div className="w-full" style={{ height: "200px", overflow: "hidden" }}>
      <WavyBackground
        colors={["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8", "#C084FC"]}
        backgroundFill="hsl(0 0% 100%)"
        blur={8}
        speed="slow"
        waveOpacity={0.4}
        waveWidth={80}
        containerClassName="w-full h-full"
        className="w-full h-full"
      />
    </div>
  );
}