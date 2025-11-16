import { useState } from 'react';
import { Character } from '@/data/malazanData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CharacterImage } from './CharacterImage';
import { cn } from '@/lib/utils';

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
}

export const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getImportanceColor = (importance: Character['importance']) => {
    switch (importance) {
      case 'major':
        return 'bg-malazan-gold text-malazan-shadow border-malazan-gold';
      case 'important':
        return 'bg-malazan-purple text-background border-malazan-purple';
      case 'notable':
        return 'bg-malazan-teal text-background border-malazan-teal';
      default:
        return 'bg-malazan-steel text-foreground border-malazan-steel';
    }
  };

  const getTypeIcon = (type: Character['type']) => {
    switch (type) {
      case 'ascendant':
        return '⚡';
      case 'tlan_imass':
        return '💀';
      case 'tiste_andii':
        return '🌙';
      case 'jaghut':
        return '❄️';
      default:
        return '⚔️';
    }
  };

  return (
    <Card
      className={cn(
        'group cursor-pointer transition-all duration-300 hover:scale-105',
        'bg-gradient-card border-border shadow-card hover:shadow-glow',
        isHovered && 'shadow-magical'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CharacterImage character={character} size="md" />
            <div>
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="text-lg">{getTypeIcon(character.type)}</span>
                {character.name}
              </h4>
              {character.status && (
                <div className="text-xs text-muted-foreground">
                  Status: <span className={cn(
                    character.status === 'dead' && 'text-malazan-crimson',
                    character.status === 'transformed' && 'text-malazan-purple',
                    character.status === 'ascended' && 'text-malazan-gold'
                  )}>{character.status}</span>
                </div>
              )}
            </div>
          </div>
          <Badge className={cn('text-xs', getImportanceColor(character.importance))}>
            {character.importance}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {character.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {character.description}
          </p>
        )}
        
        {character.aliases && character.aliases.length > 0 && (
          <div className="mb-2">
            <span className="text-xs font-medium text-malazan-gold">Also known as: </span>
            <span className="text-xs text-muted-foreground">
              {character.aliases.join(', ')}
            </span>
          </div>
        )}

        {character.relationships && character.relationships.length > 0 && (
          <div className="space-y-1">
            {character.relationships.slice(0, 2).map((relationship, index) => (
              <div key={index} className="text-xs text-malazan-teal bg-malazan-shadow/50 px-2 py-1 rounded">
                {relationship}
              </div>
            ))}
            {character.relationships.length > 2 && (
              <div className="text-xs text-muted-foreground">
                +{character.relationships.length - 2} more...
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};