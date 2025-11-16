import { Group } from '@/data/malazanData';
import { cn } from '@/lib/utils';

interface FactionSymbolProps {
  group: Group;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const FactionSymbol = ({ group, size = 'md', className }: FactionSymbolProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6 text-sm';
      case 'lg':
        return 'w-12 h-12 text-2xl';
      default:
        return 'w-8 h-8 text-lg';
    }
  };

  const getSymbol = () => {
    if (group.symbol) return group.symbol;
    
    // Default symbols based on type
    switch (group.type) {
      case 'military':
        return '⚔️';
      case 'ascendant':
        return '⚡';
      case 'noble':
        return '👑';
      case 'cult':
        return '🔮';
      case 'clan':
        return '🏹';
      case 'partnership':
        return '🤝';
      case 'company':
        return '🛡️';
      default:
        return '📜';
    }
  };

  return (
    <div className={cn(
      'rounded-full bg-gradient-card border border-border flex items-center justify-center',
      getSizeClasses(),
      className
    )}>
      <span>{getSymbol()}</span>
    </div>
  );
};