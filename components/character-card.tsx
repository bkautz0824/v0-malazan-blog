import { Character } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface CharacterCardProps {
  character: Character
  onClick?: () => void
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  const statusColors: Record<Character['status'], string> = {
    alive: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    dead: 'bg-red-500/20 text-red-300 border-red-500/50',
    ascended: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
    unknown: 'bg-slate-500/20 text-slate-300 border-slate-500/50',
    undead: 'bg-amber-500/20 text-amber-300 border-amber-500/50'
  }

  return (
    <Card 
      className="p-6 bg-slate-900/50 border-slate-700/50 hover:border-primary/50 transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-col gap-3">
        
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-serif font-semibold text-primary group-hover:text-primary/80 transition-colors text-balance">
              {character.name}
            </h3>
            <p className="text-sm text-slate-400 mt-1">{character.race}</p>
            {character.rank && (
              <p className="text-sm text-slate-500 mt-0.5">{character.rank}</p>
            )}
          </div>
          <Badge className={`${statusColors[character.status]} shrink-0`}>
            {character.status}
          </Badge>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
          {character.description}
        </p>

        {character.notable && (
          <p className="text-xs text-accent italic border-l-2 border-accent pl-3">
            {character.notable}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mt-2">
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

        {character.status === 'dead' && character.deathBook && (
          <div className="text-xs text-red-400/70 mt-2 pt-2 border-t border-slate-700/50">
            Fell in {character.deathBook}
            {character.deathLocation && ` at ${character.deathLocation}`}
          </div>
        )}
      </div>
    </Card>
  )
}
