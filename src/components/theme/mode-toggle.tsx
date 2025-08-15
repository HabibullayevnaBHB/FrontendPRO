import { Moon, Sun } from "lucide-react"
import { useTheme } from './theme-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Faqat iconlar, button bo'lmasdan */}
        <div className="p-1 cursor-pointer">
          <Sun className="w-5 h-5 text-yellow-500 dark:hidden" />
          <Moon className="hidden w-5 h-5 text-gray-300 dark:inline-block" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="text-gray-900 bg-white rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 ring-1 ring-black/10"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
