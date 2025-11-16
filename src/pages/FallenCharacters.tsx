import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Skull, Crown, Zap, Heart } from 'lucide-react';
import { malazanData } from '@/data/malazanData';

interface FallenCharacter {
  name: string;
  book: string;
  bookTitle: string;
  cause: string;
  impact: string;
  type: 'sacrifice' | 'battle' | 'ascension' | 'transformation' | 'murder' | 'execution' | 'other';
  description: string;
  legacy?: string;
  group?: string;
}

const fallenCharacters: FallenCharacter[] = [
  // Gardens of the Moon
  {
    name: 'Hairlock',
    book: 'gotm',
    bookTitle: 'Gardens of the Moon',
    cause: 'Transformed into a marionette by necromancy',
    impact: 'Lost his human form and sanity',
    type: 'transformation',
    description: 'High Mage Hairlock was fatally wounded at the Siege of Pale and preserved his essence in a marionette body.',
    legacy: 'His transformation drove him to madness and revenge against Tayschrenn.',
    group: 'Malazan High Mages'
  },
  {
    name: 'Tattersail',
    book: 'gotm',
    bookTitle: 'Gardens of the Moon',
    cause: 'Killed in magical duel with the Hounds of Shadow',
    impact: 'Major loss for Malazan magical forces',
    type: 'battle',
    description: 'Cadre mage who died protecting others from the Hounds, her soul later reborn.',
    legacy: 'Reborn as Silverfox, becoming crucial to the T\'lan Imass storyline.',
    group: 'Malazan Cadre Mages'
  },

  // Deadhouse Gates
  {
    name: 'Coltaine',
    book: 'dg',
    bookTitle: 'Deadhouse Gates',
    cause: 'Crucified by Korbolo Dom after the Fall of Aren',
    impact: 'End of the legendary Chain of Dogs',
    type: 'murder',
    description: 'Wickan Fist who led the famous Chain of Dogs retreat, saving 30,000 refugees.',
    legacy: 'His sacrifice became legendary, inspiring future Malazan military doctrine.',
    group: 'Wickan Clans'
  },
  {
    name: 'List',
    book: 'dg',
    bookTitle: 'Deadhouse Gates',
    cause: 'Killed in final battle at Aren',
    impact: 'Loss of veteran Wickan warrior',
    type: 'battle',
    description: 'Wickan warleader and Coltaine\'s trusted lieutenant.',
    legacy: 'Died defending the refugees in the Chain of Dogs.',
    group: 'Wickan Clans'
  },
  {
    name: 'Bult',
    book: 'dg',
    bookTitle: 'Deadhouse Gates',
    cause: 'Killed in final battle at Aren',
    impact: 'Loss of veteran Wickan commander',
    type: 'battle',
    description: 'Veteran Wickan commander, one of Coltaine\'s most trusted officers.',
    legacy: 'His tactical expertise was crucial throughout the Chain of Dogs.',
    group: 'Wickan Clans'
  },
  {
    name: 'Duiker',
    book: 'dg',
    bookTitle: 'Deadhouse Gates',
    cause: 'Tortured and crucified with Coltaine',
    impact: 'Loss of the Empire\'s greatest historian',
    type: 'murder',
    description: 'Imperial Historian who chronicled the Chain of Dogs from within.',
    legacy: 'His writings became the definitive account of the Chain of Dogs.',
    group: 'Imperial Historians'
  },

  // Memories of Ice
  {
    name: 'Itkovian',
    book: 'moi',
    bookTitle: 'Memories of Ice',
    cause: 'Died after gathering the pain of the T\'lan Imass',
    impact: 'End of the Grey Swords as Shield Anvil dies',
    type: 'sacrifice',
    description: 'Shield Anvil of Fener who took upon himself the accumulated suffering of the T\'lan Imass.',
    legacy: 'His sacrifice freed the T\'lan Imass from their ancient curse of undeath.',
    group: 'Grey Swords'
  },
  {
    name: 'Hedge',
    book: 'moi',
    bookTitle: 'Memories of Ice',
    cause: 'Killed in explosion while destroying the Rent',
    impact: 'Loss of veteran Bridgeburner sapper',
    type: 'sacrifice',
    description: 'Bridgeburner sapper who sacrificed himself to seal the Rent and save Moon\'s Spawn.',
    legacy: 'His sacrifice prevented a catastrophic dimensional breach.',
    group: 'Bridgeburners'
  },
  {
    name: 'Trotts',
    book: 'moi',
    bookTitle: 'Memories of Ice',
    cause: 'Killed in the battles around Capustan',
    impact: 'Loss of Barghast warrior',
    type: 'battle',
    description: 'Barghast warrior fighting alongside the Bridgeburners.',
    legacy: 'Died fighting against the Pannion Domin.',
    group: 'Bridgeburners'
  },
  {
    name: 'Tool (Onos T\'oolan)',
    book: 'moi',
    bookTitle: 'Memories of Ice',
    cause: 'Chose mortality and left his T\'lan Imass existence',
    impact: 'First Sword of the T\'lan Imass becomes mortal',
    type: 'transformation',
    description: 'First Sword of the T\'lan Imass who chose to become mortal for love.',
    legacy: 'His choice inspired other T\'lan Imass to consider their own mortality.',
    group: 'T\'lan Imass'
  },
  {
    name: 'WhiskeyJack',
    book: 'moi',
    bookTitle: 'Memories of Ice',
    cause: 'Killed by Kallor in single combat',
    impact: 'Death of the legendary Bridgeburner sergeant',
    type: 'battle',
    description: 'Legendary Bridgeburner sergeant and veteran warrior, killed in a duel with the ancient High King Kallor.',
    legacy: 'His death devastated the Bridgeburners and marked the end of an era for the squad.',
    group: 'Bridgeburners'
  },
  {
    name: 'The Dying God (Bellurdan Skullcrusher)',
    book: 'moi',
    bookTitle: 'Memories of Ice',
    cause: 'Sacrificed himself to power the Finnest House',
    impact: 'Enabled the creation of a prison for the Crippled God\'s power',
    type: 'sacrifice',
    description: 'Ancient T\'lan Imass Bonecaster who became the Dying God, sacrificing his existence.',
    legacy: 'His sacrifice contained part of the Crippled God\'s influence.',
    group: 'T\'lan Imass'
  },
  {
    name: 'Kilava',
    book: 'moi',
    bookTitle: 'Memories of Ice',
    cause: 'Chose to become mortal',
    impact: 'First successful T\'lan Imass return to mortality',
    type: 'transformation',
    description: 'Ancient T\'lan Imass Bonecaster who chose mortality over undeath.',
    legacy: 'Proved that T\'lan Imass could reclaim their living state.',
    group: 'T\'lan Imass'
  },
  {
    name: 'Captain Paran',
    book: 'gotm',
    bookTitle: 'Gardens of the Moon',
    cause: 'Killed by Sorry, then brought back by Oponn',
    impact: 'Death and resurrection marked him as Opponn\'s tool',
    type: 'transformation',
    description: 'Young Malazan officer killed early in the campaign, then resurrected by the gods of chance.',
    legacy: 'His resurrection bound him to the gods and changed his fate.',
    group: 'Malazan Army'
  },
  {
    name: 'Sorry/Apsalar',
    book: 'gotm',
    bookTitle: 'Gardens of the Moon',
    cause: 'Possessed by the Rope, lost her original identity',
    impact: 'Innocent girl transformed into an assassin',
    type: 'transformation',
    description: 'Young Itko Kan girl possessed by Shadowthrone\'s Rope, losing her original self.',
    legacy: 'Became one of the most skilled assassins in the world.',
    group: 'Shadowthrone\'s Agents'
  },
  // House of Chains
  {
    name: 'Sha\'ik Reborn (Felisin Younger)',
    book: 'hoc',
    bookTitle: 'House of Chains',
    cause: 'Killed by Tavore Paran in ritual duel',
    impact: 'Death of the Whirlwind\'s chosen leader',
    type: 'battle',
    description: 'Young woman chosen as the new Sha\'ik after the original\'s death. Killed by her own sister Tavore in single combat at Raraku, ending the Whirlwind Rebellion.',
    legacy: 'Her death at her sister\'s hands represents the tragic cost of war and duty.',
    group: 'Whirlwind Rebellion'
  },
  {
    name: 'Bidithal',
    book: 'hoc',
    bookTitle: 'House of Chains',
    cause: 'Murdered by Felisin/Sha\'ik Reborn',
    impact: 'Death of twisted priest',
    type: 'murder',
    description: 'Pedophilic priest of the Whirlwind, representing corruption within the rebellion. Murdered by Felisin in an act of justice and rage.',
    legacy: 'His death showed Felisin reclaiming agency against those who preyed on the innocent.',
    group: 'Whirlwind Rebellion'
  },
  {
    name: 'Korbolo Dom',
    book: 'hoc',
    bookTitle: 'House of Chains',
    cause: 'Executed by Kalam Mekhar',
    impact: 'Traitor who betrayed Coltaine brought to justice',
    type: 'execution',
    description: 'Treacherous Malazan Fist who betrayed Coltaine and the Chain of Dogs. Hunted down and executed by Kalam for his crimes.',
    legacy: 'Justice for the thousands who died in the Chain of Dogs massacre.',
    group: 'Whirlwind Rebellion'
  },
  {
    name: 'Kamist Reloe',
    book: 'hoc',
    bookTitle: 'House of Chains',
    cause: 'Killed in battle at Raraku',
    impact: 'Death of Whirlwind\'s High Mage',
    type: 'battle',
    description: 'Powerful High Mage serving the Whirlwind Rebellion, killed during the final battles at Raraku.',
    legacy: 'His death removed major magical support from the Whirlwind forces.',
    group: 'Whirlwind Rebellion'
  },
  {
    name: 'Hounds of Shadow',
    book: 'hoc',
    bookTitle: 'House of Chains',
    cause: 'Slain by Karsa Orlong',
    impact: 'Multiple ancient Hounds killed - legendary feat',
    type: 'battle',
    description: 'Ancient, nearly invincible servants of Shadowthrone. Multiple hounds killed by Karsa Orlong in legendary combat, a feat few mortals could accomplish.',
    legacy: 'Karsa\'s slaying of the Hounds cemented his status as one of the most dangerous warriors alive.',
    group: 'House of Shadow'
  },
  {
    name: 'L\'oric',
    book: 'hoc',
    bookTitle: 'House of Chains',
    cause: 'Transformed through magical catastrophe',
    impact: 'Son of Osserc undergoes fundamental change',
    type: 'transformation',
    description: 'Powerful Tiste Liosan mage, son of Osserc, who underwent a profound transformation during the Raraku convergence.',
    legacy: 'His transformation reflects the changing nature of power in the Malazan world.',
    group: 'Whirlwind Rebellion'
  },
  {
    name: 'Trull Sengar\'s Status',
    book: 'hoc',
    bookTitle: 'House of Chains',
    cause: 'Enslaved and exiled from his people',
    impact: 'Tiste Edur warrior lost to slavery',
    type: 'transformation',
    description: 'Disgraced Tiste Edur warrior enslaved and cast into the fragmented Tellann warren. Presumed dead by his people, he becomes Onrack\'s friend.',
    legacy: 'His philosophical approach to suffering and friendship with Onrack represents bridge between living and undead.',
    group: 'Tiste Edur'
  }
];

const FallenCharacters = () => {
  const [selectedBook, setSelectedBook] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredCharacters = fallenCharacters.filter(char => {
    const bookMatch = selectedBook === 'all' || char.book === selectedBook;
    const typeMatch = selectedType === 'all' || char.type === selectedType;
    return bookMatch && typeMatch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'sacrifice': return <Heart className="h-4 w-4" />;
      case 'ascension': return <Crown className="h-4 w-4" />;
      case 'transformation': return <Zap className="h-4 w-4" />;
      case 'execution': return <Skull className="h-4 w-4" />;
      default: return <Skull className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'sacrifice': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'battle': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'ascension': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'transformation': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'murder': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'execution': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Guide
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Skull className="h-8 w-8 text-red-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">Fallen Characters</h1>
              <p className="text-slate-300">Those who gave their lives in the Malazan campaigns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Select value={selectedBook} onValueChange={setSelectedBook}>
              <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="Filter by book" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Books</SelectItem>
                <SelectItem value="gotm">Gardens of the Moon</SelectItem>
                <SelectItem value="dg">Deadhouse Gates</SelectItem>
                <SelectItem value="moi">Memories of Ice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sacrifice">Sacrifice</SelectItem>
                <SelectItem value="battle">Battle</SelectItem>
                <SelectItem value="transformation">Transformation</SelectItem>
                <SelectItem value="ascension">Ascension</SelectItem>
                <SelectItem value="murder">Murder</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((character, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center gap-2">
                      {getTypeIcon(character.type)}
                      {character.name}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-slate-300 border-slate-600">
                        {character.bookTitle}
                      </Badge>
                      <Badge className={getTypeColor(character.type)}>
                        {character.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {character.description}
                </p>
                
                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Cause of Death/Change:</h4>
                    <p className="text-slate-400 text-sm">{character.cause}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Impact:</h4>
                    <p className="text-slate-400 text-sm">{character.impact}</p>
                  </div>
                  
                  {character.legacy && (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">Legacy:</h4>
                      <p className="text-slate-400 text-sm">{character.legacy}</p>
                    </div>
                  )}
                  
                  {character.group && (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">Affiliation:</h4>
                      <p className="text-slate-400 text-sm">{character.group}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <div className="text-center py-12">
            <Skull className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">No fallen characters found</h3>
            <p className="text-slate-500">Try adjusting your filters to see more results.</p>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-400">{fallenCharacters.filter(c => c.type === 'sacrifice').length}</div>
              <div className="text-slate-400 text-sm">Sacrifices</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-400">{fallenCharacters.filter(c => c.type === 'battle').length}</div>
              <div className="text-slate-400 text-sm">Battle Deaths</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-400">{fallenCharacters.filter(c => c.type === 'transformation').length}</div>
              <div className="text-slate-400 text-sm">Transformations</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-slate-400">{fallenCharacters.length}</div>
              <div className="text-slate-400 text-sm">Total</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FallenCharacters;