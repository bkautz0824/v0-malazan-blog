import { useState, useMemo } from 'react';
import { malazanData, Character, Group } from '@/data/malazanData';
import { GroupCard } from '@/components/GroupCard';
import { SearchControls } from '@/components/SearchControls';
import { CharacterModal } from '@/components/CharacterModal';
import { GroupFilter } from '@/components/GroupFilter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Book, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import mapBackground from '@/assets/malazan-bg.jpg';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookFilter, setBookFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGroupFilter, setShowGroupFilter] = useState(false);
  const [visibleGroups, setVisibleGroups] = useState<Set<string>>(new Set());

  // Initialize visible groups
  useMemo(() => {
    if (visibleGroups.size === 0) {
      const allGroupIds = malazanData.flatMap(book => book.groups.map(group => group.id));
      setVisibleGroups(new Set(allGroupIds));
    }
  }, [visibleGroups.size]);

  const filteredData = useMemo(() => {
    return malazanData
      .filter(book => bookFilter === 'all' || book.id === bookFilter)
      .map(book => ({
        ...book,
        groups: book.groups.filter(group => {
          // Visibility filter
          if (!visibleGroups.has(group.id)) return false;
          
          // Type filter
          if (typeFilter !== 'all' && group.type !== typeFilter) return false;
          
          // Search filter
          if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            return (
              group.name.toLowerCase().includes(searchLower) ||
              group.description.toLowerCase().includes(searchLower) ||
              group.characters.some(char => 
                char.name.toLowerCase().includes(searchLower) ||
                char.description?.toLowerCase().includes(searchLower) ||
                char.aliases?.some(alias => alias.toLowerCase().includes(searchLower))
              )
            );
          }
          
          return true;
        })
      }))
      .filter(book => book.groups.length > 0);
  }, [searchTerm, bookFilter, typeFilter, visibleGroups]);

  const allGroups = malazanData.flatMap(book => book.groups);

  const handleToggleGroup = (groupId: string) => {
    const newVisibleGroups = new Set(visibleGroups);
    if (newVisibleGroups.has(groupId)) {
      newVisibleGroups.delete(groupId);
    } else {
      newVisibleGroups.add(groupId);
    }
    setVisibleGroups(newVisibleGroups);
  };

  const handleToggleAllGroups = (visible: boolean) => {
    if (visible) {
      const allGroupIds = allGroups.map(group => group.id);
      setVisibleGroups(new Set(allGroupIds));
    } else {
      setVisibleGroups(new Set());
    }
  };

  const totalGroups = filteredData.reduce((acc, book) => acc + book.groups.length, 0);

  const handleCharacterClick = (characterName: string) => {
    // Find the character across all books and groups
    for (const book of malazanData) {
      for (const group of book.groups) {
        const character = group.characters.find(char => char.name === characterName);
        if (character) {
          setSelectedCharacter(character);
          setIsModalOpen(true);
          return;
        }
      }
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-primary relative overflow-hidden"
      style={{
        backgroundImage: `url(${mapBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Book className="h-8 w-8 text-malazan-gold" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Malazan Character Guide</h1>
                  <p className="text-muted-foreground">Explore the world of the Malazan Book of the Fallen</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowGroupFilter(!showGroupFilter)}
                  className="flex items-center gap-2 px-4 py-2 bg-malazan-purple/20 text-malazan-purple border border-malazan-purple/30 rounded-lg hover:bg-malazan-purple/30 transition-colors"
                >
                  <Filter className="h-4 w-4" />
                  Group Filter
                </button>
                <Link to="/maps" className="flex items-center gap-2 px-4 py-2 bg-malazan-gold/20 text-malazan-gold border border-malazan-gold/30 rounded-lg hover:bg-malazan-gold/30 transition-colors">
                  <MapPin className="h-4 w-4" />
                  Journey Maps
                </Link>
                <Link to="/fallen" className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors">
                  <span className="text-lg">⚰️</span>
                  Fallen
                </Link>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Malazan
                </span>{' '}
                <span className="text-foreground">Book of the Fallen</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore the characters and groups from the epic fantasy series. 
                Updated through <em>House of Chains</em> - spoiler-safe through Book 4.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-malazan-gold text-malazan-gold">
                  Spoiler-Safe
                </Badge>
                <Badge variant="outline" className="border-malazan-purple text-malazan-purple">
                  Interactive Guide
                </Badge>
                <Badge variant="outline" className="border-malazan-teal text-malazan-teal">
                  Character Relationships
                </Badge>
              </div>
            </div>
          </div>
        </header>

        {/* Search Controls */}
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <SearchControls
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              bookFilter={bookFilter}
              onBookFilterChange={setBookFilter}
              typeFilter={typeFilter}
              onTypeFilterChange={setTypeFilter}
              resultsCount={totalGroups}
            />
            
            {showGroupFilter && (
              <GroupFilter
                groups={allGroups}
                visibleGroups={visibleGroups}
                onToggleGroup={handleToggleGroup}
                onToggleAll={handleToggleAllGroups}
              />
            )}
          </div>
        </div>

        {/* Content */}
        <main className="container mx-auto px-4 pb-12">
          <div className="space-y-12">
            {filteredData.map((book) => (
              <Card key={book.id} className="bg-gradient-card border-border shadow-card">
                <CardHeader className="pb-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">
                      {book.title}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      {book.description}
                    </p>
                    <Badge 
                      variant="outline" 
                      className="border-malazan-gold text-malazan-gold mt-2"
                    >
                      {book.groups.length} groups
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-8">
                    {book.groups.map((group) => (
                      <GroupCard
                        key={group.id}
                        group={group}
                        onCharacterClick={handleCharacterClick}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredData.length === 0 && (
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="py-12 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  No results found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </CardContent>
            </Card>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center text-sm text-muted-foreground">
              <p>
                A fan-created guide to Steven Erikson's Malazan Book of the Fallen series.
                <br />
                Updated through House of Chains (Book 4) - spoiler-safe through Karsa's legend and the fall of Sha'ik Reborn.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Character Modal */}
      <CharacterModal
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCharacter(null);
        }}
      />
    </div>
  );
};

export default Index;
