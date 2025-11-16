import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Route, Book } from 'lucide-react';
import { malazanData } from '@/data/malazanData';

// Map data for each book with journeys and locations
const mapData = {
  gotm: {
    title: 'Gardens of the Moon - Genabackis',
    imageUrl: '/genabackis-map.jpg',
    imageWidth: 1200,
    imageHeight: 800,
    locations: [
      // Major Cities
      { name: 'Darujhistan', coords: [400, 600], type: 'city', description: 'The Blue City, target of Malazan conquest' },
      { name: 'Pale', coords: [200, 300], type: 'city', description: 'Site of the devastating siege where Bridgeburners were decimated' },
      
      // Battlefields & Significant Sites
      { name: 'Siege of Pale Battlefield', coords: [190, 290], type: 'battle', description: 'Where Tayschrenn betrayed the Bridgeburners' },
      { name: 'Barrow Fields', coords: [350, 580], type: 'battle', description: 'Ancient burial grounds outside Darujhistan' },
      { name: 'Worry Gate', coords: [410, 590], type: 'landmark', description: 'Main gate into Darujhistan' },
      { name: 'Majesty Hall', coords: [405, 605], type: 'landmark', description: 'Seat of Darujhistan\'s Council' },
      
      // Natural Features
      { name: 'Blackdog Forest', coords: [350, 450], type: 'forest', description: 'Dense forest between Pale and Darujhistan' },
      { name: 'Lake Azur', coords: [500, 400], type: 'water', description: 'Large lake east of Darujhistan' },
      { name: 'Gadrobi Hills', coords: [300, 500], type: 'hills', description: 'Hills south of Darujhistan' },
      { name: 'Tahlyn Mountains', coords: [100, 200], type: 'mountains', description: 'Mountain range near Pale' },
      
      // Mystical Locations
      { name: 'Moon\'s Spawn Position', coords: [380, 580], type: 'mystical', description: 'Where Anomander Rake\'s fortress hovers' },
      { name: 'Phoenix Inn', coords: [408, 602], type: 'landmark', description: 'Gathering place of Darujhistan\'s underworld' },
      { name: 'K\'rul\'s Bar', coords: [402, 608], type: 'mystical', description: 'Tavern with ancient connections' }
    ],
    journeys: [
      {
        groupId: 'bridgeburners',
        name: 'Bridgeburners March to Darujhistan',
        color: '#ef4444',
        path: [[200, 300], [280, 380], [350, 450], [380, 520], [400, 600]],
        description: 'The surviving Bridgeburners\' covert march from Pale to infiltrate Darujhistan'
      },
      {
        groupId: 'malazan_empire',
        name: 'Imperial Army Movements',
        color: '#3b82f6',
        path: [[150, 250], [200, 300], [220, 320], [250, 350]],
        description: 'Main Malazan forces under Dujek around Pale and northern Genabackis'
      },
      {
        groupId: 'house_shadow',
        name: 'Shadow Infiltration',
        color: '#6b46c1',
        path: [[400, 600], [410, 590], [380, 580]],
        description: 'Shadowthrone and Cotillion\'s agents moving through Darujhistan'
      },
      {
        groupId: 'tiste_andii',
        name: 'Moon\'s Spawn Approach',
        color: '#1f2937',
        path: [[300, 400], [350, 500], [380, 580]],
        description: 'Anomander Rake brings Moon\'s Spawn to Darujhistan'
      },
      {
        groupId: 'enhanced_battle_paths',
        name: 'Multi-Phase Battle Movements',
        color: '#ef4444',
        path: [
          [200, 300], [250, 320], [280, 380], [320, 420], 
          [350, 450], [370, 480], [380, 520], [390, 560], [400, 600]
        ],
        description: 'Enhanced battle path showing multiple engagement phases from Pale to Darujhistan'
      },
      {
        groupId: 'infiltration_network',
        name: 'Shadow Infiltration Network',
        color: '#6b46c1',
        path: [
          [380, 580], [390, 585], [400, 600], [410, 590], 
          [405, 605], [408, 602], [402, 608], [395, 595]
        ],
        description: 'Complex infiltration routes through Darujhistan\'s undercity'
      },
    ]
  },
  dg: {
    title: 'Deadhouse Gates - Seven Cities',
    imageUrl: '/seven-cities-map.jpg',
    imageWidth: 1200,
    imageHeight: 900,
    locations: [
      // Major Cities
      { name: 'Unta', coords: [100, 200], type: 'city', description: 'Capital of Seven Cities, seat of Malazan power' },
      { name: 'Hissar', coords: [300, 400], type: 'city', description: 'Starting point of the Chain of Dogs' },
      { name: 'Aren', coords: [700, 600], type: 'city', description: 'Final destination and site of Coltaine\'s last stand' },
      { name: 'G\'danisban', coords: [450, 350], type: 'city', description: 'Major city along the Chain of Dogs route' },
      
      // Strategic Crossings & Oases
      { name: 'Vathar Crossing', coords: [500, 500], type: 'crossing', description: 'Crucial river crossing defended by Coltaine' },
      { name: 'Sekala Crossing', coords: [600, 400], type: 'crossing', description: 'Another vital crossing point' },
      { name: 'Kamist Reloe', coords: [400, 300], type: 'oasis', description: 'Desert oasis and supply point' },
      { name: 'Ribal', coords: [380, 480], type: 'oasis', description: 'Oasis along the retreat route' },
      
      // Battlefields & Significant Sites
      { name: 'Gelor Ridge', coords: [480, 450], type: 'battle', description: 'Major engagement during the retreat' },
      { name: 'Sanimon', coords: [520, 420], type: 'battle', description: 'Site of fierce fighting' },
      { name: 'Aren\'s Outer Defenses', coords: [690, 590], type: 'battle', description: 'Final defensive positions' },
      { name: 'The Whirlwind\'s Heart', coords: [350, 650], type: 'mystical', description: 'Spiritual center of the rebellion' },
      
      // Desert Features
      { name: 'Nenoth Odhan', coords: [400, 450], type: 'desert', description: 'Vast desert wasteland' },
      { name: 'Banath Odhan', coords: [550, 550], type: 'desert', description: 'Eastern desert region' },
      { name: 'Sialk', coords: [250, 600], type: 'city', description: 'Coastal city in rebellion' },
      
      // Mystical/Religious Sites
      { name: 'Raraku', coords: [380, 680], type: 'mystical', description: 'Holy Desert, birthplace of legends' },
      { name: 'Skullcup', coords: [150, 300], type: 'landmark', description: 'Mining prison where Felisin was held' }
    ],
    journeys: [
      {
        groupId: 'enhanced_chain_of_dogs',
        name: 'The Chain of Dogs - Multi-Stage Retreat',
        color: '#dc2626',
        path: [
          [300, 400], [320, 410], [350, 430], [380, 420], 
          [400, 300], [430, 320], [450, 350], [470, 380],
          [480, 450], [500, 440], [520, 420], [540, 440],
          [500, 500], [530, 480], [580, 460], [600, 400], 
          [620, 450], [650, 500], [680, 550], [700, 600]
        ],
        description: 'Detailed Chain of Dogs showing all major battles, river crossings, and tactical withdrawals'
      },
      {
        groupId: 'convergence_paths',
        name: 'Shapeshifter Convergence',
        color: '#8b5cf6',
        path: [
          [100, 700], [200, 600], [300, 500], [350, 450], 
          [380, 400], [400, 380], [420, 360], [450, 350]
        ],
        description: 'Soletaken and D\'ivers converging on Icarium\'s location'
      },
      {
        groupId: 'whirlwind_rebellion',
        name: 'Whirlwind Uprising',
        color: '#f59e0b',
        path: [[380, 680], [350, 650], [300, 600], [250, 600], [200, 550], [400, 500], [500, 400]],
        description: 'Sha\'ik\'s rebellion spreading from Raraku across the continent'
      },
      {
        groupId: 'wickan_clans',
        name: 'Wickan Tribal Movements',
        color: '#8b5cf6',
        path: [[300, 400], [320, 420], [480, 450], [500, 500], [580, 480], [700, 600]],
        description: 'Wickan riders screening and supporting the main retreat'
      },
      {
        groupId: 'malazan_7th',
        name: 'Pormqual\'s Failures',
        color: '#6b7280',
        path: [[700, 600], [680, 580], [650, 550], [620, 520]],
        description: 'High Fist Pormqual\'s incompetent defensive positions around Aren'
      }
    ]
  },
  moi: {
    title: 'Memories of Ice - Northern Genabackis',
    imageUrl: '/northern-genabackis-map.jpg',
    imageWidth: 1100,
    imageHeight: 850,
    locations: [
      // Major Cities
      { name: 'Capustan', coords: [500, 400], type: 'city', description: 'Holy city under siege by the Pannion Domin' },
      { name: 'Setta', coords: [300, 300], type: 'city', description: 'City captured by Pannion forces' },
      { name: 'Lest', coords: [200, 500], type: 'city', description: 'Northern city in the path of war' },
      { name: 'Morn', coords: [400, 200], type: 'city', description: 'Strategic northern settlement' },
      { name: 'Coral', coords: [700, 600], type: 'city', description: 'Coastal city and Pannion stronghold' },
      
      // Battlefields & Siege Sites
      { name: 'Capustan\'s Outer Walls', coords: [495, 395], type: 'battle', description: 'First line of defense against Pannion siege' },
      { name: 'Jelarkan\'s Barbican', coords: [505, 405], type: 'battle', description: 'Critical defensive position within Capustan' },
      { name: 'The Thrall Camps', coords: [480, 380], type: 'battle', description: 'Pannion Domin siege encampments' },
      { name: 'Setta Massacre Site', coords: [295, 295], type: 'battle', description: 'Where Setta fell to Pannion forces' },
      
      // Strategic Locations
      { name: 'The Barghast Range', coords: [350, 450], type: 'mountains', description: 'Mountain range blocking southern approach' },
      { name: 'Outlook River', coords: [450, 500], type: 'water', description: 'River defending Capustan\'s northern approach' },
      { name: 'Spawn\'s Position', coords: [480, 420], type: 'mystical', description: 'Where Moon\'s Spawn hovers during the siege' },
      
      // Religious & Mystical Sites
      { name: 'Fener\'s Temple', coords: [502, 398], type: 'mystical', description: 'Sacred temple of the Boar of Summer in Capustan' },
      { name: 'Grey Swords Barracks', coords: [498, 402], type: 'landmark', description: 'Headquarters of the Grey Swords mercenary company' },
      { name: 'The Thrall Warren Gates', coords: [485, 385], type: 'mystical', description: 'Where Pannion sorcery opens paths for their armies' },
      
      // Ancient Powers
      { name: 'T\'lan Gathering Point', coords: [400, 350], type: 'mystical', description: 'Where ancient T\'lan Imass converge' },
      { name: 'Silverfox\'s Sanctuary', coords: [420, 330], type: 'mystical', description: 'Protected space of the reborn Bonecaster' }
    ],
    journeys: [
      {
        groupId: 'onearms_host',
        name: 'Onearm\'s March to Capustan',
        color: '#059669',
        path: [[200, 700], [250, 650], [300, 600], [350, 550], [400, 500], [450, 450], [500, 400]],
        description: 'Dujek\'s combined forces marching north to relieve the siege of Capustan'
      },
      {
        groupId: 'grey_swords',
        name: 'Grey Swords Defense',
        color: '#6b7280',
        path: [[450, 350], [480, 380], [500, 400], [505, 405], [495, 395]],
        description: 'Grey Swords defensive positions and sorties around Capustan'
      },
      {
        groupId: 'tiste_andii_alliance',
        name: 'Moon\'s Spawn Intervention',
        color: '#1f2937',
        path: [[350, 300], [400, 350], [450, 380], [480, 420]],
        description: 'Anomander Rake brings Moon\'s Spawn to aid in Capustan\'s defense'
      },
      {
        groupId: 'capustan_defenders',
        name: 'City Defense Network',
        color: '#f59e0b',
        path: [[495, 395], [500, 400], [505, 405], [502, 398]],
        description: 'Prince Jelarkan\'s forces coordinating the city\'s desperate defense'
      },
      {
        groupId: 'final_campaign_paths',
        name: 'Complete Pannion Campaign',
        color: '#059669',
        path: [
          [200, 700], [220, 680], [250, 650], [280, 620],
          [300, 600], [320, 580], [350, 550], [380, 520],
          [400, 500], [430, 470], [450, 450], [480, 430],
          [500, 400], [520, 420], [550, 450], [600, 500],
          [650, 550], [700, 600]
        ],
        description: 'Complete campaign from initial march through Capustan to final victory at Coral'
      },
      {
        groupId: 'ancient_convergence',
        name: 'T\'lan Imass & Ancient Powers',
        color: '#8b5cf6',
        path: [
          [300, 200], [350, 250], [400, 300], [420, 330],
          [400, 350], [420, 370], [400, 400], [380, 420],
          [360, 400], [350, 380], [380, 340], [400, 350]
        ],
        description: 'Movement of T\'lan Imass, T\'lan Ay, and other ancient powers around the Second Gathering'
      },
    ]
  },
  hoc: {
    title: 'House of Chains',
    imageUrl: '/seven-cities-map.jpg',
    imageWidth: 800,
    imageHeight: 600,
    locations: [
      {
        name: 'Raraku (Dried Holy Desert)',
        coords: [300, 400],
        type: 'mystical',
        description: 'Once the Holy Desert, now dried up. Site of the final confrontation between Tavore and Sha\'ik Reborn.'
      },
      {
        name: 'Y\'Ghatan',
        coords: [200, 250],
        type: 'city',
        description: 'City where Leoman makes his final stand. Unresolved cliffhanger - the firestorm awaits.'
      },
      {
        name: 'Teblor Highlands',
        coords: [100, 100],
        type: 'mountains',
        description: 'Karsa Orlong\'s homeland in the far north. Beginning of his epic journey.'
      },
      {
        name: 'Arena Locations',
        coords: [250, 300],
        type: 'landmark',
        description: 'Various Seven Cities arenas where Karsa became legendary as "Toblakai the Slayer".'
      },
      {
        name: 'Otataral Mines',
        coords: [350, 450],
        type: 'landmark',
        description: 'Source of magic-deadening Otataral, significant to multiple storylines.'
      },
      {
        name: '14th Army Landing',
        coords: [150, 200],
        type: 'battle',
        description: 'Where Adjunct Tavore\'s 14th Army began their Seven Cities campaign.'
      },
      {
        name: 'Malaz City (Flashbacks)',
        coords: [50, 500],
        type: 'city',
        description: 'Where the 14th Army was assembled. Fiddler receives Tanno Spiritwalker vision here.'
      },
      {
        name: 'Shadow Warren Manifestation',
        coords: [400, 300],
        type: 'mystical',
        description: 'Location where Karsa slew multiple Hounds of Shadow.'
      },
      {
        name: 'Fragmented Tellann Warren',
        coords: [500, 150],
        type: 'mystical',
        description: 'Timeless prison where Onrack was trapped for millennia. Outside normal space.'
      }
    ],
    journeys: [
      {
        groupId: 'karsa_journey',
        name: 'Karsa\'s Epic Journey',
        color: '#DC143C',
        path: [
          [100, 100], [120, 150], [140, 180], [180, 220],
          [220, 260], [250, 300], [270, 340], [300, 380],
          [320, 400], [300, 400], [350, 350], [400, 300]
        ],
        description: 'Teblor Highlands → Slavery → Arena legend → Liberation → Raraku → Slaying the Hounds. "Witness."'
      },
      {
        groupId: 'fourteenth_army',
        name: '14th Army March',
        color: '#3b82f6',
        path: [
          [150, 200], [170, 220], [190, 240], [210, 260],
          [230, 280], [250, 300], [270, 320], [280, 340],
          [290, 360], [300, 380], [300, 400], [250, 320],
          [220, 280], [200, 250]
        ],
        description: 'Tavore\'s methodical campaign through Seven Cities, culminating in sister vs. sister at Raraku.'
      },
      {
        groupId: 'shaik_whirlwind_hoc',
        name: 'Leoman\'s Retreat to Y\'Ghatan',
        color: '#f59e0b',
        path: [
          [300, 400], [280, 380], [260, 350], [240, 320],
          [220, 290], [210, 270], [200, 250]
        ],
        description: 'After Sha\'ik\'s fall, Leoman escapes to Y\'Ghatan for final resistance (unresolved).'
      },
      {
        groupId: 'cutter_apsalar_hoc',
        name: 'Shadow\'s Path',
        color: '#6b46c1',
        path: [
          [200, 200], [300, 250], [250, 350], [350, 300],
          [280, 400], [320, 380], [300, 400]
        ],
        description: 'Cutter and Apsalar\'s Shadow Warren jumps across Seven Cities on assassination missions.'
      },
      {
        groupId: 'kalam_hunt_hoc',
        name: 'Kalam\'s Hunt',
        color: '#DC2626',
        path: [
          [180, 180], [220, 220], [260, 260], [280, 300],
          [300, 340], [310, 370], [300, 400]
        ],
        description: 'Kalam tracking and hunting down Korbolo Dom for vengeance. Justice for Coltaine.'
      },
      {
        groupId: 'onrack_tellan_hoc',
        name: 'Fragmented Warren Existence',
        color: '#9ca3af',
        path: [
          [500, 150], [480, 160], [490, 140], [510, 155],
          [495, 145], [500, 150]
        ],
        description: 'Timeless space where Onrack and Trull exist outside normal geography until liberation.'
      }
    ]
  }
};

const Maps: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const [selectedBook, setSelectedBook] = useState(searchParams.get('book') || 'gotm');
  const [activeJourneys, setActiveJourneys] = useState<string[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) return;

    // Clean up existing map
    if (leafletMap.current) {
      leafletMap.current.remove();
    }

    const currentMapData = mapData[selectedBook as keyof typeof mapData];
    if (!currentMapData) return;

    // Create map with simple CRS for image overlay
    const map = L.map(mapRef.current, {
      crs: L.CRS.Simple,
      minZoom: -1,
      maxZoom: 3,
      attributionControl: false
    });

    // Define image bounds
    const imageBounds: L.LatLngBoundsExpression = [
      [0, 0], 
      [currentMapData.imageHeight, currentMapData.imageWidth]
    ];

    // Add placeholder image overlay (you'll need to add actual map images)
    const imageOverlay = L.imageOverlay(
      currentMapData.imageUrl, 
      imageBounds,
      { opacity: 0.8 }
    ).addTo(map);

    // Set view to fit bounds
    map.fitBounds(imageBounds);

    // Add locations with enhanced markers
    currentMapData.locations.forEach(location => {
      const getLocationColor = (type: string) => {
        switch (type) {
          case 'city': return 'bg-amber-400';
          case 'battle': return 'bg-red-500';
          case 'mystical': return 'bg-purple-500';
          case 'water': return 'bg-blue-400';
          case 'mountains': return 'bg-gray-600';
          case 'desert': return 'bg-yellow-600';
          case 'forest': return 'bg-green-500';
          case 'hills': return 'bg-green-400';
          case 'crossing': return 'bg-cyan-400';
          case 'oasis': return 'bg-emerald-400';
          case 'landmark': return 'bg-orange-400';
          default: return 'bg-gray-400';
        }
      };

      const getLocationSize = (type: string) => {
        return type === 'city' || type === 'battle' || type === 'mystical' ? 'w-4 h-4' : 'w-3 h-3';
      };

      const icon = L.divIcon({
        className: 'custom-location-marker',
        html: `<div class="${getLocationSize(location.type)} rounded-full ${getLocationColor(location.type)} border-2 border-background shadow-lg"></div>`,
        iconSize: location.type === 'city' || location.type === 'battle' || location.type === 'mystical' ? [16, 16] : [12, 12],
        iconAnchor: location.type === 'city' || location.type === 'battle' || location.type === 'mystical' ? [8, 8] : [6, 6]
      });

      const tooltipContent = location.description 
        ? `<strong>${location.name}</strong><br/>${location.description}`
        : location.name;

      L.marker([location.coords[0], location.coords[1]], { icon })
        .bindTooltip(tooltipContent, { 
          permanent: false, 
          direction: 'top',
          className: 'custom-tooltip'
        })
        .addTo(map);
    });

    leafletMap.current = map;

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, [selectedBook]);

  // Update journeys when selection changes
  useEffect(() => {
    if (!leafletMap.current) return;

    const currentMapData = mapData[selectedBook as keyof typeof mapData];
    if (!currentMapData) return;

    // Remove existing journey layers
    leafletMap.current.eachLayer((layer) => {
      if (layer instanceof L.Polyline) {
        leafletMap.current?.removeLayer(layer);
      }
    });

    // Add selected journeys
    currentMapData.journeys.forEach(journey => {
      if (activeJourneys.includes(journey.groupId) || selectedGroup === journey.groupId) {
        const polyline = L.polyline(
          journey.path as L.LatLngExpression[],
          {
            color: journey.color,
            weight: 4,
            opacity: 0.8,
            dashArray: selectedGroup === journey.groupId ? undefined : '10, 5'
          }
        ).addTo(leafletMap.current!);

        polyline.bindTooltip(journey.name, {
          sticky: true,
          className: 'journey-tooltip'
        });
      }
    });
  }, [activeJourneys, selectedGroup, selectedBook]);

  const handleBookChange = (bookId: string) => {
    setSelectedBook(bookId);
    setSearchParams({ book: bookId });
    setActiveJourneys([]);
    setSelectedGroup(null);
  };

  const toggleJourney = (groupId: string) => {
    setActiveJourneys(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const currentMapData = mapData[selectedBook as keyof typeof mapData];
  const currentBookData = malazanData.find(book => book.id === selectedBook);

  if (!currentMapData || !currentBookData) {
    return <div>Loading map data...</div>;
  }

  return (
    <div className="min-h-screen bg-malazan-dark">
      {/* Header */}
      <header className="border-b border-malazan-border bg-malazan-darker/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-malazan-gold" />
              <div>
                <h1 className="text-2xl font-bold text-malazan-text">Malazan Journey Maps</h1>
                <p className="text-malazan-muted">Track character movements across the world</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedBook} onValueChange={handleBookChange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select a book" />
                </SelectTrigger>
                <SelectContent>
                  {malazanData.map(book => (
                    <SelectItem key={book.id} value={book.id}>
                      <div className="flex items-center gap-2">
                        <Book className="h-4 w-4" />
                        {book.shortTitle}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar with controls */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-malazan-darker/50 border-malazan-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-malazan-gold">
                  <Users className="h-5 w-5" />
                  Groups & Journeys
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentMapData.journeys.map(journey => {
                  const group = currentBookData.groups.find(g => g.id === journey.groupId);
                  if (!group) return null;

                  return (
                    <div key={journey.groupId} className="space-y-2">
                      <Button
                        variant={activeJourneys.includes(journey.groupId) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleJourney(journey.groupId)}
                        className="w-full justify-start"
                      >
                        <div 
                          className="w-3 h-3 rounded-full mr-2 border" 
                          style={{ backgroundColor: journey.color }}
                        />
                        {group.name}
                      </Button>
                      <p className="text-xs text-malazan-muted pl-5">
                        {journey.description}
                      </p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-malazan-darker/50 border-malazan-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-malazan-gold">
                  <Route className="h-5 w-5" />
                  Legend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 rounded-full bg-amber-400 border-2 border-background"></div>
                  <span className="text-malazan-text">Cities</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-background"></div>
                  <span className="text-malazan-text">Battlefields</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-background"></div>
                  <span className="text-malazan-text">Mystical Sites</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-400 border-2 border-background"></div>
                  <span className="text-malazan-text">Water Bodies</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-gray-600 border-2 border-background"></div>
                  <span className="text-malazan-text">Mountains</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-background"></div>
                  <span className="text-malazan-text">Forests/Hills</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-600 border-2 border-background"></div>
                  <span className="text-malazan-text">Deserts</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 border-2 border-background"></div>
                  <span className="text-malazan-text">Crossings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-background"></div>
                  <span className="text-malazan-text">Oases</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-orange-400 border-2 border-background"></div>
                  <span className="text-malazan-text">Landmarks</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-0.5 bg-red-500"></div>
                  <span className="text-malazan-text">Group Journeys</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map area */}
          <div className="lg:col-span-3">
            <Card className="bg-malazan-darker/30 border-malazan-border">
              <CardHeader>
                <CardTitle className="text-malazan-gold">{currentMapData.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  ref={mapRef} 
                  className="w-full h-[600px] rounded-b-lg overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
                />
              </CardContent>
            </Card>

            {/* Location info */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {currentMapData.locations.map((location, index) => (
                <Card key={index} className="bg-malazan-darker/30 border-malazan-border">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        location.type === 'city' ? 'bg-amber-400' : 
                        location.type === 'water' ? 'bg-blue-400' : 
                        'bg-green-400'
                      }`} />
                      <span className="text-sm font-medium text-malazan-text">{location.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-location-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .custom-tooltip {
          background: rgba(0, 0, 0, 0.8) !important;
          border: 1px solid #4a5568 !important;
          color: #e2e8f0 !important;
          border-radius: 6px !important;
          font-size: 12px !important;
        }
        
        .journey-tooltip {
          background: rgba(0, 0, 0, 0.9) !important;
          border: 1px solid #4a5568 !important;
          color: #ffd700 !important;
          border-radius: 6px !important;
          font-weight: 600 !important;
        }
        
        .leaflet-container {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default Maps;