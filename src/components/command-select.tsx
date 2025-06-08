import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronsUpDownIcon } from "lucide-react";
import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "./ui/command";

type CommandSelectProps = {
  options: {
    id: string;
    value: string;
    children: React.ReactNode;
  }[];
  onSelect: (value: string) => void;
  onSearch?: (value: string) => void;
  value: string;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
};

export function CommandSelect({
  options,
  onSelect,
  onSearch,
  value,
  placeholder = "Select an option",
  className,
  isSearchable = false,
}: CommandSelectProps) {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.id === value);

  function handleOpenChange(open: boolean) {
    onSearch?.("");
    setOpen(open);
  }

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className={cn(
          "h-9 justify-between font-normal px-2",
          !selectedOption && "text-muted-foreground",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <div>{selectedOption?.children ?? placeholder}</div>

        <ChevronsUpDownIcon />
      </Button>

      <CommandResponsiveDialog
        open={open}
        onOpenChange={handleOpenChange}
        shouldFilter={!isSearchable}
      >
        <CommandInput placeholder="Search..." onValueChange={onSearch} />

        <CommandList>
          <CommandEmpty>
            <span className="text-muted-foreground text-sm">
              No options found
            </span>
          </CommandEmpty>

          {options.map((option) => (
            <CommandItem
              key={option.id}
              onSelect={() => {
                onSelect(option.value);
                setOpen(false);
              }}
            >
              {option.children}
            </CommandItem>
          ))}
        </CommandList>
      </CommandResponsiveDialog>
    </>
  );
}
