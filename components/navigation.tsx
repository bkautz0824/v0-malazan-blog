"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, Map, Skull, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Characters", icon: Users },
    { href: "/maps", label: "Maps", icon: Map },
    { href: "/fallen", label: "The Fallen", icon: Skull },
    { href: "/warrens", label: "Warrens & Holds", icon: Sparkles },
  ]

  return (
    <nav className="border-b border-border bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="font-serif text-xl font-bold text-primary">Bridgeburners Guide</h1>
          </Link>

          <div className="flex items-center gap-2">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href

              return (
                <Link key={link.href} href={link.href}>
                  <Button variant={isActive ? "default" : "ghost"} size="sm" className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{link.label}</span>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
