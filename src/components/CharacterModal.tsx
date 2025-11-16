import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Character } from '@/data/malazanData';
import { cn } from '@/lib/utils';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CharacterModal = ({ character, isOpen, onClose }: CharacterModalProps) => {
  if (!character) return null;

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

  const getTypeDescription = (type: Character['type']) => {
    switch (type) {
      case 'ascendant':
        return 'Divine or godlike being with immense power';
      case 'tlan_imass':
        return 'Ancient undead warrior from a pre-human civilization';
      case 'tiste_andii':
        return 'Long-lived ancient race with dark skin and silver hair';
      case 'jaghut':
        return 'Ancient race of powerful, solitary beings';
      case 'human':
        return 'Mortal human being';
      default:
        return 'Other sentient being';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-card border-border shadow-magical">
        <DialogHeader className="space-y-4">
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <span className="text-3xl">{getTypeIcon(character.type)}</span>
            <span className="text-foreground">{character.name}</span>
            <Badge className={cn('text-sm', getImportanceColor(character.importance))}>
              {character.importance}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-malazan-gold mb-2">Type</h4>
            <div className="bg-malazan-shadow/50 p-3 rounded-lg">
              <p className="text-foreground font-medium mb-1 capitalize">
                {character.type.replace('_', ' ')}
              </p>
              <p className="text-sm text-muted-foreground">
                {getTypeDescription(character.type)}
              </p>
            </div>
          </div>

          {character.description && (
            <div>
              <h4 className="text-lg font-semibold text-malazan-gold mb-2">Description</h4>
              <p className="text-foreground leading-relaxed bg-malazan-shadow/50 p-3 rounded-lg">
                {character.description}
              </p>
            </div>
          )}

          {character.aliases && character.aliases.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-malazan-gold mb-2">Also Known As</h4>
              <div className="flex flex-wrap gap-2">
                {character.aliases.map((alias, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-malazan-teal text-malazan-teal bg-malazan-shadow/50"
                  >
                    {alias}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {character.relationships && character.relationships.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-malazan-gold mb-2">
                Relationships & Connections
              </h4>
              <div className="space-y-2">
                {character.relationships.map((relationship, index) => (
                  <div
                    key={index}
                    className="bg-malazan-shadow/50 p-3 rounded-lg border-l-4 border-malazan-purple"
                  >
                    <p className="text-foreground text-sm">{relationship}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};