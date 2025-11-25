"use client"

import { useState, useMemo } from "react"
import { characters } from "@/data/characters"
import { groups } from "@/data/groups"
import { BOOK_CODES, type BookCode } from "@/lib/types"
import { CharacterCard } from "@/components/character-card"
import { CharacterModal } from "@/components/character-modal"
import { Navigation } from "@/components/navigation"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import type { Character } from "@/lib/types"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBooks, setSelectedBooks] = useState<BookCode[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(() => new Set(groups.map((g) => g.id)))

  const toggleBook = (bookCode: BookCode) => {
    setSelectedBooks((prev) =>
      prev.includes(bookCode) ? prev.filter((code) => code !== bookCode) : [...prev, bookCode],
    )
  }

  const toggleGroupCollapse = (groupId: string) => {
    setCollapsedGroups((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(groupId)) {
        newSet.delete(groupId)
      } else {
        newSet.add(groupId)
      }
      return newSet
    })
  }

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesSearch =
        searchTerm === "" ||
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.race.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesBook =
        selectedBooks.length === 0 || selectedBooks.some((bookCode) => character.books.includes(bookCode))

      return matchesSearch && matchesBook
    })
  }, [searchTerm, selectedBooks])

  const groupedCharacters = useMemo(() => {
    const grouped = new Map<string, Character[]>()

    // Initialize all groups
    groups.forEach((group) => {
      grouped.set(group.id, [])
    })

    // Assign characters to groups based on affiliations
    filteredCharacters.forEach((character) => {
      let assigned = false

      // Try to match character to groups
      character.affiliations.forEach((affiliation) => {
        groups.forEach((group) => {
          const affiliationLower = affiliation.toLowerCase()
          const groupNameLower = group.name.toLowerCase()

          // Match logic
          if (
            affiliationLower.includes(groupNameLower) ||
            groupNameLower.includes(affiliationLower) ||
            (group.id === "shadow_agents" &&
              (affiliationLower.includes("shadow") || affiliationLower.includes("cotillion"))) ||
            (group.id === "malazans" && affiliationLower.includes("malazan")) ||
            (group.id === "ascendants" &&
              (character.status === "ascended" ||
                affiliationLower.includes("ascendant") ||
                affiliationLower.includes("god"))) ||
            (group.id === "elder_gods" &&
              (affiliationLower.includes("elder") || affiliationLower.includes("ancient"))) ||
            (group.id === "dragons" &&
              (character.race.toLowerCase().includes("eleint") || character.race.toLowerCase().includes("dragon")))
          ) {
            if (!grouped.get(group.id)?.includes(character)) {
              grouped.get(group.id)?.push(character)
              assigned = true
            }
          }
        })
      })
    })

    // Filter out empty groups
    return Array.from(grouped.entries())
      .filter(([_, chars]) => chars.length > 0)
      .map(([groupId, chars]) => ({
        group: groups.find((g) => g.id === groupId)!,
        characters: chars,
      }))
  }, [filteredCharacters])

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character)
    setModalOpen(true)
  }

  const totalCharacters = filteredCharacters.length

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Character Database
            </h1>
            <p className="text-balance text-lg text-muted-foreground">
              Explore characters organized by their groups and affiliations
            </p>
          </header>

          {/* Search */}
          <div className="mb-8">
            <div className="relative mx-auto max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search characters by name, description, or race..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-slate-900/50 border-slate-700"
              />
            </div>
          </div>

          {/* Book Filters */}
          <div className="mb-8">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <BookOpen className="h-4 w-4" />
              Filter by Book
            </h3>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(BOOK_CODES) as BookCode[]).slice(0, 5).map((bookCode) => (
                <Badge
                  key={bookCode}
                  variant={selectedBooks.includes(bookCode) ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => toggleBook(bookCode)}
                >
                  {bookCode}
                </Badge>
              ))}
              {selectedBooks.length > 0 && (
                <Badge
                  variant="outline"
                  className="cursor-pointer border-red-500/50 text-red-400 hover:bg-red-500/10"
                  onClick={() => setSelectedBooks([])}
                >
                  Clear
                </Badge>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {totalCharacters} characters across {groupedCharacters.length} groups
            </p>
            {(searchTerm || selectedBooks.length > 0) && (
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedBooks([])
                }}
                className="text-sm text-accent hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {groupedCharacters.length > 0 ? (
            <div className="space-y-8">
              {groupedCharacters.map(({ group, characters: groupChars }) => (
                <div key={group.id} className="space-y-4">
                  {/* Group Header */}
                  <div
                    className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-slate-900/50 border border-slate-700 hover:border-slate-600 transition-colors"
                    onClick={() => toggleGroupCollapse(group.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: group.color }} />
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-foreground">{group.name}</h2>
                        <p className="text-sm text-muted-foreground">
                          {group.description} • {groupChars.length} characters
                        </p>
                      </div>
                    </div>
                    {collapsedGroups.has(group.id) ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>

                  {/* Group Characters Grid */}
                  {!collapsedGroups.has(group.id) && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {groupChars.map((character) => (
                        <CharacterCard
                          key={character.id}
                          character={character}
                          onClick={() => handleCharacterClick(character)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No characters found matching your filters</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedBooks([])
                }}
                className="mt-4 text-accent hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-16 text-center">
            <p className="text-sm text-muted-foreground font-serif">"Witness."</p>
          </footer>
        </div>

        {/* Character Modal */}
        <CharacterModal character={selectedCharacter} open={modalOpen} onOpenChange={setModalOpen} />
      </main>
    </>
  )
}
