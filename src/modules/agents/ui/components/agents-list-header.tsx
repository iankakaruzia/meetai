"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { NewAgentDialog } from "./new-agent-dialog";

export function AgentsListHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-medium">My Agents</h5>

          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            New Agent
          </Button>
        </div>
      </div>

      <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
