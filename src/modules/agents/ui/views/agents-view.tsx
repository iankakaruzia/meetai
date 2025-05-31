"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export function AgentsView() {
  const trpc = useTRPC();
  const { data: agents } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div>
      <pre>{JSON.stringify(agents, null, 2)}</pre>
    </div>
  );
}

export function AgentsViewLoading() {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds."
    />
  );
}

export function AgentsViewError() {
  return (
    <ErrorState
      title="Error Loading Agents"
      description="Please try again later."
    />
  );
}
