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
          "A Malazan-conquered city, site of a devastating siege where Anomander Rake's fortress, Moon's Spawn, resisted the Malazan army for years. The final assault involved a catastrophic release of magic that killed most of the Malazan mage cadre, including Tattersail, Nightchill, and Calot.",
        type: "city",
      },
      {
        name: "Darujhistan",
        coordinates: [550, 600],
        description:
          "The 'Blue City', last of the Free Cities of Genabackis. The target of a Malazan infiltration by the Bridgeburners. Home to Kruppe, Crokus, Rallick Nom, and Murillio, and site of an ancient Azath house.",
        type: "city",
      },
      {
        name: "Black Coral",
        coordinates: [200, 750],
        description: "A coastal city that would later become the capital of the Pannion Domin. In MOI, Moon's Spawn is brought down here, and it is resettled by the Tiste Andii.",
        type: "city",
      },
      {
        name: "Moon's Spawn",
        coordinates: [300, 400],
        description: "The immense floating mountain fortress of Anomander Rake and the Tiste Andii, carved from basalt and capable of traveling through the warrens.",
        type: "fortress",
      },
      {
        name: "Gadrobi Hills",
        coordinates: [480, 580],
        description: "An area of ancient burial mounds near Darujhistan. One barrow contained a powerful Jaghut Tyrant, whom Adjunct Lorn was sent to release. The Adjunct was killed here by Tool.",
        type: "landmark",
      },
      {
        name: "Rhivi Plains",
        coordinates: [450, 500],
        description: "Vast, flat grasslands roamed by the nomadic Rhivi tribes. Site of the duel between Tattersail and Bellurdan that led to the creation of Silverfox.",
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
        description: "The surviving Bridgeburners' journey from the devastation of Pale to Darujhistan for a covert mission to destabilize the city.",
        summary: "From Siege to Infiltration",
      },
      {
        group: "Tiste Andii",
        path: [
          [250, 350],
          [300, 400],
          [350, 500],
          [400, 600],
          [450, 650],
        ],
        color: "#1e293b",
        description: "The slow, ominous drift of Moon's Spawn southward from Pale after the siege, shadowing the Malazan army.",
        summary: "The Shadow of Moon's Spawn",
      },
      {
        group: "Malazan High Command",
        path: [
          [250, 350],
          [350, 450],
          [480, 580],
          [550, 600],
        ],
        color: "#ef4444",
        description: "Adjunct Lorn's mission, with Tool, from Pale to Darujhistan to release the Jaghut Tyrant, ending in her death at Tool's hands.",
        summary: "The Adjunct's Gambit",
      },
    ],
  },
  {
    id: "seven-cities",
    name: "Seven Cities - Deadhouse Gates",
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
        description: "A port city in Seven Cities. As the Whirlwind rebellion began, this became the starting point of Coltaine's legendary Chain of Dogs.",
        type: "city",
      },
      {
        name: "Vathar Crossing",
        coordinates: [450, 500],
        description: "Site of a devastating river crossing battle where the Chain of Dogs suffered immense casualties protecting the refugees, including the veteran Captain Lull.",
        type: "battlefield",
      },
      {
        name: "Aren",
        coordinates: [750, 750],
        description: "The heavily fortified Malazan continental capital. The Chain of Dogs' destination. Here, High Fist Pormqual's cowardice forced Coltaine and his Wickans into a final, doomed stand.",
        type: "fortress",
      },
      {
        name: "Raraku",
        coordinates: [600, 350],
        description: "The Holy Desert, the heart of the Whirlwind rebellion. The site where Felisin Paran became the vessel for Sha'ik, the goddess of the apocalypse.",
        type: "landmark",
      },
      {
        name: "Otataral Island",
        coordinates: [150, 400],
        description: "A desolate island containing otataral mines, where the Malazan Empire sends its political prisoners and magic-wielding criminals. Felisin was enslaved here, and her guardian Baudin died protecting her.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Chain of Dogs",
        path: [
          [200, 200],
          [280, 320],
          [450, 500],
          [550, 600],
          [750, 750],
        ],
        color: "#a3692f",
        description: "The legendary 1,500-mile march where Coltaine led 50,000 refugees through the heart of a rebellion, facing constant battle and starvation.",
        summary: "The Greatest March in History",
      },
      {
        group: "Apocalypse Army (Sha'ik's Forces)",
        path: [
          [150, 400],
          [300, 380],
          [450, 360],
          [600, 350],
        ],
        color: "#dc2626",
        description: "The journey of Felisin Paran from a slave on Otataral Island to the Holy Desert Raraku, where she becomes Sha'ik Reborn, leader of the Apocalypse.",
        summary: "The Path to Apocalypse",
      },
      {
        group: "Shadow Agents",
        path: [
          [200, 200],
          [450, 350],
          [600, 400],
          [750, 750],
        ],
        color: "#18181b",
        description: "The intertwined journey of Fiddler, Kalam, Crokus (Cutter), and Apsalar across Seven Cities, seeking the Path of Hands and pursuing their own missions.",
        summary: "The Path of Hands",
      },
    ],
  },
  {
    id: "genabackis-moi",
    name: "Genabackis - Memories of Ice",
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
        description: "A holy city defended by the Grey Swords. Site of a brutal siege by the Pannion Domin, where Brukhalian, Karnadas, and countless others fell. Gruntle became the Mortal Sword of Treach here.",
        type: "city",
      },
      {
        name: "Coral",
        coordinates: [700, 300],
        description: "The capital of the Pannion Domin. Site of the final, devastating battle where the Bridgeburners were destroyed. Whiskeyjack was killed by Kallor, and Hedge sacrificed himself to breach the walls. Itkovian became the Redeemer here.",
        type: "city",
      },
      {
        name: "Maurik",
        coordinates: [250, 600],
        description: "The city where Dujek Onearm's 'outlaw' host assembled their alliance with Caladan Brood, Anomander Rake, and others to march against the Pannion Domin.",
        type: "city",
      },
      {
        name: "Sister's Barrow",
        coordinates: [650, 350],
        description: "The ancient barrow near Coral where the Elder Goddess Sister of Cold Nights was imprisoned. She was freed by the Grey Swords.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Bridgeburners",
        path: [
          [250, 600],
          [400, 500],
          [550, 450],
          [700, 300],
        ],
        color: "#d4af37",
        description: "The campaign of Dujek's Host and the Bridgeburners against the Pannion Domin, from Maurik, through the Siege of Capustan, to the final, tragic assault on Coral.",
        summary: "The Last March of the Bridgeburners",
      },
      {
        group: "Lady Envy's Companions",
        path: [
          [200, 200],
          [350, 300],
          [500, 350],
          [700, 300],
        ],
        color: "#c026d3",
        description: "The sorceress Lady Envy's journey across northern Genabackis to Coral for her own inscrutable purposes, accompanied by Tool and three Seguleh warriors.",
        summary: "A Stroll Amongst Armies",
      },
    ],
  },
  {
    id: "raraku-hoc",
    name: "Seven Cities - House of Chains",
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
        description: "The Holy Desert, seat of Sha'ik's power. Site of the final battle where Tavore's Bonehunters crushed the Apocalypse army. Here, Tavore killed her own sister, Felisin/Sha'ik.",
        type: "battlefield",
      },
      {
        name: "Sha'ik's Encampment",
        coordinates: [520, 480],
        description: "The heart of the Apocalypse, where Felisin ruled and her inner circle (L'oric, Bidithal, Korbolo Dom) schemed. Here, Karsa Orlong delivered his judgment upon the depraved mage Bidithal.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Bonehunters",
        path: [
          [300, 200],
          [450, 400],
          [520, 500],
        ],
        color: "#8b4513",
        description: "Adjunct Tavore's march from the Malazan capital of Aren to Raraku to destroy the Apocalypse. A brutal, grinding campaign that forged her new 14th Army.",
        summary: "March to the Apocalypse",
      },
      {
        group: "T'lan Imass",
        path: [
          [700, 600],
          [600, 500],
          [550, 480],
        ],
        color: "#64748b",
        description: "The journey of the outcast Tiste Edur Trull Sengar and the 'broken' T'lan Imass Onrack the Broken. A journey of discovery and unlikely friendship through the eerie Nascent warren.",
        summary: "The Path of the Broken",
      },
    ],
  },
  {
    id: "lether-mt",
    name: "Lether - Midnight Tides",
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
        description: "The capital of the Letherii Empire, a city built on greed. Site of Tehol's economic collapse, the duel between Brys and Rhulad, and the freeing of Silchas Ruin from the Azath.",
        type: "city",
      },
      {
        name: "Trate",
        coordinates: [350, 300],
        description: "A coastal city where the Edur invasion began in earnest. The Letherii fleet and army were crushed here by Edur sorcery. Merchant Buruk the Pale died here.",
        type: "city",
      },
      {
        name: "Hiroth Lands",
        coordinates: [250, 150],
        description: "The homeland of the Sengar family. Where Rhulad was goaded into claiming the cursed sword of the Crippled God, was killed, and resurrected as Emperor.",
        type: "landmark",
      },
      {
        name: "The Azath Tower",
        coordinates: [480, 520],
        description: "An Azath House in Letheras that held the soul of Silchas Ruin for millennia. Udinaas was instrumental in its reawakening and Silchas's release.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Tiste Edur",
        path: [
          [250, 150],
          [300, 200],
          [350, 300],
          [500, 500],
        ],
        color: "#64748b",
        description: "The Tiste Edur conquest of Lether, a swift and brutal campaign that saw their culture corrupted by the influence of the Crippled God.",
        summary: "The Edur Conquest",
      },
      {
        group: "Letherii",
        path: [
          [300, 200],
          [350, 300],
          [500, 500],
        ],
        color: "#eab308",
        description: "The doomed, collapsing defense of the Letherii Empire, whose armies were no match for the Edur's renewed ferocity and powerful sorcery.",
        summary: "The Fall of an Empire",
      },
      {
        group: "Crimson Guard",
        path: [
          [550, 300],
          [500, 450],
          [500, 500],
        ],
        color: "#991b1b",
        description: "The journey of Iron Bars' exiled band of Avowed, fighting to survive in a foreign land while caught between the Edur and Letherii.",
        summary: "The Exiled Guard",
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
        description: "The 'Last City', an ancient bastion with formidable defenses. Leoman of the Flails lured the 14th Army into a trap, setting the city ablaze with an unquenchable chemical fire. Thousands of Malazans died, and the survivors, the 'Bonehunters', were forged in the inferno.",
        type: "city",
      },
      {
        name: "Malaz City",
        coordinates: [100, 100],
        description: "The city where the Malazan Empire was born. Site of the 'Night of Knives', a massive purge of the Claw by Empress Laseen. Kalam Mekhar was the primary target, but survived against all odds.",
        type: "city",
      },
      {
        name: "The Glass Desert",
        coordinates: [400, 500],
        description: "Formerly the Holy Desert Raraku, it was flooded at the end of HOC and has now become a treacherous landscape of sharp, crystalline glass.",
        type: "landmark",
      },
    ],
    journeys: [
      {
        group: "Bonehunters",
        path: [
          [300, 300],
          [500, 400],
          [400, 500],
          [200, 600],
        ],
        color: "#8b4513",
        description: "The 14th Army's journey from Ehrlitan, into the disastrous siege of Y'Ghatan, and the survivors' harrowing escape and march to the coast.",
        summary: "Forged in Fire",
      },
      {
        group: "Shadow Agents",
        path: [
          [200, 600],
          [100, 100],
        ],
        color: "#18181b",
        description: "Kalam's journey to Malaz City to confront the Empress, leading to the climactic Night of Knives.",
        summary: "Kalam's Reckoning",
      },
      {
        group: "Apocalypse Army (Sha'ik's Forces)",
        path: [
          [500, 400],
          [400, 300],
          [300, 300],
        ],
        color: "#dc2626",
        description: "The flight of Leoman of the Flails and Corabb after their 'victory' at Y'Ghatan, pursued by the wrath of the Malazan Empire.",
        summary: "The Flight of the Survivors",
      },
    ],
  },
]
