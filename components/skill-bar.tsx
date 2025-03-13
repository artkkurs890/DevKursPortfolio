"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SkillBarProps {
  name: string
  percentage: number
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Animate the skill bar when component mounts
    const timer = setTimeout(() => {
      setWidth(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            percentage >= 90
              ? "bg-green-500"
              : percentage >= 70
                ? "bg-blue-500"
                : percentage >= 50
                  ? "bg-yellow-500"
                  : "bg-red-500",
          )}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}

