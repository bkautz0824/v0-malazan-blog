import { MapData } from '@/lib/types'

export const maps: MapData[] = [
  {
    id: 'genabackis',
    name: 'Genabackis',
    book: 'GOTM',
    bounds: [[0, 0], [1000, 1000]],
    imageUrl: '/fantasy-map-of-genabackis-continent-with-mountains.jpg',
    locations: [
      {
        name: 'Pale',
        coordinates: [250, 350],
        description: 'Site of the Siege of Pale where Tayschrenn and the High Mages destroyed the city. Moon\'s Spawn first appeared here.',
        type: 'city'
      },
      {
        name: 'Darujhistan',
        coordinates: [550, 600],
        description: 'The Blue City, last free city of Genabackis. Home to the T\'orrud Cabal and site of the Bridgeburners\' covert operation.',
        type: 'city'
      },
      {
        name: 'Black Coral',
        coordinates: [200, 750],
        description: 'City where Moon\'s Spawn eventually settles, becoming the Tiste Andii homeland under Anomander Rake.',
        type: 'city'
      },
      {
        name: 'Mott Wood',
        coordinates: [400, 500],
        description: 'Forest where the Bridgeburners clashed with Tiste Andii and regrouped.',
        type: 'landmark'
      },
      {
        name: 'Rhivi Plains',
        coordinates: [450, 650],
        description: 'Vast plains home to the nomadic Rhivi people, crossed by the Bridgeburners.',
        type: 'landmark'
      }
    ],
    journeys: [
      {
        group: 'Bridgeburners',
        path: [[250, 350], [320, 420], [400, 500], [450, 580], [500, 620], [550, 600]],
        color: '#d4af37',
        description: 'Journey from the devastation of Pale through Mott Wood and across the Rhivi Plains to Darujhistan'
      },
      {
        group: 'Moon\'s Spawn',
        path: [[250, 350], [300, 500], [250, 650], [200, 750]],
        color: '#4a148c',
        description: 'The floating fortress\'s path from Pale to its final resting place at Black Coral'
      }
    ]
  },
  {
    id: 'seven-cities',
    name: 'Seven Cities',
    book: 'DG',
    bounds: [[0, 0], [1000, 1000]],
    imageUrl: '/fantasy-desert-map-seven-cities-with-oases.jpg',
    locations: [
      {
        name: 'Hissar',
        coordinates: [200, 200],
        description: 'Starting point of the legendary Chain of Dogs. Site of the Wickan uprising and Coltaine\'s command.',
        type: 'city'
      },
      {
        name: 'Sialk',
        coordinates: [300, 350],
        description: 'First major engagement where Coltaine\'s tactics began to show.',
        type: 'battlefield'
      },
      {
        name: 'Vathar Crossing',
        coordinates: [450, 500],
        description: 'Devastating battle at the river crossing. Heavy casualties on both sides.',
        type: 'battlefield'
      },
      {
        name: 'Sanimon',
        coordinates: [550, 600],
        description: 'Waystation where refugees swelled the column\'s numbers.',
        type: 'city'
      },
      {
        name: 'Aren',
        coordinates: [750, 750],
        description: 'Final destination and site of Coltaine\'s last stand. The refugees made it, but the Chain was broken.',
        type: 'fortress'
      },
      {
        name: 'Raraku',
        coordinates: [600, 350],
        description: 'The Holy Desert, seat of the Whirlwind goddess Sha\'ik. A place of ancient power.',
        type: 'landmark'
      },
      {
        name: 'Ehrlitan',
        coordinates: [400, 250],
        description: 'Major port city, site of Felisin\'s arrival and transformation.',
        type: 'city'
      }
    ],
    journeys: [
      {
        group: 'Chain of Dogs',
        path: [
          [200, 200], [250, 270], [300, 350], [350, 420], [400, 470], 
          [450, 500], [500, 550], [550, 600], [620, 660], [690, 710], [750, 750]
        ],
        color: '#8b4513',
        description: 'The legendary 1,200-mile Chain of Dogs march protecting 50,000 refugees across hostile territory'
      },
      {
        group: 'Felisin\'s Journey',
        path: [[400, 250], [480, 300], [550, 340], [600, 350]],
        color: '#dc143c',
        description: 'From slave to Sha\'ik Reborn, Felisin\'s path to Raraku'
      }
    ]
  },
  {
    id: 'genabackis-moi',
    name: 'Genabackis - Northern Campaign',
    book: 'MOI',
    bounds: [[0, 0], [1000, 1000]],
    imageUrl: '/fantasy-map-genabackis-northern-regions-with-fortr.jpg',
    locations: [
      {
        name: 'Capustan',
        coordinates: [400, 500],
        description: 'Holy city of the Mask Council, besieged by the Pannion Domin. Site of devastating urban warfare.',
        type: 'city'
      },
      {
        name: 'Coral',
        coordinates: [700, 300],
        description: 'Capital of the Pannion Domin and the Seer\'s seat of power. Final confrontation with the Crippled God\'s influence.',
        type: 'city'
      },
      {
        name: 'Maurik',
        coordinates: [250, 600],
        description: 'City along the route, site of early battles with the Pannion.',
        type: 'city'
      },
      {
        name: 'Setta',
        coordinates: [550, 450],
        description: 'Pannion stronghold between Capustan and Coral.',
        type: 'fortress'
      },
      {
        name: 'Outlook',
        coordinates: [300, 400],
        description: 'Forward base where Onearm\'s Host gathered intelligence.',
        type: 'fortress'
      }
    ],
    journeys: [
      {
        group: 'Bridgeburners & Onearm\'s Host',
        path: [[250, 600], [300, 550], [350, 520], [400, 500], [480, 470], [550, 450], [620, 400], [680, 350], [700, 300]],
        color: '#d4af37',
        description: 'Campaign against the Pannion Domin, from Maurik through the siege of Capustan to the final assault on Coral'
      },
      {
        group: 'T\'lan Imass',
        path: [[300, 400], [400, 500], [550, 450], [700, 300]],
        color: '#808080',
        description: 'The undead T\'lan Imass armies march to face the Pannion threat'
      },
      {
        group: 'Tiste Andii',
        path: [[200, 750], [300, 650], [400, 500], [600, 350], [700, 300]],
        color: '#4a148c',
        description: 'Anomander Rake and the Tiste Andii join the battle, bringing Moon\'s Spawn to bear'
      }
    ]
  },
  {
    id: 'raraku-hoc',
    name: 'Raraku - The Apocalypse',
    book: 'HOC',
    bounds: [[0, 0], [1000, 1000]],
    imageUrl: '/fantasy-desert-holy-desert-raraku-with-ancient-rui.jpg',
    locations: [
      {
        name: 'Raraku (Sea)',
        coordinates: [500, 500],
        description: 'The Holy Desert transformed into an inland sea after Sha\'ik\'s death. Ancient powers unleashed.',
        type: 'landmark'
      },
      {
        name: 'Y\'Ghatan',
        coordinates: [700, 350],
        description: 'The First City, site of Leoman\'s trap. Burned to ashes with the Bonehunters inside.',
        type: 'city'
      },
      {
        name: 'Aren',
        coordinates: [300, 200],
        description: 'Tavore\'s starting point. Site of the Bonehunters\' formation from the remnants of multiple armies.',
        type: 'fortress'
      },
      {
        name: 'Lothal',
        coordinates: [450, 350],
        description: 'Ancient city ruins near Raraku, site of ghostly encounters.',
        type: 'landmark'
      },
      {
        name: 'Ubaryd',
        coordinates: [600, 500],
        description: 'Oasis city where the Bonehunters resupplied before Y\'Ghatan.',
        type: 'city'
      }
    ],
    journeys: [
      {
        group: 'Bonehunters',
        path: [[300, 200], [380, 300], [450, 380], [500, 450], [550, 480], [600, 500], [650, 450], [680, 400], [700, 350]],
        color: '#8b4513',
        description: 'The Bonehunters\' hunt for Leoman across the transformed desert, ending in the fires of Y\'Ghatan'
      },
      {
        group: 'Leoman\'s Retreat',
        path: [[500, 500], [550, 480], [600, 470], [650, 420], [700, 350]],
        color: '#ff4500',
        description: 'Leoman of the Flails draws the Bonehunters into his devastating trap'
      }
    ]
  },
  {
    id: 'lether-mt',
    name: 'Letherii Empire',
    book: 'MT',
    bounds: [[0, 0], [1000, 1000]],
    imageUrl: '/fantasy-map-of-coastal-empire-with-cities-rivers-a.jpg',
    locations: [
      {
        name: 'Letheras',
        coordinates: [500, 500],
        description: 'Capital of the Letherii Empire, jewel of civilization. Site of the Eternal Domicile and center of economic power. Where Rhulad claims his throne and Brys falls.',
        type: 'city'
      },
      {
        name: 'Trate',
        coordinates: [350, 300],
        description: 'Coastal city, first major battle between Letherii and Tiste Edur. The empire\'s northern defense crumbles here as the Edur unleash devastating sorcery.',
        type: 'city'
      },
      {
        name: 'Fort Shake',
        coordinates: [300, 200],
        description: 'Northernmost fortress of Lether, falls quickly to the Edur invasion. Named after the Shake, ancient people who once dwelt here.',
        type: 'fortress'
      },
      {
        name: 'Brans Keep',
        coordinates: [450, 350],
        description: 'Strategic keep along the invasion route. Site of desperate Letherii resistance.',
        type: 'fortress'
      },
      {
        name: 'High Fort',
        coordinates: [550, 400],
        description: 'Major defensive position breached by Edur forces. Its fall opened the path to Letheras.',
        type: 'fortress'
      },
      {
        name: 'Hiroth Lands',
        coordinates: [250, 150],
        description: 'Homeland of the Hiroth tribe of Tiste Edur, including the Sengar family. Where Rhulad found the cursed sword.',
        type: 'landmark'
      },
      {
        name: 'Calach Breeding Grounds',
        coordinates: [200, 250],
        description: 'Ancient site where Tiste Edur once bred their seal companions before the shadows were lost.',
        type: 'landmark'
      },
      {
        name: 'Katter River',
        coordinates: [400, 450],
        description: 'Major river and trade route. Naval battles fought here between Letherii fleets and Edur raiders.',
        type: 'landmark'
      }
    ],
    journeys: [
      {
        group: 'Tiste Edur Invasion',
        path: [
          [250, 150], [270, 180], [300, 200], [330, 250], [350, 300], 
          [380, 330], [420, 360], [450, 380], [480, 420], [500, 460], [500, 500]
        ],
        color: '#64748b',
        description: 'The Tiste Edur march south from their homeland, overwhelming Letherii defenses through Fort Shake, Trate, and multiple keeps, culminating in the conquest of Letheras'
      },
      {
        group: 'Letherii Defense',
        path: [[300, 200], [350, 300], [450, 350], [550, 400], [500, 500]],
        color: '#dc2626',
        description: 'Failed defensive line as Letherii armies attempt to stem the Edur tide, each position falling in succession'
      },
      {
        group: 'Trull\'s Journey',
        path: [[250, 150], [280, 200], [320, 280], [370, 320], [430, 380], [480, 440], [500, 500]],
        color: '#06b6d4',
        description: 'Trull Sengar\'s path from honored warrior to Shorn and exiled, witnessing his people\'s transformation and his brother\'s corruption'
      },
      {
        group: 'Tehol\'s Network',
        path: [[480, 480], [490, 490], [495, 495], [500, 500], [505, 505], [510, 510], [520, 520]],
        color: '#eab308',
        description: 'Tehol and Bugg\'s subtle movements through Letheras, orchestrating economic collapse from the shadows'
      }
    ]
  }
]
