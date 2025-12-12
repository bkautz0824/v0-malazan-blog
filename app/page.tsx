"use client"

import { useState, useMemo } from "react"
import { characters } from "@/data/characters"
import { groups } from "@/data/groups"
import type { BookCode } from "@/lib/types"
import { CharacterCard } from "@/components/character-card"
import { CharacterModal } from "@/components/character-modal"
import { Navigation } from "@/components/navigation"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, ChevronUp, Users } from "lucide-react"
import type { Character } from "@/lib/types"

const BOOK_INFO: Record<BookCode, { title: string; subtitle: string; color: string }> = {
  GOTM: { title: "Gardens of the Moon", subtitle: "Book One", color: "#d4af37" },
  DG: { title: "Deadhouse Gates", subtitle: "Book Two", color: "#a3692f" },
  MOI: { title: "Memories of Ice", subtitle: "Book Three", color: "#3b82f6" },
  HOC: { title: "House of Chains", subtitle: "Book Four", color: "#dc2626" },
  MT: { title: "Midnight Tides", subtitle: "Book Five", color: "#64748b" },
  BH: { title: "The Bonehunters", subtitle: "Book Six", color: "#8b4513" },
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBook, setSelectedBook] = useState<BookCode | null>(null)
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(() => new Set(groups.map((g) => g.id)))

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

      const matchesBook = !selectedBook || character.books.includes(selectedBook)

      return matchesSearch && matchesBook
    })
  }, [searchTerm, selectedBook])

  const groupedByBook = useMemo(() => {
    const result: Record<BookCode, { group: (typeof groups)[0]; characters: Character[] }[]> = {
      GOTM: [],
      DG: [],
      MOI: [],
      HOC: [],
      MT: [],
      BH: [],
    }

    // Get groups for each book based on their ID prefix
    const bookPrefixes: Record<BookCode, string> = {
      GOTM: "gotm-",
      DG: "dg-",
      MOI: "moi-",
      HOC: "hoc-",
      MT: "mt-",
      BH: "bh-",
    }

    Object.entries(bookPrefixes).forEach(([book, prefix]) => {
      const bookGroups = groups.filter((g) => g.id.startsWith(prefix))

      bookGroups.forEach((group) => {
        const groupChars = filteredCharacters.filter((char) => char.primaryGroup === group.id)

        if (groupChars.length > 0) {
          result[book as BookCode].push({ group, characters: groupChars })
        }
      })
    })

    return result
  }, [filteredCharacters])

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character)
    setModalOpen(true)
  }

  const totalCharacters = filteredCharacters.length
  const booksWithGroups = (Object.keys(BOOK_INFO) as BookCode[]).filter((book) => groupedByBook[book].length > 0)

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
              Characters organized by book following Erikson's Dramatis Personae
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

          {/* Book Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedBook(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedBook === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-slate-800 text-muted-foreground hover:bg-slate-700"
                }`}
              >
                All Books
              </button>
              {(Object.keys(BOOK_INFO) as BookCode[]).map((book) => (
                <button
                  key={book}
                  onClick={() => setSelectedBook(book)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedBook === book ? "text-white" : "bg-slate-800 text-muted-foreground hover:bg-slate-700"
                  }`}
                  style={{
                    backgroundColor: selectedBook === book ? BOOK_INFO[book].color : undefined,
                  }}
                >
                  <span className="text-xs opacity-75">{book}</span>
                  <span className="hidden sm:inline">{BOOK_INFO[book].title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <Users className="inline h-4 w-4 mr-1" />
              {totalCharacters} characters
            </p>
            {(searchTerm || selectedBook) && (
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedBook(null)
                }}
                className="text-sm text-accent hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Books with Groups */}
          {booksWithGroups.length > 0 ? (
            <div className="space-y-12">
              {booksWithGroups
                .filter((book) => !selectedBook || book === selectedBook)
                .map((book) => (
                  <section key={book} className="space-y-6">
                    {/* Book Header */}
                    <div
                      className="p-6 rounded-xl border-2"
                      style={{
                        borderColor: BOOK_INFO[book].color,
                        background: `linear-gradient(135deg, ${BOOK_INFO[book].color}15 0%, transparent 100%)`,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-16 rounded-full" style={{ backgroundColor: BOOK_INFO[book].color }} />
                        <div>
                          <p
                            className="text-sm font-bold tracking-widest uppercase"
                            style={{ color: BOOK_INFO[book].color }}
                          >
                            {BOOK_INFO[book].subtitle}
                          </p>
                          <h2 className="font-serif text-3xl font-bold text-foreground">{BOOK_INFO[book].title}</h2>
                          <p className="text-sm text-muted-foreground mt-1">
                            {groupedByBook[book].length} groups •{" "}
                            {groupedByBook[book].reduce((acc, g) => acc + g.characters.length, 0)} characters
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Groups within Book */}
                    <div className="space-y-4 pl-4 border-l-2 border-slate-800 ml-4">
                      {groupedByBook[book].map(({ group, characters: groupChars }) => (
                        <div key={group.id} className="space-y-3">
                          {/* Group Header */}
                          <div
                            className="flex items-center justify-between cursor-pointer p-3 rounded-lg bg-slate-900/50 border border-slate-700 hover:border-slate-600 transition-colors"
                            onClick={() => toggleGroupCollapse(group.id)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: group.color }} />
                              <div>
                                <h3 className="font-serif text-xl font-bold text-foreground">{group.name}</h3>
                                <p className="text-xs text-muted-foreground">
                                  {group.description} • {groupChars.length} characters
                                </p>
                              </div>
                            </div>
                            {collapsedGroups.has(group.id) ? (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronUp className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>

                          {/* Group Characters Grid */}
                          {!collapsedGroups.has(group.id) && (
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pl-4">
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
                  </section>
                ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No characters found matching your filters</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedBook(null)
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
