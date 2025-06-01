import {
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

type DashboardCommandProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function DashboardCommand({ open, setOpen }: DashboardCommandProps) {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or an agent" />
      <CommandList>
        <CommandItem>Test</CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  );
}
