export interface Character {
  name: string;
  description?: string;
  importance: 'major' | 'important' | 'notable' | 'minor';
  type: 'human' | 'ascendant' | 'tlan_imass' | 'tiste_andii' | 'tiste_edur' | 'tiste_liosan' | 'jaghut' | 'divers' | 'soletaken' | 'seguleh' | 'other';
  aliases?: string[];
  relationships?: string[];
  status?: 'alive' | 'dead' | 'transformed' | 'missing' | 'ascended' | 'unknown';
  currentLocation?: string;
  imageUrl?: string;
  factionSymbol?: string;
}

export interface Group {
  id: string;
  name: string;
  type: 'military' | 'ascendant' | 'noble' | 'cult' | 'clan' | 'partnership' | 'company' | 'other';
  description: string;
  characters: Character[];
  allegiance?: string;
  status: 'active' | 'disbanded' | 'destroyed' | 'reformed' | 'retaken' | 'unknown';
  location?: string;
  timeline?: TimelineEvent[];
  symbol?: string;
}

export interface TimelineEvent {
  chapter?: string;
  event: string;
  location?: string;
  charactersInvolved?: string[];
  outcome?: string;
}

export interface Book {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  groups: Group[];
}

export const malazanData: Book[] = [
  {
    id: 'gotm',
    title: 'Gardens of the Moon',
    shortTitle: 'GotM',
    description: 'The empire conquers, but at what cost? The siege of Darujhistan begins.',
    groups: [
      {
        id: 'bridgeburners',
        name: 'Bridgeburners',
        type: 'military',
        description: 'Elite Malazan military unit, veterans of countless campaigns. Nearly wiped out at the Siege of Pale by High Mage Tayschrenn.',
        allegiance: 'Malazan Empire (formerly)',
        status: 'disbanded',
        location: 'Darujhistan',
        characters: [
          {
            name: 'Sergeant Whiskeyjack',
            description: 'Grizzled veteran sergeant, natural leader and tactical genius',
            importance: 'major',
            type: 'human',
            relationships: ['Leads the Bridgeburners', 'Trusted by Dujek Onearm']
          },
          {
            name: 'Sorry/Apsalar',
            description: 'Young woman possessed by Cotillion, deadly assassin',
            importance: 'major',
            type: 'human',
            aliases: ['Sorry', 'Apsalar'],
            relationships: ['Possessed by Cotillion', 'Travels with Bridgeburners']
          },
          {
            name: 'Quick Ben',
            description: 'Squad mage with access to multiple warrens, mysterious past',
            importance: 'major',
            type: 'human',
            relationships: ['Bridgeburners mage', 'Close friend of Kalam']
          },
          {
            name: 'Kalam Mekhar',
            description: 'Former assassin from Seven Cities, dual long knives fighter',
            importance: 'major',
            type: 'human',
            relationships: ['Former Claw assassin', 'Close friend of Quick Ben']
          },
          {
            name: 'Fiddler',
            description: 'Sapper specializing in explosives and sabotage',
            importance: 'important',
            type: 'human',
            relationships: ['Bridgeburners sapper', 'Partnership with Hedge']
          },
          {
            name: 'Hedge',
            description: 'Sapper and demolitions expert, Fiddler\'s partner',
            importance: 'important',
            type: 'human',
            relationships: ['Bridgeburners sapper', 'Partnership with Fiddler']
          },
          {
            name: 'Mallet',
            description: 'Squad healer with knowledge of field medicine',
            importance: 'notable',
            type: 'human'
          },
          {
            name: 'Trotts',
            description: 'Barghast warrior, tribal background',
            importance: 'notable',
            type: 'human'
          }
        ]
      },
      {
        id: 'malazan_empire',
        name: 'Malazan Empire',
        type: 'military',
        description: 'Vast expansionist empire led by Empress Laseen after the assassination of Emperor Kellanved.',
        allegiance: 'Malazan Empire',
        status: 'active',
        characters: [
          {
            name: 'Empress Laseen',
            description: 'Current ruler of the Malazan Empire, former bodyguard to Kellanved',
            importance: 'major',
            type: 'human',
            relationships: ['Murdered Kellanved and Dancer', 'Rules the Empire']
          },
          {
            name: 'High Fist Dujek Onearm',
            description: 'One-armed veteran commander, leads the Genabackan campaign',
            importance: 'major',
            type: 'human',
            relationships: ['Commands Genabackan forces', 'Respects the Bridgeburners']
          },
          {
            name: 'Captain Ganoes Paran',
            description: 'Young noble-born officer assigned to the Bridgeburners',
            importance: 'major',
            type: 'human',
            relationships: ['Bridgeburners officer', 'Brother to Tavore and Felisin']
          },
          {
            name: 'Adjunct Lorn',
            description: 'The Empress\'s personal representative, wields an Otataral sword',
            importance: 'important',
            type: 'human',
            relationships: ['Serves Empress Laseen directly', 'Commands Tool']
          },
          {
            name: 'Tool',
            description: 'T\'lan Imass undead warrior bound to serve the Adjunct',
            importance: 'important',
            type: 'tlan_imass',
            relationships: ['Serves Adjunct Lorn', 'Ancient undead warrior']
          }
        ]
      },
      {
        id: 'house_shadow',
        name: 'House of Shadow',
        type: 'ascendant',
        description: 'Mysterious ascendant house led by Shadowthrone and Cotillion, formerly Kellanved and Dancer.',
        allegiance: 'Independent',
        status: 'active',
        location: 'Shadow Realm',
        characters: [
          {
            name: 'Shadowthrone',
            description: 'Ascendant ruler of Shadow, formerly Emperor Kellanved',
            importance: 'major',
            type: 'ascendant',
            aliases: ['Kellanved'],
            relationships: ['Rules House of Shadow', 'Former Malazan Emperor']
          },
          {
            name: 'Cotillion',
            description: 'The Rope, patron of assassins, formerly Dancer',
            importance: 'major',
            type: 'ascendant',
            aliases: ['The Rope', 'Dancer'],
            relationships: ['Patron of assassins', 'Partner to Shadowthrone']
          },
          {
            name: 'Ammanas',
            description: 'Servant of Shadowthrone, helps coordinate plans',
            importance: 'notable',
            type: 'other'
          }
        ]
      },
      {
        id: 'tiste_andii',
        name: 'Tiste Andii',
        type: 'ascendant',
        description: 'Ancient race of long-lived beings led by Anomander Rake, lords of Moon\'s Spawn.',
        allegiance: 'Independent',
        status: 'active',
        location: 'Moon\'s Spawn',
        characters: [
          {
            name: 'Anomander Rake',
            description: 'Lord of Moon\'s Spawn, ancient Tiste Andii, wields Dragnipur',
            importance: 'major',
            type: 'tiste_andii',
            relationships: ['Commands Moon\'s Spawn', 'Wields the sword Dragnipur']
          },
          {
            name: 'Serrat',
            description: 'Tiste Andii warrior serving under Anomander Rake',
            importance: 'notable',
            type: 'tiste_andii'
          },
          {
            name: 'Horult',
            description: 'Tiste Andii serving in Moon\'s Spawn',
            importance: 'minor',
            type: 'tiste_andii'
          },
          {
            name: 'Orfantal',
            description: 'Young Tiste Andii in Moon\'s Spawn',
            importance: 'minor',
            type: 'tiste_andii'
          }
        ]
      },
      {
        id: 'darujhistan_council',
        name: 'Darujhistan Council',
        type: 'noble',
        description: 'The ruling council of the Free City of Darujhistan, comprised of wealthy noble houses.',
        allegiance: 'Darujhistan',
        status: 'active',
        location: 'Darujhistan',
        characters: [
          {
            name: 'Turban Orr',
            description: 'Powerful council member with political ambitions',
            importance: 'important',
            type: 'human'
          },
          {
            name: 'Estraysian D\'Arle',
            description: 'Noble council member, father to Challice',
            importance: 'notable',
            type: 'human'
          },
          {
            name: 'Challice D\'Arle',
            description: 'Young noblewoman, daughter of Estraysian',
            importance: 'notable',
            type: 'human'
          }
        ]
      },
      {
        id: 'phoenix_inn',
        name: 'Phoenix Inn Regulars',
        type: 'other',
        description: 'Thieves, assassins, and rogues who frequent the Phoenix Inn in Darujhistan.',
        allegiance: 'Independent',
        status: 'active',
        location: 'Darujhistan',
        characters: [
          {
            name: 'Kruppe',
            description: 'Mysterious fat man who speaks in third person, dream-walker',
            importance: 'major',
            type: 'human',
            relationships: ['Dream-walker', 'Agent of the Eel']
          },
          {
            name: 'Murillio',
            description: 'Skilled duelist and ladies\' man from noble background',
            importance: 'important',
            type: 'human'
          },
          {
            name: 'Rallick Nom',
            description: 'Professional assassin working for the Guild',
            importance: 'important',
            type: 'human',
            relationships: ['Guild assassin', 'Hunts Turban Orr']
          },
          {
            name: 'Coll',
            description: 'Former nobleman turned drunk, friend to the group',
            importance: 'notable',
            type: 'human'
          },
          {
            name: 'Irilta',
            description: 'Barmaid at the Phoenix Inn',
            importance: 'minor',
            type: 'human'
          }
        ]
      }
    ]
  },
  {
    id: 'dg',
    title: 'Deadhouse Gates',
    shortTitle: 'DG',
    description: 'The Whirlwind rises in Seven Cities as rebellion consumes the land.',
    groups: [
      {
        id: 'chain_of_dogs',
        name: 'Chain of Dogs',
        type: 'military',
        description: 'The legendary fighting retreat led by Fist Coltaine across the continent of Seven Cities.',
        allegiance: 'Malazan Empire',
        status: 'destroyed',
        location: 'Seven Cities',
        characters: [
          {
            name: 'Coltaine',
            description: 'Wickan Fist leading the Chain of Dogs, tactical genius',
            importance: 'major',
            type: 'human',
            relationships: ['Wickan war leader', 'Commands 7th Army remnants']
          },
          {
            name: 'Duiker',
            description: 'Imperial Historian witnessing and recording the Chain of Dogs',
            importance: 'major',
            type: 'human',
            relationships: ['Records the Chain of Dogs', 'Witnesses Coltaine\'s campaign']
          },
          {
            name: 'Captain Lull',
            description: 'Veteran Malazan captain, one of Coltaine\'s trusted officers',
            importance: 'important',
            type: 'human'
          },
          {
            name: 'Corporal List',
            description: 'Young but capable soldier rising through the ranks',
            importance: 'notable',
            type: 'human'
          },
          {
            name: 'Nether',
            description: 'Wickan warlock, one of Coltaine\'s siblings',
            importance: 'important',
            type: 'human',
            relationships: ['Wickan warlock', 'Sibling to Coltaine']
          },
          {
            name: 'Nil',
            description: 'Wickan warlock, brother to Nether',
            importance: 'important',
            type: 'human',
            relationships: ['Wickan warlock', 'Brother to Nether']
          }
        ]
      },
      {
        id: 'whirlwind_rebellion',
        name: 'Whirlwind Rebellion',
        type: 'cult',
        description: 'Apocalyptic rebellion sweeping Seven Cities, led by the prophesied Sha\'ik.',
        allegiance: 'Seven Cities',
        status: 'active',
        location: 'Seven Cities',
        characters: [
          {
            name: 'Sha\'ik',
            description: 'Prophesied leader of the Whirlwind, chosen by Dryjhna',
            importance: 'major',
            type: 'human',
            aliases: ['Felisin Paran'],
            relationships: ['Chosen of Dryjhna', 'Sister to Ganoes and Tavore']
          },
          {
            name: 'Leoman of the Flails',
            description: 'Desert warrior and one of Sha\'ik\'s most loyal followers',
            importance: 'important',
            type: 'human',
            relationships: ['Sha\'ik\'s captain', 'Desert tribal leader']
          },
          {
            name: 'Toblakai',
            description: 'Massive warrior from the far north, serves Sha\'ik',
            importance: 'important',
            type: 'human',
            aliases: ['Karsa Orlong'],
            relationships: ['Sha\'ik\'s bodyguard', 'Teblor warrior']
          },
          {
            name: 'Heboric Light Touch',
            description: 'Former priest of Fener, touched by the jade hands of an Elder God',
            importance: 'important',
            type: 'human',
            relationships: ['Former thief', 'Priest of Fener', 'Jade-touched']
          }
        ]
      },
      {
        id: 'wickan_clans',
        name: 'Wickan Clans',
        type: 'clan',
        description: 'Horse nomads from the Wickan Plains, now serving the Malazan Empire.',
        allegiance: 'Malazan Empire',
        status: 'active',
        location: 'Seven Cities',
        characters: [
          {
            name: 'Bult',
            description: 'Veteran Wickan commander, Coltaine\'s trusted lieutenant',
            importance: 'important',
            type: 'human'
          },
          {
            name: 'Temul',
            description: 'Young Wickan officer learning the ways of war',
            importance: 'notable',
            type: 'human'
          }
        ]
      },
      {
        id: 'malazan_7th',
        name: 'Malazan 7th Army',
        type: 'military',
        description: 'Malazan forces stationed in Seven Cities when the Whirlwind rebellion began.',
        allegiance: 'Malazan Empire',
        status: 'destroyed',
        location: 'Seven Cities',
        characters: [
          {
            name: 'High Fist Pormqual',
            description: 'Incompetent commander whose failures doom thousands',
            importance: 'important',
            type: 'human',
            relationships: ['Commands 7th Army', 'Political appointment']
          },
          {
            name: 'Captain Keneb',
            description: 'Capable officer trying to save his men despite poor leadership',
            importance: 'notable',
            type: 'human'
          }
        ]
      },
      {
        id: 'icarium_mappo',
        name: 'Icarium & Mappo',
        type: 'partnership',
        description: 'The Jhag warrior Icarium and his D\'ivers guardian Mappo, traveling through Seven Cities seeking answers.',
        allegiance: 'Independent',
        status: 'active',
        location: 'Seven Cities',
        symbol: '🗡️🐺',
        characters: [
          {
            name: 'Icarium',
            description: 'Ancient Jhag warrior with lost memories and terrible hidden power',
            importance: 'major',
            type: 'jaghut',
            status: 'alive',
            currentLocation: 'Seven Cities',
            relationships: ['Protected by Mappo', 'Possesses devastating but forgotten power', 'Creator of mechanisms']
          },
          {
            name: 'Mappo Runt',
            description: 'Trell D\'ivers bound to protect/watch Icarium, prevents his awakening',
            importance: 'major',
            type: 'divers',
            status: 'alive',
            currentLocation: 'With Icarium',
            relationships: ['Guardian of Icarium', 'Trell D\'ivers', 'Keeps Icarium\'s memories suppressed']
          }
        ]
      },
      {
        id: 'soletaken_divers',
        name: 'Soletaken & D\'ivers',
        type: 'other',
        description: 'Ancient shapeshifters converging in Seven Cities, drawn by Icarium\'s presence and the Whirlwind.',
        allegiance: 'Independent',
        status: 'active',
        location: 'Seven Cities',
        symbol: '🐺🐻',
        characters: [
          {
            name: 'Ryllandaras',
            description: 'Ancient Soletaken taking the form of a massive wolf, hunting Icarium',
            importance: 'important',
            type: 'soletaken',
            status: 'alive',
            currentLocation: 'Seven Cities',
            relationships: ['Ancient Soletaken wolf', 'Hunts Icarium', 'Extremely dangerous predator']
          },
          {
            name: 'Gryllen',
            description: 'D\'ivers who takes the form of multiple bears, competes for power',
            importance: 'important',
            type: 'divers',
            status: 'alive',
            currentLocation: 'Seven Cities',
            relationships: ['D\'ivers bears', 'Seeks to claim territory', 'Rival to other shapeshifters']
          },
          {
            name: 'Messremb',
            description: 'D\'ivers manifesting as swarms of rats, ancient and cunning',
            importance: 'notable',
            type: 'divers',
            status: 'alive',
            currentLocation: 'Seven Cities',
            relationships: ['D\'ivers rats', 'Ancient shapeshifter', 'Drawn to the convergence']
          },
          {
            name: 'Mogora',
            description: 'D\'ivers taking the form of multiple spiders, weaver of webs',
            importance: 'notable',
            type: 'divers',
            status: 'alive',
            currentLocation: 'Seven Cities',
            relationships: ['D\'ivers spiders', 'Web-weaver', 'Ancient and patient']
          }
        ]
      },
      {
        id: 'pusk_shadow',
        name: 'Shadow Sorcerers',
        type: 'other',
        description: 'Followers of the Shadow cult serving Shadowthrone and Cotillion in Seven Cities.',
        allegiance: 'House of Shadow',
        status: 'active',
        location: 'Seven Cities',
        symbol: '🌑',
        characters: [
          {
            name: 'Pust',
            description: 'Eccentric High Priest of Shadow, keeper of ancient knowledge and mules',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'Shadow cult temple',
            relationships: ['High Priest of Shadow', 'Serves Shadowthrone', 'Keeper of ancient lore', 'Talks to his mule']
          }
        ]
      }
    ]
  },
  {
    id: 'moi',
    title: 'Memories of Ice',
    shortTitle: 'MoI',
    description: 'The Pannion War concludes with the fall of Coral and great sacrifices by heroes.',
    groups: [
      {
        id: 'onearms_host',
        name: 'Onearm\'s Host',
        type: 'military',
        description: 'Dujek\'s combined forces, now outlawed from the Empire and operating independently.',
        allegiance: 'Independent (formerly Malazan)',
        status: 'active',
        location: 'Genabackis',
        characters: [
          {
            name: 'Dujek Onearm',
            description: 'High Fist leading the outlawed Malazan forces',
            importance: 'major',
            type: 'human',
            relationships: ['Commands Onearm\'s Host', 'Outlawed by Laseen']
          },
          {
            name: 'Whiskeyjack',
            description: 'Now a Lieutenant, leads the reformed Bridgeburners',
            importance: 'major',
            type: 'human',
            relationships: ['Commands Bridgeburners', 'Reports to Dujek']
          },
          {
            name: 'Quick Ben',
            description: 'High Mage of Onearm\'s Host, master of multiple warrens',
            importance: 'major',
            type: 'human'
          },
          {
            name: 'Kalam',
            description: 'Assassin and scout for Onearm\'s Host',
            importance: 'major',
            type: 'human'
          },
          {
            name: 'Picker',
            description: 'Corporal in the Bridgeburners, tough veteran',
            importance: 'important',
            type: 'human'
          },
          {
            name: 'Antsy',
            description: 'Bridgeburner sergeant with a short temper',
            importance: 'notable',
            type: 'human'
          },
          {
            name: 'Detoran',
            description: 'Bridgeburner sapper, demolitions expert',
            importance: 'notable',
            type: 'human'
          }
        ]
      },
      {
        id: 'grey_swords',
        name: 'Grey Swords',
        type: 'military',
        description: 'Mercenary company defending Capustan, devoted to Fener and Togg. Reformed after Itkovian\'s sacrifice.',
        allegiance: 'Capustan',
        status: 'reformed',
        location: 'Capustan (Retaken)',
        symbol: '⚒️',
        timeline: [
          {
            event: 'Capustan Siege',
            location: 'Capustan',
            charactersInvolved: ['Itkovian', 'Brukhalian'],
            outcome: 'City defended but devastated'
          },
          {
            event: 'Itkovian\'s Sacrifice',
            location: 'Capustan',
            charactersInvolved: ['Itkovian'],
            outcome: 'Gathers pain of the world, dies peacefully'
          },
          {
            event: 'Company Reformation',
            location: 'Post-Pannion territories',
            outcome: 'Reformed with Tenescowri survivors'
          }
        ],
        characters: [
          {
            name: 'Shield Anvil Itkovian',
            description: 'Compassionate leader who sacrificed himself gathering the pain of the world',
            importance: 'major',
            type: 'human',
            status: 'dead',
            currentLocation: 'Capustan (Died)',
            relationships: ['Commands Grey Swords', 'Chosen of Fener', 'Gathered pain of Pannion victims']
          },
          {
            name: 'Mortal Sword Brukhalian',
            description: 'Warrior-priest who fought valiantly in Capustan\'s defense',
            importance: 'important',
            type: 'human',
            status: 'alive',
            relationships: ['Fought alongside Itkovian', 'Priest of Fener']
          },
          {
            name: 'Karnadas',
            description: 'Destriant (high priest) of the Grey Swords, spiritual advisor',
            importance: 'notable',
            type: 'human',
            status: 'alive',
            relationships: ['Spiritual leader of Grey Swords', 'Advisor to Itkovian']
          }
        ]
      },
      {
        id: 'lady_envy_company',
        name: 'Lady Envy\'s Company',
        type: 'company',
        description: 'Tiste Andii Lady Envy and her assembled company including Tool and the Seguleh.',
        allegiance: 'Independent',
        status: 'active',
        location: 'Pannion territories',
        symbol: '🌙⚔️',
        characters: [
          {
            name: 'Lady Envy',
            description: 'Powerful Tiste Andii sorceress with her own agenda and manipulative nature',
            importance: 'major',
            type: 'tiste_andii',
            status: 'alive',
            currentLocation: 'Leading her company',
            relationships: ['Sister to Anomander Rake', 'Manipulates events for her purposes', 'Commands diverse followers']
          },
          {
            name: 'Tool (Onos T\'oolan)',
            description: 'First Sword of the T\'lan Imass, beginning his journey toward mortality',
            importance: 'major',
            type: 'tlan_imass',
            status: 'transformed',
            currentLocation: 'With Lady Envy',
            relationships: ['First Sword T\'lan Imass', 'Serving Lady Envy', 'Moving toward mortality']
          },
          {
            name: 'Mok',
            description: 'Moranth warrior accompanying Lady Envy\'s company',
            importance: 'notable',
            type: 'other',
            status: 'alive'
          },
          {
            name: 'Senu',
            description: 'Seguleh warrior, one of the numbered elite fighters',
            importance: 'notable',
            type: 'seguleh',
            status: 'alive',
            relationships: ['Seguleh numbered warrior', 'Expert swordsman']
          },
          {
            name: 'Thurule',
            description: 'Another Seguleh warrior traveling with the company',
            importance: 'notable',
            type: 'seguleh',
            status: 'alive',
            relationships: ['Seguleh numbered warrior', 'Companion to Senu']
          }
        ]
      },
      {
        id: 'pannion_domin',
        name: 'The Pannion Domin',
        type: 'cult',
        description: 'Genocidal theocracy led by the Pannion Seer, conquering Genabackis with undead armies and cannibalism.',
        allegiance: 'Pannion Seer',
        status: 'destroyed',
        location: 'Genabackis (Coral)',
        symbol: '☠️',
        timeline: [
          {
            event: 'Siege of Capustan',
            location: 'Capustan',
            charactersInvolved: ['Pannion Seer', 'Anaster', 'Tenescowri'],
            outcome: 'City devastated but not fully conquered'
          },
          {
            event: 'Battle of Coral',
            location: 'Coral',
            charactersInvolved: ['Pannion Seer', 'Onearm\'s Host', 'Anomander Rake'],
            outcome: 'Pannion Domin utterly destroyed'
          }
        ],
        characters: [
          {
            name: 'The Pannion Seer',
            description: 'Deranged leader of the Pannion Domin, servant of the Crippled God',
            importance: 'major',
            type: 'human',
            status: 'dead',
            currentLocation: 'Coral (Died)',
            relationships: ['Servant of Crippled God', 'Commands Pannion armies', 'Brother to Anaster']
          },
          {
            name: 'Anaster',
            description: 'First Child of the Dead Seed, possessed by Toc the Younger\'s soul',
            importance: 'major',
            type: 'human',
            status: 'transformed',
            currentLocation: 'Pannion territories',
            relationships: ['Brother to Pannion Seer', 'Possessed by Toc\'s soul', 'Leads Tenescowri']
          },
          {
            name: 'Septarch Kulpath',
            description: 'High-ranking Pannion military commander',
            importance: 'important',
            type: 'human',
            status: 'dead',
            relationships: ['Pannion military leader', 'Commands legions']
          }
        ]
      },
      {
        id: 'kruppe_darujhistan_moi',
        name: 'Kruppe & K\'rul\'s Bar',
        type: 'other',
        description: 'The rotund manipulator Kruppe orchestrates events from Darujhistan, aided by ancient gods.',
        allegiance: 'Elder Gods',
        status: 'active',
        location: 'Darujhistan',
        symbol: '🍷',
        characters: [
          {
            name: 'Kruppe',
            description: 'Self-proclaimed genius and agent of the Elder Gods, speaks in third person',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'Darujhistan',
            relationships: ['Agent of Elder Gods', 'Master manipulator', 'Friend to many']
          },
          {
            name: 'K\'rul',
            description: 'Elder God of the Warrens, works through Kruppe',
            importance: 'major',
            type: 'ascendant',
            status: 'alive',
            currentLocation: 'K\'rul\'s Bar',
            relationships: ['Elder God', 'Created the Warrens', 'Guides Kruppe']
          },
          {
            name: 'Murillio',
            description: 'Darujhistan dandy and friend of Kruppe',
            importance: 'notable',
            type: 'human',
            status: 'alive',
            currentLocation: 'Darujhistan'
          },
          {
            name: 'Coll',
            description: 'Former nobleman, now owner of K\'rul\'s Bar',
            importance: 'notable',
            type: 'human',
            status: 'alive',
            currentLocation: 'Darujhistan'
          }
        ]
      },
      {
        id: 'capustan_defenders',
        name: 'Defenders of Capustan',
        type: 'military',
        description: 'Prince Jelarkan and the citizen defenders of the holy city under siege.',
        allegiance: 'Capustan',
        status: 'active',
        location: 'Capustan (Retaken)',
        symbol: '🛡️',
        characters: [
          {
            name: 'Prince Jelarkan',
            description: 'Noble ruler of Capustan who led the desperate defense of his city',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'Capustan',
            relationships: ['Rules Capustan', 'Coordinated defense', 'Allied with Grey Swords']
          },
          {
            name: 'Rath\'Hood',
            description: 'Mercenary captain defending Capustan',
            importance: 'notable',
            type: 'human',
            status: 'unknown',
            currentLocation: 'Capustan'
          }
        ]
      },
      {
        id: 'mhybe_silverfox',
        name: 'The Mhybe & Silverfox',
        type: 'partnership',
        description: 'The aging Rhivi woman and the reborn Bonecaster, connected by ancient powers.',
        allegiance: 'T\'lan Imass/T\'lan Ay',
        status: 'active',
        location: 'With T\'lan Imass forces',
        symbol: '💀🌟',
        timeline: [
          {
            event: 'Silverfox\'s Awakening',
            location: 'Genabackis',
            charactersInvolved: ['Silverfox', 'The Mhybe'],
            outcome: 'Bonecaster reborn, Mhybe begins aging'
          },
          {
            event: 'Second Gathering',
            location: 'Genabackis',
            charactersInvolved: ['Silverfox', 'T\'lan Imass'],
            outcome: 'T\'lan Imass and T\'lan Ay awakened'
          }
        ],
        characters: [
          {
            name: 'The Mhybe',
            description: 'Rhivi woman rapidly aging due to her mystical connection to Silverfox',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'With T\'lan Imass',
            relationships: ['Mystically connected to Silverfox', 'Rhivi elder', 'Aging due to Bonecaster\'s rebirth']
          },
          {
            name: 'Silverfox',
            description: 'Reborn Bonecaster commanding both T\'lan Imass and T\'lan Ay',
            importance: 'major',
            type: 'ascendant',
            status: 'alive',
            currentLocation: 'Leading undead armies',
            relationships: ['Commands T\'lan Imass and T\'lan Ay', 'Reborn Bonecaster', 'Connected to the Mhybe']
          }
        ]
      },
      {
        id: 'toc_transformation',
        name: 'Toc the Younger/One Eye',
        type: 'other',
        description: 'Scout\'s transformation through torture and eventual ascension as Mortal Sword.',
        allegiance: 'Togg and Fanderay (eventually)',
        status: 'active',
        location: 'Pannion territories',
        symbol: '👁️⚔️',
        timeline: [
          {
            event: 'Capture and Torture',
            location: 'Pannion Domin',
            charactersInvolved: ['Toc the Younger', 'Pannion Seer'],
            outcome: 'Tortured, loses eye'
          },
          {
            event: 'Soul Transfer',
            location: 'Anaster\'s body',
            charactersInvolved: ['Toc', 'Anaster'],
            outcome: 'Soul placed in Anaster\'s body'
          },
          {
            event: 'Becomes Mortal Sword',
            location: 'Pannion territories',
            charactersInvolved: ['Toc', 'Togg', 'Fanderay'],
            outcome: 'Ascends as Mortal Sword of Togg and Fanderay'
          }
        ],
        characters: [
          {
            name: 'Toc the Younger/Toc the One Eye',
            description: 'Former Malazan scout transformed through torture into Mortal Sword of Togg and Fanderay',
            importance: 'major',
            type: 'human',
            status: 'transformed',
            currentLocation: 'Anaster\'s body',
            aliases: ['Toc the Younger', 'Toc the One Eye', 'Anaster'],
            relationships: ['Former Malazan scout', 'Tortured by Pannion Seer', 'Soul in Anaster\'s body', 'Mortal Sword of Togg and Fanderay']
          }
        ]
      },
      {
        id: 'gruntle_transformation',
        name: 'Gruntle\'s Ascension',
        type: 'other',
        description: 'Caravan guard\'s transformation into Mortal Sword of Trake after his companions\' death.',
        allegiance: 'Trake',
        status: 'active',
        location: 'Pannion territories',
        symbol: '🐅⚔️',
        characters: [
          {
            name: 'Gruntle',
            description: 'Former caravan guard who became Mortal Sword of Trake (Tiger of Summer)',
            importance: 'important',
            type: 'human',
            status: 'ascended',
            currentLocation: 'Serving Trake',
            relationships: ['Mortal Sword of Trake', 'Former caravan guard', 'Transformed by grief and rage']
          }
        ]
      },
      {
        id: 'tiste_andii_alliance',
        name: 'Tiste Andii of Moon\'s Spawn',
        type: 'ascendant',
        description: 'Anomander Rake\'s forces, now allied with Onearm\'s Host against the Pannion Domin.',
        allegiance: 'Alliance with Onearm\'s Host',
        status: 'active',
        location: 'Genabackis',
        characters: [
          {
            name: 'Anomander Rake',
            description: 'Lord of Moon\'s Spawn, now allied against the Pannion threat',
            importance: 'major',
            type: 'tiste_andii'
          },
          {
            name: 'Korlat',
            description: 'Tiste Andii warrior and sorceress',
            importance: 'important',
            type: 'tiste_andii',
            relationships: ['Tiste Andii commander', 'Developing relationship with Whiskeyjack']
          },
          {
            name: 'Orfantal',
            description: 'Young Tiste Andii warrior',
            importance: 'notable',
            type: 'tiste_andii'
          }
        ]
      },
      {
        id: 'white_face_barghast',
        name: 'White Face Barghast',
        type: 'clan',
        description: 'Barghast clan that helped retake Capustan from Pannion forces.',
        allegiance: 'Alliance with Onearm\'s Host',
        status: 'active',
        location: 'Capustan region',
        symbol: '🏹',
        characters: [
          {
            name: 'Barghast War Leaders',
            description: 'Clan leaders who led the assault on Capustan',
            importance: 'notable',
            type: 'human',
            status: 'alive',
            relationships: ['Allied with Malazan forces', 'Retook Capustan']
          }
        ]
      },
      {
        id: 'pannion_locations',
        name: 'Pannion Strongholds',
        type: 'other',
        description: 'Major locations in the Pannion Domin campaign - Setta, Lest, Maurik, and Coral.',
        allegiance: 'Pannion Domin (formerly)',
        status: 'destroyed',
        location: 'Various Pannion territories',
        symbol: '🏰',
        timeline: [
          {
            event: 'Setta Assault',
            location: 'Setta',
            outcome: 'Pannion stronghold taken'
          },
          {
            event: 'Lest Campaign',
            location: 'Lest',
            outcome: 'Strategic location secured'
          },
          {
            event: 'Maurik Liberation',
            location: 'Maurik',
            outcome: 'City liberated but empty'
          },
          {
            event: 'Battle of Coral',
            location: 'Coral',
            outcome: 'Final major battle, Pannion Domin defeated'
          }
        ],
        characters: [
          {
            name: 'Pannion Locations Status',
            description: 'Multiple cities - liberated but largely empty after Pannion defeat',
            importance: 'notable',
            type: 'other',
            status: 'unknown',
            currentLocation: 'Genabackis',
            relationships: ['Former Pannion strongholds', 'Now empty or sparsely populated']
          }
        ]
      }
    ]
  },
  {
    id: 'hoc',
    title: 'House of Chains',
    shortTitle: 'HoC',
    description: 'Fourth book following Karsa Orlong\'s defiance, the 14th Army\'s campaign, and the fall of Sha\'ik Reborn.',
    groups: [
      {
        id: 'karsa_journey',
        name: 'Karsa Orlong & Companions',
        type: 'military',
        description: 'The Teblor warrior Karsa Orlong\'s epic journey from enslavement to legendary status. "Witness."',
        allegiance: 'Independent (Eventually joins 14th Army)',
        status: 'active',
        location: 'Seven Cities',
        symbol: '⚔️',
        timeline: [
          {
            event: 'Enslavement',
            location: 'Teblor Highlands to Seven Cities',
            outcome: 'Karsa captured and enslaved'
          },
          {
            event: 'Arena Battles',
            location: 'Various Seven Cities arenas',
            outcome: 'Karsa becomes legendary pit fighter'
          },
          {
            event: 'Liberation and Journey',
            location: 'Raraku',
            outcome: 'Karsa freed, begins quest for vengeance'
          },
          {
            event: 'Slaying the Hounds',
            location: 'Shadow Warren manifestation',
            outcome: 'Karsa kills multiple Hounds of Shadow, legendary feat'
          }
        ],
        characters: [
          {
            name: 'Karsa Orlong',
            description: 'Teblor warrior of savage nobility and defiant intelligence. Slayer of Hounds of Shadow. Rejects gods, chains, and civilization. "Witness."',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'Seven Cities',
            aliases: ['Toblakai', 'Witness'],
            relationships: ['Torvald Nom - enslaved companion', 'Taralack Veed - Gral handler', 'Samar Dev - later companion', 'Leoman - brief ally'],
            imageUrl: '',
            factionSymbol: '⚔️'
          },
          {
            name: 'Torvald Nom',
            description: 'Daru thief enslaved alongside Karsa. Becomes unexpected companion and voice of reason.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'Seven Cities',
            relationships: ['Karsa Orlong - fellow slave turned companion']
          },
          {
            name: 'Taralack Veed',
            description: 'Gral warrior assigned as Karsa\'s handler and guide. Complex motivations.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'Seven Cities',
            relationships: ['Karsa Orlong - handler', 'Icarium - eventual connection']
          },
          {
            name: 'Silgar',
            description: 'Arena slave and pit fighter who befriends Karsa.',
            importance: 'notable',
            type: 'human',
            status: 'unknown',
            currentLocation: 'Seven Cities arenas'
          }
        ]
      },
      {
        id: 'fourteenth_army',
        name: 'Adjunct Tavore\'s 14th Army',
        type: 'military',
        description: 'The newly formed 14th Army under Adjunct Tavore Paran, sister to Felisin/Sha\'ik Reborn. Marching to end the Whirlwind.',
        allegiance: 'Malazan Empire',
        status: 'active',
        location: 'Seven Cities',
        symbol: '🛡️',
        timeline: [
          {
            event: 'Army Formation',
            location: 'Malaz City',
            outcome: 'Tavore assembles the 14th from veterans and recruits'
          },
          {
            event: 'Seven Cities Campaign',
            location: 'Various Seven Cities locations',
            outcome: 'Methodical advance against Whirlwind forces'
          },
          {
            event: 'Raraku Convergence',
            location: 'Raraku (dried)',
            outcome: 'Sister faces sister - Tavore duels Sha\'ik Reborn'
          },
          {
            event: 'Y\'Ghatan Approach',
            location: 'Approaching Y\'Ghatan',
            outcome: 'Army prepares for Leoman\'s last stand (unresolved)'
          }
        ],
        characters: [
          {
            name: 'Adjunct Tavore Paran',
            description: 'Cold, methodical commander of the 14th Army. Sister to Felisin/Sha\'ik Reborn and Ganoes Paran. Kills her sister in ritual duel.',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'Seven Cities',
            aliases: ['The Adjunct'],
            relationships: ['Felisin Paran - sister (killed)', 'Ganoes Paran - brother', 'T\'amber - mysterious companion', 'Empress Laseen - superior'],
            factionSymbol: '🛡️'
          },
          {
            name: 'Fiddler',
            description: 'Bridgeburner sergeant, sapper, and recipient of the Tanno Spiritwalker vision. Crucial to the 14th Army\'s survival.',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'With 14th Army',
            aliases: ['Strings'],
            relationships: ['Gesler - fellow sergeant', 'Cuttle - squad mate', 'Bottle - squad mage', 'Tanno Spiritwalker vision'],
            factionSymbol: '💣'
          },
          {
            name: 'Gesler',
            description: 'Sergeant in the 14th, veteran with Otataral-touched blood from Fener\'s fire.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'With 14th Army',
            relationships: ['Stormy - corporal', 'Truth - adopted Wickan child']
          },
          {
            name: 'Stormy',
            description: 'Corporal in Gesler\'s squad, massive and violent, Otataral-touched like Gesler.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'With 14th Army'
          },
          {
            name: 'Captain Keneb',
            description: 'Promoted officer in the 14th, survivor of Pormqual\'s incompetence in Deadhouse Gates.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'With 14th Army',
            relationships: ['Tavore - serves under', 'Family - evacuated']
          },
          {
            name: 'T\'amber',
            description: 'Mysterious warrior woman extraordinarily close to Tavore. Exceptional fighter.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'With Tavore',
            relationships: ['Tavore - inseparable companion']
          },
          {
            name: 'Bottle',
            description: 'Young squad mage with unusual talents and animal spirit connections.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'Fiddler\'s squad'
          },
          {
            name: 'Cuttle',
            description: 'Sapper in Fiddler\'s squad, explosives expert.',
            importance: 'notable',
            type: 'human',
            status: 'alive',
            currentLocation: 'Fiddler\'s squad'
          },
          {
            name: 'Grub',
            description: 'Child with prophetic abilities, adopted by the army.',
            importance: 'notable',
            type: 'human',
            status: 'alive',
            currentLocation: 'With 14th Army',
            relationships: ['Truth - Wickan companion']
          }
        ]
      },
      {
        id: 'shaik_whirlwind_hoc',
        name: 'Sha\'ik Reborn\'s Whirlwind',
        type: 'cult',
        description: 'The Whirlwind Rebellion under Sha\'ik Reborn (Felisin Younger), facing its final confrontation.',
        allegiance: 'Whirlwind Rebellion',
        status: 'destroyed',
        location: 'Raraku and Seven Cities',
        symbol: '🌪️',
        timeline: [
          {
            event: 'Sha\'ik Reborn\'s Rule',
            location: 'Raraku',
            outcome: 'Felisin Younger struggles with role and power'
          },
          {
            event: 'Bidithal\'s Death',
            location: 'Raraku camp',
            outcome: 'Felisin murders the twisted priest'
          },
          {
            event: 'Raraku Duel',
            location: 'Dried Raraku Sea',
            outcome: 'Tavore kills Sha\'ik Reborn in ritual combat'
          },
          {
            event: 'Whirlwind Collapse',
            location: 'Seven Cities',
            outcome: 'Rebellion fragments, leaders flee or die'
          }
        ],
        characters: [
          {
            name: 'Sha\'ik Reborn (Felisin Younger)',
            description: 'Young woman chosen as new Sha\'ik after original\'s death. Killed by her own sister Tavore in ritual duel.',
            importance: 'major',
            type: 'human',
            status: 'dead',
            currentLocation: 'Raraku',
            aliases: ['Felisin Younger', 'Sha\'ik'],
            relationships: ['Tavore Paran - sister (killer)', 'Felisin Paran - namesake', 'Leoman - loyal commander', 'Bidithal - murdered by her'],
            factionSymbol: '🌪️'
          },
          {
            name: 'Leoman of the Flails',
            description: 'Desert warrior and Sha\'ik\'s most loyal commander. Escapes to lead Y\'Ghatan\'s final resistance.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'Fled to Y\'Ghatan',
            relationships: ['Sha\'ik - loyal to', 'Corabb Bhilan Thenu\'alas - follower', 'Toblakai/Karsa - former companion']
          },
          {
            name: 'Bidithal',
            description: 'Twisted, pedophilic priest of the Whirlwind. Murdered by Felisin in an act of justice.',
            importance: 'important',
            type: 'human',
            status: 'dead',
            currentLocation: 'Raraku',
            relationships: ['Sha\'ik Reborn - murdered by her']
          },
          {
            name: 'Korbolo Dom',
            description: 'Treacherous Malazan Fist who betrayed Coltaine. Executed by Kalam for his crimes.',
            importance: 'important',
            type: 'human',
            status: 'dead',
            currentLocation: 'Captured and executed',
            relationships: ['Coltaine - betrayer', 'Kalam - executed by']
          },
          {
            name: 'Kamist Reloe',
            description: 'High Mage of the Whirlwind, powerful sorcerer killed in battle.',
            importance: 'important',
            type: 'human',
            status: 'dead',
            currentLocation: 'Raraku',
            relationships: ['Sha\'ik - served']
          },
          {
            name: 'L\'oric',
            description: 'Son of Osserc (Tiste Liosan), powerful mage with his own agenda. Undergoes transformation.',
            importance: 'important',
            type: 'tiste_liosan',
            status: 'transformed',
            currentLocation: 'Raraku region',
            relationships: ['Osserc - father', 'Febryl - rival mage']
          },
          {
            name: 'Corabb Bhilan Thenu\'alas',
            description: 'Idealistic young follower of Leoman, devoted to the rebellion.',
            importance: 'notable',
            type: 'human',
            status: 'alive',
            currentLocation: 'With Leoman',
            relationships: ['Leoman - follows loyally']
          }
        ]
      },
      {
        id: 'cutter_apsalar_hoc',
        name: 'Shadow\'s Agents - Cutter & Apsalar',
        type: 'other',
        description: 'Shadowthrone and Cotillion\'s direct interventions through Cutter and Apsalar.',
        allegiance: 'House of Shadow',
        status: 'active',
        location: 'Seven Cities',
        symbol: '🌑',
        timeline: [
          {
            event: 'Shadow Missions',
            location: 'Various Seven Cities',
            outcome: 'Assassinations and manipulations for Shadow\'s agenda'
          },
          {
            event: 'Protecting Sha\'ik',
            location: 'Raraku region',
            outcome: 'Brief protection of Sha\'ik Reborn for Shadow\'s purposes'
          },
          {
            event: 'Cotillion\'s Direct Action',
            location: 'Multiple locations',
            outcome: 'Cotillion personally intervenes in events'
          }
        ],
        characters: [
          {
            name: 'Cutter (Crokus)',
            description: 'Former Darujhistan thief now training as assassin. Deeply in love with Apsalar, struggling with his role.',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'Seven Cities',
            aliases: ['Crokus'],
            relationships: ['Apsalar - loves', 'Cotillion - serves reluctantly', 'Shadowthrone - manipulated by'],
            factionSymbol: '🌑'
          },
          {
            name: 'Apsalar',
            description: 'Former vessel of Cotillion, now independent assassin with retained skills. Complicated feelings for Cutter.',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'Seven Cities',
            aliases: ['Sorry'],
            relationships: ['Cutter - loved by', 'Cotillion - former vessel', 'Shadowthrone - serves'],
            factionSymbol: '🌑'
          },
          {
            name: 'Cotillion',
            description: 'Patron of Assassins, formerly Dancer. Directly intervenes throughout the book.',
            importance: 'major',
            type: 'ascendant',
            status: 'alive',
            currentLocation: 'Shadow Realm/Seven Cities',
            aliases: ['The Rope', 'Dancer'],
            relationships: ['Shadowthrone - partner', 'Apsalar - former vessel', 'Cutter - agent']
          },
          {
            name: 'Shadowthrone',
            description: 'Ascendant ruler of Shadow, formerly Emperor Kellanved. Manipulating events across Seven Cities.',
            importance: 'major',
            type: 'ascendant',
            status: 'alive',
            currentLocation: 'Shadow Realm',
            aliases: ['Ammanas', 'Kellanved'],
            relationships: ['Cotillion - partner', 'Kalam - former soldier']
          }
        ]
      },
      {
        id: 'pearl_claw_hoc',
        name: 'The Claw Operations',
        type: 'military',
        description: 'Claw agents embedded with the 14th Army and operating independently.',
        allegiance: 'Malazan Empire',
        status: 'active',
        location: 'Seven Cities',
        symbol: '🗡️',
        characters: [
          {
            name: 'Pearl',
            description: 'Claw agent embedded with the 14th Army, skilled mage and assassin.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'With 14th Army',
            relationships: ['Lostara Yil - fellow Claw', 'Tavore - serves', 'Empress Laseen - reports to']
          },
          {
            name: 'Lostara Yil',
            description: 'Former Red Blade turned Claw operative. Complex loyalties.',
            importance: 'important',
            type: 'human',
            status: 'alive',
            currentLocation: 'With 14th Army',
            relationships: ['Pearl - fellow agent', 'Red Blades - former allegiance']
          }
        ]
      },
      {
        id: 'onrack_tellan_hoc',
        name: 'Onrack & The Fragmented Tellann',
        type: 'other',
        description: 'Onrack the Broken, T\'lan Imass trapped for millennia in a fragmented Tellann warren, and his unexpected friendship.',
        allegiance: 'T\'lan Imass (Independent)',
        status: 'active',
        location: 'Fragmented Tellann Warren',
        symbol: '💀',
        timeline: [
          {
            event: 'Millennial Imprisonment',
            location: 'Fragmented Tellann Warren',
            outcome: 'Onrack trapped alone for thousands of years'
          },
          {
            event: 'Trull\'s Arrival',
            location: 'Fragmented Warren',
            outcome: 'Enslaved Tiste Edur thrown into warren, meets Onrack'
          },
          {
            event: 'Unlikely Friendship',
            location: 'Warren travels',
            outcome: 'Undead T\'lan Imass and living Tiste Edur form genuine bond'
          },
          {
            event: 'Warren Escape',
            location: 'Warren dissolution',
            outcome: 'Onrack freed from fragmented warren by book\'s end'
          }
        ],
        characters: [
          {
            name: 'Onrack the Broken',
            description: 'T\'lan Imass trapped in fragmented Tellann warren for millennia. Develops emotions and friendship with Trull despite undeath. Freed by book\'s end.',
            importance: 'major',
            type: 'tlan_imass',
            status: 'transformed',
            currentLocation: 'Freed from warren',
            aliases: ['The Broken'],
            relationships: ['Trull Sengar - friend', 'Ibra Gholan - pursuer', 'Monok Ochem - bonecaster pursuer'],
            factionSymbol: '💀'
          },
          {
            name: 'Trull Sengar',
            description: 'Disgraced Tiste Edur warrior, enslaved and philosophical. Becomes Onrack\'s first true friend in millennia. Deeply contemplative.',
            importance: 'major',
            type: 'tiste_edur',
            status: 'alive',
            currentLocation: 'With Onrack',
            aliases: ['Trull the Slave'],
            relationships: ['Onrack - friend', 'Fear Sengar - brother', 'Rhulad Sengar - brother', 'Tiste Edur - exiled from'],
            factionSymbol: '🌊'
          },
          {
            name: 'Ibra Gholan',
            description: 'T\'lan Imass commander pursuing Onrack for his crimes/abandonment.',
            importance: 'important',
            type: 'tlan_imass',
            status: 'alive',
            currentLocation: 'Hunting Onrack',
            relationships: ['Onrack - hunting']
          },
          {
            name: 'Monok Ochem',
            description: 'T\'lan Imass Bonecaster involved in pursuing Onrack.',
            importance: 'notable',
            type: 'tlan_imass',
            status: 'alive',
            currentLocation: 'With Ibra Gholan'
          }
        ]
      },
      {
        id: 'tiste_edur_presence_hoc',
        name: 'Tiste Edur Connections',
        type: 'other',
        description: 'Tiste Edur presence and backstory setup for Midnight Tides.',
        allegiance: 'Tiste Edur Empire',
        status: 'active',
        location: 'Letheras / Warren-displaced',
        symbol: '🌊',
        characters: [
          {
            name: 'Lilac',
            description: 'Tiste Edur Bonecaster with connections to broader Edur storylines.',
            importance: 'notable',
            type: 'tiste_edur',
            status: 'alive',
            currentLocation: 'Unknown'
          }
        ]
      },
      {
        id: 'kalam_hunt_hoc',
        name: 'Kalam\'s Vendetta',
        type: 'military',
        description: 'Kalam Mekhar hunting down traitors responsible for the Chain of Dogs massacre.',
        allegiance: 'Independent (Malazan veteran)',
        status: 'active',
        location: 'Seven Cities',
        symbol: '🗡️',
        timeline: [
          {
            event: 'Hunt Begins',
            location: 'Seven Cities',
            outcome: 'Kalam tracks down Korbolo Dom and other traitors'
          },
          {
            event: 'Shadow Interventions',
            location: 'Various',
            outcome: 'Quick Ben and Shadowthrone aid Kalam\'s mission'
          },
          {
            event: 'Korbolo Dom\'s Execution',
            location: 'Captured location',
            outcome: 'Kalam personally executes traitor for Coltaine\'s betrayal'
          }
        ],
        characters: [
          {
            name: 'Kalam Mekhar',
            description: 'Master assassin hunting those who betrayed Coltaine. Executes Korbolo Dom for the Chain of Dogs massacre.',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'Seven Cities',
            aliases: ['Kalam'],
            relationships: ['Quick Ben - closest friend', 'Coltaine - avenging', 'Korbolo Dom - executed', 'Minala - wife'],
            factionSymbol: '🗡️'
          },
          {
            name: 'Quick Ben',
            description: 'Master mage supporting Kalam\'s vendetta and manipulating events.',
            importance: 'major',
            type: 'human',
            status: 'alive',
            currentLocation: 'Seven Cities',
            relationships: ['Kalam - best friend', 'Shadowthrone - complex relationship']
          },
          {
            name: 'Minala',
            description: 'Kalam\'s wife, survivor of the Chain of Dogs.',
            importance: 'notable',
            type: 'human',
            status: 'alive',
            currentLocation: 'Safe location',
            relationships: ['Kalam - wife', 'Selv and Kesen - daughters']
          }
        ]
      },
      {
        id: 'hounds_shadow_hoc',
        name: 'Hounds of Shadow',
        type: 'other',
        description: 'Multiple Hounds of Shadow slain by Karsa Orlong in legendary confrontation.',
        allegiance: 'House of Shadow',
        status: 'destroyed',
        location: 'Shadow Warren manifestation',
        symbol: '🐺',
        characters: [
          {
            name: 'Hounds of Shadow (Multiple)',
            description: 'Ancient, nearly invincible servants of Shadowthrone. Multiple hounds killed by Karsa Orlong - legendary feat.',
            importance: 'important',
            type: 'ascendant',
            status: 'dead',
            currentLocation: 'Shadow Warren',
            relationships: ['Karsa Orlong - slain by', 'Shadowthrone - serve']
          }
        ]
      },
      {
        id: 'house_of_chains_gods',
        name: 'The Crippled God\'s Influence',
        type: 'ascendant',
        description: 'The House of Chains and the Crippled God\'s influence over mortals through bonds of pain and slavery.',
        allegiance: 'The Crippled God',
        status: 'active',
        location: 'Everywhere (thematic)',
        symbol: '⛓️',
        timeline: [
          {
            event: 'Chains Manifest',
            location: 'Throughout Seven Cities',
            outcome: 'Theme of chains, slavery, and binding explored'
          },
          {
            event: 'Karsa\'s Defiance',
            location: 'Multiple',
            outcome: 'Karsa rejects divine chains and mortal bonds'
          },
          {
            event: 'Bridgeburner Vision',
            location: 'Tanno Spiritwalker vision',
            outcome: 'Fiddler receives prophetic vision of Bridgeburners\' ascension'
          }
        ],
        characters: [
          {
            name: 'The Crippled God',
            description: 'Chained god whose influence permeates the book through themes of binding, slavery, and chains.',
            importance: 'major',
            type: 'ascendant',
            status: 'alive',
            currentLocation: 'Chained realm',
            aliases: ['Fallen One'],
            relationships: ['All mortals - seeks to bind', 'Gods - war against']
          },
          {
            name: 'Tanno Spiritwalker',
            description: 'Ancient spirit who grants Fiddler a prophetic vision of Bridgeburner ascension.',
            importance: 'important',
            type: 'ascendant',
            status: 'alive',
            currentLocation: 'Spirit realm',
            relationships: ['Fiddler - grants vision']
          }
        ]
      }
    ]
  }
];