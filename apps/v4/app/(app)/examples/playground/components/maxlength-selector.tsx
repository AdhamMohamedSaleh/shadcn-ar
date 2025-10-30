"use client"

import * as React from "react"
import { SliderProps } from "@radix-ui/react-slider"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/new-york-v4/ui/hover-card"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Slider } from "@/registry/new-york-v4/ui/slider"

interface MaxLengthSelectorProps {
  defaultValue: SliderProps["defaultValue"]
}

export function MaxLengthSelector({ defaultValue }: MaxLengthSelectorProps) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="maxlength">الطول الأقصى</Label>
              <span className="text-muted-foreground hover:border-border w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm">
                {value}
              </span>
            </div>
            <Slider
              id="maxlength"
              max={4000}
              defaultValue={value}
              step={10}
              onValueChange={setValue}
              aria-label="الطول الأقصى"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          الحد الأقصى لعدد التوكنات التي سيتم إنشاؤها. يمكن أن تستخدم الطلبات ما يصل إلى 2048 أو 4000 توكن، مشتركة بين المطالبة والإكمال. يختلف الحد الدقيق حسب النموذج.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
