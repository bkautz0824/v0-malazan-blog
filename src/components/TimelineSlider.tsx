import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { TimelineEvent } from '@/data/malazanData';

interface TimelineSliderProps {
  timeline?: TimelineEvent[];
  className?: string;
}

export const TimelineSlider = ({ timeline, className }: TimelineSliderProps) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  if (!timeline || timeline.length === 0) {
    return null;
  }

  const currentEvent = timeline[currentEventIndex];

  return (
    <Card className={cn('bg-gradient-card border-border shadow-card', className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">Timeline Progress</h4>
          <Badge variant="outline" className="border-malazan-gold text-malazan-gold">
            {currentEventIndex + 1} of {timeline.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Slider
          value={[currentEventIndex]}
          onValueChange={(value) => setCurrentEventIndex(value[0])}
          max={timeline.length - 1}
          step={1}
          className="w-full"
        />
        
        <div className="space-y-3">
          <h5 className="font-medium text-malazan-gold">{currentEvent.event}</h5>
          
          {currentEvent.location && (
            <div className="text-sm">
              <span className="font-medium text-malazan-teal">Location: </span>
              <span className="text-muted-foreground">{currentEvent.location}</span>
            </div>
          )}
          
          {currentEvent.charactersInvolved && currentEvent.charactersInvolved.length > 0 && (
            <div className="text-sm">
              <span className="font-medium text-malazan-purple">Characters: </span>
              <span className="text-muted-foreground">
                {currentEvent.charactersInvolved.join(', ')}
              </span>
            </div>
          )}
          
          {currentEvent.outcome && (
            <div className="text-sm">
              <span className="font-medium text-malazan-crimson">Outcome: </span>
              <span className="text-muted-foreground">{currentEvent.outcome}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};