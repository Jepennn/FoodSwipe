

// A potential component to filter recipes by type with a dropdown menu

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const recipeTypes = [
  {
    value: "all",
    label: "All Recipes",
  },
  {
    value: "starter",
    label: "Starter",
  },
  {
    value: "main",
    label: "Main Course",
  },
  {
    value: "dessert",
    label: "Dessert",
  },
  {
    value: "snack",
    label: "Snack",
  },
  {
    value: "drink",
    label: "Drink",
  },
]

export function RecipeTypeFilter({ onSelect, className }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("all")

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? recipeTypes.find((type) => type.value === value)?.label
              : "Select recipe type..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search recipe type..." />
            <CommandEmpty>No type found.</CommandEmpty>
            <CommandGroup>
              {recipeTypes.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={(currentValue) => {
                    const selectedValue = currentValue === value ? "all" : currentValue
                    setValue(selectedValue)
                    onSelect(selectedValue === "all" ? "" : selectedValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === type.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {type.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
