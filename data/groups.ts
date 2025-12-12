import type { Group } from "@/lib/types"

export const groups: Group[] = [
  {
    id: "bridgeburners",
    name: "Bridgeburners",
    description:
      "A legendary company within the Malazan 2nd Army. Officially the 9th Squad, their reputation for surviving impossible missions made them both famous and a target. They were declared outlaws by the Empress, a political ruse that allowed them to operate outside the normal chain of command.",
    color: "#d4af37",
    books: ["GOTM", "MOI"],
    timeline: [
      { book: "GOTM", event: "Survived the devastating magical conflagration at the Siege of Pale.", location: "Pale" },
      { book: "GOTM", event: "Infiltrated Darujhistan to sow chaos, but ended up fighting to save the city.", location: "Darujhistan" },
      { book: "MOI", event: "Fought as the core of Dujek Onearm's outlawed host in an alliance against the Pannion Domin.", location: "Genabackis" },
      { book: "MOI", event: "Broke the Siege of Capustan, saving the city from the Pannion hordes.", location: "Capustan" },
      { book: "MOI", event: "Met their end at the Siege of Coral. The survivors retired, and the dead ascended to become guardians to the newly freed T'lan Imass.", location: "Coral" },
    ],
  },
  {
    id: "bonehunters",
    name: "Bonehunters (14th Army)",
    description:
      "The 14th Army of the Malazan Empire, commanded by Adjunct Tavore. Comprised of raw recruits and veterans from various campaigns, they were forged into a legendary fighting force in the fires of Y'Ghatan. Their name comes from their grim task of gathering the bones of their fallen comrades for transport home.",
    color: "#8b4513",
    books: ["HOC", "BH"],
    timeline: [
      { book: "HOC", event: "Formed under Adjunct Tavore to crush the Apocalypse in Seven Cities.", location: "Aren" },
      { book: "HOC", event: "Grueling march across the Glass Desert to confront Sha'ik.", location: "Seven Cities" },
      { book: "HOC", event: "Defeated the Apocalypse Army at Raraku; Tavore killed Sha'ik.", location: "Raraku" },
      { book: "BH", event: "Walked into a trap at Y'Ghatan; thousands burned alive.", location: "Y'Ghatan" },
      { book: "BH", event: "Survivors, led by Fiddler, escaped through the city's catacombs, emerging as the 'Bonehunters'.", location: "Y'Ghatan" },
      { book: "BH", event: "Journeyed to Malaz Island and were caught up in the 'Night of Knives' and the purge of the Claw.", location: "Malaz Island" },
    ],
  },
  {
    id: "chain_of_dogs",
    name: "Chain of Dogs",
    description:
      "The name given to the march of the Malazan 7th Army, under Fist Coltaine, as they escorted 50,000 refugees 1,500 miles across Seven Cities during the Whirlwind rebellion. One of the most celebrated and tragic events in Malazan military history.",
    color: "#a3692f",
    books: ["DG"],
    timeline: [
      { book: "DG", event: "Began the evacuation of Malazan citizens from Hissar as the Whirlwind rebellion erupted.", location: "Hissar" },
      { book: "DG", event: "Fought a continuous running battle against a numerically superior and ever-growing rebel army.", location: "Seven Cities" },
      { book: "DG", event: "Suffered immense casualties at Vathar Crossing but managed to get the refugees across.", location: "Vathar" },
      { book: "DG", event: "Arrived at the walls of Aren, only to be denied entry by the cowardly High Fist Pormqual.", location: "Aren" },
      { book: "DG", event: "Coltaine and the last of his Wickan guard were annihilated and crucified while the refugees were saved by a last-minute sortie from the city.", location: "Aren" },
    ],
  },
  {
    id: "wickans",
    name: "Wickans",
    description:
      "Horse-riding tribes from the Wickan Plains of northern Genabackis. Known for their fierce loyalty and unmatched skill as light cavalry. They are deeply connected to their horses and the spirits of their ancestral lands.",
    color: "#059669",
    books: ["DG", "HOC", "BH"],
  },
  {
    id: "tiste_andii",
    name: "Tiste Andii",
    description:
      "An ancient, melancholic, and near-immortal race known as the Children of Darkness. They are led by Anomander Rake. Their patron goddess, Mother Dark, turned her back on them millennia ago, plunging them into a state of existential ennui.",
    color: "#1e293b",
    books: ["GOTM", "MOI", "BH"],
  },
  {
    id: "tiste_edur",
    name: "Tiste Edur",
    description:
      "Grey-skinned, honor-bound cousins of the Tiste Andii. Their society stagnated for millennia until the Warlock King Hannan Mosag began a war of unification, a path that led them to the cursed sword of the Crippled God and a devastating war with the Letherii Empire.",
    color: "#64748b",
    books: ["MT", "BH"],
    timeline: [
      { book: "MT", event: "Rhulad Sengar claims the cursed sword, becoming the undying Emperor.", location: "Hiroth Lands" },
      { book: "MT", event: "Under Rhulad, the united Edur tribes invade the Letherii Empire.", location: "Lether" },
      { book: "MT", event: "Conquered the Letherii capital of Letheras.", location: "Letheras" },
      { book: "MT", event: "Trull Sengar, for speaking out against the war, is made Shorn—an outcast.", location: "Letheras" },
    ],
  },
  {
    id: "tiste_liosan",
    name: "Tiste Liosan",
    description:
      "Known as the Children of Light, the Tiste Liosan are the third of the Tiste races. They are arrogant, obsessed with purity, and view the Tiste Andii as their eternal enemies. Their patron is Father Light.",
    color: "#fbbf24",
    books: ["HOC", "MT", "BH"],
  },
  {
    id: "letherii",
    name: "Letherii",
    description:
      "Citizens of the Letherii Empire, a highly stratified and ruthless capitalist civilization. Their culture is defined by insatiable greed and the belief that all things, including honor and freedom, can be quantified in monetary terms. They were conquered by the Tiste Edur.",
    color: "#eab308",
    books: ["MT", "BH"],
    timeline: [
      { book: "MT", event: "The Letherii economy is secretly dismantled from within by Tehol Beddict.", location: "Letheras" },
      { book: "MT", event: "The Letherii military, despite its numbers, is systematically defeated by the ferocity and sorcery of the Tiste Edur.", location: "Lether" },
      { book: "MT", event: "King Diskanar is slain and the Edur conquest is completed.", location: "Letheras" },
      { book: "MT", event: "Brys Beddict, the King's Champion, is resurrected as the undead champion of the redeemed nation.", location: "Letheras" },
    ],
  },
  {
    id: "grey_swords",
    name: "Grey Swords",
    description:
      "A mercenary company dedicated to the war god Fener. They were hired by the city of Capustan and became the heart of its defense against the Pannion Domin.",
    color: "#71717a",
    books: ["MOI"],
    timeline: [
      { book: "MOI", event: "Held the walls of Capustan against impossible odds, suffering immense casualties.", location: "Capustan" },
      { book: "MOI", event: "Their commander, Brukhalian, fell in battle.", location: "Capustan" },
      { book: "MOI", event: "Their Shield Anvil, Itkovian, took on the grief of the T'lan Imass, ascending as the Redeemer.", location: "Coral" },
    ],
  },
  {
    id: "pannion_domin",
    name: "Pannion Domin",
    description:
      "The empire of the Pannion Seer, a Jaghut manipulated by the Crippled God. The Domin was built on the principle that all life is pain and that salvation comes from being 'eaten' and remade by the Seer. Its armies were made up of the Tenescowri and the formidable K'ell Hunters.",
    color: "#d53f8c",
    books: ["MOI"],
    timeline: [
      { book: "MOI", event: "Emerged from the Pannion Range, conquering and consuming all in its path.", location: "Genabackis" },
      { book: "MOI", event: "Besieged the city of Capustan.", location: "Capustan" },
      { book: "MOI", event: "Driven back by the allied forces of Dujek Onearm and Caladan Brood.", location: "Genabackis" },
      { book: "MOI", event: "Made its last stand in the city of Coral.", location: "Coral" },
      { book: "MOI", event: "The Pannion Seer was killed, and the Domin collapsed.", location: "Coral" },
    ],
  },
  {
    id: "tenescowri",
    name: "Tenescowri",
    description:
      "The main army of the Pannion Domin. Composed of common folk who were driven to madness and cannibalism by the Seer's influence. They were a tide of starving, frenzied bodies, consuming everything in their path to feed the Seer's 'salvation'.",
    color: "#e53e3e",
    books: ["MOI"],
  },
  {
    id: "apocalypse",
    name: "Apocalypse Army (Sha'ik's Forces)",
    description:
      "The rebel army of Seven Cities, united by the prophecy of the return of Sha'ik, the goddess of the Whirlwind. The rebellion's aim was to throw off Malazan rule and purge the continent of all foreign influence.",
    color: "#dc2626",
    books: ["DG", "HOC"],
    timeline: [
      { book: "DG", event: "The Whirlwind rises, sparking rebellion across Seven Cities.", location: "Seven Cities" },
      { book: "DG", event: "Felisin Paran arrives in the Holy Desert Raraku and is possessed, becoming Sha'ik Reborn.", location: "Raraku" },
      { book: "HOC", event: "Sha'ik gathers her forces, including renegade Malazans and desert tribes.", location: "Raraku" },
      { book: "HOC", event: "Defeated by the Malazan 14th Army; Sha'ik is killed by her own sister, Adjunct Tavore.", location: "Raraku" },
    ],
  },
  {
    id: "ascendants",
    name: "Ascendants",
    description:
      "Beings who have achieved a measure of immortality and power, but are not necessarily gods. Most were once mortal. Their power is often tied to a warren or a Hold, and they can be killed.",
    color: "#9333ea",
    books: ["GOTM", "DG", "MOI", "HOC", "MT", "BH"],
  },
  {
    id: "elder_gods",
    name: "Elder Gods",
    description:
      "Primordial forces that predate most of the other gods and races. They represent fundamental aspects of existence (sea, earth, night, etc.) and their power is immense, though often passive or withdrawn.",
    color: "#6366f1",
    books: ["GOTM", "DG", "MOI", "HOC", "MT", "BH"],
  },
  {
    id: "tlan_imass",
    name: "T'lan Imass",
    description:
      "An ancient race of proto-humans who, 300,000 years ago, underwent a ritual that made them undead. The Ritual of Tellann bound them to an eternal, unchanging purpose: to hunt and destroy the Jaghut, their ancient enemies who once enslaved them.",
    color: "#78716c",
    books: ["GOTM", "MOI", "HOC", "MT", "BH"],
  },
  {
    id: "shadow_agents",
    name: "Agents of Shadow",
    description:
      "Mortals serving Shadowthrone and Cotillion. They range from willing servants like Iskaral Pust to those bound by circumstance or guilt, like Apsalar. They are key pieces in the gods' intricate and often deadly games.",
    color: "#18181b",
    books: ["GOTM", "DG", "HOC", "BH"],
  },
  {
    id: "lady_envys_group",
    name: "Lady Envy's Companions",
    description:
      "A small, powerful group led by the sorceress Lady Envy during the Pannion War. It included her two undead hounds, Baaljagg and Garath, and three Seguleh warriors.",
    color: "#c026d3",
    books: ["MOI"],
  },
  {
    id: "seguleh",
    name: "Seguleh",
    description:
      "A society of masked, silent warriors from a secluded island. Their entire culture is based on martial prowess, and their social hierarchy is a ladder ranked by swordsmanship. To a Seguleh, a challenge is a form of communication.",
    color: "#dc2626",
    books: ["MOI"],
  },
  {
    id: "crimson_guard",
    name: "Crimson Guard",
    description:
      "An elite mercenary company founded by Prince K'azz D'Avore. They swore a vow to never rest until the Malazan Empire is destroyed. This Vow grants them unnatural longevity and resilience, but binds them to a seemingly endless war.",
    color: "#991b1b",
    books: ["MT", "BH"],
  },
  {
    id: "malazans",
    name: "Malazan Empire",
    description:
      "A multi-continental empire founded by Emperor Kellanved and now ruled by Empress Laseen. It is known for its professional, multi-racial army and its relentless expansion. The series is largely told from the perspective of its soldiers.",
    color: "#4a5568",
    books: ["GOTM", "DG", "MOI", "HOC", "MT", "BH"],
  },
  {
    id: "darujhistan",
    name: "Darujhistan (The Blue City)",
    description:
      "The last of the Free Cities of Genabackis, known for its vibrant culture, gas-lit streets, and ancient history. It is a city of powerful mages, influential families, and a thriving underworld of thieves and assassins.",
    color: "#0ea5e9",
    books: ["GOTM", "MOI", "BH"],
  },
  {
    id: "dragons",
    name: "Dragons & Eleint",
    description:
      "Ancient, immensely powerful draconic beings. 'Eleint' is the name for pure-blood dragons, who are themselves a form of Elder power. 'Soletaken' are beings who can shapeshift into a dragon form.",
    color: "#ef4444",
    books: ["GOTM", "MOI", "HOC", "MT", "BH"],
  },
  {
    id: "necromancers",
    name: "Bauchelain & Korbal Broach",
    description:
      "A notorious duo of necromancers who travel the world, leaving a trail of death, undeath, and scholarly debate in their wake. They are often accompanied by their long-suffering manservant, Emancipor Reese.",
    color: "#581c87",
    books: ["MOI"],
  },
]
