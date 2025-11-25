"use client"

import { useMemo } from "react"
import { characters } from "@/data/characters"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Skull, Flame, BookOpen } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { BOOK_CODES } from "@/lib/types"

export default function FallenPage() {
  const fallenCharacters = useMemo(() => {
    return characters
      .filter((char) => char.status === "dead")
      .sort((a, b) => {
        const bookOrder = ["GOTM", "DG", "MOI", "HOC", "MT", "BH", "Ancient past"]
        const aIndex = bookOrder.indexOf(a.deathBook || "Unknown")
        const bIndex = bookOrder.indexOf(b.deathBook || "Unknown")
        if (aIndex === -1 && bIndex === -1) return 0
        if (aIndex === -1) return 1
        if (bIndex === -1) return -1
        return aIndex - bIndex
      })
  }, [])

  const fallenByBook = useMemo(() => {
    return fallenCharacters.reduce(
      (acc, char) => {
        const book = char.deathBook || "Unknown"
        if (!acc[book]) {
          acc[book] = []
        }
        acc[book].push(char)
        return acc
      },
      {} as Record<string, typeof fallenCharacters>,
    )
  }, [fallenCharacters])

  const getBookFullName = (code: string) => {
    if (code === "Ancient past") return "Ancient Past"
    return BOOK_CODES[code as keyof typeof BOOK_CODES] || code
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Flame className="h-16 w-16 text-red-500 animate-pulse" />
                <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-slate-300" />
              </div>
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-red-400 md:text-5xl">The Fallen</h1>
            <p className="text-balance text-lg text-muted-foreground mb-2">
              In memory of those who fell in service, sacrifice, and struggle
            </p>
            <p className="text-sm text-red-400/70">
              {fallenCharacters.length} characters have fallen across the first six books
            </p>
          </header>

          {/* Fallen by Book */}
          <div className="space-y-12">
            {Object.entries(fallenByBook).map(([book, chars]) => (
              <section key={book}>
                <div className="mb-6 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-red-400" />
                  <h2 className="font-serif text-2xl font-bold text-red-400">{getBookFullName(book)}</h2>
                  <Badge variant="outline" className="border-red-500/50 text-red-400">
                    {chars.length} fallen
                  </Badge>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {chars.map((character) => (
                    <Card
                      key={character.id}
                      className="p-5 bg-slate-900/50 border-red-900/30 hover:border-red-700/50 transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Skull className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif text-lg font-semibold text-red-300 text-balance">
                            {character.name}
                          </h3>
                          <p className="text-sm text-slate-400 mt-0.5">{character.race}</p>
                          {character.rank && <p className="text-sm text-slate-500 mt-0.5">{character.rank}</p>}
                        </div>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-3 line-clamp-3">
                        {character.description}
                      </p>

                      {character.notable && (
                        <p className="text-xs text-accent italic border-l-2 border-accent pl-3 mb-3">
                          {character.notable}
                        </p>
                      )}

                      {/* Death details - more prominent */}
                      <div className="pt-3 border-t border-red-900/30 space-y-2">
                        <div className="flex items-start gap-2 text-sm text-red-400/90">
                          <Flame className="h-4 w-4 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            {character.deathLocation || `Fell in ${character.deathBook}`}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {character.affiliations.map((affiliation) => (
                          <Badge
                            key={affiliation}
                            variant="outline"
                            className="text-xs bg-slate-800/50 border-slate-600"
                          >
                            {affiliation}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer Quote */}
          <footer className="mt-20 text-center">
            <div className="mx-auto max-w-2xl space-y-4">
              <p className="font-serif text-lg italic text-slate-400">
                "They stood in our stead. They fell so that we might survive. The least we can do is remember."
              </p>
              <p className="text-sm text-muted-foreground">— In honor of all who fell in the Malazan campaigns</p>
              <div className="pt-8">
                <p className="text-sm text-red-400/70 font-serif">"Witness."</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
