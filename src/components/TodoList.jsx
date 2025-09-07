"use client";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar1 } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";

const tasks = [
  "Buy groceries",
  "Complete React project",
  "Review pull requests",
  "Pay electricity bill",
  "Schedule dentist appointment",
  "Prepare for team meeting",
  "Update resume",
  "Workout for 30 minutes",
  "Plan weekend trip",
  "Read a new book chapter",
  "Clean the workspace",
  "Call mom",
  "Fix bug in login page",
];

export default function TodoList() {
  const [date, setDate] = useState(new Date());
  const [open,setOpen] = useState(false);
  return (
    <div className="">
      {/* Calendar */}
      <h1 className="text-lg font-medium mb-3">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger  asChild>
            <Button className="w-full">
            <Calendar1/>
             {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
            </PopoverTrigger>
        <PopoverContent>
            <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
                className="rounded-lg border"
            />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[500px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-2">
          {tasks.map((task, index) => (
            <Card
              key={index}
              className="p-3pnpm dlx shadcn@latest add calendar"
            >
              <div className="flex items-center gap-4 px-3 py-2">
                <Checkbox id={`task-${index}`} />
                <label
                  htmlFor={`task-${index}`}
                  className="text-muted-foreground"
                >
                  {task}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
