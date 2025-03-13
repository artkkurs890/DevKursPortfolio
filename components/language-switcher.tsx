"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const languages = [
  { code: "en", name: "English" },
  { code: "uk", name: "Українська" },
]

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en")

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    // In a real application, you would implement language switching logic here
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={currentLang === lang.code ? "bg-primary/10" : ""}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

