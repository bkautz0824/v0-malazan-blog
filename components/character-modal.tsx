'use client'

import { Character } from '@/lib/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Scroll, Skull, Sparkles } from 'lucide-react'

interface CharacterModalProps {
  character: Character | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CharacterModal({ character, open, onOpenChange }: CharacterModalProps) {
  if (!character) return null

  const statusColors = {
    alive: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    dead: 'bg-red-500/20 text-red-300 border-red-500/50',
    ascended: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
    unknown: 'bg-slate-500/20 text-slate-300 border-slate-500/50'
  }

  const statusIcons = {
    alive: null,
    dead: <Skull className="w-4 h-4" />,
    ascended: <Sparkles className="w-4 h-4" />,
    unknown: null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">
            {character.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-start gap-4 flex-wrap">
            <Badge className={`${statusColors[character.status]} flex items-center gap-1.5`}>
              {statusIcons[character.status]}
              {character.status}
            </Badge>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-slate-400">Race:</span>
              <span className="text-sm font-medium">{character.race}</span>
            </div>
            {character.rank && (
              <div className="flex flex-col gap-1">
                <span className="text-sm text-slate-400">Rank:</span>
                <span className="text-sm font-medium">{character.rank}</span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
              <Scroll className="w-4 h-4" />
              About
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {character.description}
            </p>
          </div>

          {character.notable && (
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
              <p className="text-sm text-accent italic leading-relaxed">
                {character.notable}
              </p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-slate-400 mb-3">Affiliations</h4>
            <div className="flex flex-wrap gap-2">
              {character.affiliations.map((affiliation) => (
                <Badge 
                  key={affiliation}
                  variant="outline"
                  className="bg-slate-800/50 border-slate-600"
                >
                  {affiliation}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-400 mb-3">Appears In</h4>
            <div className="flex flex-wrap gap-2">
              {character.books.map((book) => (
                <Badge 
                  key={book}
                  className="bg-primary/20 text-primary border-primary/50"
                >
                  {book}
                </Badge>
              ))}
            </div>
          </div>

          {character.status === 'dead' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                <Skull className="w-4 h-4" />
                Fate
              </h4>
              <p className="text-sm text-red-300">
                Fell in <strong>{character.deathBook}</strong>
                {character.deathLocation && <> at <strong>{character.deathLocation}</strong></>}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
