import { useState } from 'react';
import { Character } from '@/data/malazanData';
import { cn } from '@/lib/utils';
import { User, Shield, Swords, Crown, Skull, Moon, Snowflake } from 'lucide-react';

interface CharacterImageProps {
  character: Character;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CharacterImage = ({ character, size = 'md', className }: CharacterImageProps) => {
  const [imageError, setImageError] = useState(false);

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'lg':
        return 'w-16 h-16';
      default:
        return 'w-12 h-12';
    }
  };

  const getTypeIcon = (type: Character['type']) => {
    const iconProps = { className: 'w-full h-full p-1' };
    switch (type) {
      case 'ascendant':
        return <Shield {...iconProps} />;
      case 'tlan_imass':
        return <Skull {...iconProps} />;
      case 'tiste_andii':
        return <Moon {...iconProps} />;
      case 'jaghut':
        return <Snowflake {...iconProps} />;
      case 'seguleh':
        return <Swords {...iconProps} />;
      case 'divers':
      case 'soletaken':
        return <div className="w-full h-full flex items-center justify-center text-xs font-bold">D</div>;
      default:
        return <User {...iconProps} />;
    }
  };

  const getStatusColor = (status?: Character['status']) => {
    switch (status) {
      case 'dead':
        return 'ring-malazan-crimson';
      case 'transformed':
      case 'ascended':
        return 'ring-malazan-purple';
      case 'missing':
        return 'ring-malazan-steel';
      default:
        return 'ring-malazan-gold';
    }
  };

  if (character.imageUrl && !imageError) {
    return (
      <div className={cn(
        'relative rounded-full overflow-hidden ring-2',
        getSizeClasses(),
        getStatusColor(character.status),
        className
      )}>
        <img
          src={character.imageUrl}
          alt={character.name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  return (
    <div className={cn(
      'relative rounded-full overflow-hidden ring-2 bg-gradient-card flex items-center justify-center text-malazan-gold',
      getSizeClasses(),
      getStatusColor(character.status),
      className
    )}>
      {getTypeIcon(character.type)}
    </div>
  );
};