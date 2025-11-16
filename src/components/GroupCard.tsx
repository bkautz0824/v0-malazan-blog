import { useState } from 'react';
import { Group } from '@/data/malazanData';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CharacterCard } from './CharacterCard';
import { TimelineSlider } from './TimelineSlider';
import { FactionSymbol } from './FactionSymbol';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface GroupCardProps {
  group: Group;
  onCharacterClick?: (characterName: string) => void;
}

export const GroupCard = ({ group, onCharacterClick }: GroupCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getTypeColor = (type: Group['type']) => {
    switch (type) {
      case 'military':
        return 'bg-malazan-crimson text-background border-malazan-crimson';
      case 'ascendant':
        return 'bg-malazan-purple text-background border-malazan-purple';
      case 'noble':
        return 'bg-malazan-gold text-malazan-shadow border-malazan-gold';
      case 'cult':
        return 'bg-malazan-steel text-foreground border-malazan-steel';
      case 'clan':
        return 'bg-malazan-teal text-background border-malazan-teal';
      default:
        return 'bg-border text-foreground border-border';
    }
  };

  const getStatusIcon = (status: Group['status']) => {
    switch (status) {
      case 'active':
        return '🟢';
      case 'disbanded':
        return '🟡';
      case 'destroyed':
        return '🔴';
      default:
        return '⚪';
    }
  };

  return (
    <Card
      className={cn(
        'transition-all duration-300 hover:scale-[1.02]',
        'bg-gradient-card border-border shadow-card hover:shadow-glow',
        isHovered && 'shadow-magical'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader 
        className="pb-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <FactionSymbol group={group} size="md" />
              <h3 className="text-xl font-bold text-foreground">{group.name}</h3>
              <Badge className={cn('text-xs', getTypeColor(group.type))}>
                {group.type}
              </Badge>
              <span className="text-sm">{getStatusIcon(group.status)}</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {group.description}
            </p>
            
            <div className="flex flex-wrap gap-4 text-xs">
              {group.allegiance && (
                <div>
                  <span className="font-medium text-malazan-gold">Allegiance: </span>
                  <span className="text-muted-foreground">{group.allegiance}</span>
                </div>
              )}
              {group.location && (
                <div>
                  <span className="font-medium text-malazan-gold">Location: </span>
                  <span className="text-muted-foreground">{group.location}</span>
                </div>
              )}
              <div>
                <span className="font-medium text-malazan-gold">Members: </span>
                <span className="text-muted-foreground">{group.characters.length}</span>
              </div>
            </div>
          </div>
          
          <div className="ml-4 text-muted-foreground">
            {isExpanded ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0 border-t border-border/50">
          {group.timeline && group.timeline.length > 0 && (
            <div className="mb-6">
              <TimelineSlider timeline={group.timeline} />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {group.characters.map((character, index) => (
              <CharacterCard
                key={index}
                character={character}
                onClick={() => onCharacterClick?.(character.name)}
              />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};