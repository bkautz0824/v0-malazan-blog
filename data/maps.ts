import type { MapData } from "@/lib/types"

export const maps: MapData[] = [
  {
    id: "genabackis",
    name: "Genabackis - Gardens of the Moon",
    book: "GOTM",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/fantasy-map-of-genabackis-continent-with-mountains.jpg",
    locations: [
      {
        name: "Pale",
        coordinates: [250, 350],
        description:
          "Site of the devastating Siege of Pale where Moon's Spawn appeared and Tayschrenn's betrayal killed most of the mage cadre including Tattersail, Calot, and Nightchill.",
        type: "city",
      },
      {
        name: "Darujhistan",
        coordinates: [550, 600],
        description:
          "The Blue City, last free city of Genabackis. Home to Kruppe, Rallick Nom, Crokus Younghand. Site of the Bridgeburners' covert operation and the attempted release of the Jaghut Tyrant.",
        type: "city",
      },
      {
        name: "Black Coral",
        coordinates: [200, 750],
        description:
          "City where Moon's Spawn eventually settles after the events of MOI, becoming the Tiste Andii homeland.",
        type: "city",
      },
      {
        name: "Moon's Spawn",
        coordinates: [300, 400],
        description: "The floating mountain fortress of Anomander Rake and the Tiste Andii. First appeared at Pale.",
        type: "landmark",
      },
      {
        name: "Gadrobi Hills",
        coordinates: [480, 580],
        description: "Ancient barrows containing the Jaghut Tyrant. Site of the Adjunct Lorn's mission.",
        type: "landmark",
      },
      {
        name: "Rhivi Plains",
        coordinates: [450, 500],
        description: "Vast plains home to the nomadic Rhivi people.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Bridgeburners",
        path: [
          [250, 350],
          [320, 420],
          [400, 500],
          [480, 580],
          [550, 600],
        ],
        color: "#d4af37",
        description: "Journey from the devastation of Pale to Darujhistan for their covert mission",
      },
      {
        group: "Moon's Spawn",
        path: [
          [250, 350],
          [300, 400],
          [350, 500],
          [400, 600],
          [450, 650],
        ],
        color: "#4a148c",
        description: "The floating fortress's path from Pale southward",
      },
      {
        group: "Adjunct Lorn",
        path: [
          [250, 350],
          [350, 450],
          [480, 580],
          [550, 600],
        ],
        color: "#ef4444",
        description: "Lorn's mission to release the Jaghut Tyrant, ending in her death",
      },
    ],
  },
  {
    id: "seven-cities",
    name: "Seven Cities - Chain of Dogs",
    book: "DG",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/fantasy-desert-map-seven-cities-with-oases.jpg",
    locations: [
      {
        name: "Hissar",
        coordinates: [200, 200],
        description:
          "Starting point of the legendary Chain of Dogs. Site of the Wickan uprising where Coltaine took command of 50,000 refugees.",
        type: "city",
      },
      {
        name: "Sekala Crossing",
        coordinates: [280, 320],
        description: "First major river crossing where Coltaine's tactical genius was displayed.",
        type: "battlefield",
      },
      {
        name: "Vathar Crossing",
        coordinates: [450, 500],
        description:
          "Devastating river crossing battle. Captain Lull fell here defending the refugees. Thousands died.",
        type: "battlefield",
      },
      {
        name: "Sanimon",
        coordinates: [550, 600],
        description: "Waystation where starving refugees swelled the column's numbers further.",
        type: "city",
      },
      {
        name: "Aren",
        coordinates: [750, 750],
        description:
          "Final destination. The entire city watched from the walls as Coltaine and his Wickans were crucified within sight of safety due to High Fist Pormqual's cowardice.",
        type: "fortress",
      },
      {
        name: "Raraku",
        coordinates: [600, 350],
        description: "The Holy Desert, seat of the Whirlwind goddess. Where Felisin became Sha'ik Reborn.",
        type: "landmark",
      },
      {
        name: "Otataral Island",
        coordinates: [150, 400],
        description: "Prison mines where Felisin was sent. Baudin died here protecting her from the D'ivers Gryllen.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Chain of Dogs",
        path: [
          [200, 200],
          [240, 260],
          [280, 320],
          [340, 400],
          [400, 450],
          [450, 500],
          [500, 550],
          [550, 600],
          [620, 660],
          [690, 710],
          [750, 750],
        ],
        color: "#a3692f",
        description:
          "The legendary 1,200-mile Chain of Dogs march. Coltaine led 50,000 refugees through constant ambush, starvation, and battle. They made it. He didn't.",
      },
      {
        group: "Felisin's Path to Sha'ik",
        path: [
          [150, 400],
          [300, 380],
          [450, 360],
          [600, 350],
        ],
        color: "#dc143c",
        description: "From slave in the Otataral mines to Sha'ik Reborn in Raraku",
      },
      {
        group: "Fiddler, Kalam, Apsalar, Crokus",
        path: [
          [200, 200],
          [300, 300],
          [450, 350],
          [600, 400],
        ],
        color: "#d4af37",
        description: "Journey across Seven Cities toward Tremorlor and their separate paths",
      },
    ],
  },
  {
    id: "genabackis-moi",
    name: "Genabackis - Pannion War",
    book: "MOI",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/fantasy-map-genabackis-northern-regions-with-fortr.jpg",
    locations: [
      {
        name: "Capustan",
        coordinates: [400, 500],
        description:
          "Holy city of the Mask Council, besieged by the Pannion Domin. The Grey Swords' last stand. Brukhalian and Karnadas fell here. Itkovian bore the grief of thousands.",
        type: "city",
      },
      {
        name: "Coral",
        coordinates: [700, 300],
        description:
          "Capital of the Pannion Domin. Site of the Bridgeburners' destruction. Whiskeyjack killed by Kallor. Hedge's sacrifice. The final battle against the Crippled God's influence.",
        type: "city",
      },
      {
        name: "Maurik",
        coordinates: [250, 600],
        description: "Assembly point for Onearm's Host and their allies.",
        type: "city",
      },
      {
        name: "Setta",
        coordinates: [550, 450],
        description: "Pannion stronghold on the route to Coral.",
        type: "fortress",
      },
      {
        name: "Moon's Spawn (Final)",
        coordinates: [680, 350],
        description: "Where Moon's Spawn made its final descent, crashing into the sea during the battle for Coral.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Bridgeburners & Onearm's Host",
        path: [
          [250, 600],
          [300, 550],
          [350, 520],
          [400, 500],
          [480, 470],
          [550, 450],
          [620, 400],
          [680, 350],
          [700, 300],
        ],
        color: "#d4af37",
        description:
          "Campaign against the Pannion Domin, from Maurik through Capustan to the final assault on Coral where the Bridgeburners met their end",
      },
      {
        group: "Grey Swords",
        path: [
          [400, 500],
          [420, 480],
          [440, 460],
          [460, 440],
          [500, 400],
          [550, 380],
          [620, 350],
          [700, 300],
        ],
        color: "#71717a",
        description:
          "From the defense of Capustan where Brukhalian fell, to Coral where Itkovian achieved his redemption",
      },
      {
        group: "T'lan Imass",
        path: [
          [300, 400],
          [400, 450],
          [500, 420],
          [600, 380],
          [700, 300],
        ],
        color: "#78716c",
        description: "The undead armies march against the Pannion, their grief finally released by Itkovian",
      },
      {
        group: "Lady Envy, Tool, Seguleh",
        path: [
          [200, 200],
          [350, 300],
          [500, 350],
          [650, 320],
          [700, 300],
        ],
        color: "#c026d3",
        description: "The unlikely companions' journey to Coral, Thurule falling to Rake along the way",
      },
    ],
  },
  {
    id: "raraku-hoc",
    name: "Raraku - House of Chains",
    book: "HOC",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/fantasy-desert-holy-desert-raraku-with-ancient-rui.jpg",
    locations: [
      {
        name: "Raraku",
        coordinates: [500, 500],
        description:
          "The Holy Desert, Sha'ik's seat of power. Where Tavore killed Felisin without knowing it was her sister. The sea that was once a desert flooded after the battle.",
        type: "landmark",
      },
      {
        name: "Aren",
        coordinates: [300, 200],
        description: "Tavore's starting point. Where she formed the Bonehunters from the remnants of multiple armies.",
        type: "fortress",
      },
      {
        name: "Sha'ik's Encampment",
        coordinates: [520, 480],
        description:
          "Where L'oric, Bidithal, and Febryl schemed. Where Karsa killed Bidithal for his crimes against children.",
        type: "landmark",
      },
      {
        name: "Karsa's Path",
        coordinates: [600, 300],
        description: "Where Karsa Orlong emerged from his captivity to change the world.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Bonehunters",
        path: [
          [300, 200],
          [380, 300],
          [450, 400],
          [500, 480],
          [520, 500],
        ],
        color: "#8b4513",
        description: "Tavore's march to Raraku. She killed her own sister and never knew.",
      },
      {
        group: "Karsa Orlong",
        path: [
          [600, 300],
          [580, 350],
          [550, 400],
          [520, 480],
        ],
        color: "#ef4444",
        description: "Karsa's path of destruction, culminating in Bidithal's death",
      },
      {
        group: "Trull & Onrack",
        path: [
          [700, 600],
          [650, 550],
          [600, 500],
          [550, 480],
        ],
        color: "#64748b",
        description: "The unlikely friendship forged in the Nascent realm, encountering Jorrude's Liosan",
      },
    ],
  },
  {
    id: "lether-mt",
    name: "Letherii Empire - Midnight Tides",
    book: "MT",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/fantasy-map-of-coastal-empire-with-cities-rivers-a.jpg",
    locations: [
      {
        name: "Letheras",
        coordinates: [500, 500],
        description:
          "Capital of the Letherii Empire. Brys Beddict dueled Rhulad poisoned yet nearly killed him. Tehol's economic destruction came to fruition. King Diskanar fell.",
        type: "city",
      },
      {
        name: "Trate",
        coordinates: [350, 300],
        description:
          "Coastal city, first major battle. The Edur unleashed devastating sorcery and the Letherii fleet was destroyed.",
        type: "city",
      },
      {
        name: "Fort Shake",
        coordinates: [300, 200],
        description: "Northernmost fortress, fell quickly to the Edur invasion.",
        type: "fortress",
      },
      {
        name: "High Fort",
        coordinates: [550, 400],
        description: "Major defensive position, its fall opened the road to Letheras.",
        type: "fortress",
      },
      {
        name: "Hiroth Lands",
        coordinates: [250, 150],
        description: "Homeland of the Sengar family. Where Rhulad found the cursed sword and died his first death.",
        type: "landmark",
      },
      {
        name: "Katter River",
        coordinates: [400, 450],
        description: "Major waterway. Site of naval battles between Letherii and Edur forces.",
        type: "landmark",
      },
      {
        name: "The Azath Tower",
        coordinates: [480, 520],
        description: "Where Silchas Ruin was imprisoned for millennia. Freed during these events.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Tiste Edur Invasion",
        path: [
          [250, 150],
          [280, 180],
          [300, 200],
          [330, 250],
          [350, 300],
          [400, 350],
          [450, 380],
          [500, 420],
          [500, 500],
        ],
        color: "#64748b",
        description:
          "The Edur conquest: from the Hiroth Lands through Fort Shake, Trate, and on to Letheras. Binadas died early. Mayen's abuse began. Trull's doubts grew.",
      },
      {
        group: "Letherii Defense",
        path: [
          [300, 200],
          [350, 300],
          [450, 380],
          [550, 400],
          [500, 500],
        ],
        color: "#eab308",
        description:
          "The doomed defense. Each fortress fell. Brys watched his nation crumble before his final, poisoned duel.",
      },
      {
        group: "Trull's Path to Shorn",
        path: [
          [250, 150],
          [350, 300],
          [450, 400],
          [500, 500],
        ],
        color: "#06b6d4",
        description:
          "From honored warrior to outcast. Trull witnessed his people's corruption and was made Shorn for speaking truth.",
      },
      {
        group: "Tehol & Bugg",
        path: [
          [490, 490],
          [495, 495],
          [500, 500],
          [505, 505],
        ],
        color: "#fbbf24",
        description:
          "Tehol never left Letheras, but his economic web reached everywhere, bringing down the empire from within.",
      },
      {
        group: "Iron Bars & Crimson Guard",
        path: [
          [550, 300],
          [520, 380],
          [500, 450],
          [500, 500],
        ],
        color: "#991b1b",
        description: "The Avowed trapped in Lether, fighting to survive the invasion.",
      },
    ],
  },
  {
    id: "seven-cities-bh",
    name: "Seven Cities - The Bonehunters",
    book: "BH",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/fantasy-desert-map-seven-cities-with-oases.jpg",
    locations: [
      {
        name: "Y'Ghatan",
        coordinates: [500, 400],
        description:
          "The Last City. Leoman's trap killed thousands of Bonehunters in fire. Fiddler led survivors through tunnels beneath the burning city. Truth died saving his squad.",
        type: "city",
      },
      {
        name: "Raraku (Now Sea)",
        coordinates: [400, 500],
        description: "The Holy Desert is now an inland sea after the events of HOC.",
        type: "landmark",
      },
      {
        name: "Ehrlitan",
        coordinates: [300, 300],
        description: "Coastal city where the Bonehunters regrouped.",
        type: "city",
      },
      {
        name: "Malaz City",
        coordinates: [100, 100],
        description: "The heart of the Empire. Site of the Night of Knives where Kalam faced the Claw and nearly died.",
        type: "city",
      },
      {
        name: "Coast of Seven Cities",
        coordinates: [200, 600],
        description: "Where the Bonehunters marched to meet their fleet after Y'Ghatan.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Bonehunters to Y'Ghatan",
        path: [
          [300, 300],
          [380, 350],
          [450, 380],
          [500, 400],
        ],
        color: "#8b4513",
        description: "The march to Y'Ghatan, walking into Leoman's trap.",
      },
      {
        group: "Y'Ghatan Survivors",
        path: [
          [500, 400],
          [520, 450],
          [500, 500],
          [450, 550],
          [350, 580],
          [200, 600],
        ],
        color: "#d4af37",
        description: "Fiddler led them through burning tunnels. They emerged transformed into true Bonehunters.",
      },
      {
        group: "Kalam's Night of Knives",
        path: [
          [200, 600],
          [180, 400],
          [150, 250],
          [100, 100],
        ],
        color: "#18181b",
        description: "Kalam's journey to Malaz City and his near-death battle with the entire Claw.",
      },
      {
        group: "Apsalar's Mission",
        path: [
          [400, 300],
          [350, 350],
          [300, 400],
          [250, 450],
        ],
        color: "#581c87",
        description: "Apsalar's deadly work for Cotillion across Seven Cities.",
      },
    ],
  },
]
