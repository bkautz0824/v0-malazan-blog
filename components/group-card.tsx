import { Group } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface GroupCardProps {
  group: Group
  isActive: boolean
  onClick: () => void
}

export function GroupCard({ group, isActive, onClick }: GroupCardProps) {
  return (
    <Card 
      className={`p-4 cursor-pointer transition-all ${
        isActive 
          ? 'bg-slate-800 border-2' 
          : 'bg-slate-900/50 border-slate-700/50 hover:border-slate-600'
      }`}
      style={{ 
        borderColor: isActive ? group.color : undefined 
      }}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div 
          className="w-3 h-3 rounded-full shrink-0"
          style={{ backgroundColor: group.color }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-balance">
            {group.name}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
            {group.description}
          </p>
        </div>
        {isActive && (
          <Badge variant="outline" className="text-xs shrink-0">
            Active
          </Badge>
        )}
      </div>
      
      {group.timeline && group.timeline.length > 0 && isActive && (
        <div className="mt-3 pt-3 border-t border-slate-700/50 space-y-2">
          {group.timeline.map((event, idx) => (
            <div key={idx} className="text-xs">
              <span className="text-accent font-medium">{event.book}</span>
              {event.location && (
                <span className="text-slate-400"> — {event.location}</span>
              )}
              <p className="text-slate-300 mt-0.5">{event.event}</p>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}
