import { useState } from 'react';
import { Group } from '@/data/malazanData';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

interface GroupFilterProps {
  groups: Group[];
  visibleGroups: Set<string>;
  onToggleGroup: (groupId: string) => void;
  onToggleAll: (visible: boolean) => void;
}

export const GroupFilter = ({ groups, visibleGroups, onToggleGroup, onToggleAll }: GroupFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const groupsByType = groups.reduce((acc, group) => {
    if (!acc[group.type]) acc[group.type] = [];
    acc[group.type].push(group);
    return acc;
  }, {} as Record<string, Group[]>);

  const allVisible = groups.every(group => visibleGroups.has(group.id));
  const noneVisible = groups.every(group => !visibleGroups.has(group.id));

  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader 
        className="pb-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Group Visibility</h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-malazan-gold text-malazan-gold">
              {visibleGroups.size} of {groups.length} visible
            </Badge>
            {isExpanded ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onToggleAll(true)}
              disabled={allVisible}
              className="flex-1"
            >
              Show All
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onToggleAll(false)}
              disabled={noneVisible}
              className="flex-1"
            >
              Hide All
            </Button>
          </div>

          <div className="space-y-3">
            {Object.entries(groupsByType).map(([type, typeGroups]) => (
              <div key={type} className="space-y-2">
                <h4 className="text-sm font-medium text-malazan-gold capitalize">
                  {type.replace('_', ' ')} ({typeGroups.length})
                </h4>
                <div className="space-y-1">
                  {typeGroups.map(group => (
                    <div 
                      key={group.id}
                      className="flex items-center justify-between p-2 rounded bg-background/50 hover:bg-background/70 transition-colors"
                    >
                      <span className={cn(
                        'text-sm',
                        visibleGroups.has(group.id) ? 'text-foreground' : 'text-muted-foreground'
                      )}>
                        {group.name}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onToggleGroup(group.id)}
                        className="h-6 w-6 p-0"
                      >
                        {visibleGroups.has(group.id) ? (
                          <Eye className="h-3 w-3 text-malazan-gold" />
                        ) : (
                          <EyeOff className="h-3 w-3 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};