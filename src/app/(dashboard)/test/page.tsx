import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { HealthCheck } from "./health-check";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function TestPage() {
  prefetch(trpc.health.queryOptions());

  return (
    <HydrateClient>
      <div>
        <h1>Trpc test page</h1>
        <ErrorBoundary  fallback={<div>Loading...</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <HealthCheck />
          </Suspense>
        </ErrorBoundary>
      </div>
    </HydrateClient>
  );
}
