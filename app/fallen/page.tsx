'use client'

import { useMemo } from 'react'
import { characters } from '@/data/characters'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Skull, Flame, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'

export default function FallenPage() {
  const fallenCharacters = useMemo(() => {
    return characters
      .filter(char => char.status === 'dead')
      .sort((a, b) => {
        const bookOrder = ['GOTM', 'DG', 'MOI', 'HOC', 'MT']
        const aIndex = bookOrder.indexOf(a.deathBook || '')
        const bIndex = bookOrder.indexOf(b.deathBook || '')
        return aIndex - bIndex
      })
  }, [])

  const fallenByBook = useMemo(() => {
    return fallenCharacters.reduce((acc, char) => {
      const book = char.deathBook || 'Unknown'
      if (!acc[book]) {
        acc[book] = []
      }
      acc[book].push(char)
      return acc
    }, {} as Record<string, typeof fallenCharacters>)
  }, [fallenCharacters])

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
            <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-red-400 md:text-5xl">
              The Fallen
            </h1>
            <p className="text-balance text-lg text-muted-foreground mb-2">
              In memory of those who fell in service, sacrifice, and struggle
            </p>
            <p className="text-sm text-red-400/70">
              {fallenCharacters.length} characters have fallen across the first five books
            </p>
          </header>

          {/* Fallen by Book */}
          <div className="space-y-12">
            {Object.entries(fallenByBook).map(([book, chars]) => (
              <section key={book}>
                <div className="mb-6 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-red-400" />
                  <h2 className="font-serif text-2xl font-bold text-red-400">
                    {book}
                  </h2>
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
                          <p className="text-sm text-slate-400 mt-0.5">
                            {character.race}
                          </p>
                          {character.rank && (
                            <p className="text-sm text-slate-500 mt-0.5">
                              {character.rank}
                            </p>
                          )}
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

                      <div className="pt-3 border-t border-red-900/30">
                        <div className="flex items-center gap-2 text-xs text-red-400/80">
                          <Flame className="h-3 w-3" />
                          <span>
                            Fell in {character.deathBook}
                            {character.deathLocation && ` at ${character.deathLocation}`}
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
              <p className="text-sm text-muted-foreground">
                — In honor of all who fell in the Malazan campaigns
              </p>
              <div className="pt-8">
                <p className="text-sm text-red-400/70 font-serif">
                  "Witness."
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
