"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"

export function ToggleTheme() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button title="Theme toggle" className="flex h-6 items-center bg-violet-500 dark:bg-violet-300 rounded-lg">
          <SunIcon className="h-[1.2rem] w-[1.2] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-zinc-100" />
          <MoonIcon className="h-[1.2rem] w-[1.2] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-zinc-500" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
        <DropdownMenuContent className="text-zinc-700 w-40 rounded gap-3 p-1 border border-zinc-300 bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
          <DropdownMenuItem className="dark:hover:text-violet-400 hover:text-violet-600 cursor-pointer" onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem className="dark:hover:text-violet-400 hover:text-violet-600 cursor-pointer" onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem className="dark:hover:text-violet-400 hover:text-violet-600 cursor-pointer" onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
